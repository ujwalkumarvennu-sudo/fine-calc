"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import InputGroup from '@/components/ui/InputGroup';
import SaveReportButton from '@/components/SaveReportButton';
import { calculateSalaryBreakup, formatCurrency } from '@/utils/formulas';
import { ArrowLeft, Calculator, PieChart as PieIcon, Wallet } from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SalaryCalculator() {
    const [ctc, setCtc] = useState(1200000);
    const [result, setResult] = useState<any>(null);

    useEffect(() => {
        const data = calculateSalaryBreakup(ctc);
        setResult(data);
    }, [ctc]);

    const chartData = {
        labels: ['Basic Salary', 'HRA', 'Special Allowance', 'Employer PF'],
        datasets: [
            {
                data: [
                    result?.yearly.basic || 0,
                    result?.yearly.hra || 0,
                    result?.yearly.specialAllowance || 0,
                    result?.yearly.employerPf || 0,
                ],
                backgroundColor: [
                    '#8b5cf6', // Violet
                    '#ec4899', // Pink
                    '#f59e0b', // Amber
                    '#64748b', // Slate (PF)
                ],
                borderWidth: 0,
            },
        ],
    };


    // ... (inside component)
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const chartOptions = {
        cutout: '75%',
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    usePointStyle: true,
                    padding: 15,
                    boxWidth: 8,
                    font: {
                        family: "'Inter', sans-serif",
                        size: 11,
                        weight: 600
                    },
                    color: isDark ? '#cbd5e1' : '#64748b' // slate-300 : slate-500
                }
            },
            tooltip: {
                backgroundColor: isDark ? '#1e293b' : '#1e293b', // Keep dark tooltip for contrast or adjust
                padding: 12,
                cornerRadius: 8,
                callbacks: {
                    label: function (context: any) {
                        return ' ' + context.label + ': ' + formatCurrency(context.raw);
                    }
                }
            }
        },
        layout: {
            padding: {
                top: 10,
                bottom: 10
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 font-sans transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 mb-8 transition-colors group">
                    <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12">

                    <div className="xl:col-span-4 space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-extrabold mb-4 uppercase tracking-wide">
                                <Wallet className="w-3 h-3" /> Income Tools
                            </div>
                            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Salary Calculator</h1>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                Understand your in-hand salary from your annual CTC.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-colors">
                            <InputGroup
                                label="Annual CTC"
                                value={ctc}
                                onChange={setCtc}
                                type="currency"
                                min={100000} max={10000000} step={10000}
                                variant="purple"
                            />

                            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                                <SaveReportButton
                                    reportData={{ ...result, inputs: { ctc } }}
                                    calculatorType="Salary Calculator"
                                    disabled={!result}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-8 space-y-8">
                        {/* Summary Card */}
                        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl shadow-purple-500/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>

                            <div className="relative z-10 grid sm:grid-cols-2 gap-8 items-center">
                                <div>
                                    <p className="text-purple-100 font-semibold mb-2 tracking-wide text-xs sm:text-sm uppercase">
                                        Monthly In-Hand Salary
                                    </p>
                                    <p className="text-5xl sm:text-6xl font-black tracking-tighter mb-4 drop-shadow-sm leading-tight">
                                        {formatCurrency(result?.monthly.netSalary || 0)}
                                    </p>
                                    <p className="text-purple-200 text-sm font-medium">
                                        * Before Income Tax deductions
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                                        <span className="text-purple-50 font-medium">Monthly Gross</span>
                                        <span className="font-bold text-xl">{formatCurrency(result?.monthly.grossSalary || 0)}</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                                        <span className="text-purple-50 font-medium">Total Deductions</span>
                                        <span className="font-bold text-xl text-red-200">-{formatCurrency(result?.monthly.totalDeductions || 0)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8">
                            {/* Chart Section */}
                            <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 h-fit">
                                <h4 className="text-slate-800 dark:text-slate-200 font-bold text-sm mb-6 flex items-center gap-2">
                                    <PieIcon className="w-4 h-4 text-purple-500" /> CTC Distribution
                                </h4>
                                <div className="h-64 relative">
                                    <Doughnut data={chartData} options={chartOptions} />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-8">
                                        <div className="text-center">
                                            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-1">Gross</p>
                                            <p className="text-lg font-black text-slate-700 dark:text-slate-300">{formatCurrency(result?.monthly.grossSalary || 0)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Breakdown Table */}
                            <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-colors h-fit">
                                <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                                    <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">Detailed Breakup</h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                                                <th className="p-4 pl-6">Component</th>
                                                <th className="p-4 text-right">Monthly</th>
                                                <th className="p-4 pr-6 text-right">Yearly</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                            {/* Earnings */}
                                            <tr className="bg-slate-50/30 dark:bg-slate-800/30">
                                                <td className="p-3 pl-6 font-bold text-slate-700 dark:text-slate-300" colSpan={3}>Earnings</td>
                                            </tr>
                                            <tr className="border-b border-slate-50 dark:border-slate-800">
                                                <td className="p-3 pl-6">Basic</td>
                                                <td className="p-3 text-right font-bold text-slate-800 dark:text-slate-200">{formatCurrency(result?.monthly.basic || 0)}</td>
                                                <td className="p-3 pr-6 text-right">{formatCurrency(result?.yearly.basic || 0)}</td>
                                            </tr>
                                            <tr className="border-b border-slate-50 dark:border-slate-800">
                                                <td className="p-3 pl-6">HRA</td>
                                                <td className="p-3 text-right font-bold text-slate-800 dark:text-slate-200">{formatCurrency(result?.monthly.hra || 0)}</td>
                                                <td className="p-3 pr-6 text-right">{formatCurrency(result?.yearly.hra || 0)}</td>
                                            </tr>
                                            <tr className="border-b border-slate-50 dark:border-slate-800">
                                                <td className="p-3 pl-6">Special All.</td>
                                                <td className="p-3 text-right font-bold text-slate-800 dark:text-slate-200">{formatCurrency(result?.monthly.specialAllowance || 0)}</td>
                                                <td className="p-3 pr-6 text-right">{formatCurrency(result?.yearly.specialAllowance || 0)}</td>
                                            </tr>
                                            <tr className="bg-green-50/50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-800">
                                                <td className="p-3 pl-6 text-green-700 dark:text-green-400 font-bold">Gross</td>
                                                <td className="p-3 text-right font-bold text-green-700 dark:text-green-400">{formatCurrency(result?.monthly.grossSalary || 0)}</td>
                                                <td className="p-3 pr-6 text-right font-bold text-green-700 dark:text-green-400">{formatCurrency(result?.yearly.grossSalary || 0)}</td>
                                            </tr>

                                            {/* Deductions */}
                                            <tr className="bg-slate-50/30 dark:bg-slate-800/30">
                                                <td className="p-3 pl-6 font-bold text-slate-700 dark:text-slate-300" colSpan={3}>Deductions</td>
                                            </tr>
                                            <tr className="border-b border-slate-50 dark:border-slate-800">
                                                <td className="p-3 pl-6">EPF</td>
                                                <td className="p-3 text-right text-red-500 dark:text-red-400 font-bold">-{formatCurrency(result?.monthly.employeePf || 0)}</td>
                                                <td className="p-3 pr-6 text-right text-red-500 dark:text-red-400">-{formatCurrency(result?.yearly.employeePf || 0)}</td>
                                            </tr>
                                            <tr className="border-b border-slate-50 dark:border-slate-800">
                                                <td className="p-3 pl-6">Prof. Tax</td>
                                                <td className="p-3 text-right text-red-500 dark:text-red-400 font-bold">-{formatCurrency(result?.monthly.professionalTax || 0)}</td>
                                                <td className="p-3 pr-6 text-right text-red-500 dark:text-red-400">-{formatCurrency(result?.yearly.professionalTax || 0)}</td>
                                            </tr>
                                            <tr className="bg-red-50/50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800">
                                                <td className="p-3 pl-6 text-red-700 dark:text-red-400 font-bold">Total Ded.</td>
                                                <td className="p-3 text-right font-bold text-red-700 dark:text-red-400">-{formatCurrency(result?.monthly.totalDeductions || 0)}</td>
                                                <td className="p-3 pr-6 text-right font-bold text-red-700 dark:text-red-400">-{formatCurrency(result?.yearly.totalDeductions || 0)}</td>
                                            </tr>

                                            {/* Net Pay */}
                                            <tr className="bg-purple-50/50 dark:bg-purple-900/20">
                                                <td className="p-3 pl-6 text-purple-700 dark:text-purple-400 font-black text-lg">Net Salary</td>
                                                <td className="p-3 text-right font-black text-purple-700 dark:text-purple-400 text-lg">{formatCurrency(result?.monthly.netSalary || 0)}</td>
                                                <td className="p-3 pr-6 text-right font-black text-purple-700 dark:text-purple-400 text-lg">{formatCurrency(result?.yearly.netSalary || 0)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
