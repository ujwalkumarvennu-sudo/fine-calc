"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { db } from '@/utils/firebase';
import { collection, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore';
import Link from 'next/link';
import { ArrowLeft, FileText, Calendar, ArrowRight, Loader2, Trash2, LogOut } from 'lucide-react';

export default function Dashboard() {
    const { user, loading, logout } = useAuth();
    const router = useRouter();
    const [reports, setReports] = useState<any[]>([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    useEffect(() => {
        const fetchReports = async () => {
            if (!user) return;

            try {
                const reportsRef = collection(db, `users/${user.uid}/reports`);
                const q = query(reportsRef, orderBy('createdAt', 'desc'));
                const querySnapshot = await getDocs(q);

                const fetchedReports = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setReports(fetchedReports);
            } catch (error) {
                console.error("Error fetching reports:", error);
            } finally {
                setFetching(false);
            }
        };

        if (user) {
            fetchReports();
        }
    }, [user]);

    const handleDeleteReport = async (reportId: string) => {
        if (!confirm('Are you sure you want to delete this report?')) return;

        try {
            if (!user) return;
            await deleteDoc(doc(db, `users/${user.uid}/reports`, reportId));
            setReports(prev => prev.filter(report => report.id !== reportId));
        } catch (error) {
            console.error("Error deleting report:", error);
            alert("Failed to delete report. Please try again.");
        }
    };

    if (loading || (fetching && user)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-600 dark:text-indigo-400" />
            </div>
        );
    }

    if (!user) return null;

    const getReportDetails = (report: any) => {
        const { type, data } = report;
        if (!data) return { mainValue: 'N/A', mainLabel: 'Total', subItems: [] };

        switch (type) {
            case 'SIP Calculator':
            case 'Lumpsum Calculator':
            case 'PPF Calculator':
            case 'Fixed Deposit Calculator':
                return {
                    mainValue: data.breakdown?.total || 0,
                    mainLabel: 'Maturity Value',
                    subItems: [
                        { label: 'Investment', value: data.inputs?.investment || data.inputs?.annualInvestment || 0, isCurrency: true },
                        { label: 'Tenure', value: `${data.inputs?.years} Years`, isCurrency: false }
                    ]
                };
            case 'EMI Calculator':
            case 'Car Loan Calculator':
            case 'Personal Loan Calculator':
            case 'Home Loan EMI':
                return {
                    mainValue: data.monthlyEMI || 0,
                    mainLabel: 'Monthly EMI',
                    subItems: [
                        { label: 'Loan Amount', value: data.inputs?.loanAmount || 0, isCurrency: true },
                        { label: 'Tenure', value: `${data.inputs?.years} Years`, isCurrency: false }
                    ]
                };
            case 'HRA Calculator':
                return {
                    mainValue: data.exemptHRA || 0,
                    mainLabel: 'Exempt HRA',
                    subItems: [
                        { label: 'Basic Salary', value: data.inputs?.basicSalary || 0, isCurrency: true },
                        { label: 'Rent Paid', value: data.inputs?.rentPaid || 0, isCurrency: true }
                    ]
                };
            case 'Income Tax Calculator':
                const taxPayable = data.recommendation === 'Old' ? data.oldRegime?.totalTax : data.newRegime?.totalTax;
                return {
                    mainValue: taxPayable || 0,
                    mainLabel: 'Tax Payable',
                    subItems: [
                        { label: 'Gross Income', value: data.inputs?.grossIncome || 0, isCurrency: true },
                        { label: 'Regime', value: data.recommendation || 'N/A', isCurrency: false }
                    ]
                };
            case 'Loan Eligibility Calculator':
                return {
                    mainValue: data.maxLoanAmount || 0,
                    mainLabel: 'Max Eligible Loan',
                    subItems: [
                        { label: 'Net Income', value: data.inputs?.netIncome || 0, isCurrency: true },
                        { label: 'Tenure', value: `${data.inputs?.years} Years`, isCurrency: false }
                    ]
                };
            case 'GST Calculator':
                return {
                    mainValue: data.gstAmount || 0,
                    mainLabel: 'GST Amount',
                    subItems: [
                        { label: 'Original Amount', value: data.inputs?.amount || 0, isCurrency: true },
                        { label: 'Rate', value: `${data.inputs?.rate}%`, isCurrency: false }
                    ]
                };
            case 'Salary Calculator':
                return {
                    mainValue: data.monthly?.netSalary || 0,
                    mainLabel: 'Monthly In-Hand',
                    subItems: [
                        { label: 'Annual CTC', value: data.inputs?.ctc || 0, isCurrency: true },
                        { label: 'Monthly Gross', value: data.monthly?.grossSalary || 0, isCurrency: true }
                    ]
                };
            default:
                return { mainValue: 'N/A', mainLabel: 'Total', subItems: [] };
        }
    };

    const getOpenReportLink = (report: any) => {
        const { type, data } = report;
        if (!data?.inputs) return '#';

        const params = new URLSearchParams();
        Object.entries(data.inputs).forEach(([key, value]) => {
            params.append(key, String(value));
        });

        switch (type) {
            case 'SIP Calculator': return `/sip-calculator?${params.toString()}`;
            case 'Lumpsum Calculator': return `/lumpsum-calculator?${params.toString()}`;
            case 'Fixed Deposit Calculator': return `/fd-calculator?${params.toString()}`;
            case 'PPF Calculator': return `/ppf-calculator?${params.toString()}`;
            case 'EMI Calculator':
            case 'Home Loan EMI': return `/emi-calculator?${params.toString()}`;
            case 'Car Loan Calculator': return `/car-loan-calculator?${params.toString()}`;
            case 'Personal Loan Calculator': return `/personal-loan-calculator?${params.toString()}`;
            case 'HRA Calculator': return `/hra-calculator?${params.toString()}`;
            case 'Income Tax Calculator': return `/income-tax-calculator?${params.toString()}`;
            case 'Loan Eligibility Calculator': return `/loan-eligibility-calculator?${params.toString()}`;
            case 'GST Calculator': return `/gst-calculator?${params.toString()}`;
            case 'Salary Calculator': return `/salary-calculator?${params.toString()}`;
            default: return '#';
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 font-sans transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 md:gap-0">
                    <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                    <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm overflow-hidden">
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt={user.displayName || 'User'} className="w-full h-full object-cover" />
                                ) : (
                                    user.email?.charAt(0).toUpperCase()
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">{user.displayName || 'User'}</span>
                                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{user.email}</span>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                logout();
                                router.push('/login');
                            }}
                            className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all font-bold text-sm"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="hidden sm:inline">Sign Out</span>
                        </button>
                    </div>
                </div>

                <div className="mb-10">
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">My Saved Reports</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Access your previously calculated financial reports.</p>
                </div>

                {reports.length === 0 ? (
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText className="w-8 h-8 text-slate-300 dark:text-slate-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No reports saved yet</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">
                            Go to any calculator, generate a result, and click "Save Report" to see it here.
                        </p>
                        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all">
                            Explore Calculators
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reports.map((report) => {
                            const details = getReportDetails(report);
                            const link = getOpenReportLink(report);

                            return (
                                <div key={report.id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wide">
                                            {report.type}
                                        </div>
                                        <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {report.createdAt?.toDate().toLocaleDateString()}
                                        </span>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-black text-slate-900 dark:text-white">
                                                {typeof details.mainValue === 'number' ?
                                                    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(details.mainValue)
                                                    : details.mainValue}
                                            </span>
                                            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{details.mainLabel}</span>
                                        </div>
                                        <div className="mt-2 flex gap-4 text-sm text-slate-500 dark:text-slate-400">
                                            {details.subItems.map((item, idx) => (
                                                <div key={idx}>
                                                    <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">{item.label}</span>
                                                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                                                        {item.isCurrency && typeof item.value === 'number' ?
                                                            new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(item.value)
                                                            : item.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col lg:flex-row gap-3">
                                        {link !== '#' && (
                                            <Link
                                                href={link}
                                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 dark:bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-600 transition-all text-sm"
                                            >
                                                Open Report <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        )}
                                        <button
                                            onClick={() => handleDeleteReport(report.id)}
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all text-sm"
                                        >
                                            Delete Report <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
