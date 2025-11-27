"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Have questions about our calculators? Need help with a financial calculation?
                        We're here to help!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                                        <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                                        <p className="text-slate-600 dark:text-slate-400">support@finecalcs.com</p>
                                        <p className="text-slate-600 dark:text-slate-400">info@finecalcs.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                                        <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 dark:text-white">Phone</h3>
                                        <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                                        <p className="text-slate-600 dark:text-slate-400">Mon-Fri 9am-6pm EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                                        <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 dark:text-white">Office</h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            123 Financial District<br />
                                            New York, NY 10005<br />
                                            United States
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                            Send us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold rounded-lg shadow-lg shadow-blue-500/20 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                <Send className="h-5 w-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
