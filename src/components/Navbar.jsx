import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Search, BookOpen, Users, Award, 
  Calendar, Newspaper, MapPin, Sparkles, PhoneCall, ExternalLink 
} from 'lucide-react';

export default function Navbar({ onOpenEnquiry, onSearchClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courseCategories = [
    {
      title: "GS Foundation Programs",
      icon: BookOpen,
      items: [
        { name: "1-Year GS Foundation (Pre-cum-Main)", href: "#courses" },
        { name: "2-Year GS Foundation: ELEVATE", href: "#courses" },
        { name: "3-Year GS Foundation: PINNACLE", href: "#courses" },
        { name: "1-Year Concept Building: FIRST STEP", href: "#courses" },
        { name: "CSAT Comprehensive Foundation", href: "#courses" },
      ]
    },
    {
      title: "Optional Subjects",
      icon: Users,
      items: [
        { name: "Political Science & IR (PSIR)", href: "#courses" },
        { name: "Sociology Optional", href: "#courses" },
        { name: "Geography Optional", href: "#courses" },
        { name: "History Optional", href: "#courses" },
        { name: "Anthropology Optional", href: "#courses" },
      ]
    },
    {
      title: "Advanced & Value Addition",
      icon: Sparkles,
      items: [
        { name: "AIM: Integrated Mentorship", href: "#courses" },
        { name: "CA-VA: Current Affairs Value Addition", href: "#courses" },
        { name: "LAMP: 24x7 Library & Mentored Practice", href: "#courses" },
        { name: "KARTAVYAM Residential Gurukul", href: "#residential" },
      ]
    }
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800 py-2.5' 
        : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-red-500 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl tracking-tighter">N</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white leading-none font-heading">
                  NEXT <span className="text-red-600">IAS</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400">
                  CSE
                </span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wider uppercase font-semibold">
                An Initiative of MADE EASY Group
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {/* Courses with Mega Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setCoursesDropdownOpen(true)}
            onMouseLeave={() => setCoursesDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 py-2 transition-colors">
              <span>Courses</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${coursesDropdownOpen ? 'rotate-180 text-red-600' : ''}`} />
            </button>

            {coursesDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-[720px] -translate-x-12 z-50">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
                  {courseCategories.map((cat, idx) => {
                    const IconComponent = cat.icon;
                    return (
                      <div key={idx} className="space-y-3">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                          <div className="p-1.5 rounded-lg bg-red-50 dark:bg-red-950/50 text-red-600">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
                            {cat.title}
                          </h4>
                        </div>
                        <ul className="space-y-1.5">
                          {cat.items.map((item, i) => (
                            <li key={i}>
                              <a
                                href={item.href}
                                onClick={() => setCoursesDropdownOpen(false)}
                                className="block text-xs text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:translate-x-1 transition-all py-1 font-medium"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a 
            href="#batches" 
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            Batches & Fees
          </a>

          <a 
            href="#toppers" 
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            Selections & Results
          </a>

          <a 
            href="#faculty" 
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            Faculty Panel
          </a>

          <a 
            href="#current-affairs" 
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-1.5"
          >
            <span>Current Affairs</span>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          </a>

          <a 
            href="#centres" 
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            Centres
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Search */}
          <button
            onClick={onSearchClick}
            className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Search Courses, Notes, Batches"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Book Demo CTA */}
          <button
            onClick={onOpenEnquiry}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Book Free Demo Class</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenEnquiry}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-red-600 text-white"
          >
            Demo
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[110px] z-50 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 overflow-y-auto p-6 pb-24">
          <div className="space-y-4">
            <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">Popular Courses</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#courses" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
                  >
                    1-Year GS Foundation Course
                  </a>
                </li>
                <li>
                  <a 
                    href="#courses" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
                  >
                    2-Year GS Foundation: ELEVATE
                  </a>
                </li>
                <li>
                  <a 
                    href="#courses" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
                  >
                    Optional Subjects (PSIR, Socio, Geo)
                  </a>
                </li>
                <li>
                  <a 
                    href="#residential" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-semibold text-red-600"
                  >
                    Kartavyam Residential Gurukul
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <a 
                href="#batches" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800"
              >
                <Calendar className="w-4 h-4 text-red-500" />
                <span>Upcoming Batches & Fees</span>
              </a>

              <a 
                href="#toppers" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800"
              >
                <Award className="w-4 h-4 text-amber-500" />
                <span>Selections & Results (600+)</span>
              </a>

              <a 
                href="#faculty" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800"
              >
                <Users className="w-4 h-4 text-blue-500" />
                <span>Faculty Panel</span>
              </a>

              <a 
                href="#current-affairs" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800"
              >
                <Newspaper className="w-4 h-4 text-emerald-500" />
                <span>Daily Current Affairs & Quiz</span>
              </a>

              <a 
                href="#centres" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800"
              >
                <MapPin className="w-4 h-4 text-purple-500" />
                <span>Campus Centres & Locations</span>
              </a>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Free Counselling / Demo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
