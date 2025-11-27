module.exports = [
"[project]/components/ui/InputGroup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InputGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function InputGroup({ label, value, onChange, type = 'currency', min, max, step, variant = 'blue' }) {
    const limits = {
        currency: {
            min: 500,
            max: 10000000,
            step: 500
        },
        percentage: {
            min: 1,
            max: 30,
            step: 0.1
        },
        year: {
            min: 1,
            max: 40,
            step: 1
        }
    };
    const actualMin = min ?? limits[type].min;
    const actualMax = max ?? limits[type].max;
    const actualStep = step ?? limits[type].step;
    // Dynamic styling based on variant
    const themeClasses = {
        blue: {
            accent: 'accent-blue-600 dark:accent-blue-500',
            focus: 'focus:border-blue-500 focus:ring-blue-200 dark:focus:ring-blue-900/30',
            text: 'text-blue-600 dark:text-blue-400',
            badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
        },
        green: {
            accent: 'accent-emerald-600 dark:accent-emerald-500',
            focus: 'focus:border-emerald-500 focus:ring-emerald-200 dark:focus:ring-emerald-900/30',
            text: 'text-emerald-600 dark:text-emerald-400',
            badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
        },
        rose: {
            accent: 'accent-rose-600 dark:accent-rose-500',
            focus: 'focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-900/30',
            text: 'text-rose-600 dark:text-rose-400',
            badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300'
        },
        purple: {
            accent: 'accent-purple-600 dark:accent-purple-500',
            focus: 'focus:border-purple-500 focus:ring-purple-200 dark:focus:ring-purple-900/30',
            text: 'text-purple-600 dark:text-purple-400',
            badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
        }
    };
    const colors = themeClasses[variant];
    const handleSliderChange = (e)=>{
        onChange(Number(e.target.value));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-end mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 tracking-wide",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity ${colors.badge}`,
                        children: [
                            "Max: ",
                            type === 'currency' ? '₹' : '',
                            actualMax.toLocaleString(),
                            type === 'percentage' ? '%' : '',
                            type === 'year' ? ' Yr' : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/InputGroup.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-white dark:bg-slate-800 mb-4 border border-slate-100 dark:border-slate-700 overflow-hidden focus-within:shadow-xl focus-within:border-${variant}-500`,
                children: [
                    type === 'currency' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-slate-400 dark:text-slate-500 font-semibold text-xl",
                            children: "₹"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/InputGroup.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        value: value,
                        onChange: (e)=>onChange(Number(e.target.value)),
                        min: actualMin,
                        max: actualMax,
                        className: `block w-full border-none bg-transparent py-5 text-slate-900 dark:text-white font-extrabold text-2xl focus:ring-0 transition-all outline-none ${type === 'currency' ? 'pl-12' : 'pl-5'}`
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    type === 'percentage' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `font-bold px-2 py-1 rounded text-sm ${colors.badge}`,
                            children: "%"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/InputGroup.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    type === 'year' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `font-bold px-2 py-1 rounded text-sm ${colors.badge}`,
                            children: "Yr"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/InputGroup.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 h-1 bg-slate-100 dark:bg-slate-700 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full transition-all duration-150 ease-out ${variant === 'blue' ? 'bg-blue-500' : variant === 'green' ? 'bg-emerald-500' : variant === 'purple' ? 'bg-purple-500' : 'bg-rose-500'}`,
                            style: {
                                width: `${(value - actualMin) / (actualMax - actualMin) * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ui/InputGroup.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InputGroup.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/InputGroup.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-2 w-full px-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "range",
                    min: actualMin,
                    max: actualMax,
                    step: actualStep,
                    value: value,
                    onChange: handleSliderChange,
                    className: `w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors focus:outline-none ${colors.accent}`
                }, void 0, false, {
                    fileName: "[project]/components/ui/InputGroup.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/InputGroup.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/InputGroup.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/SaveReportButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SaveReportButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
"use client";
;
;
;
;
;
;
;
function SaveReportButton({ reportData, calculatorType, disabled = false }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSave = async ()=>{
        if (!user) {
            // Redirect to login if not authenticated
            // We could pass the current URL to redirect back after login, but for now simple redirect
            router.push('/login');
            return;
        }
        if (!reportData) {
            setStatus('error');
            setMessage('No data to save. Please calculate first.');
            setTimeout(()=>setStatus('idle'), 3000);
            return;
        }
        setLoading(true);
        setStatus('idle');
        setMessage('');
        try {
            const reportsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], `users/${user.uid}/reports`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])(reportsRef, {
                type: calculatorType,
                data: reportData,
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                userId: user.uid
            });
            setStatus('success');
            setMessage('Report saved successfully!');
            setTimeout(()=>setStatus('idle'), 3000);
        } catch (error) {
            console.error("Error saving report:", error);
            setStatus('error');
            setMessage('Failed to save report. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSave,
                disabled: disabled || loading || status === 'success',
                className: `
                    w-full py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg
                    ${status === 'success' ? 'bg-green-600 text-white shadow-green-500/30' : status === 'error' ? 'bg-red-600 text-white shadow-red-500/30' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/30 hover:shadow-indigo-500/50'}
                    ${disabled || loading ? 'opacity-70 cursor-not-allowed' : ''}
                `,
                children: [
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-5 h-5 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/SaveReportButton.tsx",
                        lineNumber: 80,
                        columnNumber: 21
                    }, this) : status === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/components/SaveReportButton.tsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this) : status === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/components/SaveReportButton.tsx",
                        lineNumber: 84,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/components/SaveReportButton.tsx",
                        lineNumber: 86,
                        columnNumber: 21
                    }, this),
                    loading ? 'Saving...' : status === 'success' ? 'Saved!' : status === 'error' ? 'Retry Save' : 'Save Report'
                ]
            }, void 0, true, {
                fileName: "[project]/components/SaveReportButton.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-center text-sm font-medium ${status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`,
                children: message
            }, void 0, false, {
                fileName: "[project]/components/SaveReportButton.tsx",
                lineNumber: 93,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SaveReportButton.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
}),
"[project]/utils/formulas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/formulas.ts
// 1. Helper: Format Currency (₹ 1,00,000 instead of 100,000)
__turbopack_context__.s([
    "calculateEMI",
    ()=>calculateEMI,
    "calculateFD",
    ()=>calculateFD,
    "calculateGST",
    ()=>calculateGST,
    "calculateIncomeTax",
    ()=>calculateIncomeTax,
    "calculateLoanEligibility",
    ()=>calculateLoanEligibility,
    "calculateLumpsum",
    ()=>calculateLumpsum,
    "calculatePPF",
    ()=>calculatePPF,
    "calculateSIP",
    ()=>calculateSIP,
    "calculateSalaryBreakup",
    ()=>calculateSalaryBreakup,
    "formatCurrency",
    ()=>formatCurrency
]);
const formatCurrency = (amount)=>{
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
};
// --- NEW HELPER: Generates Lumpsum Schedule ---
const getLumpsumSchedule = (principal, rate, years)=>{
    const rateDecimal = rate / 100;
    const schedule = [];
    let currentValue = principal;
    for(let year = 1; year <= years; year++){
        // Compound yearly: A = P * (1 + r)^t
        // Note: For the schedule, we calculate the current value based on the original principal and the current year.
        currentValue = principal * Math.pow(1 + rateDecimal, year);
        schedule.push({
            year,
            value: Math.round(currentValue),
            gain: Math.round(currentValue - principal)
        });
    }
    return schedule;
};
// --- NEW HELPER: Generates FD Schedule ---
const getFdSchedule = (principal, rate, years)=>{
    const rateDecimal = rate / 100;
    const compoundingFrequency = 4; // Quarterly compounding (standard for FD)
    const schedule = [];
    let cumulativeInterest = 0;
    for(let year = 1; year <= years; year++){
        // A = P * (1 + r/n)^(n*t)
        const totalValue = principal * Math.pow(1 + rateDecimal / compoundingFrequency, compoundingFrequency * year);
        // Calculate annual interest by subtracting previous cumulative interest from the total interest earned so far
        const annualInterest = totalValue - principal - cumulativeInterest;
        cumulativeInterest += annualInterest;
        schedule.push({
            year,
            value: Math.round(totalValue),
            interest: Math.round(cumulativeInterest)
        });
    }
    return schedule;
};
// 2. SIP Calculator Logic (Updated to include schedule)
const getSipSchedule = (monthlyInv, rate, years)=>{
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    const schedule = [];
    let currentInvested = 0;
    let currentValue = 0;
    for(let month = 1; month <= months; month++){
        // Calculate the growth for the current month
        currentValue = currentValue * (1 + monthlyRate);
        // Add the new monthly investment
        currentValue += monthlyInv;
        currentInvested += monthlyInv;
        // At the end of every year, save the data point
        if (month % 12 === 0) {
            schedule.push({
                year: month / 12,
                invested: Math.round(currentInvested),
                value: Math.round(currentValue),
                gain: Math.round(currentValue - currentInvested)
            });
        }
    }
    return schedule;
};
const calculateSIP = (monthlyInv, rate, years)=>{
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    // Formula: P × ({[1 + i]^n - 1} / i) × (1 + i)
    const investedAmount = monthlyInv * months;
    const totalValue = monthlyInv * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const wealthGained = totalValue - investedAmount;
    // Generate yearly schedule
    const schedule = getSipSchedule(monthlyInv, rate, years);
    return {
        investedAmount,
        wealthGained,
        totalValue,
        breakdown: {
            invested: Math.round(investedAmount),
            gained: Math.round(wealthGained),
            total: Math.round(totalValue)
        },
        schedule
    };
};
const calculateLumpsum = (principal, rate, years)=>{
    const rateDecimal = rate / 100;
    // Formula: A = P(1 + r)^t
    const totalValue = principal * Math.pow(1 + rateDecimal, years);
    const wealthGained = totalValue - principal;
    // Generate yearly schedule
    const schedule = getLumpsumSchedule(principal, rate, years);
    return {
        investedAmount: principal,
        wealthGained: Math.round(wealthGained),
        totalValue: Math.round(totalValue),
        breakdown: {
            invested: principal,
            gained: Math.round(wealthGained),
            total: Math.round(totalValue)
        },
        schedule
    };
};
const calculateFD = (principal, rate, years)=>{
    const rateDecimal = rate / 100;
    const compoundingFrequency = 4; // Quarterly compounding
    // Final Value: A = P * (1 + r/n)^(n*t)
    const totalValue = principal * Math.pow(1 + rateDecimal / compoundingFrequency, compoundingFrequency * years);
    const totalInterest = totalValue - principal;
    // Generate yearly schedule
    const schedule = getFdSchedule(principal, rate, years);
    return {
        investedAmount: principal,
        totalInterest: Math.round(totalInterest),
        totalValue: Math.round(totalValue),
        breakdown: {
            invested: principal,
            interest: Math.round(totalInterest),
            total: Math.round(totalValue)
        },
        schedule
    };
};
const calculatePPF = (annualInv, rate, years)=>{
    const maxInvestment = 150000;
    const rateDecimal = rate / 100;
    let totalInvested = 0;
    let balance = 0;
    const schedule = [];
    // PPF always has a minimum 15-year lock-in/maturity period
    const actualYears = Math.max(15, years);
    for(let year = 1; year <= actualYears; year++){
        // Investment limit check
        const contribution = Math.min(annualInv, maxInvestment);
        totalInvested += contribution;
        // Interest calculation is on the balance *before* the contribution (simplified annual logic)
        const interest = balance * rateDecimal;
        // New balance is (old balance + contribution + interest)
        balance = balance + contribution + interest;
        schedule.push({
            year,
            invested: Math.round(totalInvested),
            interest: Math.round(interest),
            value: Math.round(balance)
        });
        // Stop contributing after the input years are over, but let it compound until year 15 (lock-in)
        if (year >= years && contribution > 0) {
            annualInv = 0;
        }
        if (year >= 15 && year < actualYears) {
            // Once mandatory lock-in is reached, if actualYears is longer, the investment amount is assumed to be zero
            annualInv = 0;
        }
    }
    const finalResult = schedule[schedule.length - 1];
    return {
        investedAmount: finalResult.invested,
        totalInterest: finalResult.value - finalResult.invested,
        totalValue: finalResult.value,
        breakdown: {
            invested: finalResult.invested,
            interest: finalResult.value - finalResult.invested,
            total: finalResult.value
        },
        schedule
    };
};
const calculateEMI = (principal, rate, years)=>{
    const r = rate / 12 / 100;
    const n = years * 12;
    // Formula: E = P x r x (1+r)^n / ((1+r)^n - 1)
    const emi = principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - principal;
    // Generate Amortization Schedule (new logic)
    let balance = principal;
    const schedule = [];
    const monthlyRateDecimal = r;
    // We only show the first 10 years of schedule for performance/readability
    const maxMonthsToShow = Math.min(n, 120);
    for(let month = 1; month <= n; month++){
        const interestPayment = balance * monthlyRateDecimal;
        const principalPayment = emi - interestPayment;
        balance -= principalPayment;
        if (balance < 0) {
            // Last payment correction
            balance = 0;
        }
        if (month <= maxMonthsToShow || month === n) {
            schedule.push({
                month,
                principal: Math.round(principalPayment),
                interest: Math.round(interestPayment),
                balance: Math.round(balance)
            });
        }
        if (month > maxMonthsToShow && month < n) {
            // Optimization: skip intermediate months but include the final month
            month = n - 1;
        }
    }
    // Final month correction if needed
    if (schedule.length > 0 && schedule[schedule.length - 1].month !== n) {
        const lastMonthPayment = schedule[schedule.length - 1].principal + schedule[schedule.length - 1].interest;
        schedule.push({
            month: n,
            principal: Math.round(lastMonthPayment),
            interest: Math.round(lastMonthPayment - principal),
            balance: 0
        });
    }
    return {
        monthlyEMI: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalPayment: Math.round(totalPayment),
        schedule
    };
};
/**
 * Calculates tax liability based on the Old Regime (pre-deductions)
 * @param grossIncome Gross annual income
 * @param deductions Amount under 80C, 80D, HRA, etc.
 */ const calculateOldRegimeTax = (grossIncome, deductions)=>{
    // Standard Deduction: Rs 50,000 is usually auto-applied for salaried
    const standardDeduction = 50000;
    const netTaxableIncome = Math.max(0, grossIncome - deductions - standardDeduction);
    let tax = 0;
    // Slab Rates (Old Regime - FY 24-25)
    if (netTaxableIncome <= 250000) {
        tax = 0;
    } else if (netTaxableIncome <= 500000) {
        // 5% on amount over 2.5L
        tax = (netTaxableIncome - 250000) * 0.05;
        // Rebate u/s 87A: If income is <= 5L, tax is zero
        if (netTaxableIncome <= 500000) {
            tax = 0;
        }
    } else if (netTaxableIncome <= 1000000) {
        // 5% on 2.5L to 5L (12,500) + 20% on remaining
        tax = 12500 + (netTaxableIncome - 500000) * 0.20;
    } else {
        // 12,500 (5% slab) + 1,00,000 (20% slab) + 30% on remaining
        tax = 112500 + (netTaxableIncome - 1000000) * 0.30;
    }
    const cess = tax * 0.04; // 4% Health and Education Cess
    const totalTax = tax + cess;
    return {
        taxableIncome: netTaxableIncome,
        taxBeforeCess: tax,
        cess: Math.round(cess),
        totalTax: Math.round(totalTax),
        regime: 'Old'
    };
};
/**
 * Calculates tax liability based on the New Regime (default/simplified)
 * @param grossIncome Gross annual income
 */ const calculateNewRegimeTax = (grossIncome)=>{
    // New Regime has a higher base exemption and simplified slabs.
    // Standard Deduction of Rs 50,000 is now available in the new regime as well (FY 24-25)
    const standardDeduction = 50000;
    const netTaxableIncome = Math.max(0, grossIncome - standardDeduction);
    let tax = 0;
    // Slab Rates (New Regime - FY 24-25)
    if (netTaxableIncome <= 300000) {
        tax = 0;
    } else if (netTaxableIncome <= 600000) {
        // 5% on amount over 3L
        tax = (netTaxableIncome - 300000) * 0.05;
        // Rebate u/s 87A: If taxable income is <= 7L, tax is zero
        if (netTaxableIncome <= 700000) {
            tax = 0;
        }
    } else if (netTaxableIncome <= 900000) {
        // 5% on 3L (15,000) + 10% on remaining
        tax = 15000 + (netTaxableIncome - 600000) * 0.10;
    } else if (netTaxableIncome <= 1200000) {
        // 15,000 (5% slab) + 30,000 (10% slab) + 15% on remaining
        tax = 45000 + (netTaxableIncome - 900000) * 0.15;
    } else if (netTaxableIncome <= 1500000) {
        // 45,000 + 45,000 (15% slab) + 20% on remaining
        tax = 90000 + (netTaxableIncome - 1200000) * 0.20;
    } else {
        // 90,000 + 60,000 (20% slab) + 30% on remaining
        tax = 150000 + (netTaxableIncome - 1500000) * 0.30;
    }
    const cess = tax * 0.04; // 4% Health and Education Cess
    const totalTax = tax + cess;
    return {
        taxableIncome: netTaxableIncome,
        taxBeforeCess: tax,
        cess: Math.round(cess),
        totalTax: Math.round(totalTax),
        regime: 'New'
    };
};
const calculateIncomeTax = (grossIncome, deductions)=>{
    const oldRegime = calculateOldRegimeTax(grossIncome, deductions);
    const newRegime = calculateNewRegimeTax(grossIncome);
    return {
        oldRegime,
        newRegime,
        recommendation: oldRegime.totalTax < newRegime.totalTax ? 'Old' : 'New'
    };
};
const calculateLoanEligibility = (netIncome, existingEmi, rate, years)=>{
    // FOIR (Fixed Obligation to Income Ratio) Assumption: 50%
    const FOIR = 0.50;
    // Calculate Maximum Allowable EMI
    const maxAllowableEmi = netIncome * FOIR;
    // Calculate Available EMI Capacity
    const availableEmi = Math.max(0, maxAllowableEmi - existingEmi);
    if (availableEmi <= 0) {
        return {
            maxLoanAmount: 0,
            maxEmi: 0,
            foir: FOIR,
            availableEmi: 0
        };
    }
    // Reverse EMI Formula to find Principal
    // P = E * ((1+r)^n - 1) / (r * (1+r)^n)
    const r = rate / 12 / 100;
    const n = years * 12;
    const maxLoanAmount = availableEmi * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
    return {
        maxLoanAmount: Math.round(maxLoanAmount),
        maxEmi: Math.round(availableEmi),
        foir: FOIR,
        availableEmi: Math.round(availableEmi)
    };
};
const calculateGST = (amount, rate, type)=>{
    const rateDecimal = rate / 100;
    let netAmount = 0;
    let gstAmount = 0;
    let totalAmount = 0;
    if (type === 'exclusive') {
        // Exclusive: GST is added ON TOP of the amount
        // GST = Amount * Rate
        // Total = Amount + GST
        netAmount = amount;
        gstAmount = amount * rateDecimal;
        totalAmount = amount + gstAmount;
    } else {
        // Inclusive: Amount ALREADY includes GST
        // Amount = Net * (1 + Rate)
        // Net = Amount / (1 + Rate)
        // GST = Amount - Net
        netAmount = amount / (1 + rateDecimal);
        gstAmount = amount - netAmount;
        totalAmount = amount;
    }
    return {
        netAmount: Math.round(netAmount),
        gstAmount: Math.round(gstAmount),
        totalAmount: Math.round(totalAmount),
        type
    };
};
const calculateSalaryBreakup = (ctc)=>{
    // Assumptions
    // Basic = 50% of CTC
    // HRA = 50% of Basic
    // PF (Employer & Employee) = 12% of Basic
    // Professional Tax = 200 per month (flat)
    const basic = ctc * 0.50;
    const hra = basic * 0.50;
    const pfYearly = basic * 0.12;
    const professionalTaxYearly = 2400; // 200 * 12
    // CTC = Gross + Employer PF
    // Gross = Basic + HRA + Special Allowance
    // Special Allowance = CTC - Basic - HRA - Employer PF
    const employerPf = pfYearly;
    const specialAllowance = Math.max(0, ctc - basic - hra - employerPf);
    const grossSalary = basic + hra + specialAllowance;
    // Deductions (Employee side)
    const employeePf = pfYearly;
    const totalDeductions = employeePf + professionalTaxYearly;
    const netSalary = grossSalary - totalDeductions;
    return {
        yearly: {
            ctc: Math.round(ctc),
            basic: Math.round(basic),
            hra: Math.round(hra),
            specialAllowance: Math.round(specialAllowance),
            employerPf: Math.round(employerPf),
            grossSalary: Math.round(grossSalary),
            employeePf: Math.round(employeePf),
            professionalTax: Math.round(professionalTaxYearly),
            totalDeductions: Math.round(totalDeductions),
            netSalary: Math.round(netSalary)
        },
        monthly: {
            ctc: Math.round(ctc / 12),
            basic: Math.round(basic / 12),
            hra: Math.round(hra / 12),
            specialAllowance: Math.round(specialAllowance / 12),
            employerPf: Math.round(employerPf / 12),
            grossSalary: Math.round(grossSalary / 12),
            employeePf: Math.round(employeePf / 12),
            professionalTax: 200,
            totalDeductions: Math.round(totalDeductions / 12),
            netSalary: Math.round(netSalary / 12)
        }
    };
};
}),
"[project]/app/(calculators)/personal-loan-calculator/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PersonalLoanCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$InputGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/InputGroup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveReportButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SaveReportButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/formulas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/percent.js [app-ssr] (ecmascript) <export default as Percent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-ssr] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coins.js [app-ssr] (ecmascript) <export default as Coins>");
"use client";
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
function PersonalLoanCalculator() {
    const [loanAmount, setLoanAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(500000);
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10.5);
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateEMI"])(loanAmount, rate, years);
        setResult(data);
    }, [
        loanAmount,
        rate,
        years
    ]);
    const chartData = {
        labels: [
            'Principal Amount',
            'Interest Payable'
        ],
        datasets: [
            {
                data: [
                    loanAmount,
                    result?.totalInterest
                ],
                backgroundColor: [
                    '#ffffff40',
                    '#ffffff'
                ],
                borderWidth: 0
            }
        ]
    };
    const handleDownloadReport = ()=>{
        if (!result || !result.schedule || result.schedule.length === 0) {
            alert("Please calculate a result before downloading the amortization report.");
            return;
        }
        const { monthlyEMI, totalInterest, totalPayment, schedule } = result;
        let tableRows = '';
        schedule.forEach((item)=>{
            tableRows += `
            <tr style="border-bottom: 1px solid #eee; ${item.month % 12 === 0 ? 'background-color: #f3f4f6;' : ''}">
                <td style="padding: 12px; text-align: center;">${item.month}</td>
                <td style="padding: 12px; text-align: right;">₹ ${monthlyEMI.toLocaleString('en-IN')}</td>
                <td style="padding: 12px; text-align: right; color: #dc2626;">₹ ${item.interest.toLocaleString('en-IN')}</td>
                <td style="padding: 12px; text-align: right; color: #1f2937;">₹ ${item.principal.toLocaleString('en-IN')}</td>
                <td style="padding: 12px; text-align: right; font-weight: bold;">₹ ${item.balance.toLocaleString('en-IN')}</td>
            </tr>
        `;
        });
        const reportHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Personal Loan Amortization Report</title>
            <style>
                body { font-family: sans-serif; margin: 0; padding: 40px; color: #333; }
                .header { background-color: #fef2f2; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 5px solid #ef4444; }
                .summary { display: flex; justify-content: space-between; gap: 20px; margin-bottom: 40px; }
                .summary-card { padding: 20px; border-radius: 8px; flex: 1; border: 1px solid #ddd; }
                .title { font-size: 24px; font-weight: bold; color: #dc2626; margin-bottom: 5px; }
                .date { font-size: 12px; color: #666; }
                h2 { font-size: 18px; color: #1f2937; border-bottom: 2px solid #ef4444; padding-bottom: 5px; margin-bottom: 20px; margin-top: 30px; }
                table { width: 100%; border-collapse: collapse; font-size: 14px; }
                th { background-color: #f3f4f6; padding: 10px; text-align: right; color: #4b5563; font-weight: bold; border-bottom: 2px solid #333; }
                th:first-child { text-align: center; }
                .footer { margin-top: 50px; border-top: 1px solid #ccc; padding-top: 15px; font-size: 12px; color: #666; text-align: center; }
                
                @media print {
                    .no-print { display: none; }
                    body { box-shadow: none; margin: 0; padding: 0; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="title">Personal Loan Amortization Report</div>
                <div class="date">Generated by FinCalHub on: ${new Date().toLocaleDateString()}</div>
                <div style="font-size: 14px; margin-top: 10px;">Loan Amount: ₹ ${loanAmount.toLocaleString('en-IN')} | Rate: ${rate}% | Tenure: ${years} Years</div>
            </div>

            <h2>Loan Summary</h2>
            <div class="summary">
                <div class="summary-card" style="border-color: #d1d5db;">
                    <p style="font-size: 14px; color: #666; margin-bottom: 5px;">Monthly EMI</p>
                    <p style="font-size: 28px; font-weight: bold; color: #1f2937;">₹ ${monthlyEMI.toLocaleString('en-IN')}</p>
                </div>
                <div class="summary-card" style="border-color: #fca5a5; background-color: #fef2f2;">
                    <p style="font-size: 14px; color: #dc2626; margin-bottom: 5px;">Total Interest Paid</p>
                    <p style="font-size: 28px; font-weight: bold; color: #dc2626;">₹ ${totalInterest.toLocaleString('en-IN')}</p>
                </div>
                <div class="summary-card" style="border-color: #fb923c; background-color: #fff7ed;">
                    <p style="font-size: 14px; color: #c2410c; margin-bottom: 5px;">Total Payment (Principal + Interest)</p>
                    <p style="font-size: 30px; font-weight: bolder; color: #c2410c;">₹ ${totalPayment.toLocaleString('en-IN')}</p>
                </div>
            </div>

            <h2>Monthly Amortization Schedule</h2>
            <table>
                <thead>
                    <tr>
                        <th style="width: 10%;">Month</th>
                        <th style="width: 20%;">EMI (₹)</th>
                        <th style="width: 20%;">Interest (₹)</th>
                        <th style="width: 20%;">Principal (₹)</th>
                        <th style="width: 30%;">Outstanding Balance (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>

            <div class="footer">
                This report is for informational and educational purposes only. Interest calculations are based on monthly reducing balance.
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
            printWindow.onload = ()=>{
                printWindow.focus();
                printWindow.print();
            };
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 dark:bg-slate-950 py-12 font-sans transition-colors duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center text-sm font-bold text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 mb-8 transition-colors group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform"
                        }, void 0, false, {
                            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this),
                        " Back to Home"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                    lineNumber: 143,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 xl:grid-cols-12 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "xl:col-span-5 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 text-xs font-extrabold mb-4 uppercase tracking-wide",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 33
                                                }, this),
                                                " Personal Finance"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight",
                                            children: "Personal Loan EMI"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 dark:text-slate-400 font-medium leading-relaxed",
                                            children: "Plan your personal loan repayment. Calculate EMI and total interest payable."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$InputGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Loan Amount",
                                            value: loanAmount,
                                            onChange: setLoanAmount,
                                            type: "currency",
                                            min: 10000,
                                            max: 5000000,
                                            step: 5000,
                                            variant: "rose"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$InputGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Interest Rate (%)",
                                            value: rate,
                                            onChange: setRate,
                                            type: "percentage",
                                            min: 1,
                                            max: 30,
                                            step: 0.1,
                                            variant: "rose"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$InputGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Loan Tenure",
                                            value: years,
                                            onChange: setYears,
                                            type: "year",
                                            min: 1,
                                            max: 7,
                                            variant: "rose"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDownloadReport,
                                    className: "w-full bg-rose-600 text-white py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-rose-700 transition-colors shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 29
                                        }, this),
                                        " Generate PDF Report"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveReportButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    reportData: {
                                        ...result,
                                        inputs: {
                                            loanAmount,
                                            rate,
                                            years
                                        }
                                    },
                                    calculatorType: "Personal Loan Calculator",
                                    disabled: !result
                                }, void 0, false, {
                                    fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                            lineNumber: 149,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "xl:col-span-7",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-rose-500 to-orange-600 rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl shadow-rose-500/30 relative overflow-hidden transition-all duration-500 hover:shadow-rose-500/40 hover:scale-[1.01]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-rose-100 font-semibold mb-2 tracking-wide text-xs sm:text-sm uppercase",
                                                        children: "Monthly EMI"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-4xl sm:text-5xl xl:text-5xl font-black tracking-tighter mb-8 drop-shadow-sm leading-tight",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(result?.monthlyEMI || 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3 sm:space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:bg-white/20 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 mb-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "p-1.5 bg-white/20 rounded-lg",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                                    className: "w-4 h-4 text-white"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                                    lineNumber: 217,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                                lineNumber: 216,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs sm:text-sm font-bold text-rose-100",
                                                                                children: "Principal"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                                lineNumber: 219,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl sm:text-2xl font-bold ml-9 sm:ml-10 tracking-tight",
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(loanAmount)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                        lineNumber: 221,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-rose-900/20 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/5 hover:bg-rose-900/30 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 mb-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "p-1.5 bg-orange-300/20 rounded-lg",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"], {
                                                                                    className: "w-4 h-4 text-orange-200"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                                    lineNumber: 227,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                                lineNumber: 226,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs sm:text-sm font-bold text-orange-100",
                                                                                children: "Interest Payable"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                                lineNumber: 229,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl sm:text-2xl font-bold ml-9 sm:ml-10 text-orange-200 tracking-tight",
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(result?.totalInterest || 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                        lineNumber: 231,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center bg-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-white/10 shadow-inner w-full max-w-sm mx-auto xl:mx-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-40 h-40 sm:w-48 sm:h-48 relative",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                                                            data: chartData,
                                                            options: {
                                                                plugins: {
                                                                    legend: {
                                                                        display: false
                                                                    }
                                                                },
                                                                elements: {
                                                                    arc: {
                                                                        borderWidth: 0
                                                                    }
                                                                },
                                                                animation: {
                                                                    animateScale: true
                                                                }
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6 sm:mt-8 flex gap-4 sm:gap-6 text-xs sm:text-sm justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded-full bg-white/40"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-rose-100 font-medium",
                                                                        children: "Principal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                        lineNumber: 247,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                        lineNumber: 250,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-white font-bold",
                                                                        children: "Interest"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 pt-8 border-t border-white/10 flex items-center justify-between text-sm text-rose-100 font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Total Payment: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white text-lg ml-1",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formulas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(result?.totalPayment || 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 54
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5 bg-black/10 px-3 py-1.5 rounded-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 114
                                                    }, this),
                                                    " ",
                                                    years * 12,
                                                    " Months"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                                lineNumber: 202,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                            lineNumber: 201,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                    lineNumber: 147,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-20 max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-slate-900 dark:text-white mb-4",
                            children: "Personal Loan EMI Calculator"
                        }, void 0, false, {
                            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                            lineNumber: 266,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600 dark:text-slate-400",
                            children: "A personal loan is an unsecured loan that you can use for various purposes, such as medical emergencies, travel, or debt consolidation. Use this calculator to determine your monthly Equated Monthly Installment (EMI) based on the loan amount, interest rate, and tenure."
                        }, void 0, false, {
                            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                            lineNumber: 267,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
                    lineNumber: 265,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
            lineNumber: 142,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(calculators)/personal-loan-calculator/page.tsx",
        lineNumber: 141,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d159cadd._.js.map