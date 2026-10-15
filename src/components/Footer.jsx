import React from 'react';
import { 
  Phone, Mail, MapPin, Youtube, Send, Instagram, 
  Twitter, Facebook, ArrowUp, Compass, Award, BookOpen 
} from 'lucide-react';

export default function Footer({ onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 text-xs border-t border-slate-800 transition-colors">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-red-600 text-white font-extrabold flex items-center justify-center text-xl shadow-md">
                N
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white font-heading">
                NEXT <span className="text-red-600">IAS</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              An initiative of <strong>MADE EASY Group</strong>. India's premier coaching institute for the Civil Services Examination, renowned for experienced faculties, 19 Yellow Books, and consistent top rankers.
            </p>

            <div className="space-y-2 pt-2 text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>Helpline: <strong className="text-white">80813-00200</strong> | 011-49858690</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Email: <strong className="text-white">info@nextias.com</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Vivekananda House, 6-B Pusa Road, Karol Bagh, New Delhi - 110060</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-500 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://telegram.org" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-colors"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-500 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400 transition-colors"
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">Popular Courses</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#courses" className="hover:text-red-400 transition-colors">1-Year GS Foundation (CSE 2026)</a></li>
              <li><a href="#courses" className="hover:text-red-400 transition-colors">2-Year ELEVATE Foundation</a></li>
              <li><a href="#courses" className="hover:text-red-400 transition-colors">3-Year PINNACLE Program</a></li>
              <li><a href="#courses" className="hover:text-red-400 transition-colors">Optional Subjects (PSIR, Socio)</a></li>
              <li><a href="#courses" className="hover:text-red-400 transition-colors">CSAT Foundation Course</a></li>
              <li><a href="#residential" className="hover:text-red-400 transition-colors text-red-400 font-semibold">Kartavyam Gurukul (NCR)</a></li>
            </ul>
          </div>

          {/* Column 3: Free Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">Free Aspirant Hub</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#current-affairs" className="hover:text-red-400 transition-colors">Daily Editorial Analysis</a></li>
              <li><a href="#current-affairs" className="hover:text-red-400 transition-colors">Daily Prelims MCQ Quiz</a></li>
              <li><a href="#current-affairs" className="hover:text-red-400 transition-colors">Mains Question of the Day</a></li>
              <li><a href="#courses" className="hover:text-red-400 transition-colors">19 Yellow Books Series</a></li>
              <li><a href="#toppers" className="hover:text-red-400 transition-colors">UPSC Toppers Marksheets</a></li>
              <li><a href="#batches" className="hover:text-red-400 transition-colors">Upcoming Batch Schedules</a></li>
            </ul>
          </div>

          {/* Column 4: Campuses & Initiatives */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">Campuses & Initiatives</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#centres" className="hover:text-red-400 transition-colors">New Delhi (Old Rajinder Nagar)</a></li>
              <li><a href="#centres" className="hover:text-red-400 transition-colors">New Delhi (Mukherjee Nagar)</a></li>
              <li><a href="#centres" className="hover:text-red-400 transition-colors">Jaipur Centre (Tonk Road)</a></li>
              <li><a href="#centres" className="hover:text-red-400 transition-colors">Prayagraj Centre (Civil Lines)</a></li>
              <li><span className="text-slate-600 block mt-2 font-bold uppercase text-[10px]">Group Sister Wings:</span></li>
              <li><span className="text-slate-500">MADE EASY (GATE & ESE)</span></li>
              <li><span className="text-slate-500">MADE EASY Publications</span></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Disclaimer Bar */}
      <div className="border-t border-slate-900 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} NEXT IAS (MADE EASY Group). Modern Redesign UI Clone. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenEnquiry}
              className="hover:text-white transition-colors"
            >
              Academic Counselling
            </button>
            <span>•</span>
            <button 
              onClick={onOpenEnquiry}
              className="hover:text-white transition-colors"
            >
              Terms & Admissions
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-red-500 hover:text-red-400 font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
