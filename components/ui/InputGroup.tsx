import React from 'react';

interface InputGroupProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  type?: 'currency' | 'percentage' | 'year';
  min?: number;
  max?: number;
  step?: number;
  variant?: 'blue' | 'green' | 'rose' | 'purple'; // New prop for theming
}

export default function InputGroup({
  label,
  value,
  onChange,
  type = 'currency',
  min,
  max,
  step,
  variant = 'blue'
}: InputGroupProps) {

  const limits = {
    currency: { min: 500, max: 10000000, step: 500 },
    percentage: { min: 1, max: 30, step: 0.1 },
    year: { min: 1, max: 40, step: 1 }
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
      badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    },
    green: {
      accent: 'accent-emerald-600 dark:accent-emerald-500',
      focus: 'focus:border-emerald-500 focus:ring-emerald-200 dark:focus:ring-emerald-900/30',
      text: 'text-emerald-600 dark:text-emerald-400',
      badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
    },
    rose: {
      accent: 'accent-rose-600 dark:accent-rose-500',
      focus: 'focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-900/30',
      text: 'text-rose-600 dark:text-rose-400',
      badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
    },
    purple: {
      accent: 'accent-purple-600 dark:accent-purple-500',
      focus: 'focus:border-purple-500 focus:ring-purple-200 dark:focus:ring-purple-900/30',
      text: 'text-purple-600 dark:text-purple-400',
      badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    }
  };

  const colors = themeClasses[variant];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="mb-8 group">
      <div className="flex justify-between items-end mb-3">
        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 tracking-wide">{label}</label>
        <span className={`text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity ${colors.badge}`}>
          Max: {type === 'currency' ? '₹' : ''}{actualMax.toLocaleString()}{type === 'percentage' ? '%' : ''}{type === 'year' ? ' Yr' : ''}
        </span>
      </div>

      <div className={`relative rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-white dark:bg-slate-800 mb-4 border border-slate-100 dark:border-slate-700 overflow-hidden focus-within:shadow-xl focus-within:border-${variant}-500`}>
        {type === 'currency' && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
            <span className="text-slate-400 dark:text-slate-500 font-semibold text-xl">₹</span>
          </div>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={actualMin}
          max={actualMax}
          className={`block w-full border-none bg-transparent py-5 text-slate-900 dark:text-white font-extrabold text-2xl focus:ring-0 transition-all outline-none ${type === 'currency' ? 'pl-12' : 'pl-5'
            }`}
        />
        {type === 'percentage' && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
            <span className={`font-bold px-2 py-1 rounded text-sm ${colors.badge}`}>%</span>
          </div>
        )}
        {type === 'year' && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
            <span className={`font-bold px-2 py-1 rounded text-sm ${colors.badge}`}>Yr</span>
          </div>
        )}

        {/* Bottom progress bar indicator */}
        <div className="absolute bottom-0 left-0 h-1 bg-slate-100 dark:bg-slate-700 w-full">
          <div
            className={`h-full transition-all duration-150 ease-out ${variant === 'blue' ? 'bg-blue-500' : variant === 'green' ? 'bg-emerald-500' : variant === 'purple' ? 'bg-purple-500' : 'bg-rose-500'}`}
            style={{ width: `${((value - actualMin) / (actualMax - actualMin)) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="relative h-2 w-full px-1">
        <input
          type="range"
          min={actualMin}
          max={actualMax}
          step={actualStep}
          value={value}
          onChange={handleSliderChange}
          className={`w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors focus:outline-none ${colors.accent}`}
        />
      </div>
    </div>
  );
}