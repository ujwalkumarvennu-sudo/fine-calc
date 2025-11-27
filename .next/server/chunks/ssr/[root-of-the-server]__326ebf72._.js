module.exports=[36313,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.HooksClientContext},18341,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.ServerInsertedHtml},56704,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},20635,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},9270,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.AppRouterContext},38783,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactServerDOMTurbopackClient},25910,a=>{"use strict";let b=(0,a.i(70106).default)("chart-pie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);a.s(["PieChart",()=>b],25910)},92e3,a=>{"use strict";let b=(0,a.i(70106).default)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);a.s(["AlertCircle",()=>b],92e3)},84505,a=>{"use strict";let b=(0,a.i(70106).default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);a.s(["Download",()=>b],84505)},56738,a=>{"use strict";let b=(0,a.i(70106).default)("wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);a.s(["Wallet",()=>b],56738)},22520,a=>{"use strict";let b=(0,a.i(70106).default)("arrow-up-right",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);a.s(["ArrowUpRight",()=>b],22520)},22726,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(50944),e=a.i(38246),f=a.i(63148),g=a.i(69596),h=a.i(3625),i=a.i(210),j=a.i(56738),k=a.i(22520),l=a.i(84505),m=a.i(25910),n=a.i(97045),o=a.i(27045);function p(){let a=(0,d.useSearchParams)(),[o,p]=(0,c.useState)(1e5),[q,r]=(0,c.useState)(12),[s,t]=(0,c.useState)(10),[u,v]=(0,c.useState)(null);(0,c.useEffect)(()=>{let b=a.get("investment"),c=a.get("rate"),d=a.get("years");b&&p(Number(b)),c&&r(Number(c)),d&&t(Number(d))},[a]),(0,c.useEffect)(()=>{v((0,g.calculateLumpsum)(o,q,s))},[o,q,s]);let w={labels:["Invested Amount","Wealth Gained"],datasets:[{data:[u?.breakdown.invested,u?.breakdown.gained],backgroundColor:["#ffffff40","#ffffff"],borderWidth:0}]};return(0,b.jsx)("div",{className:"min-h-screen bg-[#F8FAFC] py-12 font-sans",children:(0,b.jsxs)("div",{className:"max-w-5xl mx-auto px-4",children:[(0,b.jsxs)(e.default,{href:"/",className:"inline-flex items-center text-sm font-bold text-slate-400 hover:text-emerald-600 mb-8 transition-colors group",children:[(0,b.jsx)(i.ArrowLeft,{className:"w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform"})," Back to Home"]}),(0,b.jsxs)("div",{className:"grid grid-cols-1 xl:grid-cols-12 gap-8",children:[(0,b.jsxs)("div",{className:"xl:col-span-5 space-y-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-extrabold mb-4 uppercase tracking-wide",children:[(0,b.jsx)(m.PieChart,{className:"w-3 h-3"})," One-Time Growth"]}),(0,b.jsx)("h1",{className:"text-4xl font-black text-slate-900 mb-3 tracking-tight",children:"Lumpsum Calculator"}),(0,b.jsx)("p",{className:"text-slate-500 font-medium leading-relaxed",children:"Calculate the future value of a single, one-time investment over a long duration."})]}),(0,b.jsxs)("div",{className:"bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100",children:[(0,b.jsx)(f.default,{label:"Initial Investment (Principal)",value:o,onChange:p,type:"currency",min:1e3,max:5e6,step:1e3,variant:"green"}),(0,b.jsx)(f.default,{label:"Expected Return (p.a)",value:q,onChange:r,type:"percentage",min:1,max:30,step:.1,variant:"green"}),(0,b.jsx)(f.default,{label:"Time Period",value:s,onChange:t,type:"year",min:1,max:50,step:1,variant:"green"}),(0,b.jsxs)("div",{className:"flex gap-3 mt-6",children:[(0,b.jsx)(h.default,{reportData:{...u,inputs:{investment:o,rate:q,years:s}},calculatorType:"Lumpsum Calculator",disabled:!u}),(0,b.jsxs)("button",{onClick:()=>{if(!u||!u.schedule||0===u.schedule.length)return void alert("Please calculate a result before generating the report.");let{breakdown:a,schedule:b}=u,c="";b.forEach(a=>{c+=`
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px; text-align: center;">${a.year}</td>
                <td style="padding: 12px; text-align: right;">₹ ${o.toLocaleString("en-IN")}</td>
                <td style="padding: 12px; text-align: right; color: #059669;">₹ ${a.gain.toLocaleString("en-IN")}</td>
                <td style="padding: 12px; text-align: right; font-weight: bold;">₹ ${a.value.toLocaleString("en-IN")}</td>
            </tr>
        `});let d=`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Lumpsum Growth Report</title>
            <style>
                body { font-family: sans-serif; margin: 0; padding: 40px; color: #333; }
                .header { background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 5px solid #10b981; }
                .summary { display: flex; justify-content: space-between; gap: 20px; margin-bottom: 40px; }
                .summary-card { padding: 20px; border-radius: 8px; flex: 1; border: 1px solid #ddd; }
                .title { font-size: 24px; font-weight: bold; color: #059669; margin-bottom: 5px; }
                .date { font-size: 12px; color: #666; }
                h2 { font-size: 18px; color: #1f2937; border-bottom: 2px solid #059669; padding-bottom: 5px; margin-bottom: 20px; margin-top: 30px; }
                table { width: 100%; border-collapse: collapse; font-size: 14px; }
                th { background-color: #e5e7eb; padding: 10px; text-align: right; color: #4b5563; font-weight: bold; border-bottom: 2px solid #333; }
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
                <div class="title">Lumpsum Investment Report</div>
                <div class="date">Generated by FinCalHub on: ${new Date().toLocaleDateString()}</div>
                <div style="font-size: 14px; margin-top: 10px;">Initial Investment: ₹ ${o.toLocaleString("en-IN")} | Rate: ${q}% | Tenure: ${s} Years</div>
            </div>

            <h2>Final Investment Summary</h2>
            <div class="summary">
                <div class="summary-card" style="border-color: #d1d5db;">
                    <p style="font-size: 14px; color: #666; margin-bottom: 5px;">Total Invested</p>
                    <p style="font-size: 28px; font-weight: bold; color: #1f2937;">₹ ${a.invested.toLocaleString("en-IN")}</p>
                </div>
                <div class="summary-card" style="border-color: #a7f3d0; background-color: #f0fdf4;">
                    <p style="font-size: 14px; color: #059669; margin-bottom: 5px;">Wealth Gained (Returns)</p>
                    <p style="font-size: 28px; font-weight: bold; color: #059669;">₹ ${a.gained.toLocaleString("en-IN")}</p>
                </div>
                <div class="summary-card" style="border-color: #34d399; background-color: #ecfdf5;">
                    <p style="font-size: 14px; color: #065f46; margin-bottom: 5px;">Final Corpus Value</p>
                    <p style="font-size: 30px; font-weight: bolder; color: #065f46;">₹ ${a.total.toLocaleString("en-IN")}</p>
                </div>
            </div>

            <h2>Yearly Growth Schedule (Compounding Effect)</h2>
            <table>
                <thead>
                    <tr>
                        <th style="width: 10%;">Year</th>
                        <th style="width: 30%;">Initial Principal (₹)</th>
                        <th style="width: 30%;">Total Gain (₹)</th>
                        <th style="width: 30%;">Total Value (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    ${c}
                </tbody>
            </table>

            <div class="footer">
                This report is for informational and educational purposes only. Always consult a certified financial advisor before making investment decisions.
            </div>

            <div class="no-print" style="margin-top: 40px; text-align: center; background: #fff; padding: 20px; border: 1px dashed #ccc;">
                <p><strong>To save as PDF:</strong> Please use your browser's print function (Ctrl+P or Cmd+P) and select "Save as PDF" as the destination.</p>
            </div>
        </body>
        </html>
    `,e=window.open("","","height=600,width=800");e&&(e.document.write(d),e.document.close(),e.onload=()=>{e.focus(),e.print()})},className:"flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl hover:bg-slate-200 transition-all text-sm",children:[(0,b.jsx)(l.Download,{className:"w-4 h-4"})," Download"]})]})]})]}),(0,b.jsx)("div",{className:"xl:col-span-7 space-y-6",children:(0,b.jsxs)("div",{className:"bg-emerald-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl shadow-emerald-900/40 border border-emerald-800",children:[(0,b.jsx)("div",{className:"absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-emerald-300 opacity-20 rounded-full blur-3xl animate-pulse"}),(0,b.jsx)("div",{className:"absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-teal-900 opacity-20 rounded-full blur-3xl"}),(0,b.jsxs)("div",{className:"relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center",children:[(0,b.jsxs)("div",{className:"w-full",children:[(0,b.jsx)("p",{className:"text-emerald-100 font-semibold mb-2 tracking-wide text-xs sm:text-sm uppercase",children:"Total Maturity Value"}),(0,b.jsx)("p",{className:"text-4xl sm:text-5xl xl:text-5xl font-black tracking-tighter mb-8 drop-shadow-sm leading-tight",children:(0,g.formatCurrency)(u?.breakdown.total||0)}),(0,b.jsxs)("div",{className:"space-y-3 sm:space-y-4",children:[(0,b.jsxs)("div",{className:"bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:bg-white/20 transition-colors",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3 mb-1",children:[(0,b.jsx)("div",{className:"p-1.5 bg-white/20 rounded-lg",children:(0,b.jsx)(j.Wallet,{className:"w-4 h-4 text-white"})}),(0,b.jsx)("span",{className:"text-xs sm:text-sm font-bold text-emerald-50",children:"Invested Principal"})]}),(0,b.jsx)("p",{className:"text-xl sm:text-2xl font-bold ml-9 sm:ml-10 tracking-tight",children:(0,g.formatCurrency)(u?.breakdown.invested||0)})]}),(0,b.jsxs)("div",{className:"bg-emerald-900/20 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/5 hover:bg-emerald-900/30 transition-colors",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3 mb-1",children:[(0,b.jsx)("div",{className:"p-1.5 bg-emerald-400/20 rounded-lg",children:(0,b.jsx)(k.ArrowUpRight,{className:"w-4 h-4 text-emerald-200"})}),(0,b.jsx)("span",{className:"text-xs sm:text-sm font-bold text-emerald-100",children:"Wealth Gained"})]}),(0,b.jsx)("p",{className:"text-xl sm:text-2xl font-bold ml-9 sm:ml-10 text-emerald-200 tracking-tight",children:(0,g.formatCurrency)(u?.breakdown.gained||0)})]})]})]}),(0,b.jsxs)("div",{className:"flex flex-col items-center justify-center bg-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-white/10 shadow-inner w-full max-w-sm mx-auto xl:mx-0",children:[(0,b.jsx)("div",{className:"w-40 h-40 sm:w-48 sm:h-48 relative",children:(0,b.jsx)(n.Pie,{data:w,options:{plugins:{legend:{display:!1}},elements:{arc:{borderWidth:0}},animation:{animateScale:!0}}})}),(0,b.jsxs)("div",{className:"mt-6 sm:mt-8 flex gap-4 sm:gap-6 text-xs sm:text-sm justify-center",children:[(0,b.jsxs)("div",{className:"flex items-center gap-2",children:[(0,b.jsx)("div",{className:"w-3 h-3 rounded-full bg-white/40"}),(0,b.jsx)("span",{className:"text-emerald-100 font-medium",children:"Invested"})]}),(0,b.jsxs)("div",{className:"flex items-center gap-2",children:[(0,b.jsx)("div",{className:"w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"}),(0,b.jsx)("span",{className:"text-white font-bold",children:"Returns"})]})]})]})]})]})})]}),(0,b.jsxs)("div",{className:"mt-20 max-w-3xl mx-auto",children:[(0,b.jsx)("h2",{className:"text-2xl font-bold text-slate-900 mb-4",children:"Lumpsum Investment Strategy"}),(0,b.jsx)("p",{className:"text-slate-600",children:"Lumpsum investing is ideal for one-time capital that you want to put to work immediately. While volatile in the short term, over long periods, the compounding effect can be greater than SIPs due to higher upfront investment time."})]})]})})}o.Chart.register(o.ArcElement,o.Tooltip,o.Legend),a.s(["default",()=>p])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__326ebf72._.js.map