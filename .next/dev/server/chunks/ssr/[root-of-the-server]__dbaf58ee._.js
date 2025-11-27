module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/utils/formulas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/formulas.ts
// 1. Helper: Format Currency (₹ 1,00,000 instead of 100,000)
__turbopack_context__.s([
    "calculateEMI",
    ()=>calculateEMI,
    "calculateFD",
    ()=>calculateFD,
    "calculateGST",
    ()=>calculateGST,
    "calculateIncomeTax",
    ()=>calculateIncomeTax,
    "calculateLoanEligibility",
    ()=>calculateLoanEligibility,
    "calculateLumpsum",
    ()=>calculateLumpsum,
    "calculatePPF",
    ()=>calculatePPF,
    "calculateSIP",
    ()=>calculateSIP,
    "calculateSalaryBreakup",
    ()=>calculateSalaryBreakup,
    "formatCurrency",
    ()=>formatCurrency
]);
const formatCurrency = (amount)=>{
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
};
// --- NEW HELPER: Generates Lumpsum Schedule ---
const getLumpsumSchedule = (principal, rate, years)=>{
    const rateDecimal = rate / 100;
    let schedule = [];
    let currentValue = principal;
    for(let year = 1; year <= years; year++){
        // Compound yearly: A = P * (1 + r)^t
        // Note: For the schedule, we calculate the current value based on the original principal and the current year.
        currentValue = principal * Math.pow(1 + rateDecimal, year);
        schedule.push({
            year,
            value: Math.round(currentValue),
            gain: Math.round(currentValue - principal)
        });
    }
    return schedule;
};
// --- NEW HELPER: Generates FD Schedule ---
const getFdSchedule = (principal, rate, years)=>{
    const rateDecimal = rate / 100;
    const compoundingFrequency = 4; // Quarterly compounding (standard for FD)
    let schedule = [];
    let cumulativeInterest = 0;
    for(let year = 1; year <= years; year++){
        // A = P * (1 + r/n)^(n*t)
        const totalValue = principal * Math.pow(1 + rateDecimal / compoundingFrequency, compoundingFrequency * year);
        // Calculate annual interest by subtracting previous cumulative interest from the total interest earned so far
        const annualInterest = totalValue - principal - cumulativeInterest;
        cumulativeInterest += annualInterest;
        schedule.push({
            year,
            value: Math.round(totalValue),
            interest: Math.round(cumulativeInterest)
        });
    }
    return schedule;
};
// 2. SIP Calculator Logic (Updated to include schedule)
const getSipSchedule = (monthlyInv, rate, years)=>{
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    let schedule = [];
    let currentInvested = 0;
    let currentValue = 0;
    for(let month = 1; month <= months; month++){
        // Calculate the growth for the current month
        currentValue = currentValue * (1 + monthlyRate);
        // Add the new monthly investment
        currentValue += monthlyInv;
        currentInvested += monthlyInv;
        // At the end of every year, save the data point
        if (month % 12 === 0) {
            schedule.push({
                year: month / 12,
                invested: Math.round(currentInvested),
                value: Math.round(currentValue),
                gain: Math.round(currentValue - currentInvested)
            });
        }
    }
    return schedule;
};
const calculateSIP = (monthlyInv, rate, years)=>{
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    // Formula: P × ({[1 + i]^n - 1} / i) × (1 + i)
    const investedAmount = monthlyInv * months;
    const totalValue = monthlyInv * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const wealthGained = totalValue - investedAmount;
    // Generate yearly schedule
    const schedule = getSipSchedule(monthlyInv, rate, years);
    return {
        investedAmount,
        wealthGained,
        totalValue,
        breakdown: {
            invested: Math.round(investedAmount),
            gained: Math.round(wealthGained),
            total: Math.round(totalValue)
        },
        schedule
    };
};
const calculateLumpsum = (principal, rate, years)=>{
    const rateDecimal = rate / 100;
    // Formula: A = P(1 + r)^t
    const totalValue = principal * Math.pow(1 + rateDecimal, years);
    const wealthGained = totalValue - principal;
    // Generate yearly schedule
    const schedule = getLumpsumSchedule(principal, rate, years);
    return {
        investedAmount: principal,
        wealthGained: Math.round(wealthGained),
        totalValue: Math.round(totalValue),
        breakdown: {
            invested: principal,
            gained: Math.round(wealthGained),
            total: Math.round(totalValue)
        },
        schedule
    };
};
const calculateFD = (principal, rate, years)=>{
    const rateDecimal = rate / 100;
    const compoundingFrequency = 4; // Quarterly compounding
    // Final Value: A = P * (1 + r/n)^(n*t)
    const totalValue = principal * Math.pow(1 + rateDecimal / compoundingFrequency, compoundingFrequency * years);
    const totalInterest = totalValue - principal;
    // Generate yearly schedule
    const schedule = getFdSchedule(principal, rate, years);
    return {
        investedAmount: principal,
        totalInterest: Math.round(totalInterest),
        totalValue: Math.round(totalValue),
        breakdown: {
            invested: principal,
            interest: Math.round(totalInterest),
            total: Math.round(totalValue)
        },
        schedule
    };
};
const calculatePPF = (annualInv, rate, years)=>{
    const maxInvestment = 150000;
    const rateDecimal = rate / 100;
    let totalInvested = 0;
    let balance = 0;
    let schedule = [];
    // PPF always has a minimum 15-year lock-in/maturity period
    const actualYears = Math.max(15, years);
    for(let year = 1; year <= actualYears; year++){
        // Investment limit check
        const contribution = Math.min(annualInv, maxInvestment);
        totalInvested += contribution;
        // Interest calculation is on the balance *before* the contribution (simplified annual logic)
        const interest = balance * rateDecimal;
        // New balance is (old balance + contribution + interest)
        balance = balance + contribution + interest;
        schedule.push({
            year,
            invested: Math.round(totalInvested),
            interest: Math.round(interest),
            value: Math.round(balance)
        });
        // Stop contributing after the input years are over, but let it compound until year 15 (lock-in)
        if (year >= years && contribution > 0) {
            annualInv = 0;
        }
        if (year >= 15 && year < actualYears) {
            // Once mandatory lock-in is reached, if actualYears is longer, the investment amount is assumed to be zero
            annualInv = 0;
        }
    }
    const finalResult = schedule[schedule.length - 1];
    return {
        investedAmount: finalResult.invested,
        totalInterest: finalResult.value - finalResult.invested,
        totalValue: finalResult.value,
        breakdown: {
            invested: finalResult.invested,
            interest: finalResult.value - finalResult.invested,
            total: finalResult.value
        },
        schedule
    };
};
const calculateEMI = (principal, rate, years)=>{
    const r = rate / 12 / 100;
    const n = years * 12;
    // Formula: E = P x r x (1+r)^n / ((1+r)^n - 1)
    const emi = principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - principal;
    // Generate Amortization Schedule (new logic)
    let balance = principal;
    let schedule = [];
    const monthlyRateDecimal = r;
    // We only show the first 10 years of schedule for performance/readability
    const maxMonthsToShow = Math.min(n, 120);
    for(let month = 1; month <= n; month++){
        const interestPayment = balance * monthlyRateDecimal;
        const principalPayment = emi - interestPayment;
        balance -= principalPayment;
        if (balance < 0) {
            // Last payment correction
            balance = 0;
        }
        if (month <= maxMonthsToShow || month === n) {
            schedule.push({
                month,
                principal: Math.round(principalPayment),
                interest: Math.round(interestPayment),
                balance: Math.round(balance)
            });
        }
        if (month > maxMonthsToShow && month < n) {
            // Optimization: skip intermediate months but include the final month
            month = n - 1;
        }
    }
    // Final month correction if needed
    if (schedule.length > 0 && schedule[schedule.length - 1].month !== n) {
        const lastMonthPayment = schedule[schedule.length - 1].principal + schedule[schedule.length - 1].interest;
        schedule.push({
            month: n,
            principal: Math.round(lastMonthPayment),
            interest: Math.round(lastMonthPayment - principal),
            balance: 0
        });
    }
    return {
        monthlyEMI: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalPayment: Math.round(totalPayment),
        schedule
    };
};
/**
 * Calculates tax liability based on the Old Regime (pre-deductions)
 * @param grossIncome Gross annual income
 * @param deductions Amount under 80C, 80D, HRA, etc.
 */ const calculateOldRegimeTax = (grossIncome, deductions)=>{
    // Standard Deduction: Rs 50,000 is usually auto-applied for salaried
    const standardDeduction = 50000;
    const netTaxableIncome = Math.max(0, grossIncome - deductions - standardDeduction);
    let tax = 0;
    // Slab Rates (Old Regime - FY 24-25)
    if (netTaxableIncome <= 250000) {
        tax = 0;
    } else if (netTaxableIncome <= 500000) {
        // 5% on amount over 2.5L
        tax = (netTaxableIncome - 250000) * 0.05;
        // Rebate u/s 87A: If income is <= 5L, tax is zero
        if (netTaxableIncome <= 500000) {
            tax = 0;
        }
    } else if (netTaxableIncome <= 1000000) {
        // 5% on 2.5L to 5L (12,500) + 20% on remaining
        tax = 12500 + (netTaxableIncome - 500000) * 0.20;
    } else {
        // 12,500 (5% slab) + 1,00,000 (20% slab) + 30% on remaining
        tax = 112500 + (netTaxableIncome - 1000000) * 0.30;
    }
    const cess = tax * 0.04; // 4% Health and Education Cess
    const totalTax = tax + cess;
    return {
        taxableIncome: netTaxableIncome,
        taxBeforeCess: tax,
        cess: Math.round(cess),
        totalTax: Math.round(totalTax),
        regime: 'Old'
    };
};
/**
 * Calculates tax liability based on the New Regime (default/simplified)
 * @param grossIncome Gross annual income
 */ const calculateNewRegimeTax = (grossIncome)=>{
    // New Regime has a higher base exemption and simplified slabs.
    // Standard Deduction of Rs 50,000 is now available in the new regime as well (FY 24-25)
    const standardDeduction = 50000;
    const netTaxableIncome = Math.max(0, grossIncome - standardDeduction);
    let tax = 0;
    // Slab Rates (New Regime - FY 24-25)
    if (netTaxableIncome <= 300000) {
        tax = 0;
    } else if (netTaxableIncome <= 600000) {
        // 5% on amount over 3L
        tax = (netTaxableIncome - 300000) * 0.05;
        // Rebate u/s 87A: If taxable income is <= 7L, tax is zero
        if (netTaxableIncome <= 700000) {
            tax = 0;
        }
    } else if (netTaxableIncome <= 900000) {
        // 5% on 3L (15,000) + 10% on remaining
        tax = 15000 + (netTaxableIncome - 600000) * 0.10;
    } else if (netTaxableIncome <= 1200000) {
        // 15,000 (5% slab) + 30,000 (10% slab) + 15% on remaining
        tax = 45000 + (netTaxableIncome - 900000) * 0.15;
    } else if (netTaxableIncome <= 1500000) {
        // 45,000 + 45,000 (15% slab) + 20% on remaining
        tax = 90000 + (netTaxableIncome - 1200000) * 0.20;
    } else {
        // 90,000 + 60,000 (20% slab) + 30% on remaining
        tax = 150000 + (netTaxableIncome - 1500000) * 0.30;
    }
    const cess = tax * 0.04; // 4% Health and Education Cess
    const totalTax = tax + cess;
    return {
        taxableIncome: netTaxableIncome,
        taxBeforeCess: tax,
        cess: Math.round(cess),
        totalTax: Math.round(totalTax),
        regime: 'New'
    };
};
const calculateIncomeTax = (grossIncome, deductions)=>{
    const oldRegime = calculateOldRegimeTax(grossIncome, deductions);
    const newRegime = calculateNewRegimeTax(grossIncome);
    return {
        oldRegime,
        newRegime,
        recommendation: oldRegime.totalTax < newRegime.totalTax ? 'Old' : 'New'
    };
};
const calculateLoanEligibility = (netIncome, existingEmi, rate, years)=>{
    // FOIR (Fixed Obligation to Income Ratio) Assumption: 50%
    const FOIR = 0.50;
    // Calculate Maximum Allowable EMI
    const maxAllowableEmi = netIncome * FOIR;
    // Calculate Available EMI Capacity
    const availableEmi = Math.max(0, maxAllowableEmi - existingEmi);
    if (availableEmi <= 0) {
        return {
            maxLoanAmount: 0,
            maxEmi: 0,
            foir: FOIR,
            availableEmi: 0
        };
    }
    // Reverse EMI Formula to find Principal
    // P = E * ((1+r)^n - 1) / (r * (1+r)^n)
    const r = rate / 12 / 100;
    const n = years * 12;
    const maxLoanAmount = availableEmi * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
    return {
        maxLoanAmount: Math.round(maxLoanAmount),
        maxEmi: Math.round(availableEmi),
        foir: FOIR,
        availableEmi: Math.round(availableEmi)
    };
};
const calculateGST = (amount, rate, type)=>{
    const rateDecimal = rate / 100;
    let netAmount = 0;
    let gstAmount = 0;
    let totalAmount = 0;
    if (type === 'exclusive') {
        // Exclusive: GST is added ON TOP of the amount
        // GST = Amount * Rate
        // Total = Amount + GST
        netAmount = amount;
        gstAmount = amount * rateDecimal;
        totalAmount = amount + gstAmount;
    } else {
        // Inclusive: Amount ALREADY includes GST
        // Amount = Net * (1 + Rate)
        // Net = Amount / (1 + Rate)
        // GST = Amount - Net
        netAmount = amount / (1 + rateDecimal);
        gstAmount = amount - netAmount;
        totalAmount = amount;
    }
    return {
        netAmount: Math.round(netAmount),
        gstAmount: Math.round(gstAmount),
        totalAmount: Math.round(totalAmount),
        type
    };
};
const calculateSalaryBreakup = (ctc)=>{
    // Assumptions
    // Basic = 50% of CTC
    // HRA = 50% of Basic
    // PF (Employer & Employee) = 12% of Basic
    // Professional Tax = 200 per month (flat)
    const basic = ctc * 0.50;
    const hra = basic * 0.50;
    const pfYearly = basic * 0.12;
    const professionalTaxYearly = 2400; // 200 * 12
    // CTC = Gross + Employer PF
    // Gross = Basic + HRA + Special Allowance
    // Special Allowance = CTC - Basic - HRA - Employer PF
    const employerPf = pfYearly;
    const specialAllowance = Math.max(0, ctc - basic - hra - employerPf);
    const grossSalary = basic + hra + specialAllowance;
    // Deductions (Employee side)
    const employeePf = pfYearly;
    const totalDeductions = employeePf + professionalTaxYearly;
    const netSalary = grossSalary - totalDeductions;
    return {
        yearly: {
            ctc: Math.round(ctc),
            basic: Math.round(basic),
            hra: Math.round(hra),
            specialAllowance: Math.round(specialAllowance),
            employerPf: Math.round(employerPf),
            grossSalary: Math.round(grossSalary),
            employeePf: Math.round(employeePf),
            professionalTax: Math.round(professionalTaxYearly),
            totalDeductions: Math.round(totalDeductions),
            netSalary: Math.round(netSalary)
        },
        monthly: {
            ctc: Math.round(ctc / 12),
            basic: Math.round(basic / 12),
            hra: Math.round(hra / 12),
            specialAllowance: Math.round(specialAllowance / 12),
            employerPf: Math.round(employerPf / 12),
            grossSalary: Math.round(grossSalary / 12),
            employeePf: Math.round(employeePf / 12),
            professionalTax: 200,
            totalDeductions: Math.round(totalDeductions / 12),
            netSalary: Math.round(netSalary / 12)
        }
    };
};
}),
"[project]/app/(calculators)/sip-calculator/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SIPCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/formulas.ts [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/SaveReportButton'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
function SIPCalculator() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [investment, setInvestment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5000);
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(12);
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const pInvestment = searchParams.get('investment');
        const pRate = searchParams.get('rate');
        const pYears = searchParams.get('years');
        if (pInvestment) setInvestment(Number(pInvestment));
        if (pRate) setRate(Number(pRate));
        if (pYears) setYears(Number(pYears));
    }, [
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // The calculateSIP function now generates the schedule internally
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateSIP"])(investment, rate, years);
        setResult(data);
    }, [
        investment,
        rate,
        years
    ]);
    const chartData = {
        labels: [
            'Invested Amount',
            'Wealth Gained'
        ],
        datasets: [
            {
                data: [
                    result?.breakdown.invested,
                    result?.breakdown.gained
                ],
                backgroundColor: [
                    '#ffffff40',
                    '#ffffff'
                ],
                borderWidth: 0
            }
        ]
    };
    // --- UPDATED: PDF Download Logic (via HTML Print) ---
    const handleDownloadReport = ()=>{
        if (!result || !result.schedule || result.schedule.length === 0) {
            alert("Please calculate a result before generating the report.");
            return;
        }
        const { breakdown, schedule } = result;
        let tableRows = '';
        schedule.forEach((item)=>{
            tableRows += `
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px; text-align: center;">${item.year}</td>
                <td style="padding: 12px; text-align: right;">₹ ${item.invested.toLocaleString('en-IN')}</td>
                <td style="padding: 12px; text-align: right; color: #059669;">₹ ${item.gain.toLocaleString('en-IN')}</td>
                <td style="padding: 12px; text-align: right; font-weight: bold;">₹ ${item.value.toLocaleString('en-IN')}</td>
            </tr>
        `;
        });
        const reportHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>SIP Growth Report</title>
            <style>
                body { font-family: sans-serif; margin: 0; padding: 40px; color: #333; }
                .header { background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 5px solid #10b981; }
                .summary { display: flex; justify-content: space-between; gap: 20px; margin-bottom: 40px; }
                .summary-card { padding: 20px; border-radius: 8px; flex: 1; border: 1px solid #ddd; }
                .title { font-size: 24px; font-weight: bold; color: #059669; margin-bottom: 5px; }
                .date { font-size: 12px; color: #666; }
                h2 { font-size: 18px; color: #1f2937; border-bottom: 2px solid #059669; padding-bottom: 5px; margin-bottom: 20px; margin-top: 30px; }
                table { width: 100%; border-collapse: collapse; font-size: 14px; }
                th { background-color: #e5e7eb; padding: 10px; text-align: right; color: #4b5563; font-weight: bold; border-bottom: 2px solid #333; }
                th:first-child { text-align: center; }
                .footer { margin-top: 50px; border-top: 1px solid #ccc; padding-top: 15px; font-size: 12px; color: #666; text-align: center; }
                
                @media print {
                    .no-print { display: none; }
                    body { box-shadow: none; margin: 0; padding: 0; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="title">SIP Growth Report</div>
                <div class="date">Generated by FinCalHub on: ${new Date().toLocaleDateString()}</div>
                <div style="font-size: 14px; margin-top: 10px;">Monthly SIP: ₹ ${investment.toLocaleString('en-IN')} | Rate: ${rate}% | Tenure: ${years} Years</div>
            </div>

            <h2>Final Investment Summary</h2>
            <div class="summary">
                <div class="summary-card" style="border-color: #d1d5db;">
                    <p style="font-size: 14px; color: #666; margin-bottom: 5px;">Total Invested</p>
                    <p style="font-size: 28px; font-weight: bold; color: #1f2937;">₹ ${breakdown.invested.toLocaleString('en-IN')}</p>
                </div>
                <div class="summary-card" style="border-color: #a7f3d0; background-color: #f0fdf4;">
                    <p style="font-size: 14px; color: #059669; margin-bottom: 5px;">Wealth Gained (Returns)</p>
                    <p style="font-size: 28px; font-weight: bold; color: #059669;">₹ ${breakdown.gained.toLocaleString('en-IN')}</p>
                </div>
                <div class="summary-card" style="border-color: #34d399; background-color: #ecfdf5;">
                    <p style="font-size: 14px; color: #065f46; margin-bottom: 5px;">Final Corpus Value</p>
                    <p style="font-size: 30px; font-weight: bolder; color: #065f46;">₹ ${breakdown.total.toLocaleString('en-IN')}</p>
                </div>
            </div>

            <h2>Yearly Growth Schedule (Compounding Effect)</h2>
            <table>
                <thead>
                    <tr>
                        <th style="width: 10%;">Year</th>
                        <th style="width: 30%;">Total Invested (₹)</th>
                        <th style="width: 30%;">Total Gain (₹)</th>
                        <th style="width: 30%;">Total Value (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>

            <div class="footer">
                This report is for informational and educational purposes only. Always consult a certified financial advisor before making investment decisions.
            </div>

            <div class="no-print" style="margin-top: 40px; text-align: center; background: #fff; padding: 20px; border: 1px dashed #ccc;">
                <p><strong>To save as PDF:</strong> Please use your browser's print function (Ctrl+P or Cmd+P) and select "Save as PDF" as the destination.</p>
            </div>
        </body>
        </html>
    `;
        const printWindow = window.open('', '', 'height=600,width=800');
        if (printWindow) {
            printWindow.document.write(reportHTML);
            printWindow.document.close();
            printWindow.onload = ()=>{
                printWindow.focus();
                printWindow.print();
            };
        }
    };
    // --- END UPDATED Download Logic ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F8FAFC] py-12 font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center text-sm font-bold text-slate-400 hover:text-emerald-600 mb-8 transition-colors group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform"
                        }, void 0, false, {
                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, this),
                        " Back to Home"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                    lineNumber: 156,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 xl:grid-cols-12 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "xl:col-span-5 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-extrabold mb-4 uppercase tracking-wide",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrendingUp, {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 33
                                                }, this),
                                                " Wealth Builder"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl font-black text-slate-900 mb-3 tracking-tight",
                                            children: "SIP Calculator"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 font-medium leading-relaxed",
                                            children: "Visualize the power of compounding. See how small monthly savings turn into a massive corpus."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
                                            label: "Monthly Investment",
                                            value: investment,
                                            onChange: setInvestment,
                                            type: "currency",
                                            min: 500,
                                            max: 100000,
                                            step: 500,
                                            variant: "green"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
                                            label: "Expected Return (p.a)",
                                            value: rate,
                                            onChange: setRate,
                                            type: "percentage",
                                            min: 1,
                                            max: 30,
                                            step: 0.1,
                                            variant: "green"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
                                            label: "Time Period",
                                            value: years,
                                            onChange: setYears,
                                            type: "year",
                                            min: 1,
                                            max: 40,
                                            step: 1,
                                            variant: "green"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SaveReportButton, {
                                                    reportData: {
                                                        ...result,
                                                        inputs: {
                                                            investment,
                                                            rate,
                                                            years
                                                        }
                                                    },
                                                    calculatorType: "SIP Calculator",
                                                    disabled: !result
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleDownloadReport,
                                                    className: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl hover:bg-slate-200 transition-all text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 37
                                                        }, this),
                                                        " Download"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "xl:col-span-7",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl shadow-emerald-500/30 relative overflow-hidden transition-all duration-500 hover:shadow-emerald-500/40 hover:scale-[1.01] h-full flex flex-col justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-emerald-100 font-semibold mb-2 tracking-wide text-xs sm:text-sm uppercase",
                                                        children: "Maturity Value"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-4xl sm:text-5xl xl:text-5xl font-black tracking-tighter mb-8 drop-shadow-sm leading-tight",
                                                        children: formatCurrency(result?.breakdown.total || 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3 sm:space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:bg-white/20 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 mb-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "p-1.5 bg-white/20 rounded-lg",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Wallet, {
                                                                                    className: "w-4 h-4 text-white"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                                    lineNumber: 232,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                                lineNumber: 231,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs sm:text-sm font-bold text-emerald-50",
                                                                                children: "Invested"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                                lineNumber: 234,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl sm:text-2xl font-bold ml-9 sm:ml-10 tracking-tight",
                                                                        children: formatCurrency(result?.breakdown.invested || 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                        lineNumber: 236,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-emerald-900/20 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/5 hover:bg-emerald-900/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 mb-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "p-1.5 bg-emerald-400/20 rounded-lg",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowUpRight, {
                                                                                    className: "w-4 h-4 text-emerald-200"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                                    lineNumber: 242,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                                lineNumber: 241,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs sm:text-sm font-bold text-emerald-100",
                                                                                children: "Wealth Gained"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                                lineNumber: 244,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                        lineNumber: 240,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl sm:text-2xl font-bold ml-9 sm:ml-10 text-emerald-200 tracking-tight",
                                                                        children: formatCurrency(result?.breakdown.gained || 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center bg-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-white/10 shadow-inner w-full max-w-sm mx-auto xl:mx-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-40 h-40 sm:w-48 sm:h-48 relative",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pie, {
                                                            data: chartData,
                                                            options: {
                                                                plugins: {
                                                                    legend: {
                                                                        display: false
                                                                    }
                                                                },
                                                                elements: {
                                                                    arc: {
                                                                        borderWidth: 0
                                                                    }
                                                                },
                                                                animation: {
                                                                    animateScale: true
                                                                }
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6 sm:mt-8 flex gap-4 sm:gap-6 text-xs sm:text-sm justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded-full bg-white/40"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                        lineNumber: 261,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-emerald-100 font-medium",
                                                                        children: "Invested"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                        lineNumber: 262,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                        lineNumber: 265,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-white font-bold",
                                                                        children: "Returns"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                        lineNumber: 266,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                                lineNumber: 217,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                            lineNumber: 216,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                    lineNumber: 160,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-20 max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-slate-900 mb-4",
                            children: "Understanding SIP Growth"
                        }, void 0, false, {
                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                            lineNumber: 277,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600",
                            children: 'The detailed year-by-year schedule of your investment growth, showcasing the compounding effect, can be downloaded using the "Generate PDF Report" button above.'
                        }, void 0, false, {
                            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                            lineNumber: 278,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
                    lineNumber: 276,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
            lineNumber: 155,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(calculators)/sip-calculator/page.tsx",
        lineNumber: 154,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dbaf58ee._.js.map