import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Train, CheckCircle2, Navigation, ArrowRight } from 'lucide-react';
import { centresData } from '../data/centresData';

export default function CentresSection({ activeCentreId, onOpenEnquiry }) {
  const [selectedCentreId, setSelectedCentreId] = useState(activeCentreId || 'delhi-orn');

  const selectedCentre = centresData.find((c) => c.id === selectedCentreId) || centresData[0];

  return (
    <section id="centres" className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Pan-India Presence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Our Campus Centres & Student Support
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            State-of-the-art smart lecture theatres, silent air-conditioned reading libraries, and dedicated doubt-clearing cubicles located at prime academic hubs.
          </p>
        </div>

        {/* Centre Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 mb-10 scrollbar-none">
          {centresData.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCentreId(c.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                selectedCentreId === c.id
                  ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-600/20'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
              }`}
            >
              {c.name.split('—')[0]}
            </button>
          ))}
        </div>

        {/* Active Centre Detail Card */}
        <div className="bg-slate-50 dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl grid md:grid-cols-12 gap-8 items-center">
          
          {/* Details (7 cols) */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                {selectedCentre.building}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 font-heading">
                {selectedCentre.name}
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{selectedCentre.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Train className="w-4 h-4 text-blue-500 shrink-0" />
                <span><strong>Nearest Metro:</strong> {selectedCentre.metro}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  <strong>Helpline:</strong> <a href={`tel:${selectedCentre.phone}`} className="underline font-semibold">{selectedCentre.phone}</a> | {selectedCentre.altPhone}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span><strong>Desk Timings:</strong> {selectedCentre.timings}</span>
              </div>
            </div>

            {/* Facilities */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Key Campus Facilities Available
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {selectedCentre.facilities.map((fac, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${selectedCentre.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-bold text-xs shadow transition-all flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-red-400" />
                <span>Get Google Maps Directions</span>
              </a>

              <button
                onClick={onOpenEnquiry}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-red-600/20 transition-all flex items-center gap-2"
              >
                <span>Book In-Person Academic Counselling</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Visual / Map Simulation Card (5 cols) */}
          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md p-6 space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/60 text-red-600 mx-auto flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                Walk-in Guidance Desk Open 7 Days
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Meet our senior academic advisors directly at the campus. Get your preparation strategy planned, review study material in person, and inspect smart classroom setups.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                Official Helpline: 8081300200
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
