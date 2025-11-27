import React from 'react';
import { Calculator, Shield, Users, Globe } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">FineCalcs</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Empowering your financial decisions with precision, clarity, and ease.
                        We build tools that make complex financial calculations simple for everyone.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                            <Calculator className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Precision First</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            Our calculators are built with banking-grade accuracy to ensure you can trust every number we generate.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                            <Shield className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Privacy Focused</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            Your financial data stays on your device. We don't store or track your personal financial inputs.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                            <Globe className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Accessible to All</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            Financial literacy should be free. Our tools are open to everyone, everywhere, at no cost.
                        </p>
                    </div>
                </div>

                {/* Story Section */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-slate-600 dark:text-slate-300">
                                <p>
                                    FineCalcs started with a simple observation: most financial calculators on the web are either too complex, outdated, or riddled with ads. We wanted to change that.
                                </p>
                                <p>
                                    Our team of developers and financial enthusiasts came together to build a suite of tools that combines modern design with powerful functionality. We believe that understanding your finances shouldn't require a degree in economics.
                                </p>
                                <p>
                                    Today, we offer a comprehensive range of calculators covering everything from loans and investments to taxes and retirement planning. We're constantly adding new tools and improving existing ones based on user feedback.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-8 md:p-12 flex items-center justify-center">
                            <div className="text-center text-white">
                                <Users className="h-24 w-24 mx-auto mb-6 opacity-80" />
                                <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
                                <p className="opacity-90">
                                    Helping thousands of users make smarter financial decisions every day.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
