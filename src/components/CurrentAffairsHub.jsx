import React, { useState } from 'react';
import { 
  Newspaper, CheckCircle2, XCircle, HelpCircle, ArrowRight, 
  Download, BookOpen, PenTool, Sparkles, RefreshCw, Compass, FileText 
} from 'lucide-react';
import { dailyEditorial, dailyQuiz, mainsQuestionOfTheDay, studyMaterialsList } from '../data/currentAffairsData';

export default function CurrentAffairsHub({ onOpenEnquiry }) {
  // Quiz state
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showMainsApproach, setShowMainsApproach] = useState(false);

  const activeQuestion = dailyQuiz[currentQuizIndex];

  const handleSelectOption = (index) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
    setIsAnswerSubmitted(true);
    if (index === activeQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    if (currentQuizIndex < dailyQuiz.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setCurrentQuizIndex(0);
      setScore(0);
    }
  };

  return (
    <section id="current-affairs" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            Free Aspirant Knowledge Hub
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Daily UPSC Current Affairs & Interactive Drill
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Sharpen your daily preparation with curated editorial summaries, interactive Prelims MCQs with instant explanations, and daily Mains frameworks.
          </p>
        </div>

        {/* 2-Column Hub Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Daily Editorial & Mains Framework (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Daily Editorial Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-xs font-bold uppercase text-red-600 dark:text-red-400 tracking-wider">
                    Today's Editorial Gist • {dailyEditorial.date}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-400">
                  {dailyEditorial.source}
                </span>
              </div>

              <div className="mt-4">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  {dailyEditorial.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-2 leading-snug">
                  {dailyEditorial.title}
                </h3>

                <div className="mt-4 space-y-2.5">
                  {dailyEditorial.summary.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                      <p className="leading-relaxed">{pt}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-bold text-slate-400 mr-1">Key Tags:</span>
                  {dailyEditorial.keywords.map((kw, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mains Question of the Day Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold uppercase text-slate-800 dark:text-slate-200 tracking-wider">
                    Mains Question of the Day
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-semibold">
                  {mainsQuestionOfTheDay.paper}
                </span>
              </div>

              <div className="mt-4">
                <p className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white leading-relaxed">
                  "{mainsQuestionOfTheDay.question}"
                </p>

                <div className="mt-4">
                  <button
                    onClick={() => setShowMainsApproach(!showMainsApproach)}
                    className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1"
                  >
                    <span>{showMainsApproach ? 'Hide Model Structure' : 'View Recommended Answer Structure'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {showMainsApproach && (
                    <div className="mt-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                      <div className="font-bold text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                        Structuring Framework (Intro • Body • Conclusion)
                      </div>
                      {mainsQuestionOfTheDay.approach.map((step, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <p>{step}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Prelims Daily Quiz (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">Daily Prelims MCQ Quiz</h3>
                    <p className="text-[11px] text-slate-400">Question {currentQuizIndex + 1} of {dailyQuiz.length}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>Score:</span>
                  <span className="text-red-600 dark:text-red-400">{score}/{dailyQuiz.length}</span>
                </div>
              </div>

              {/* Question Text */}
              <div className="mt-4">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 leading-relaxed whitespace-pre-line">
                  {activeQuestion.question}
                </p>

                {/* Option Choices */}
                <div className="mt-4 space-y-2.5">
                  {activeQuestion.options.map((opt, idx) => {
                    let optionStyle = 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400';

                    if (isAnswerSubmitted) {
                      if (idx === activeQuestion.correctAnswer) {
                        optionStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold';
                      } else if (idx === selectedOption) {
                        optionStyle = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
                      } else {
                        optionStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswerSubmitted}
                        className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center justify-between text-xs font-medium ${optionStyle}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-[10px] font-bold shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{opt}</span>
                        </div>

                        {isAnswerSubmitted && idx === activeQuestion.correctAnswer && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {isAnswerSubmitted && idx === selectedOption && idx !== activeQuestion.correctAnswer && (
                          <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Card upon submission */}
                {isAnswerSubmitted && (
                  <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-center gap-1.5 font-bold text-xs">
                      {selectedOption === activeQuestion.correctAnswer ? (
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct Answer! (+2 Marks)
                        </span>
                      ) : (
                        <span className="text-red-600 dark:text-red-400 flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> Incorrect (-0.66 Negative Marks)
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {activeQuestion.explanation}
                    </p>
                  </div>
                )}

                {/* Next / Reset Button */}
                {isAnswerSubmitted && (
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={handleNextQuestion}
                      className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs shadow hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <span>
                        {currentQuizIndex < dailyQuiz.length - 1 ? 'Next Question' : 'Restart Quiz'}
                      </span>
                      {currentQuizIndex < dailyQuiz.length - 1 ? (
                        <ArrowRight className="w-3.5 h-3.5" />
                      ) : (
                        <RefreshCw className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Free Study Material Downloads Banner */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white border border-slate-700 shadow-xl">
              <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Free Study Material & Downloads</span>
              </div>
              <h4 className="font-extrabold text-base sm:text-lg leading-snug">
                19 Yellow Books & Monthly Current Affairs Magazines
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Download sample chapters, previous 10 years solved papers, and Prelims Compass booklets.
              </p>

              <button
                onClick={onOpenEnquiry}
                className="mt-4 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Sample Study Material</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
