import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Star, ShieldCheck, Sparkles, 
  BookOpen, Users, Trophy, Play, Compass, MapPin, Search 
} from 'lucide-react';

export default function HeroSection({ onOpenEnquiry, onFindCourse }) {
  const [targetYear, setTargetYear] = useState('2026');
  const [preferredMode, setPreferredMode] = useState('offline-orn');
  const [stage, setStage] = useState('foundation');
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: "1-Year GS Foundation (Pre-cum-Main)",
      subtitle: "1100+ Hours of In-Depth Teaching • 19 Yellow Books • 1-on-1 Mentorship",
      tag: "Flagship Batch 2026",
      badgeColor: "bg-red-500",
      cta: "Explore Batch",
      anchor: "#batches"
    },
    {
      title: "Kartavyam: Residential Gurukul",
      subtitle: "Full-Time 24x7 Immersive Campus • Zero Distractions • In-House Faculty",
      tag: "NCR Residential Campus",
      badgeColor: "bg-amber-500",
      cta: "View Campus",
      anchor: "#residential"
    },
    {
      title: "600+ Selections in UPSC CSE",
      subtitle: "AIR 1, AIR 2, AIR 3, AIR 6, AIR 10 • 1 in every 2 selections from NEXT IAS",
      tag: "Our Results Speak",
      badgeColor: "bg-blue-600",
      cta: "View Hall of Fame",
      anchor: "#toppers"
    }
  ];

  const handleQuickFind = (e) => {
    e.preventDefault();
    if (onFindCourse) {
      onFindCourse({ targetYear, preferredMode, stage });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors">
      {/* Subtle modern ambient background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 dark:bg-red-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400 text-xs font-bold tracking-wide border border-red-200 dark:border-red-900 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>India's Premier Institute for UPSC Civil Services</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] font-heading">
              Transform Your <span className="text-red-600 dark:text-red-500">IAS Dream</span> Into Concrete Ranks.
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Join thousands of successful civil servants who learned under India's most celebrated faculty panel, mastered <strong>1100+ classroom hours</strong>, studied from <strong>19 Yellow Books</strong>, and achieved top ranks with 1-on-1 personalized mentorship.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#batches"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-600/30 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Upcoming 2026/27 Batches</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-2 border-slate-200 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-500 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-red-600" />
                <span>Book Free Demo Class</span>
              </button>
            </div>

            {/* Trust Proof Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-200">4.9 / 5 Rating</span>
                <span className="text-slate-400">(25k+ Reviews)</span>
              </div>

              <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 hidden sm:block" />

              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>600+ Selections in CSE 2023/24</span>
              </div>

              <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 hidden sm:block" />

              <div className="flex items-center gap-1.5 font-medium">
                <Users className="w-4 h-4 text-blue-500" />
                <span>15+ Yrs Avg. Faculty Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Course Finder & Live Carousel */}
          <div className="lg:col-span-5 space-y-5">
            {/* Quick Interactive Course Matcher */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-600 flex items-center justify-center font-bold">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">Find Your Ideal Course</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Instant guidance customized to your attempt</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                  Guided
                </span>
              </div>

              <form onSubmit={handleQuickFind} className="mt-5 space-y-4">
                {/* Target Year */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Target UPSC CSE Attempt
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['2026', '2027', '2028+'].map((yr) => (
                      <button
                        type="button"
                        key={yr}
                        onClick={() => setTargetYear(yr)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                          targetYear === yr
                            ? 'border-red-600 bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800'
                            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                        }`}
                      >
                        CSE {yr}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred Mode */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Learning Mode / Centre
                  </label>
                  <select
                    value={preferredMode}
                    onChange={(e) => setPreferredMode(e.target.value)}
                    className="w-full text-xs font-medium py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="offline-orn">Delhi — Old Rajinder Nagar (Classroom)</option>
                    <option value="offline-mn">Delhi — Mukherjee Nagar (Classroom)</option>
                    <option value="offline-jaipur">Jaipur Centre (Classroom)</option>
                    <option value="offline-prayagraj">Prayagraj Centre (Classroom)</option>
                    <option value="online-live">Live-Online (Interactive Digital Batch)</option>
                    <option value="residential-gurukul">Kartavyam Residential Gurukul Campus</option>
                  </select>
                </div>

                {/* Preparation Stage */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Current Preparation Stage
                  </label>
                  <select
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className="w-full text-xs font-medium py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="foundation">Complete Beginner / College Student (Foundation)</option>
                    <option value="optional">Need Optional Subject Specialization</option>
                    <option value="mains-mentorship">Appeared in Prelims / Need Mains Answer Writing</option>
                    <option value="cava-test">Current Affairs & Test Series Only</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-slate-900 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700 text-white font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Show Recommended Courses</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Mini Carousel Card for Featured Programs */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-4 text-white shadow-xl flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/20">
                  {heroSlides[activeSlide].tag}
                </span>
                <h4 className="font-bold text-sm sm:text-base leading-snug">
                  {heroSlides[activeSlide].title}
                </h4>
                <p className="text-xs text-red-100 line-clamp-1">
                  {heroSlides[activeSlide].subtitle}
                </p>
              </div>

              <a
                href={heroSlides[activeSlide].anchor}
                className="shrink-0 px-3.5 py-2 rounded-xl bg-white text-red-700 font-bold text-xs hover:bg-red-50 transition-colors shadow"
              >
                {heroSlides[activeSlide].cta}
              </a>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-1.5 pt-1">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    activeSlide === i ? 'w-6 bg-red-600' : 'w-2 bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Metrics Ribbon */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-extrabold text-red-600 dark:text-red-500 font-heading">
                600+
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                UPSC CSE Selections
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                AIR 1, 2, 3, 6, 10 in Top Ranks
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
                1100+
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                Classroom Teaching Hours
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                In-depth conceptual mastery
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-extrabold text-red-600 dark:text-red-500 font-heading">
                19
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                Specially Curated Yellow Books
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Complete syllabus covered
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
                15+ Yrs
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                Avg. Faculty Experience
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Eminent master educators
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
