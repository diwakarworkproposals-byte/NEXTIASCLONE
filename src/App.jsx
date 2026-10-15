import React, { useState, useEffect } from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CourseExplorer from './components/CourseExplorer';
import BatchScheduleTable from './components/BatchScheduleTable';
import WhyChooseNextIas from './components/WhyChooseNextIas';
import FacultyShowcase from './components/FacultyShowcase';
import ToppersHallOfFame from './components/ToppersHallOfFame';
import CurrentAffairsHub from './components/CurrentAffairsHub';
import ResidentialSection from './components/ResidentialSection';
import CentresSection from './components/CentresSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ThemeCustomizer from './components/ThemeCustomizer';
import EnquiryModal from './components/EnquiryModal';
import CourseDetailModal from './components/CourseDetailModal';
import CompareProgramsModal from './components/CompareProgramsModal';

export default function App() {
  // UI Customizer State
  const [currentStyle, setCurrentStyle] = useState('modern'); // 'modern', 'classic', 'glass'
  const [accentColor, setAccentColor] = useState('red'); // 'red', 'navy', 'indigo', 'emerald', 'amber'
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  // Modals state
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);
  const [activeCentreId, setActiveCentreId] = useState('delhi-orn');
  const [filterCategory, setFilterCategory] = useState('all');

  // Sync dark mode class on HTML root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handler for course matcher in hero
  const handleFindCourse = ({ targetYear, preferredMode, stage }) => {
    let cat = 'gs-foundation';
    if (preferredMode === 'residential-gurukul') {
      const el = document.getElementById('residential');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (stage === 'optional') cat = 'optional';
    if (stage === 'mains-mentorship' || stage === 'cava-test') cat = 'advanced';

    setFilterCategory(cat);
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCenter = (centerId) => {
    setActiveCentreId(centerId);
    const el = document.getElementById('centres');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Determine container styling based on currentStyle
  let styleClasses = '';
  if (currentStyle === 'classic') {
    styleClasses = 'font-sans contrast-105';
  } else if (currentStyle === 'glass') {
    styleClasses = 'backdrop-blur-sm';
  } else {
    styleClasses = 'font-sans';
  }

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 ${styleClasses} ${isCompact ? 'text-xs' : ''} transition-colors duration-200`}>
      
      {/* Top Notification & Utility Bar */}
      <TopBanner 
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
        onSelectCenter={handleSelectCenter}
      />

      {/* Main Sticky Navbar */}
      <Navbar 
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
        onSearchClick={() => {
          const el = document.getElementById('courses');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main>
        {/* Modern Split Hero Section with Interactive Course Finder */}
        <HeroSection 
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onFindCourse={handleFindCourse}
        />

        {/* Course Explorer with Tabs & Inclusions */}
        <CourseExplorer 
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onSelectCourse={(course) => setSelectedCourseForModal(course)}
          onOpenCompare={() => setIsCompareOpen(true)}
          filterCategory={filterCategory}
        />

        {/* Batches Schedule & Dynamic Fee Calculator */}
        <BatchScheduleTable 
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />

        {/* 8 Core Pillars: Why Choose NEXT IAS */}
        <WhyChooseNextIas 
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />

        {/* Star Faculty Showcase */}
        <FacultyShowcase 
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />

        {/* Toppers Hall of Fame & Results */}
        <ToppersHallOfFame 
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />

        {/* Daily Current Affairs & Interactive Prelims Quiz */}
        <CurrentAffairsHub 
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />

        {/* Kartavyam: Residential Gurukul Campus */}
        <ResidentialSection 
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />

        {/* Campus Centres & Guidance Desks */}
        <CentresSection 
          activeCentreId={activeCentreId}
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />

        {/* FAQ Accordion */}
        <FaqSection 
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />
      </main>

      {/* Comprehensive Modern Footer */}
      <Footer 
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {/* Floating Live UI Design Switcher (Answers "to see how it looks if we change the UI") */}
      <ThemeCustomizer 
        currentStyle={currentStyle}
        setCurrentStyle={setCurrentStyle}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isCompact={isCompact}
        setIsCompact={setIsCompact}
      />

      {/* Modals */}
      <EnquiryModal 
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      <CourseDetailModal 
        course={selectedCourseForModal}
        onClose={() => setSelectedCourseForModal(null)}
        onOpenEnquiry={() => {
          setSelectedCourseForModal(null);
          setIsEnquiryOpen(true);
        }}
      />

      <CompareProgramsModal 
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onOpenEnquiry={() => {
          setIsCompareOpen(false);
          setIsEnquiryOpen(true);
        }}
      />

    </div>
  );
}
