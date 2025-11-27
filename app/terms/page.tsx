import React from 'react';

export default function TermsPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-8">
                        Terms of Service
                    </h1>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Agreement to Terms</h2>
                            <p className="text-slate-600 dark:text-slate-300">
                                By accessing our website at FineCalcs, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Use License</h2>
                            <p className="text-slate-600 dark:text-slate-300">
                                Permission is granted to temporarily download one copy of the materials (information or software) on FineCalcs' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                                <li>modify or copy the materials;</li>
                                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                <li>attempt to decompile or reverse engineer any software contained on FineCalcs' website;</li>
                                <li>remove any copyright or other proprietary notations from the materials; or</li>
                                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Disclaimer</h2>
                            <p className="text-slate-600 dark:text-slate-300">
                                The materials on FineCalcs' website are provided on an 'as is' basis. FineCalcs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                            <p className="mt-4 text-slate-600 dark:text-slate-300">
                                Further, FineCalcs does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Limitations</h2>
                            <p className="text-slate-600 dark:text-slate-300">
                                In no event shall FineCalcs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FineCalcs' website, even if FineCalcs or a FineCalcs authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Governing Law</h2>
                            <p className="text-slate-600 dark:text-slate-300">
                                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
