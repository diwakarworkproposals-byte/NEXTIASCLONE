import React, { useState } from 'react';
import { Users, Star, Award, GraduationCap, Video, ArrowRight, BookOpen, Quote } from 'lucide-react';
import { facultyData } from '../data/facultyData';

export default function FacultyShowcase({ onOpenEnquiry }) {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Economy', 'Science & Tech', 'Ethics', 'History', 'Geography', 'Polity', 'Society & Essay'];

  const filteredFaculties = facultyData.filter((f) => {
    if (selectedTag === 'All') return true;
    return f.tag.toLowerCase().includes(selectedTag.toLowerCase()) || 
           f.subject.toLowerCase().includes(selectedTag.toLowerCase());
  });

  return (
    <section id="faculty" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            Eminent Faculty Panel
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Learn from India's Most Celebrated UPSC Educators
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Average teaching experience of 10-15+ years. Renowned for conceptual clarity, exam-oriented frameworks, and an accessible student-centric teaching approach.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 mb-10 scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                selectedTag === tag
                  ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFaculties.map((f) => (
            <div
              key={f.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Rating */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-red-100 text-red-700 dark:bg-red-950/80 dark:text-red-400">
                    {f.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{f.rating}</span>
                  </div>
                </div>

                {/* Avatar Placeholder / Initial Banner */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 text-white font-extrabold text-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform border-2 border-red-500/20">
                  {f.name.split(' ')[0][0]}{f.name.split(' ')[1] ? f.name.split(' ')[1][0] : ''}
                </div>

                {/* Name & Role */}
                <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                  {f.name}
                </h3>
                <p className="text-xs font-semibold text-red-600 dark:text-red-400 mt-0.5">
                  {f.subject}
                </p>
                <p className="text-[11px] text-slate-400 dark:text-slate-500">
                  {f.role} • {f.experience} Experience
                </p>

                {/* Bio */}
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                  {f.bio}
                </p>

                {/* Quote */}
                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 italic flex items-start gap-1.5">
                  <Quote className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{f.quote}</span>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {f.studentsTaught} Students
                </span>

                <button
                  onClick={onOpenEnquiry}
                  className="font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Demo Lecture</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
