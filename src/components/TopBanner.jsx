import React, { useState } from 'react';
import { Phone, MapPin, Sparkles, User, ChevronDown, GraduationCap, Award, Compass, Shield } from 'lucide-react';

export default function TopBanner({ onOpenEnquiry, onSelectCenter }) {
  const [selectedLang, setSelectedLang] = useState('EN');
  const [showCentresDropdown, setShowCentresDropdown] = useState(false);

  const centres = [
    { name: "New Delhi (Old Rajinder Nagar)", id: "delhi-orn" },
    { name: "New Delhi (Mukherjee Nagar)", id: "delhi-mn" },
    { name: "Jaipur Centre (Tonk Road)", id: "jaipur" },
    { name: "Prayagraj Centre (Civil Lines)", id: "prayagraj" }
  ];

  return (
    <div className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800 transition-colors">
      {/* Top Ticker Notification Bar */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-1 px-4 text-center font-medium flex items-center justify-center gap-2 overflow-hidden shadow-inner">
        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm animate-pulse-subtle">
          <Sparkles className="w-3 h-3 text-amber-300" /> New Batches
        </span>
        <span className="truncate">
          Admissions Open: 1-Year GS Foundation 2026/27 (Morning & Evening) • Scholarship Test (NST) Registrations Live!
        </span>
        <button 
          onClick={onOpenEnquiry}
          className="ml-2 underline font-bold hover:text-amber-200 transition-colors whitespace-nowrap hidden sm:inline"
        >
          Reserve Seat Now →
        </button>
      </div>

      {/* Main Secondary Utility Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Quick Links */}
        <div className="flex items-center gap-3 overflow-x-auto py-0.5 scrollbar-none text-[11px]">
          <a
            href="#residential"
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-red-600/90 hover:bg-red-600 text-white font-semibold transition-all whitespace-nowrap shadow-sm"
          >
            <Compass className="w-3 h-3" />
            <span>Kartavyam Gurukul</span>
          </a>

          <a
            href="#toppers"
            className="flex items-center gap-1 hover:text-white transition-colors text-slate-300 whitespace-nowrap"
          >
            <Award className="w-3 h-3 text-amber-400" />
            <span>Our Selections (600+)</span>
          </a>

          <button
            onClick={onOpenEnquiry}
            className="flex items-center gap-1 hover:text-white transition-colors text-slate-300 whitespace-nowrap"
          >
            <GraduationCap className="w-3 h-3 text-blue-400" />
            <span>Academic Counselling</span>
          </button>

          {/* Our Centres Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCentresDropdown(!showCentresDropdown)}
              onBlur={() => setTimeout(() => setShowCentresDropdown(false), 200)}
              className="flex items-center gap-1 hover:text-white text-slate-300 transition-colors whitespace-nowrap px-1.5 py-0.5 rounded hover:bg-slate-800"
            >
              <MapPin className="w-3 h-3 text-red-400" />
              <span>Our Centres</span>
              <ChevronDown className="w-3 h-3 opacity-70" />
            </button>

            {showCentresDropdown && (
              <div className="absolute left-0 top-full mt-1 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl py-1.5 z-50 text-slate-700 dark:text-slate-200">
                <div className="px-3 py-1 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Campus Locations
                </div>
                {centres.map((c) => (
                  <a
                    key={c.id}
                    href="#centres"
                    onClick={() => {
                      if (onSelectCenter) onSelectCenter(c.id);
                      setShowCentresDropdown(false);
                    }}
                    className="block px-3 py-1.5 text-xs hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-red-600 transition-colors"
                  >
                    {c.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Phone Helpline, Language Switcher, Student Portal */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Helpline Phone */}
          <a
            href="tel:8081300200"
            className="flex items-center gap-1.5 font-semibold text-slate-200 hover:text-white transition-colors tracking-wide"
          >
            <Phone className="w-3.5 h-3.5 text-red-400" />
            <span>80813-00200</span>
          </a>

          {/* Language Toggle */}
          <div className="flex items-center bg-slate-800 rounded-md p-0.5 border border-slate-700">
            <button
              onClick={() => setSelectedLang('EN')}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                selectedLang === 'EN' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setSelectedLang('HI')}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                selectedLang === 'HI' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              हिंदी
            </button>
          </div>

          {/* Student Login */}
          <button
            onClick={onOpenEnquiry}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 hover:border-slate-600 transition-all text-[11px]"
          >
            <User className="w-3 h-3 text-slate-400" />
            <span>Student Portal</span>
          </button>
        </div>
      </div>
    </div>
  );
}
