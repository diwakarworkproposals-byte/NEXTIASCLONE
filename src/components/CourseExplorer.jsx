import React, { useState } from 'react';
import { 
  BookOpen, Clock, Calendar, Check, ArrowRight, Star, 
  Sparkles, Filter, Search, Award, Info, HelpCircle, Layers 
} from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function CourseExplorer({ 
  onOpenEnquiry, 
  onSelectCourse, 
  onOpenCompare,
  filterCategory = 'all'
}) {
  const [activeTab, setActiveTab] = useState(filterCategory === 'all' ? 'gs-foundation' : filterCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMode, setSelectedMode] = useState('all');

  const categories = [
    { id: 'gs-foundation', label: 'GS Foundation Courses', count: 5 },
    { id: 'optional', label: 'Optional Subjects', count: 5 },
    { id: 'advanced', label: 'Advanced & Mentorship', count: 3 },
    { id: 'residential', label: 'Residential Gurukul', count: 1 },
  ];

  const filteredCourses = coursesData.filter((c) => {
    const matchesTab = c.category === activeTab;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMode = selectedMode === 'all' ? true : 
                        selectedMode === 'classroom' ? c.mode.toLowerCase().includes('classroom') :
                        c.mode.toLowerCase().includes('online');
    return matchesTab && matchesSearch && matchesMode;
  });

  return (
    <section id="courses" className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              Comprehensive Academic Programs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
              Explore UPSC CSE Courses
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Scientifically structured curricula covering every stage of the Civil Services Examination with eminent faculties, high-yield study material, and rigorous testing.
            </p>
          </div>

          {/* Compare Courses Trigger */}
          <button
            onClick={onOpenCompare}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-500 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-red-600 transition-all self-start md:self-auto shrink-0"
          >
            <Layers className="w-4 h-4 text-red-600" />
            <span>Compare Foundation Courses</span>
          </button>
        </div>

        {/* Filter Navigation Bar */}
        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-2 sm:p-3 border border-slate-200 dark:border-slate-700 mb-8 flex flex-wrap items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none w-full md:w-auto">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/50'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeTab === tab.id ? 'bg-red-700 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search & Mode Filters */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search subjects or courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-8 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Mode selector */}
            <select
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              className="text-xs font-medium py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="all">All Modes</option>
              <option value="classroom">Classroom (Offline)</option>
              <option value="online">Live-Online</option>
            </select>
          </div>

        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header & Badges */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 dark:bg-red-950/80 dark:text-red-400">
                    {course.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{course.rating}</span>
                    <span className="text-[10px] text-slate-400">({course.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {course.targetYear} • {course.mode}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                {/* Key Metrics Chips */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-red-500" />
                    <span>{course.hours}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-300" />
                  <div className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="mt-4 space-y-2">
                  {course.highlights.slice(0, 3).map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Pricing & Action Buttons */}
              <div className="p-6 pt-4 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Fee Structure</span>
                  <div className="font-extrabold text-base text-slate-900 dark:text-white">
                    {course.fee}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (onSelectCourse) onSelectCourse(course);
                    }}
                    className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 border border-slate-200 dark:border-slate-700 transition-colors"
                    title="View Details"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenEnquiry}
                    className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-red-600/20 hover:shadow-red-600/30 transition-all flex items-center gap-1"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h4 className="font-bold text-slate-700 dark:text-slate-300 text-sm">No courses matching your filter</h4>
            <p className="text-xs text-slate-500 mt-1">Try resetting the search keyword or selecting a different tab.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedMode('all'); }}
              className="mt-3 text-xs font-bold text-red-600 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
