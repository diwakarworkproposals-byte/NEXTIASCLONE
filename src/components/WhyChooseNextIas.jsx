import React from 'react';
import { 
  Users, BookOpen, UserCheck, GraduationCap, 
  CheckSquare, MessageSquare, MonitorPlay, HeartHandshake,
  Sparkles, Award, ShieldCheck, ArrowRight 
} from 'lucide-react';

export default function WhyChooseNextIas({ onOpenEnquiry }) {
  const pillars = [
    {
      icon: Users,
      title: "Renowned & Experienced Faculties",
      desc: "Distinguished master educators with an average teaching experience of 10-15+ years who simplify intricate UPSC concepts without compromising academic depth.",
      stat: "15+ Years Avg.",
      color: "text-red-600 bg-red-50 dark:bg-red-950/50"
    },
    {
      icon: BookOpen,
      title: "Enriched Quality Content: 19 Yellow Books",
      desc: "Syllabus-exhaustive textbooks updated annually with recent committee reports, diagrams, case studies, and PYQs compiled by our in-house R&D wing.",
      stat: "4,800+ Pages",
      color: "text-amber-600 bg-amber-50 dark:bg-amber-950/50"
    },
    {
      icon: UserCheck,
      title: "Dedicated Academic Coach & Mentorship",
      desc: "Every aspirant is assigned a dedicated senior mentor for continuous performance tracking, study schedule structuring, and personalized answer writing reviews.",
      stat: "1-on-1 Guidance",
      color: "text-blue-600 bg-blue-50 dark:bg-blue-950/50"
    },
    {
      icon: GraduationCap,
      title: "Comprehensive Classroom Learning",
      desc: "1100+ hours of rigorous classroom lectures covering GS Papers 1 to 4, CSAT, Essay, and dedicated weekly current affairs sessions.",
      stat: "1100+ Hours",
      color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50"
    },
    {
      icon: CheckSquare,
      title: "Testing & Assessment Framework",
      desc: "40+ Weekly Class Tests, 50+ Prelims Booster Sectional & Full Mock Tests, and 12 GS Mains Tests with detailed individual faculty remarks.",
      stat: "100+ Tests",
      color: "text-purple-600 bg-purple-50 dark:bg-purple-950/50"
    },
    {
      icon: MessageSquare,
      title: "Doubt Resolution & Personalised Support",
      desc: "Dedicated faculty doubt rooms and discussion cabins at our Old Rajinder Nagar and Mukherjee Nagar campuses for direct query resolution after every lecture.",
      stat: "Zero Pending Doubts",
      color: "text-pink-600 bg-pink-50 dark:bg-pink-950/50"
    },
    {
      icon: MonitorPlay,
      title: "Digital & Flexible Hybrid Access",
      desc: "Seamless live streaming of all offline lectures in Full HD with missed-class backup video access on the NEXT IAS Portal and Mobile App.",
      stat: "100% Backup Access",
      color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/50"
    },
    {
      icon: HeartHandshake,
      title: "Post-Course Completion Support",
      desc: "Our commitment does not end with course completion. Enjoy free access to update lectures, library access, test series, and interview guidance until your final selection.",
      stat: "Till Selection",
      color: "text-teal-600 bg-teal-50 dark:bg-teal-950/50"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            The NEXT IAS Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Why Aspirants Rank 1 Choose NEXT IAS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Built on the legacy of MADE EASY Group, our structured pedagogical ecosystem is engineered to eliminate guesswork and turn steady effort into civil service rank.
          </p>
        </div>

        {/* 8 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-red-500/50 dark:hover:border-red-500/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${p.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                      {p.stat}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700/60 flex items-center text-xs font-semibold text-red-600 dark:text-red-400 group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-400" />
              <span>National Scholarship Test (NST)</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Get Up To 100% Scholarship on Foundation Fees
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Merit-based financial aid for deserving candidates across India. Appear online or at our Delhi, Jaipur & Prayagraj exam centers.
            </p>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="shrink-0 px-6 py-3.5 rounded-xl font-bold text-xs bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
          >
            Register for Scholarship Test →
          </button>
        </div>

      </div>
    </section>
  );
}
