// src/utils/formulas.ts

// 1. Helper: Format Currency (₹ 1,00,000 instead of 100,000)
export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(amount);
};

// --- NEW HELPER: Generates Lumpsum Schedule ---
const getLumpsumSchedule = (principal: number, rate: number, years: number) => {
    const rateDecimal = rate / 100;
    const schedule: { year: number, value: number, gain: number }[] = [];
    let currentValue = principal;

    for (let year = 1; year <= years; year++) {
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
}


// --- NEW HELPER: Generates FD Schedule ---
const getFdSchedule = (principal: number, rate: number, years: number) => {
    const rateDecimal = rate / 100;
    const compoundingFrequency = 4; // Quarterly compounding (standard for FD)
    const schedule: { year: number, value: number, interest: number }[] = [];
    let cumulativeInterest = 0;

    for (let year = 1; year <= years; year++) {
        // A = P * (1 + r/n)^(n*t)
        const totalValue = principal * Math.pow(1 + (rateDecimal / compoundingFrequency), compoundingFrequency * year);
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
}

// 2. SIP Calculator Logic (Updated to include schedule)
const getSipSchedule = (monthlyInv: number, rate: number, years: number) => {
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    const schedule: { year: number, invested: number, value: number, gain: number }[] = [];
    let currentInvested = 0;
    let currentValue = 0;

    for (let month = 1; month <= months; month++) {
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
}


export const calculateSIP = (monthlyInv: number, rate: number, years: number) => {
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
        schedule, // <-- Include the yearly breakdown
    };
};

// 3. Lumpsum Calculator Logic
export const calculateLumpsum = (principal: number, rate: number, years: number) => {
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
        schedule,
    };
};

// 4. Fixed Deposit (FD) Calculator Logic
export const calculateFD = (principal: number, rate: number, years: number) => {
    const rateDecimal = rate / 100;
    const compoundingFrequency = 4; // Quarterly compounding

    // Final Value: A = P * (1 + r/n)^(n*t)
    const totalValue = principal * Math.pow(1 + (rateDecimal / compoundingFrequency), compoundingFrequency * years);
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
        schedule,
    };
};

// 5. Public Provident Fund (PPF) Calculator Logic (NEW FUNCTION)
export const calculatePPF = (annualInv: number, rate: number, years: number) => {
    const maxInvestment = 150000;
    const rateDecimal = rate / 100;
    let totalInvested = 0;
    let balance = 0;

    const schedule: { year: number, invested: number, interest: number, value: number }[] = [];

    // PPF always has a minimum 15-year lock-in/maturity period
    const actualYears = Math.max(15, years);

    for (let year = 1; year <= actualYears; year++) {
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
        schedule,
    };
};


// 6. EMI Calculator Logic (Remains the same)
export const calculateEMI = (principal: number, rate: number, years: number) => {
    const r = rate / 12 / 100;
    const n = years * 12;

    // Formula: E = P x r x (1+r)^n / ((1+r)^n - 1)
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - principal;

    // Generate Amortization Schedule (new logic)
    let balance = principal;
    const schedule: { month: number, principal: number, interest: number, balance: number }[] = [];
    const monthlyRateDecimal = r;

    // We only show the first 10 years of schedule for performance/readability
    const maxMonthsToShow = Math.min(n, 120);

    for (let month = 1; month <= n; month++) {
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
            principal: Math.round(lastMonthPayment), // Simplified final payment
            interest: Math.round(lastMonthPayment - principal), // simplified final interest
            balance: 0
        });
    }


    return {
        monthlyEMI: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalPayment: Math.round(totalPayment),
        schedule, // Pass the new schedule array
    };
};

// 7. Income Tax Calculator Logic (Remains the same)
export interface TaxResult {
    taxableIncome: number;
    taxBeforeCess: number;
    cess: number;
    totalTax: number;
    regime: 'Old' | 'New';
}

/**
 * Calculates tax liability based on the Old Regime (pre-deductions)
 * @param grossIncome Gross annual income
 * @param deductions Amount under 80C, 80D, HRA, etc.
 */
const calculateOldRegimeTax = (grossIncome: number, deductions: number): TaxResult => {
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
        regime: 'Old',
    };
};

/**
 * Calculates tax liability based on the New Regime (default/simplified)
 * @param grossIncome Gross annual income
 */
const calculateNewRegimeTax = (grossIncome: number): TaxResult => {
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
        regime: 'New',
    };
};

export const calculateIncomeTax = (grossIncome: number, deductions: number) => {
    const oldRegime = calculateOldRegimeTax(grossIncome, deductions);
    const newRegime = calculateNewRegimeTax(grossIncome);

    return {
        oldRegime,
        newRegime,
        recommendation: oldRegime.totalTax < newRegime.totalTax ? 'Old' : 'New',
    };
};

// 8. Loan Eligibility Calculator Logic
export const calculateLoanEligibility = (netIncome: number, existingEmi: number, rate: number, years: number) => {
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

// 9. GST Calculator Logic
export const calculateGST = (amount: number, rate: number, type: 'inclusive' | 'exclusive') => {
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

// 10. Salary Calculator Logic (CTC Breakup)
export const calculateSalaryBreakup = (ctc: number) => {
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