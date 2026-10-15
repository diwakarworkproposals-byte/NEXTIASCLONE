import React from 'react';
import { Compass, CheckCircle2, Bed, Utensils, BookOpen, HeartPulse, Shield, ArrowRight } from 'lucide-react';

export default function ResidentialSection({ onOpenEnquiry }) {
  const perks = [
    {
      icon: Bed,
      title: "AC Accommodation & Stay",
      desc: "Comfortable, climate-controlled single and twin-sharing residential rooms with ergonomic study desks."
    },
    {
      icon: BookOpen,
      title: "Zero Travel Time Pedagogy",
      desc: "Smart lecture halls, 24x7 reading library, and mentor chambers all within the same campus compound."
    },
    {
      icon: Utensils,
      title: "Nutritious Organic Dining",
      desc: "Wholesome, dietitian-curated meals designed to maintain high stamina, mental alertness, and immunity."
    },
    {
      icon: HeartPulse,
      title: "Yoga & Mental Wellness",
      desc: "Daily morning yoga, meditation, sports facilities, and stress management counselling by professionals."
    },
    {
      icon: Shield,
      title: "24x7 Resident Mentors",
      desc: "Senior academic mentors live on campus to clear doubts in real-time, anytime between morning and night."
    },
    {
      icon: Compass,
      title: "Disciplined 14-Hour Routine",
      desc: "A proven, structured timetable balancing deep study, answer writing tests, discussion, and rest."
    }
  ];

  return (
    <section id="residential" className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 text-white relative overflow-hidden transition-colors">
      {/* Decorative ambient highlights */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm">
            <Compass className="w-3.5 h-3.5" />
            NCR Full-Time Residential Campus
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            KARTAVYAM: UPSC Residential Gurukul
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Ancient discipline infused with modern pedagogy. A dedicated self-contained campus where aspirants live, study, write tests, and interact with resident mentors round the clock.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {perks.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/60 hover:border-red-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-white group-hover:text-red-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-700/40 flex items-center text-xs font-semibold text-red-400">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  <span>Integrated on Campus</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout action banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Admissions Through Screening & Personal Interview
            </h3>
            <p className="text-xs sm:text-sm text-red-100 max-w-xl">
              Limited seats allocated to serious candidates committed to a rigorous 1-year transformation. Book a guided campus tour or schedule your interview.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3.5 rounded-xl font-bold text-xs bg-white text-red-700 hover:bg-red-50 shadow-lg hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              Apply for Gurukul Admission
            </button>
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3.5 rounded-xl font-bold text-xs bg-red-900/60 hover:bg-red-900 text-white border border-red-400/40 transition-colors whitespace-nowrap"
            >
              Book Guided Campus Tour
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
