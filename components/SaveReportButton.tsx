"use client";

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { db } from '@/utils/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Save, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface SaveReportButtonProps {
    reportData: any;
    calculatorType: string;
    disabled?: boolean;
}

export default function SaveReportButton({ reportData, calculatorType, disabled = false }: SaveReportButtonProps) {
    const { user } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSave = async () => {
        if (!user) {
            // Redirect to login if not authenticated
            // We could pass the current URL to redirect back after login, but for now simple redirect
            router.push('/login');
            return;
        }

        if (!reportData) {
            setStatus('error');
            setMessage('No data to save. Please calculate first.');
            setTimeout(() => setStatus('idle'), 3000);
            return;
        }

        setLoading(true);
        setStatus('idle');
        setMessage('');

        try {
            const reportsRef = collection(db, `users/${user.uid}/reports`);
            await addDoc(reportsRef, {
                type: calculatorType,
                data: reportData,
                createdAt: serverTimestamp(),
                userId: user.uid, // Redundant if in subcollection but good for querying group collection if needed
            });

            setStatus('success');
            setMessage('Report saved successfully!');
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error: any) {
            console.error("Error saving report:", error);
            setStatus('error');
            // Show the actual error message if available, or a fallback
            setMessage(error.message || 'Failed to save report. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            <button
                onClick={handleSave}
                disabled={disabled || loading || status === 'success'}
                className={`
                    w-full py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg
                    ${status === 'success'
                        ? 'bg-green-600 text-white shadow-green-500/30'
                        : status === 'error'
                            ? 'bg-red-600 text-white shadow-red-500/30'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/30 hover:shadow-indigo-500/50'
                    }
                    ${(disabled || loading) ? 'opacity-70 cursor-not-allowed' : ''}
                `}
            >
                {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                ) : status === 'error' ? (
                    <AlertCircle className="w-5 h-5" />
                ) : (
                    <Save className="w-5 h-5" />
                )}

                {loading ? 'Saving...' : status === 'success' ? 'Saved!' : status === 'error' ? 'Retry Save' : 'Save Report'}
            </button>

            {message && (
                <p className={`text-center text-sm font-medium ${status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {message}
                </p>
            )}
        </div>
    );
}
