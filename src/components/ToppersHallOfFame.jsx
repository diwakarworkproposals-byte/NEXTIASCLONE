import React, { useState } from 'react';
import { Trophy, Award, Star, Quote, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { toppersData, selectionsStats } from '../data/toppersData';

export default function ToppersHallOfFame({ onOpenEnquiry }) {
  const [selectedYear, setSelectedYear] = useState('All');

  const filteredToppers = toppersData.filter((t) => {
    if (selectedYear === 'All') return true;
    return t.year.includes(selectedYear);
  });

  return (
    <section id="toppers" className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            Our Proven Legacy of Top Ranks
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            CSE Top Rankers from Foundation Batches
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            600+ Selections in UPSC CSE. Consistent All India Ranks 1, 2, 3 & 6 trained through our classrooms and mentorship programs.
          </p>
        </div>

        {/* Big Results Stats Banner */}
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-slate-900 text-white rounded-3xl p-8 mb-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-black font-heading text-amber-300">
                {selectionsStats.totalSelections}
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-100 mt-1">
                Total Selections
              </div>
              <div className="text-[11px] text-white/70">UPSC Civil Services</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-black font-heading text-white">
                {selectionsStats.top10}
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-100 mt-1">
                Top 10 Domination
              </div>
              <div className="text-[11px] text-white/70">Including AIR 1, 2, 3</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-black font-heading text-white">
                {selectionsStats.top50}
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-100 mt-1">
                Ranks in Top 50
              </div>
              <div className="text-[11px] text-white/70">From Classroom Batches</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-black font-heading text-amber-300">
                {selectionsStats.top100}
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-100 mt-1">
                Ranks in Top 100
              </div>
              <div className="text-[11px] text-white/70">Pan-India Selections</div>
            </div>
          </div>
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredToppers.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Rank Badge & Year */}
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/20">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>{t.badge}</span>
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    {t.year}
                  </span>
                </div>

                {/* Topper Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-slate-900 text-white flex items-center justify-center font-black text-xl shadow-md border-2 border-amber-400">
                    {t.name.split(' ')[0][0]}{t.name.split(' ')[1] ? t.name.split(' ')[1][0] : ''}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white leading-tight">
                      {t.name}
                    </h3>
                    <p className="text-xs font-semibold text-red-600 dark:text-red-400 mt-0.5">
                      Optional: {t.optional}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Score: {t.score}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 mb-3">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Enrolled Program:</span>
                  {t.program}
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Action */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Selection
                </span>
                <button
                  onClick={onOpenEnquiry}
                  className="font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1"
                >
                  <span>Read Strategy</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Selections CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3 rounded-xl font-bold text-xs bg-slate-900 dark:bg-slate-800 hover:bg-red-600 dark:hover:bg-red-600 text-white shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>View Full 600+ Selections List & Marksheets</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
