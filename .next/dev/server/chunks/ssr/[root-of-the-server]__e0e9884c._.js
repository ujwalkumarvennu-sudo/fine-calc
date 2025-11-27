module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/ui/InputGroup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InputGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function InputGroup({ label, value, onChange, type = 'currency', min, max, step, variant = 'blue' }) {
    const limits = {
        currency: {
            min: 500,
            max: 10000000,
            step: 500
        },
        percentage: {
            min: 1,
            max: 30,
            step: 0.1
        },
        year: {
            min: 1,
            max: 40,
            step: 1
        }
    };
    const actualMin = min ?? limits[type].min;
    const actualMax = max ?? limits[type].max;
    const actualStep = step ?? limits[type].step;
    // Dynamic styling based on variant
    const themeClasses = {
        blue: {
            accent: 'accent-blue-600',
            focus: 'focus:border-blue-500 focus:ring-blue-200',
            text: 'text-blue-600',
            badge: 'bg-blue-100 text-blue-700'
        },
        green: {
            accent: 'accent-emerald-600',
            focus: 'focus:border-emerald-500 focus:ring-emerald-200',
            text: 'text-emerald-600',
            badge: 'bg-emerald-100 text-emerald-700'
        },
        rose: {
            accent: 'accent-rose-600',
            focus: 'focus:border-rose-500 focus:ring-rose-200',
            text: 'text-rose-600',
            badge: 'bg-rose-100 text-rose-700'
        },
        purple: {
            accent: 'accent-purple-600',
            focus: 'focus:border-purple-500 focus:ring-purple-200',
            text: 'text-purple-600',
            badge: 'bg-purple-100 text-purple-700'
        }
    };
    const colors = themeClasses[variant];
    const handleSliderChange = (e)=>{
        onChange(Number(e.target.value));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-end mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-bold text-slate-700 ml-1 tracking-wide",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity ${colors.badge}`,
                        children: [
                            "Max: ",
                            type === 'currency' ? '₹' : '',
                            actualMax.toLocaleString(),
                            type === 'percentage' ? '%' : '',
                            type === 'year' ? ' Yr' : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/InputGroup.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-white mb-4 border border-slate-100 overflow-hidden focus-within:shadow-xl focus-within:border-${variant}-500`,
                children: [
                    type === 'currency' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-slate-400 font-semibold text-xl",
                            children: "₹"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/InputGroup.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        value: value,
                        onChange: (e)=>onChange(Number(e.target.value)),
                        min: actualMin,
                        max: actualMax,
                        className: `block w-full border-none bg-transparent py-5 text-slate-900 font-extrabold text-2xl focus:ring-0 transition-all outline-none ${type === 'currency' ? 'pl-12' : 'pl-5'}`
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    type === 'percentage' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `font-bold px-2 py-1 rounded text-sm ${colors.badge}`,
                            children: "%"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/InputGroup.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    type === 'year' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `font-bold px-2 py-1 rounded text-sm ${colors.badge}`,
                            children: "Yr"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/InputGroup.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 h-1 bg-slate-100 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full transition-all duration-150 ease-out ${variant === 'blue' ? 'bg-blue-500' : variant === 'green' ? 'bg-emerald-500' : variant === 'purple' ? 'bg-purple-500' : 'bg-rose-500'}`,
                            style: {
                                width: `${(value - actualMin) / (actualMax - actualMin) * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ui/InputGroup.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/InputGroup.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-2 w-full px-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "range",
                    min: actualMin,
                    max: actualMax,
                    step: actualStep,
                    value: value,
                    onChange: handleSliderChange,
                    className: `w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer hover:bg-slate-300 transition-colors focus:outline-none ${colors.accent}`
                }, void 0, false, {
                    fileName: "[project]/components/ui/InputGroup.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/InputGroup.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/InputGroup.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
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
"[project]/app/(calculators)/income-tax-calculator/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IncomeTaxCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)"); // Ensure Link is imported
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$InputGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/InputGroup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/formulas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
"use client";
;
;
;
;
;
;
function IncomeTaxCalculator() {
    const [grossIncome, setGrossIncome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1500000); // Default: 15 Lakhs
    const [deductions, setDeductions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(150000); // Default: 1.5 Lakhs (80C limit)
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateIncomeTax"])(grossIncome, deductions);
        setResult(data);
    }, [
        grossIncome,
        deductions
    ]);
    const oldTax = result?.oldRegime;
    const newTax = result?.newRegime;
    const bestRegime = result?.recommendation;
    // --- NEW: PDF Download Logic (via HTML Print) for Tax ---
    const handleDownloadReport = ()=>{
        if (!result || !oldTax || !newTax) {
            alert("Please calculate a result before generating the report.");
            return;
        }
        const overallSavings = Math.abs(oldTax.totalTax - newTax.totalTax);
        const getTaxTable = (data)=>{
            // --- FIX: Define isOld inside the function scope ---
            const isOld = data.regime === 'Old';
            // --- END FIX ---
            return `
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 13px;">
                <tr><th style="background-color: #f3f4f6; padding: 8px; text-align: left; width: 60%; border: 1px solid #e5e7eb;">Parameter</th><th style="background-color: #f3f4f6; padding: 8px; text-align: right; border: 1px solid #e5e7eb;">Value (₹)</th></tr>
                <tr><td style="padding: 8px; border: 1px solid #e5e7eb;">Gross Income</td><td style="padding: 8px; text-align: right; border: 1px solid #e5e7eb;">${grossIncome.toLocaleString('en-IN')}</td></tr>
                <tr style="font-style: italic;"><td style="padding: 8px; border: 1px solid #e5e7eb;">Minus Standard Deduction</td><td style="padding: 8px; text-align: right; border: 1px solid #e5e7eb;">${50000..toLocaleString('en-IN')}</td></tr>
                ${isOld ? `<tr style="font-weight: bold; color: #dc2626;"><td style="padding: 8px; border: 1px solid #e5e7eb;">Minus Chapter VI-A Deductions</td><td style="padding: 8px; text-align: right; border: 1px solid #e5e7eb;">${deductions.toLocaleString('en-IN')}</td></tr>` : ''}
                <tr><td style="padding: 8px; font-weight: bold; border: 1px solid #e5e7eb;">Net Taxable Income</td><td style="padding: 8px; text-align: right; font-weight: bold; border: 1px solid #e5e7eb;">${data.taxableIncome.toLocaleString('en-IN')}</td></tr>
                
                <tr style="height: 15px;"></tr>
                
                <tr><td style="padding: 8px; border: 1px solid #e5e7eb;">Tax Before Cess</td><td style="padding: 8px; text-align: right; border: 1px solid #e5e7eb;">${data.taxBeforeCess.toLocaleString('en-IN')}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #e5e7eb;">Health & Education Cess (4%)</td><td style="padding: 8px; text-align: right; border: 1px solid #e5e7eb;">${data.cess.toLocaleString('en-IN')}</td></tr>
                
                <tr style="height: 15px;"></tr>

                <tr style="font-size: 15px; font-weight: bolder; background-color: #e0f2f1; color: ${isOld ? '#1e40af' : '#6d28d9'};">
                    <td style="padding: 10px; border: 1px solid #e5e7eb;">TOTAL TAX PAYABLE</td>
                    <td style="padding: 10px; text-align: right; border: 1px solid #e5e7eb;">₹ ${data.totalTax.toLocaleString('en-IN')}</td>
                </tr>
            </table>
        `;
        };
        const reportHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Income Tax Comparison Report</title>
            <style>
                body { font-family: sans-serif; margin: 0; padding: 40px; color: #333; }
                .header { background-color: #f5f3ff; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 5px solid #8b5cf6; }
                .title { font-size: 24px; font-weight: bold; color: #8b5cf6; margin-bottom: 5px; }
                .date { font-size: 12px; color: #666; }
                h2 { font-size: 18px; color: #1f2937; border-bottom: 2px solid #a78bfa; padding-bottom: 5px; margin-bottom: 20px; margin-top: 30px; }
                .comparison-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
                .regime-box { padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
                .footer { margin-top: 50px; border-top: 1px solid #ccc; padding-top: 15px; font-size: 12px; color: #666; text-align: center; }

                @media print {
                    .no-print { display: none; }
                    body { box-shadow: none; margin: 0; padding: 0; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="title">Income Tax Comparison Report (FY 2024-25)</div>
                <div class="date">Generated by FinCalHub on: ${new Date().toLocaleDateString()}</div>
                <div style="font-size: 14px; margin-top: 10px;">Gross Income: ₹ ${grossIncome.toLocaleString('en-IN')} | Deductions Considered: ₹ ${deductions.toLocaleString('en-IN')}</div>
            </div>

            <h2>Tax Liability Comparison</h2>
            <div class="comparison-grid">
                <div class="regime-box" style="border-color: #93c5fd;">
                    <h3 style="color: #1e40af; margin-bottom: 10px; font-size: 16px;">Old Tax Regime</h3>
                    ${getTaxTable(oldTax)}
                </div>
                <div class="regime-box" style="border-color: #c4b5fd;">
                    <h3 style="color: #6d28d9; margin-bottom: 10px; font-size: 16px;">New Tax Regime</h3>
                    ${getTaxTable(newTax)}
                </div>
            </div>

            <h2 style="margin-top: 40px;">Final Recommendation</h2>
            <div style="background-color: #eff6ff; border: 2px solid ${bestRegime === 'Old' ? '#1e40af' : '#6d28d9'}; padding: 20px; border-radius: 8px;">
                <p style="font-size: 16px; font-weight: bold; color: #1f2937;">
                    The recommended choice is the <span style="color: ${bestRegime === 'Old' ? '#1e40af' : '#6d28d9'};">${bestRegime} Regime.</span>
                </p>
                <p style="font-size: 14px; color: #4b5563;">
                    This choice results in a savings of approximately 
                    <span style="font-weight: bold; color: #059669;">₹ ${overallSavings.toLocaleString('en-IN')}</span> 
                    compared to the other regime.
                </p>
                <p style="font-size: 12px; color: #999; margin-top: 10px;">* Recommendation is based purely on tax payable, ignoring other financial goals linked to deductions.</p>
            </div>

            <div class="footer">
                This report is for informational and educational purposes only. Tax laws are subject to change.
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
    // --- END PDF Download Logic ---
    const TaxCard = ({ regime, data, isBest })=>{
        const isOld = regime === 'Old';
        const color = isOld ? 'bg-indigo-600' : 'bg-purple-600';
        const shadow = isOld ? 'shadow-indigo-500/30' : 'shadow-purple-500/30';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative p-8 rounded-3xl text-white shadow-2xl ${shadow} overflow-hidden transition-all duration-300 ${isBest ? 'scale-[1.03] border-4 border-yellow-300' : 'opacity-80'}`,
            children: [
                isBest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 right-0 bg-yellow-400 text-slate-900 text-xs font-black px-4 py-1.5 rounded-bl-xl rounded-tr-3xl",
                    children: "RECOMMENDED"
                }, void 0, false, {
                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                    lineNumber: 148,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-10",
                    style: {
                        background: `radial-gradient(circle at 100% 0%, rgba(255,255,255,0.2) 0%, transparent 70%)`
                    }
                }, void 0, false, {
                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-extrabold mb-2 uppercase tracking-wider",
                    children: [
                        regime,
                        " Regime"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-4xl font-black mb-6 drop-shadow-sm leading-tight",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(data.totalTax)
                }, void 0, false, {
                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 pt-4 border-t border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-white",
                                    children: "Taxable Income"
                                }, void 0, false, {
                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(data.taxableIncome)
                                }, void 0, false, {
                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-white",
                                    children: "Tax Before Cess"
                                }, void 0, false, {
                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(data.taxBeforeCess)
                                }, void 0, false, {
                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-white",
                                    children: "Cess (4%)"
                                }, void 0, false, {
                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(data.cess)
                                }, void 0, false, {
                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 pt-4 border-t border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-extrabold text-sm mb-2 uppercase tracking-wider",
                            children: "Key Difference"
                        }, void 0, false, {
                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        isOld ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "w-4 h-4 text-green-300 mt-0.5 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 30
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                            className: "w-4 h-4 text-rose-300 mt-0.5 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 104
                                        }, this),
                                        isOld ? 'Allows Deductions (80C, HRA, etc.)' : 'No Deductions Allowed'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        isOld ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                            className: "w-4 h-4 text-rose-300 mt-0.5 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 30
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "w-4 h-4 text-green-300 mt-0.5 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 99
                                        }, this),
                                        isOld ? 'Lower base exemption (₹2.5L)' : 'Higher base exemption (₹3L)'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F8FAFC] py-12 font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center text-sm font-bold text-slate-400 hover:text-purple-600 mb-8 transition-colors group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform"
                        }, void 0, false, {
                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        " Back to Home"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-extrabold mb-4 uppercase tracking-wide",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, this),
                                                " Tax Planner"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl font-black text-slate-900 mb-3 tracking-tight",
                                            children: "Income Tax Comparison"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 font-medium leading-relaxed",
                                            children: "Compare the tax payable under the Old and New Regimes to determine which one saves you the most money this financial year."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$InputGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Annual Gross Income",
                                            value: grossIncome,
                                            onChange: setGrossIncome,
                                            type: "currency",
                                            min: 300000,
                                            max: 50000000,
                                            step: 10000,
                                            variant: "blue"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$InputGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Eligible Deductions (80C, 80D, etc.)",
                                            value: deductions,
                                            onChange: setDeductions,
                                            type: "currency",
                                            min: 0,
                                            max: 500000,
                                            step: 5000,
                                            variant: "blue"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 mt-4 px-1",
                                            children: "* Deductions primarily apply to the Old Regime, but enter them to calculate the benefit."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDownloadReport,
                                    className: "w-full bg-purple-600 text-white py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this),
                                        " Generate PDF Report"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-8 flex flex-col justify-start",
                            children: [
                                result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 pt-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-indigo-500/40",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TaxCard, {
                                                regime: "Old",
                                                data: oldTax,
                                                isBest: bestRegime === 'Old'
                                            }, void 0, false, {
                                                fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-purple-500 to-violet-700 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-purple-500/40",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TaxCard, {
                                                regime: "New",
                                                data: newTax,
                                                isBest: bestRegime === 'New'
                                            }, void 0, false, {
                                                fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 17
                                }, this),
                                result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `mt-8 p-6 rounded-2xl shadow-lg border-2 ${bestRegime === 'Old' ? 'bg-indigo-50 border-indigo-200' : 'bg-purple-50 border-purple-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-black text-slate-900 mb-2 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-2xl ${bestRegime === 'Old' ? 'text-indigo-600' : 'text-purple-600'}`,
                                                    children: bestRegime === 'Old' ? '₹' : '₹'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 25
                                                }, this),
                                                "Recommendation"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-700 font-medium",
                                            children: [
                                                "Based on your inputs, the",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-extrabold ${bestRegime === 'Old' ? 'text-indigo-700' : 'text-purple-700'}`,
                                                    children: [
                                                        " ",
                                                        bestRegime,
                                                        " Regime"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 25
                                                }, this),
                                                "saves you approximately",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold",
                                                    children: [
                                                        " ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(oldTax.totalTax - newTax.totalTax)),
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 25
                                                }, this),
                                                "compared to the other option."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
            lineNumber: 193,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(calculators)/income-tax-calculator/page.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e0e9884c._.js.map