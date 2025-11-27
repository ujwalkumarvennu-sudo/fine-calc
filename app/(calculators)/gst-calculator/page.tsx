"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import InputGroup from '@/components/ui/InputGroup';
import SaveReportButton from '@/components/SaveReportButton';
import { calculateGST, formatCurrency } from '@/utils/formulas';
import { ArrowLeft, Calculator, ArrowRightLeft } from 'lucide-react';

export default function GSTCalculator() {
    const [amount, setAmount] = useState(10000);
    const [rate, setRate] = useState(18);
    const [type, setType] = useState<'inclusive' | 'exclusive'>('exclusive');
    const [result, setResult] = useState<any>(null);

    useEffect(() => {
        const data = calculateGST(amount, rate, type);
        setResult(data);
    }, [amount, rate, type]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 font-sans transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4">
                <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors group">
                    <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

                    <div className="xl:col-span-5 space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-extrabold mb-4 uppercase tracking-wide">
                                <Calculator className="w-3 h-3" /> Tax Tools
                            </div>
                            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">GST Calculator</h1>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                Calculate GST inclusive and exclusive amounts easily.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-colors">

                            {/* Type Toggle */}
                            <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex mb-8">
                                <button
                                    onClick={() => setType('exclusive')}
                                    className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${type === 'exclusive' ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
                                >
                                    Exclusive (Add GST)
                                </button>
                                <button
                                    onClick={() => setType('inclusive')}
                                    className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${type === 'inclusive' ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
                                >
                                    Inclusive (Remove GST)
                                </button>
                            </div>

                            <InputGroup
                                label={type === 'exclusive' ? "Net Amount" : "Total Amount"}
                                value={amount}
                                onChange={setAmount}
                                type="currency"
                                min={100} max={10000000} step={100}
                                variant="rose"
                            />

                            <div className="mb-8">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 tracking-wide mb-3">GST Rate</label>
                                <div className="flex gap-2 mb-4">
                                    {[5, 12, 18, 28].map((r) => (
                                        <button
                                            key={r}
                                            onClick={() => setRate(r)}
                                            className={`flex-1 py-2 rounded-xl text-sm font-bold border-2 transition-all ${rate === r ? 'border-purple-500 dark:border-purple-400 bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300' : 'border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:border-purple-200 dark:hover:border-purple-800'}`}
                                        >
                                            {r}%
                                        </button>
                                    ))}
                                </div>
                                <InputGroup
                                    label="Custom Rate (%)"
                                    value={rate}
                                    onChange={setRate}
                                    type="percentage"
                                    min={0.1} max={50} step={0.1}
                                    variant="rose"
                                />
                            </div>

                            <SaveReportButton
                                reportData={{ ...result, inputs: { amount, rate, type } }}
                                calculatorType="GST Calculator"
                                disabled={!result}
                            />

                        </div>
                    </div>

                    <div className="xl:col-span-7">
                        <div className="bg-gradient-to-br from-purple-600 to-fuchsia-700 rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl shadow-purple-500/30 relative overflow-hidden transition-all duration-500 hover:shadow-purple-500/40 hover:scale-[1.01] h-full flex flex-col justify-center">
                            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <p className="text-purple-100 font-semibold mb-2 tracking-wide text-xs sm:text-sm uppercase">
                                    {type === 'exclusive' ? 'Total Amount (Inc. GST)' : 'Net Amount (Excl. GST)'}
                                </p>
                                <p className="text-5xl sm:text-6xl font-black tracking-tighter mb-8 drop-shadow-sm leading-tight">
                                    {formatCurrency(type === 'exclusive' ? result?.totalAmount || 0 : result?.netAmount || 0)}
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-purple-100 font-medium">GST Amount ({rate}%)</span>
                                            <span className="text-xl font-bold">{formatCurrency(result?.gstAmount || 0)}</span>
                                        </div>
                                        <div className="w-full bg-black/20 rounded-full h-2">
                                            <div className="bg-white h-2 rounded-full" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex justify-between items-center">
                                        <span className="text-purple-100 font-medium">
                                            {type === 'exclusive' ? 'Original Amount' : 'Total Paid'}
                                        </span>
                                        <span className="text-lg font-bold opacity-80">
                                            {formatCurrency(amount)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">How GST is Calculated?</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                            <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-2">
                                <ArrowRightLeft className="w-4 h-4" /> Exclusive (Add GST)
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">When GST is not included in the price.</p>
                            <code className="block bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-xs text-slate-700 dark:text-slate-300 font-mono">
                                GST = Amount × (Rate/100)<br />
                                Total = Amount + GST
                            </code>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                            <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-2">
                                <ArrowRightLeft className="w-4 h-4" /> Inclusive (Remove GST)
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">When GST is already included in the price.</p>
                            <code className="block bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-xs text-slate-700 dark:text-slate-300 font-mono">
                                GST = Amount - [Amount / (1 + Rate/100)]<br />
                                Net = Amount - GST
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
