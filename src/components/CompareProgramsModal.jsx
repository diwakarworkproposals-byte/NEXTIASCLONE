import React from 'react';
import { X, Check, Minus, Layers, ArrowRight } from 'lucide-react';

export default function CompareProgramsModal({ isOpen, onClose, onOpenEnquiry }) {
  if (!isOpen) return null;

  const features = [
    { name: "Target Audience", f1: "Graduates / 2026", f2: "College 2nd/3rd Yr", f3: "Post 12th / 1st Yr", gurukul: "Full-Time Dedicated" },
    { name: "Classroom Hours", f1: "1100+ Hours", f2: "1500+ Hours", f3: "1800+ Hours", gurukul: "24x7 Immersive" },
    { name: "Duration", f1: "10-12 Months", f2: "24 Months", f3: "36 Months", gurukul: "12 Months Residential" },
    { name: "19 Yellow Books Included", f1: true, f2: true, f3: true, gurukul: true },
    { name: "Prelims Booster (50+ Tests)", f1: true, f2: true, f3: true, gurukul: true },
    { name: "Mains Answer Evaluation", f1: "12 Tests", f2: "24 Tests", f3: "36 Tests", gurukul: "Daily Practice" },
    { name: "1-on-1 Academic Coach", f1: true, f2: true, f3: true, gurukul: "Resident Mentors" },
    { name: "Accommodation & Food", f1: false, f2: false, f3: false, gurukul: true },
    { name: "Tuition Fee (+ GST)", f1: "₹1,47,457", f2: "₹1,94,068", f3: "₹2,25,000", gurukul: "Campus Interview" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-red-100 dark:bg-red-950 text-red-600">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-xl text-slate-900 dark:text-white font-heading">
                Side-by-Side Foundation Comparison
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Choose the program calibrated precisely to your graduation timeline and target year.
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                <th className="py-3 px-4 font-bold text-slate-400 uppercase text-[11px]">Feature</th>
                <th className="py-3 px-4 font-extrabold text-slate-900 dark:text-white text-sm bg-red-50/50 dark:bg-red-950/20 rounded-t-xl">
                  1-Year GS Foundation
                </th>
                <th className="py-3 px-4 font-extrabold text-slate-900 dark:text-white text-sm">
                  2-Year ELEVATE
                </th>
                <th className="py-3 px-4 font-extrabold text-slate-900 dark:text-white text-sm">
                  3-Year PINNACLE
                </th>
                <th className="py-3 px-4 font-extrabold text-amber-600 dark:text-amber-400 text-sm bg-amber-50/50 dark:bg-amber-950/20 rounded-t-xl">
                  Kartavyam Gurukul
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {features.map((feat, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3.5 px-4 font-semibold text-slate-700 dark:text-slate-300">
                    {feat.name}
                  </td>
                  
                  {/* 1-Year */}
                  <td className="py-3.5 px-4 bg-red-50/30 dark:bg-red-950/10 font-medium text-slate-900 dark:text-white">
                    {typeof feat.f1 === 'boolean' ? (
                      feat.f1 ? <Check className="w-4 h-4 text-emerald-500 font-bold" /> : <Minus className="w-4 h-4 text-slate-400" />
                    ) : feat.f1}
                  </td>

                  {/* 2-Year */}
                  <td className="py-3.5 px-4 font-medium text-slate-700 dark:text-slate-300">
                    {typeof feat.f2 === 'boolean' ? (
                      feat.f2 ? <Check className="w-4 h-4 text-emerald-500 font-bold" /> : <Minus className="w-4 h-4 text-slate-400" />
                    ) : feat.f2}
                  </td>

                  {/* 3-Year */}
                  <td className="py-3.5 px-4 font-medium text-slate-700 dark:text-slate-300">
                    {typeof feat.f3 === 'boolean' ? (
                      feat.f3 ? <Check className="w-4 h-4 text-emerald-500 font-bold" /> : <Minus className="w-4 h-4 text-slate-400" />
                    ) : feat.f3}
                  </td>

                  {/* Gurukul */}
                  <td className="py-3.5 px-4 bg-amber-50/30 dark:bg-amber-950/10 font-bold text-slate-900 dark:text-white">
                    {typeof feat.gurukul === 'boolean' ? (
                      feat.gurukul ? <Check className="w-4 h-4 text-emerald-500 font-bold" /> : <Minus className="w-4 h-4 text-slate-400" />
                    ) : feat.gurukul}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Need personalized advice on which program fits your college curriculum?
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
            className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Book 1-on-1 Academic Advisory Session</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
