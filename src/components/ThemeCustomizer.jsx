import React, { useState } from 'react';
import { Palette, Check, Sparkles, Moon, Sun, Layout, RefreshCw, X } from 'lucide-react';

export default function ThemeCustomizer({ 
  currentStyle, 
  setCurrentStyle, 
  accentColor, 
  setAccentColor, 
  isDarkMode, 
  setIsDarkMode,
  isCompact,
  setIsCompact
}) {
  const [isOpen, setIsOpen] = useState(false);

  const styles = [
    { id: 'modern', name: 'Modern Luxe (2026)', desc: 'Clean edtech aesthetic with soft gradients & refined typography' },
    { id: 'classic', name: 'Classic NEXT IAS', desc: 'High-contrast institutional styling with sharp borders' },
    { id: 'glass', name: 'Glassmorphism', desc: 'Frosted blur overlays and modern floating cards' },
  ];

  const colorPalettes = [
    { id: 'red', name: 'NEXT Crimson', hex: '#ED1C24', bg: 'bg-[#ED1C24]' },
    { id: 'navy', name: 'Royal Navy', hex: '#0B2545', bg: 'bg-[#0B2545]' },
    { id: 'indigo', name: 'Modern Indigo', hex: '#4F46E5', bg: 'bg-[#4F46E5]' },
    { id: 'emerald', name: 'Forest Emerald', hex: '#059669', bg: 'bg-[#059669]' },
    { id: 'amber', name: 'Sovereign Amber', hex: '#D97706', bg: 'bg-[#D97706]' },
  ];

  const resetToDefault = () => {
    setCurrentStyle('modern');
    setAccentColor('red');
    setIsDarkMode(false);
    setIsCompact(false);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full shadow-2xl bg-slate-900 text-white border-2 border-red-500 hover:scale-105 active:scale-95 transition-all duration-200 group"
          title="Change & Test UI Designs"
        >
          <Palette className="w-5 h-5 text-red-500 animate-spin-slow group-hover:rotate-45 transition-transform" />
          <span className="font-semibold text-sm tracking-wide hidden sm:inline">Change UI Style</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500 text-white tracking-widest uppercase">
            Live
          </span>
        </button>
      </div>

      {/* Slide-over Customization Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl h-full overflow-y-auto border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between z-10 transition-transform">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">UI Design Switcher</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Preview different looks for NEXT IAS</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Theme Mode Toggle */}
              <div className="mt-6">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Appearance Mode
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setIsDarkMode(false)}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm border-2 transition-all ${
                      !isDarkMode 
                        ? 'border-red-500 bg-red-50 text-red-700 shadow-sm' 
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>Light Mode</span>
                  </button>
                  <button
                    onClick={() => setIsDarkMode(true)}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm border-2 transition-all ${
                      isDarkMode 
                        ? 'border-red-500 bg-slate-800 text-white shadow-sm' 
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <Moon className="w-4 h-4 text-indigo-400" />
                    <span>Dark Mode</span>
                  </button>
                </div>
              </div>

              {/* UI Layout Style Options */}
              <div className="mt-6">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Visual Layout Style
                </label>
                <div className="space-y-3">
                  {styles.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setCurrentStyle(s.id)}
                      className={`w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-start justify-between ${
                        currentStyle === s.id
                          ? 'border-red-500 bg-red-50/50 dark:bg-red-950/20 text-slate-900 dark:text-white'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-sm flex items-center gap-2">
                          {s.name}
                          {currentStyle === s.id && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-red-500 text-white font-bold">Active</span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.desc}</p>
                      </div>
                      {currentStyle === s.id && <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Accent Palette */}
              <div className="mt-6">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Brand Accent Theme
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {colorPalettes.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setAccentColor(c.id)}
                      className={`group relative flex flex-col items-center p-2 rounded-xl border-2 transition-all ${
                        accentColor === c.id 
                          ? 'border-slate-900 dark:border-white scale-105' 
                          : 'border-transparent hover:border-slate-200'
                      }`}
                      title={c.name}
                    >
                      <div className={`w-8 h-8 rounded-full ${c.bg} shadow-md flex items-center justify-center text-white`}>
                        {accentColor === c.id && <Check className="w-4 h-4" />}
                      </div>
                      <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400 mt-1 truncate w-full text-center">
                        {c.name.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Layout Density */}
              <div className="mt-6">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Layout Density
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setIsCompact(false)}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-medium border-2 transition-all ${
                      !isCompact 
                        ? 'border-red-500 bg-red-50 dark:bg-slate-800 text-red-600 dark:text-white font-semibold' 
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <Layout className="w-4 h-4" />
                    Spacious (Modern)
                  </button>
                  <button
                    onClick={() => setIsCompact(true)}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-medium border-2 transition-all ${
                      isCompact 
                        ? 'border-red-500 bg-red-50 dark:bg-slate-800 text-red-600 dark:text-white font-semibold' 
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <Layout className="w-4 h-4" />
                    Compact (Dense)
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <button
                onClick={resetToDefault}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-1/2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Defaults
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-700 text-white shadow-md transition-colors w-1/2"
              >
                Apply & View
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
