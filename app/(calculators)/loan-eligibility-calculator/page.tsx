"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import InputGroup from '@/components/ui/InputGroup';
import SaveReportButton from '@/components/SaveReportButton';
import { calculateLoanEligibility, formatCurrency } from '@/utils/formulas';
import { ArrowLeft, Calculator, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LoanEligibilityCalculator() {
    const [netIncome, setNetIncome] = useState(50000);
    const [existingEmi, setExistingEmi] = useState(0);
    const [rate, setRate] = useState(8.5);
    const [years, setYears] = useState(20);
    const [result, setResult] = useState<any>(null);

    useEffect(() => {
        const data = calculateLoanEligibility(netIncome, existingEmi, rate, years);
        setResult(data);
    }, [netIncome, existingEmi, rate, years]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 font-sans transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4">
                <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 mb-8 transition-colors group">
                    <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

                    <div className="xl:col-span-5 space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 text-xs font-extrabold mb-4 uppercase tracking-wide">
                                <Calculator className="w-3 h-3" /> Loan Planner
                            </div>
                            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Loan Eligibility</h1>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                Check how much loan you can get based on your income and existing EMIs.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-colors">
                            <InputGroup
                                label="Net Monthly Income"
                                value={netIncome}
                                onChange={setNetIncome}
                                type="currency"
                                min={10000} max={1000000} step={1000}
                                variant="rose"
                            />
                            <InputGroup
                                label="Existing Monthly EMIs"
                                value={existingEmi}
                                onChange={setExistingEmi}
                                type="currency"
                                min={0} max={netIncome} step={500}
                                variant="rose"
                            />
                            <InputGroup
                                label="Interest Rate (%)"
                                value={rate}
                                onChange={setRate}
                                type="percentage"
                                min={1} max={20} step={0.1}
                                variant="rose"
                            />
                            <InputGroup
                                label="Loan Tenure"
                                value={years}
                                onChange={setYears}
                                type="year"
                                min={1} max={30}
                                variant="rose"
                            />

                            <div className="mt-6">
                                <SaveReportButton
                                    reportData={{ ...result, inputs: { netIncome, existingEmi, rate, years } }}
                                    calculatorType="Loan Eligibility Calculator"
                                    disabled={!result}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-7">
                        <div className="bg-gradient-to-br from-rose-500 to-orange-600 rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl shadow-rose-500/30 relative overflow-hidden transition-all duration-500 hover:shadow-rose-500/40 hover:scale-[1.01] h-full flex flex-col justify-center">
                            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <p className="text-rose-100 font-semibold mb-2 tracking-wide text-xs sm:text-sm uppercase">Maximum Loan Amount</p>
                                <p className="text-5xl sm:text-6xl font-black tracking-tighter mb-8 drop-shadow-sm leading-tight">
                                    {formatCurrency(result?.maxLoanAmount || 0)}
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-rose-100 font-medium">Max Affordable EMI</span>
                                            <span className="text-xl font-bold">{formatCurrency(result?.maxEmi || 0)}</span>
                                        </div>
                                        <div className="w-full bg-black/20 rounded-full h-2">
                                            <div className="bg-white h-2 rounded-full" style={{ width: '100%' }}></div>
                                        </div>
                                        <p className="text-xs text-rose-200 mt-2">
                                            Based on 50% of your net income minus existing obligations.
                                        </p>
                                    </div>

                                    {result?.maxLoanAmount === 0 && (
                                        <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-4 border border-red-500/30 flex items-start gap-3">
                                            <AlertCircle className="w-5 h-5 text-red-200 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold text-red-100">Eligibility Low</p>
                                                <p className="text-sm text-red-200 mt-1">Your existing EMIs are too high relative to your income. Try reducing tenure or clearing existing debts.</p>
                                            </div>
                                        </div>
                                    )}

                                    {result?.maxLoanAmount > 0 && (
                                        <div className="bg-emerald-500/20 backdrop-blur-md rounded-2xl p-4 border border-emerald-500/30 flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold text-emerald-100">You are Eligible!</p>
                                                <p className="text-sm text-emerald-200 mt-1">You can comfortably borrow up to {formatCurrency(result?.maxLoanAmount)} with a tenure of {years} years.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">How is Loan Eligibility Calculated?</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                        Banks typically use the <strong>Fixed Obligation to Income Ratio (FOIR)</strong> to determine your eligibility.
                        Most lenders cap your total monthly EMIs (including the new loan) at <strong>50%</strong> of your net monthly income.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
                        <li><strong>Net Income:</strong> Your in-hand monthly salary.</li>
                        <li><strong>Existing EMIs:</strong> Any current loan repayments you are making.</li>
                        <li><strong>Available EMI Capacity:</strong> (Net Income × 50%) - Existing EMIs.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
