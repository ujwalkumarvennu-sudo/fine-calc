"use client";

import Link from 'next/link';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export const AuthButtons = () => {
    const { user, logout } = useAuth();

    if (user) {
        return (
            <div className="flex items-center gap-4">
                <Link href="/dashboard" className="flex items-center gap-2 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-2 rounded-xl transition-all group">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 overflow-hidden">
                        {user.photoURL ? (
                            <img src={user.photoURL} alt={user.displayName || 'User'} className="w-full h-full object-cover" />
                        ) : (
                            <User className="w-4 h-4" />
                        )}
                    </div>
                    <span className="hidden lg:inline font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {user.displayName || user.email?.split('@')[0]}
                    </span>
                </Link>
                <button
                    onClick={logout}
                    className="text-slate-500 dark:text-slate-400 hover:text-red-600 transition-colors"
                    title="Logout"
                >
                    <LogOut className="w-5 h-5" />
                </button>
            </div>
        );
    }

    return (
        <Link href="/login" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors dark:text-white">Login</Link>
    );
};
