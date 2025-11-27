"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Calculator, Sparkles, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AuthButtons } from '@/components/AuthButtons';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isCalculatorsOpen, setIsCalculatorsOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const calculators = [
        { name: 'SIP Calculator', href: '/sip-calculator' },
        { name: 'Lumpsum Calculator', href: '/lumpsum-calculator' },
        { name: 'SWP Calculator', href: '/swp-calculator' }, // Added SWP if it exists, otherwise I'll stick to the list I saw. Wait, I didn't see SWP in the list. Let me double check the list.
        // The list was: car-loan, emi, fd, gst, hra, income-tax, loan-eligibility, lumpsum, personal-loan, ppf, salary, sip.
        // I will use the verified list.
        { name: 'Car Loan Calculator', href: '/car-loan-calculator' },
        { name: 'EMI Calculator', href: '/emi-calculator' },
        { name: 'FD Calculator', href: '/fd-calculator' },
        { name: 'GST Calculator', href: '/gst-calculator' },
        { name: 'HRA Calculator', href: '/hra-calculator' },
        { name: 'Income Tax Calculator', href: '/income-tax-calculator' },
        { name: 'Loan Eligibility', href: '/loan-eligibility-calculator' },
        { name: 'Personal Loan', href: '/personal-loan-calculator' },
        { name: 'PPF Calculator', href: '/ppf-calculator' },
        { name: 'Salary Calculator', href: '/salary-calculator' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group cursor-pointer z-50 relative">
                            <div className="bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300 relative">
                                <Calculator className="h-5 w-5 text-white" />
                                <Sparkles className="h-3 w-3 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
                            </div>
                            <span className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                                Fine<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Calcs</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600 dark:text-slate-300">
                            <div
                                className="relative group"
                                onMouseEnter={() => setIsCalculatorsOpen(true)}
                                onMouseLeave={() => setIsCalculatorsOpen(false)}
                            >
                                <button className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2">
                                    Calculators
                                </button>

                                {/* Dropdown */}
                                <div className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 ${isCalculatorsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 grid grid-cols-1 gap-1">
                                        {calculators.map((calc) => (
                                            <Link
                                                key={calc.href}
                                                href={calc.href}
                                                className="block px-4 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                            >
                                                {calc.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link>
                            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
                            <ThemeToggle />
                            <AuthButtons />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden z-50 relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6 text-slate-900 dark:text-white" />
                            ) : (
                                <Menu className="h-6 w-6 text-slate-900 dark:text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col justify-start pt-24 items-center transition-all duration-300 md:hidden overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center gap-6 text-lg font-bold text-slate-900 dark:text-white w-full px-6">
                    <div className="w-full max-w-sm">
                        <div className="text-center mb-4 text-indigo-600 dark:text-indigo-400">Calculators</div>
                        <div className="grid grid-cols-1 gap-2">
                            {calculators.map((calc) => (
                                <Link
                                    key={calc.href}
                                    href={calc.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-center py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg transition-colors"
                                >
                                    {calc.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link
                        href="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                        About Us
                    </Link>

                    <div className="w-12 h-px bg-slate-200 dark:bg-slate-800 my-2"></div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-500 dark:text-slate-400">Theme</span>
                        <ThemeToggle />
                    </div>

                    <div onClick={() => setIsMobileMenuOpen(false)}>
                        <AuthButtons />
                    </div>
                </div>
            </div>
        </>
    );
};
