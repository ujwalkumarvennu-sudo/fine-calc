import { calculateSalaryBreakup } from './utils/formulas';

const testCases = [
    { ctc: 1200000, label: '12 LPA' },
    { ctc: 600000, label: '6 LPA' },
    { ctc: 2400000, label: '24 LPA' }
];

testCases.forEach(({ ctc, label }) => {
    console.log(`\n--- Testing ${label} ---`);
    const result = calculateSalaryBreakup(ctc);

    console.log('Yearly Breakdown:');
    console.log(`  CTC: ${result.yearly.ctc}`);
    console.log(`  Basic: ${result.yearly.basic}`);
    console.log(`  HRA: ${result.yearly.hra}`);
    console.log(`  Special Allowance: ${result.yearly.specialAllowance}`);
    console.log(`  Employer PF: ${result.yearly.employerPf}`);
    console.log(`  Gross Salary: ${result.yearly.grossSalary}`);
    console.log(`  Employee PF: ${result.yearly.employeePf}`);
    console.log(`  Professional Tax: ${result.yearly.professionalTax}`);
    console.log(`  Total Deductions: ${result.yearly.totalDeductions}`);
    console.log(`  Net Salary: ${result.yearly.netSalary}`);

    console.log('Monthly Breakdown:');
    console.log(`  Net Salary (In-Hand): ${result.monthly.netSalary}`);
});
