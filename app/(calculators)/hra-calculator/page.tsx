"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import InputGroup from '@/components/ui/InputGroup';
import SaveReportButton from '@/components/SaveReportButton';
import { formatCurrency } from '@/utils/formulas';
import { ArrowLeft, Building2, Calculator, CheckCircle } from 'lucide-react';

export default function HRACalculator() {
    const [basicSalary, setBasicSalary] = useState(600000);
    const [da, setDA] = useState(0);
    const [hraReceived, setHraReceived] = useState(240000);
    const [rentPaid, setRentPaid] = useState(180000);
    const [isMetro, setIsMetro] = useState(true);
    const [result, setResult] = useState<any>(null);

    useEffect(() => {
        calculateHRA();
    }, [basicSalary, da, hraReceived, rentPaid, isMetro]);

    const calculateHRA = () => {
        const salary = basicSalary + da;

        // 1. Actual HRA Received
        const actualHRA = hraReceived;

        // 2. Rent Paid - 10% of Salary
        const rentMinus10Percent = rentPaid - (0.10 * salary);

        // 3. 50% of Salary (Metro) or 40% of Salary (Non-Metro)
        const salaryPercentage = isMetro ? 0.50 * salary : 0.40 * salary;

        // Exempt HRA is the minimum of the above three
        let exemptHRA = Math.min(actualHRA, rentMinus10Percent, salaryPercentage);

        // Exempt HRA cannot be negative
        if (exemptHRA < 0) exemptHRA = 0;

        const taxableHRA = actualHRA - exemptHRA;

        setResult({
            actualHRA,
            rentMinus10Percent: rentMinus10Percent > 0 ? rentMinus10Percent : 0,
            salaryPercentage,
            exemptHRA,
            taxableHRA
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 font-sans transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4">
                <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 mb-8 transition-colors group">
                    <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

                    <div className="xl:col-span-5 space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-extrabold mb-4 uppercase tracking-wide">
                                <Building2 className="w-3 h-3" /> Tax Saver
                            </div>
                            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">HRA Calculator</h1>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                Calculate your House Rent Allowance exemption and save on taxes.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-colors">
                            <InputGroup
                                label="Basic Salary (Yearly)"
                                value={basicSalary}
                                onChange={setBasicSalary}
                                type="currency"
                                min={100000} max={10000000} step={10000}
                                variant="purple"
                            />
                            <InputGroup
                                label="DA (Dearness Allowance)"
                                value={da}
                                onChange={setDA}
                                type="currency"
                                min={0} max={5000000} step={5000}
                                variant="purple"
                            />
                            <InputGroup
                                label="HRA Received (Yearly)"
                                value={hraReceived}
                                onChange={setHraReceived}
                                type="currency"
                                min={10000} max={5000000} step={5000}
                                variant="purple"
                            />
                            <InputGroup
                                label="Rent Paid (Yearly)"
                                value={rentPaid}
                                onChange={setRentPaid}
                                type="currency"
                                min={10000} max={5000000} step={5000}
                                variant="purple"
                            />

                            <div className="mb-8">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 tracking-wide mb-3">City Type</label>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setIsMetro(true)}
                                        className={`flex-1 py-3 rounded-xl font-bold transition-all ${isMetro ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                                    >
                                        Metro (50%)
                                    </button>
                                    <button
                                        onClick={() => setIsMetro(false)}
                                        className={`flex-1 py-3 rounded-xl font-bold transition-all ${!isMetro ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                                    >
                                        Non-Metro (40%)
                                    </button>
                                </div>
                            </div>

                            <SaveReportButton
                                reportData={{ ...result, inputs: { basicSalary, da, hraReceived, rentPaid, isMetro } }}
                                calculatorType="HRA Calculator"
                                disabled={!result}
                            />
                        </div>
                    </div>

                    <div className="xl:col-span-7">
                        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl shadow-purple-500/30 relative overflow-hidden transition-all duration-500 hover:shadow-purple-500/40 hover:scale-[1.01] h-full flex flex-col justify-center">
                            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <p className="text-purple-100 font-semibold mb-2 tracking-wide text-xs sm:text-sm uppercase">Exempt HRA Amount</p>
                                <p className="text-4xl sm:text-6xl font-black tracking-tighter mb-8 drop-shadow-sm leading-tight">
                                    {formatCurrency(result?.exemptHRA || 0)}
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:bg-white/20 transition-colors">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-bold text-purple-100">Taxable HRA</span>
                                            <span className="text-xl font-bold text-white">{formatCurrency(result?.taxableHRA || 0)}</span>
                                        </div>
                                        <div className="w-full bg-black/20 rounded-full h-2">
                                            <div className="bg-white h-2 rounded-full" style={{ width: `${(result?.taxableHRA / result?.actualHRA) * 100}%` }}></div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-purple-900/20 backdrop-blur-md rounded-2xl p-4 border border-white/5">
                                            <p className="text-xs text-purple-200 mb-1">Actual HRA Received</p>
                                            <p className="text-lg font-bold">{formatCurrency(result?.actualHRA || 0)}</p>
                                        </div>
                                        <div className="bg-purple-900/20 backdrop-blur-md rounded-2xl p-4 border border-white/5">
                                            <p className="text-xs text-purple-200 mb-1">Rent - 10% Salary</p>
                                            <p className="text-lg font-bold">{formatCurrency(result?.rentMinus10Percent || 0)}</p>
                                        </div>
                                        <div className="bg-purple-900/20 backdrop-blur-md rounded-2xl p-4 border border-white/5 sm:col-span-2">
                                            <p className="text-xs text-purple-200 mb-1">{isMetro ? '50%' : '40%'} of Salary</p>
                                            <p className="text-lg font-bold">{formatCurrency(result?.salaryPercentage || 0)}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/10 text-sm text-purple-100 font-medium">
                                    <p className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                                        The exempt HRA is the lowest of the three calculated values above, as per Income Tax rules.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
