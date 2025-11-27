"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import InputGroup from '@/components/ui/InputGroup';
import { calculateIncomeTax, TaxResult, formatCurrency } from '@/utils/formulas';

import SaveReportButton from '@/components/SaveReportButton';
import { ArrowLeft, Briefcase, Scale, FileText, Download, CheckCircle, XCircle } from 'lucide-react';

export default function IncomeTaxCalculator() {
    const searchParams = useSearchParams();
    const [grossIncome, setGrossIncome] = useState(1000000);
    const [deductions, setDeductions] = useState(150000);
    const [result, setResult] = useState<{ oldRegime: TaxResult, newRegime: TaxResult, recommendation: string } | null>(null);

    useEffect(() => {
        const pGrossIncome = searchParams.get('grossIncome');
        const pDeductions = searchParams.get('deductions');
        if (pGrossIncome) setGrossIncome(Number(pGrossIncome));
        if (pDeductions) setDeductions(Number(pDeductions));
    }, [searchParams]);

    useEffect(() => {
        const data = calculateIncomeTax(grossIncome, deductions);
        setResult(data);
    }, [grossIncome, deductions]);

    const oldTax = result?.oldRegime as TaxResult;
    const newTax = result?.newRegime as TaxResult;
    const bestRegime = result?.recommendation;

    // --- NEW: PDF Download Logic (via HTML Print) for Tax ---
    const handleDownloadReport = () => {
        if (!result || !oldTax || !newTax) {
            alert("Please calculate a result before generating the report.");
            return;
        }

        const overallSavings = Math.abs(oldTax.totalTax - newTax.totalTax);

        const getTaxTable = (data: TaxResult) => {
            // --- FIX: Define isOld inside the function scope ---
            const isOld = data.regime === 'Old';
            // --- END FIX ---

            return `
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 13px;">
                <tr><th style="background-color: #f3f4f6; padding: 8px; text-align: left; width: 60%; border: 1px solid #e5e7eb;">Parameter</th><th style="background-color: #f3f4f6; padding: 8px; text-align: right; border: 1px solid #e5e7eb;">Value (₹)</th></tr>
                <tr><td style="padding: 8px; border: 1px solid #e5e7eb;">Gross Income</td><td style="padding: 8px; text-align: right; border: 1px solid #e5e7eb;">${grossIncome.toLocaleString('en-IN')}</td></tr>
                <tr style="font-style: italic;"><td style="padding: 8px; border: 1px solid #e5e7eb;">Minus Standard Deduction</td><td style="padding: 8px; text-align: right; border: 1px solid #e5e7eb;">${(50000).toLocaleString('en-IN')}</td></tr>
                ${isOld ?
                    `<tr style="font-weight: bold; color: #dc2626;"><td style="padding: 8px; border: 1px solid #e5e7eb;">Minus Chapter VI-A Deductions</td><td style="padding: 8px; text-align: right; border: 1px solid #e5e7eb;">${deductions.toLocaleString('en-IN')}</td></tr>`
                    : ''
                }
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
                <div class="date">Generated by FineCalcs on: ${new Date().toLocaleDateString()}</div>
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
            printWindow.onload = () => {
                printWindow.focus();
                printWindow.print();
            };
        }
    };
    // --- END PDF Download Logic ---


    const TaxCard = ({ regime, data, isBest }: { regime: 'Old' | 'New', data: TaxResult, isBest: boolean }) => {
        const isOld = regime === 'Old';
        const color = isOld ? 'bg-indigo-600' : 'bg-purple-600';
        const shadow = isOld ? 'shadow-indigo-500/30' : 'shadow-purple-500/30';

        return (
            <div className={`relative p-8 rounded-3xl text-white shadow-2xl ${shadow} overflow-hidden transition-all duration-300 ${isBest ? 'scale-[1.03] border-4 border-yellow-300' : 'opacity-80'}`}>
                {isBest && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 text-xs font-black px-4 py-1.5 rounded-bl-xl rounded-tr-3xl">
                        RECOMMENDED
                    </div>
                )}
                <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at 100% 0%, rgba(255,255,255,0.2) 0%, transparent 70%)` }}></div>

                <h2 className="text-xl font-extrabold mb-2 uppercase tracking-wider">{regime} Regime</h2>
                <p className="text-4xl font-black mb-6 drop-shadow-sm leading-tight">
                    {formatCurrency(data.totalTax)}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/20">
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-white">Taxable Income</span>
                        <span className="font-bold">{formatCurrency(data.taxableIncome)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-white">Tax Before Cess</span>
                        <span className="font-medium">{formatCurrency(data.taxBeforeCess)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-white">Cess (4%)</span>
                        <span className="font-medium">{formatCurrency(data.cess)}</span>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/20">
                    <h3 className="font-extrabold text-sm mb-2 uppercase tracking-wider">Key Difference</h3>
                    <ul className="space-y-2 text-xs">
                        <li className="flex items-start gap-2">
                            {isOld ? <CheckCircle className="w-4 h-4 text-green-300 mt-0.5 flex-shrink-0" /> : <XCircle className="w-4 h-4 text-rose-300 mt-0.5 flex-shrink-0" />}
                            {isOld ? 'Allows Deductions (80C, HRA, etc.)' : 'No Deductions Allowed'}
                        </li>
                        <li className="flex items-start gap-2">
                            {isOld ? <XCircle className="w-4 h-4 text-rose-300 mt-0.5 flex-shrink-0" /> : <CheckCircle className="w-4 h-4 text-green-300 mt-0.5 flex-shrink-0" />}
                            {isOld ? 'Lower base exemption (₹2.5L)' : 'Higher base exemption (₹3L)'}
                        </li>
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 font-sans transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 mb-8 transition-colors group">
                    <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* LEFT: Input Section */}
                    <div className="lg:col-span-4 space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-extrabold mb-4 uppercase tracking-wide">
                                <Briefcase className="w-3 h-3" /> Tax Planner
                            </div>
                            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Income Tax Comparison</h1>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                Compare the tax payable under the Old and New Regimes to determine which one saves you the most money this financial year.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-colors">
                            <InputGroup
                                label="Annual Gross Income"
                                value={grossIncome}
                                onChange={setGrossIncome}
                                type="currency"
                                min={300000} max={50000000} step={10000}
                                variant="blue"
                            />
                            <InputGroup
                                label="Eligible Deductions (80C, 80D, etc.)"
                                value={deductions}
                                onChange={setDeductions}
                                type="currency"
                                min={0} max={500000} step={5000}
                                variant="blue"
                            />
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 px-1">
                                * Deductions primarily apply to the Old Regime, but enter them to calculate the benefit.
                            </p>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <SaveReportButton
                                reportData={{ ...result, inputs: { grossIncome, deductions } }}
                                calculatorType="Income Tax Calculator"
                                disabled={!result}
                            />
                            <button
                                onClick={handleDownloadReport}
                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all text-sm"
                            >
                                <Download className="w-4 h-4" /> Download
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Comparison Results */}
                    <div className="lg:col-span-8 flex flex-col justify-start">
                        {result && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-indigo-500/40">
                                    <TaxCard regime="Old" data={oldTax} isBest={bestRegime === 'Old'} />
                                </div>
                                <div className="bg-gradient-to-br from-purple-500 to-violet-700 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-purple-500/40">
                                    <TaxCard regime="New" data={newTax} isBest={bestRegime === 'New'} />
                                </div>
                            </div>
                        )}

                        {/* Recommendation Summary */}
                        {result && (
                            <div className={`mt-8 p-6 rounded-2xl shadow-lg border-2 ${bestRegime === 'Old' ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800' : 'bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800'}`}>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                    <span className={`text-2xl ${bestRegime === 'Old' ? 'text-indigo-600 dark:text-indigo-400' : 'text-purple-600 dark:text-purple-400'}`}>
                                        {bestRegime === 'Old' ? '₹' : '₹'}
                                    </span>
                                    Recommendation
                                </h3>
                                <p className="text-slate-700 dark:text-slate-300 font-medium">
                                    Based on your inputs, the
                                    <span className={`font-extrabold ${bestRegime === 'Old' ? 'text-indigo-700 dark:text-indigo-300' : 'text-purple-700 dark:text-purple-300'}`}> {bestRegime} Regime</span>
                                    saves you approximately
                                    <span className="font-extrabold"> {formatCurrency(Math.abs(oldTax.totalTax - newTax.totalTax))} </span>
                                    compared to the other option.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}