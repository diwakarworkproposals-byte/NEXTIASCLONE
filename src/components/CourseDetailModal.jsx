import React from 'react';
import { X, CheckCircle2, Clock, Calendar, Star, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CourseDetailModal({ course, onClose, onOpenEnquiry }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400">
              {course.badge}
            </span>
            <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white mt-1 font-heading leading-tight">
              {course.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Target: {course.targetYear} • {course.mode}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-5 space-y-5">
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {course.description}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Classroom Hours</span>
              <span className="font-extrabold text-slate-900 dark:text-white">{course.hours}</span>
            </div>
            <div className="border-x border-slate-200 dark:border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Program Span</span>
              <span className="font-extrabold text-slate-900 dark:text-white">{course.duration}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Ratings</span>
              <span className="font-extrabold text-amber-500 flex items-center justify-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" /> {course.rating}
              </span>
            </div>
          </div>

          {/* Program Highlights */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">
              Course Inclusions & Deliverables
            </h4>
            <div className="space-y-2.5">
              {course.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee & Enrollment Box */}
          <div className="p-4 rounded-2xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-900 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 block">
                Total Fee (One Time)
              </span>
              <div className="text-xl font-black text-slate-900 dark:text-white font-heading">
                {course.fee}
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                Installment options & NST scholarships available
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenEnquiry();
              }}
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-red-600/20 transition-all flex items-center gap-1"
            >
              <span>Enroll / Inquire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
