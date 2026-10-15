import React, { useState } from 'react';
import { 
  Calendar, Clock, MapPin, IndianRupee, ArrowRight, 
  Download, Users, AlertCircle, CheckCircle, Calculator 
} from 'lucide-react';
import { batchPrograms, centresList, batchesSchedule } from '../data/batchesData';

export default function BatchScheduleTable({ onOpenEnquiry }) {
  const [activeProgram, setActiveProgram] = useState('gs');
  const [selectedCentre, setSelectedCentre] = useState('all');
  const [paymentPlan, setPaymentPlan] = useState('onetime'); // 'onetime' or 'installment'

  const currentBatches = (batchesSchedule[activeProgram] || []).filter((b) => {
    if (selectedCentre === 'all') return true;
    return b.centre === selectedCentre;
  });

  return (
    <section id="batches" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Admissions Open • Year 2026 / 2027
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Upcoming Batches in Delhi & Pan-India with Fees
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Transparent batch timings, venues, and comprehensive fee breakdown. Morning, Afternoon, and Evening batches designed for maximum efficiency.
          </p>
        </div>

        {/* Program Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 mb-8 scrollbar-none">
          {batchPrograms.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveProgram(prog.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                activeProgram === prog.id
                  ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              {prog.name}
            </button>
          ))}
        </div>

        {/* Centre Filter & Payment Plan Toggle */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-4">
          
          {/* Centre Pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
              Filter Centre:
            </span>
            <button
              onClick={() => setSelectedCentre('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCentre === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              All Centres
            </button>
            {centresList.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCentre(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                  selectedCentre === c.id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {c.name.split('(')[0]}
              </button>
            ))}
          </div>

          {/* Payment Plan Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <span className="text-[11px] font-semibold text-slate-500 px-2 flex items-center gap-1">
              <Calculator className="w-3 h-3" /> Fee Mode:
            </span>
            <button
              onClick={() => setPaymentPlan('onetime')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                paymentPlan === 'onetime'
                  ? 'bg-white dark:bg-slate-900 text-red-600 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              One-Time (5% Discount)
            </button>
            <button
              onClick={() => setPaymentPlan('installment')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                paymentPlan === 'installment'
                  ? 'bg-white dark:bg-slate-900 text-red-600 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              2-Part Installment
            </button>
          </div>

        </div>

        {/* Batches Table Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider font-semibold">
                  <th className="py-4 px-6">Venue & Mode</th>
                  <th className="py-4 px-6">Time Slot</th>
                  <th className="py-4 px-6">Commencement Date</th>
                  <th className="py-4 px-6">
                    {paymentPlan === 'onetime' ? 'Fee (One-Time + GST)' : 'Installment Plan'}
                  </th>
                  <th className="py-4 px-6">Availability</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
                {currentBatches.map((batch) => {
                  const calculatedFee = paymentPlan === 'onetime' 
                    ? `₹${batch.fee.toLocaleString('en-IN')} + GST`
                    : `₹${Math.round((batch.totalFee * 0.55)).toLocaleString('en-IN')} (Part 1) + ₹${Math.round((batch.totalFee * 0.5)).toLocaleString('en-IN')} (Part 2)`;

                  return (
                    <tr 
                      key={batch.id} 
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      {/* Venue & Mode */}
                      <td className="py-4 px-6">
                        <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                          <span>{batch.venue}</span>
                        </div>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5 ml-5 font-medium">
                          {batch.mode}
                        </span>
                      </td>

                      {/* Time Slot */}
                      <td className="py-4 px-6">
                        <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-blue-500" />
                          <span>{batch.time}</span>
                        </div>
                        <span className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded mt-1 ${
                          batch.slot === 'Morning' 
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-400'
                            : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-400'
                        }`}>
                          {batch.slot} Batch
                        </span>
                      </td>

                      {/* Commencement Date */}
                      <td className="py-4 px-6">
                        <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-red-500" />
                          <span>{batch.date}</span>
                        </div>
                        <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5 block">
                          • {batch.status}
                        </span>
                      </td>

                      {/* Fee */}
                      <td className="py-4 px-6">
                        <div className="font-extrabold text-sm text-slate-900 dark:text-white">
                          {calculatedFee}
                        </div>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          Total Payable: ₹{batch.totalFee.toLocaleString('en-IN')} (incl. 18% GST)
                        </span>
                      </td>

                      {/* Availability */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                            <div 
                              className="bg-red-500 h-full rounded-full" 
                              style={{ width: `${Math.max(20, 100 - (batch.seatsLeft * 1.5))}%` }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-red-600 dark:text-red-400 whitespace-nowrap">
                            {batch.seatsLeft} seats left
                          </span>
                        </div>
                      </td>

                      {/* Enroll Button */}
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={onOpenEnquiry}
                          className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-red-600/20 hover:shadow-red-600/30 transition-all inline-flex items-center gap-1.5"
                        >
                          <span>Enroll Now</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer Helper */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Includes 19 Yellow Books, Prelims Booster Test Series & Mains Test Series.</span>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Detailed Batch Brochure (PDF)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
