"use client";

import Link from 'next/link';
import { useState } from 'react';
import {
  Calculator,
  PiggyBank,
  TrendingUp,
  ArrowRight,
  Building2,
  Percent,
  BadgeIndianRupee,
  Landmark,
  Wallet,
  Zap,
  Search,
  PieChart,
  Coins,
  Briefcase,
  ShieldCheck,
  User,
  LogOut,
  Car
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { ThemeToggle } from '@/components/ThemeToggle';



export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const quickLinks = [
    { name: 'SIP Calculator', href: '/sip-calculator', color: 'text-emerald-600 bg-emerald-50 border-emerald-200 hover:bg-emerald-100' },
    { name: 'Home Loan EMI', href: '/emi-calculator', color: 'text-rose-600 bg-rose-50 border-rose-200 hover:bg-rose-100' },
    { name: 'GST Calc', href: '/gst-calculator', color: 'text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-100' },
    { name: 'Income Tax', href: '/income-tax-calculator', color: 'text-blue-600 bg-blue-50 border-blue-200 hover:bg-blue-100' }
  ];

  const categories = [
    {
      title: "Grow Your Wealth",
      description: "Tools to help your money make money.",
      icon: TrendingUp,
      theme: "emerald",
      items: [
        {
          title: "SIP Calculator",
          href: "/sip-calculator",
          icon: TrendingUp,
          description: "Check how ₹5,000/mo turns into Crores over 20 years.",
          action: "Calculate Returns"
        },
        {
          title: "Lumpsum Calc",
          href: "/lumpsum-calculator",
          icon: PieChart,
          description: "One-time investment returns over any period.",
          action: "Compound Growth"
        },
        {
          title: "FD Calculator",
          href: "/fd-calculator",
          icon: Percent,
          description: "Fixed deposit interest rates and maturity value.",
          action: "Check Interest"
        },
        {
          title: "PPF Calculator",
          href: "/ppf-calculator",
          icon: Landmark,
          description: "Tax-free government savings (15-year lock-in).",
          action: "Calculate Maturity"
        }
      ]
    },
    {
      title: "Manage Debt",
      description: "Smart planning for loans and mortgages.",
      icon: Landmark,
      theme: "rose",
      items: [
        {
          title: "Home Loan EMI",
          href: "/emi-calculator",
          icon: Landmark,
          description: "Know exactly what you pay before you borrow.",
          action: "Check EMI"
        },
        {
          title: "Car Loan EMI",
          href: "/car-loan-calculator",
          icon: Car,
          description: "Drive your dream car. Plan your loan repayment.",
          action: "Plan Loan"
        },
        {
          title: "Personal Loan",
          href: "/personal-loan-calculator",
          icon: Coins,
          description: "Quick loan EMI planning.",
          action: "Check EMI"
        },
        {
          title: "Loan Eligibility",
          href: "/loan-eligibility-calculator",
          icon: Calculator,
          description: "How much can you borrow?",
          action: "Check Limit"
        }
      ]
    },
    {
      title: "Tax & Compliance",
      description: "Tools for filing and salary planning.",
      icon: Briefcase,
      theme: "purple",
      items: [
        {
          title: "Income Tax (Old vs New)",
          href: "/income-tax-calculator",
          icon: Briefcase,
          description: "Compare regimes to save the maximum tax.",
          action: "Compare Now"
        },
        {
          title: "HRA Calculator",
          href: "/hra-calculator",
          icon: Building2,
          description: "Calculate House Rent Allowance exemption.",
          action: "Save Tax"
        },
        {
          title: "GST Calc",
          href: "/gst-calculator",
          icon: Calculator,
          description: "Inclusive/Exclusive tax",
          action: "Calculate"
        },
        {
          title: "Salary Calc",
          href: "/salary-calculator",
          icon: Wallet,
          description: "In-hand salary breakup",
          action: "Calculate"
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/30 transition-colors duration-300">
      {/* Colorful Hero Section */}
      <div className="relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
        {/* Gradient Blobs */}
        <style jsx global>{`
@keyframes blob {
  0 %, 100 % { transform: translate(0, 0) scale(1); }
  33 % { transform: translate(30px, -50px) scale(1.1); }
  66 % { transform: translate(-20px, 20px) scale(0.9); }
}
`}</style>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-purple-300 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
          <div className="absolute top-[0%] right-[0%] w-[60%] h-[60%] bg-cyan-300 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-pink-300 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-indigo-100 dark:border-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-bold mb-8 shadow-sm backdrop-blur-sm">
            <Zap className="w-4 h-4 fill-yellow-400 text-yellow-500" /> India's Fastest Finance Tools
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
            Make Smarter <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Money Moves.
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Calculate your future. Whether it's building wealth with SIPs or planning a loan, get accurate results in seconds.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mb-12 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500 pointer-events-none"></div>
            <div className="relative z-10 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl shadow-slate-200/50 dark:shadow-none flex items-center p-2 border border-slate-100 dark:border-slate-800">
              <div className="pl-4 text-slate-400">
                <Search className="h-6 w-6" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    document.getElementById('calculators')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full px-5 py-4 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-lg font-medium"
                placeholder="Try 'Home Loan' or 'SIP'..."
              />
              <button
                onClick={() => document.getElementById('calculators')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-900 dark:bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95"
              >
                Go
              </button>
            </div>
          </div>

          {/* Colorful Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {quickLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${item.color} border dark:bg-opacity-10 dark:hover:bg-opacity-20`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <main id="calculators" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">No results found</h3>
            <p className="text-slate-500 dark:text-slate-400">Try searching for "SIP", "Loan", or "Tax"</p>
          </div>
        ) : (
          filteredCategories.map((category, idx) => (
            <div key={idx} className="mb-24">
              <div className="flex items-center gap-4 mb-10">
                <div className={`p-3 rounded-2xl ${category.theme === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' :
                  category.theme === 'rose' ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400' :
                    'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                  }`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">{category.title}</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((item, itemIdx) => (
                  <Link key={itemIdx} href={item.href} className={`group relative bg-white dark:bg-slate-900 rounded-3xl p-1 shadow-xl dark:shadow-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${category.theme === 'emerald' ? 'shadow-emerald-100 hover:shadow-emerald-200 dark:hover:shadow-emerald-900/20' :
                    category.theme === 'rose' ? 'shadow-rose-100 hover:shadow-rose-200 dark:hover:shadow-rose-900/20' :
                      'shadow-purple-100 hover:shadow-purple-200 dark:hover:shadow-purple-900/20'
                    }`}>
                    {/* Glassmorphism Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${category.theme === 'emerald' ? 'from-emerald-500/10 to-teal-500/10' :
                      category.theme === 'rose' ? 'from-rose-500/10 to-orange-500/10' :
                        'from-purple-500/10 to-indigo-500/10'
                      }`}></div>

                    {/* Border Gradient */}
                    <div className={`absolute inset-0 rounded-3xl border-2 border-transparent transition-colors duration-300 ${category.theme === 'emerald' ? 'group-hover:border-emerald-100 dark:group-hover:border-emerald-900/50' :
                      category.theme === 'rose' ? 'group-hover:border-rose-100 dark:group-hover:border-rose-900/50' :
                        'group-hover:border-purple-100 dark:group-hover:border-purple-900/50'
                      }`}></div>

                    <div className="relative h-full p-7 flex flex-col">
                      <div className="flex justify-between items-start mb-8">
                        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${category.theme === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-900/20 group-hover:bg-emerald-500' :
                          category.theme === 'rose' ? 'bg-rose-50 dark:bg-rose-900/20 group-hover:bg-rose-500' :
                            'bg-purple-50 dark:bg-purple-900/20 group-hover:bg-purple-500'
                          }`}>
                          <item.icon className={`h-7 w-7 transition-colors ${category.theme === 'emerald' ? 'text-emerald-600 dark:text-emerald-400 group-hover:text-white' :
                            category.theme === 'rose' ? 'text-rose-600 dark:text-rose-400 group-hover:text-white' :
                              'text-purple-600 dark:text-purple-400 group-hover:text-white'
                            }`} />
                        </div>
                        <div className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${category.theme === 'emerald' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 group-hover:bg-white group-hover:text-emerald-600' :
                          category.theme === 'rose' ? 'bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 group-hover:bg-white group-hover:text-rose-600' :
                            'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 group-hover:bg-white group-hover:text-purple-600'
                          }`}>
                          Free
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-medium text-sm flex-grow">{item.description}</p>

                      <div className={`flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 group-hover:border-transparent transition-colors`}>
                        <span className={`text-sm font-bold ${category.theme === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                          category.theme === 'rose' ? 'text-rose-600 dark:text-rose-400' :
                            'text-purple-600 dark:text-purple-400'
                          }`}>{item.action}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 ${category.theme === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-900/20 group-hover:bg-emerald-500' :
                          category.theme === 'rose' ? 'bg-rose-50 dark:bg-rose-900/20 group-hover:bg-rose-500' :
                            'bg-purple-50 dark:bg-purple-900/20 group-hover:bg-purple-500'
                          }`}>
                          <ArrowRight className={`w-4 h-4 transition-colors ${category.theme === 'emerald' ? 'text-emerald-600 dark:text-emerald-400 group-hover:text-white' :
                            category.theme === 'rose' ? 'text-rose-600 dark:text-rose-400 group-hover:text-white' :
                              'text-purple-600 dark:text-purple-400 group-hover:text-white'
                            }`} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </main>

      {/* Dark Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-black text-white tracking-tight">
              Fine<span className="text-blue-500">Calcs</span>
            </span>
            <p className="mt-6 text-slate-400 text-sm max-w-xs leading-relaxed font-medium">
              Built for the modern Indian investor. Simple, fast, and beautifully designed financial tools.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Calculators</h4>
            <ul className="space-y-4 font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">SIP Calculator</li>
              <li className="hover:text-white cursor-pointer transition-colors">Home Loan EMI</li>
              <li className="hover:text-white cursor-pointer transition-colors">Income Tax</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Legal</h4>
            <ul className="space-y-4 font-medium">
              <li><Link href="/privacy" className="hover:text-white cursor-pointer transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white cursor-pointer transition-colors">Terms</Link></li>
              <li><Link href="/contact" className="hover:text-white cursor-pointer transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}