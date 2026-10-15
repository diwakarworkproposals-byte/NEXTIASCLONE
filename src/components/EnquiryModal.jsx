import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Mail, User, BookOpen, MapPin, Sparkles, Send } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '1-Year GS Foundation Course (Pre-cum-Main)',
    centre: 'delhi-orn',
    targetYear: '2026'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={handleReset}
          className="absolute right-5 top-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950 text-red-600 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-slate-900 dark:text-white font-heading">
                  Book Free Demo Class
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Attend a live classroom session or schedule 1-on-1 academic counselling
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs">
              {/* Full Name */}
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Mobile Phone */}
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Mobile Number (for OTP & Confirmation) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Course of Interest */}
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Interested Course
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="1-Year GS Foundation Course (Pre-cum-Main)">1-Year GS Foundation Course (Pre-cum-Main)</option>
                    <option value="2-Year GS Foundation: ELEVATE">2-Year GS Foundation: ELEVATE</option>
                    <option value="3-Year GS Foundation: PINNACLE">3-Year GS Foundation: PINNACLE</option>
                    <option value="Optional Subject (PSIR, Socio, Geo, History)">Optional Subject Specialization</option>
                    <option value="AIM Advanced Integrated Mentorship">AIM Advanced Integrated Mentorship</option>
                    <option value="KARTAVYAM Residential Gurukul">KARTAVYAM Residential Gurukul</option>
                    <option value="CA-VA Current Affairs Course">CA-VA Current Affairs Course</option>
                  </select>
                </div>
              </div>

              {/* Preferred Campus */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Preferred Campus
                  </label>
                  <select
                    value={formData.centre}
                    onChange={(e) => setFormData({ ...formData, centre: e.target.value })}
                    className="w-full py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="delhi-orn">Delhi (Old Rajinder Nagar)</option>
                    <option value="delhi-mn">Delhi (Mukherjee Nagar)</option>
                    <option value="jaipur">Jaipur Centre</option>
                    <option value="prayagraj">Prayagraj Centre</option>
                    <option value="online">Live-Online Batch</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Target UPSC Year
                  </label>
                  <select
                    value={formData.targetYear}
                    onChange={(e) => setFormData({ ...formData, targetYear: e.target.value })}
                    className="w-full py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="2026">UPSC CSE 2026</option>
                    <option value="2027">UPSC CSE 2027</option>
                    <option value="2028">UPSC CSE 2028+</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wide shadow-lg shadow-red-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Free Demo & Counselling Slot</span>
              </button>

              <p className="text-[10px] text-slate-400 text-center mt-2">
                🔒 Your contact info is completely confidential. Zero spam. An academic counselor will reach out within 2 hours.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white font-heading">
                Registration Confirmed!
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Booking Reference: <strong className="text-red-600">#NEXT-2026-{Math.floor(1000 + Math.random() * 9000)}</strong>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 text-left space-y-1.5 border border-slate-200 dark:border-slate-700">
              <p><strong>Candidate:</strong> {formData.name}</p>
              <p><strong>Mobile:</strong> {formData.phone}</p>
              <p><strong>Selected Course:</strong> {formData.course}</p>
              <p><strong>Target Year:</strong> CSE {formData.targetYear}</p>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              Our academic coordinator will contact you via WhatsApp / Call with your demo lecture access link and classroom invitation.
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs shadow"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
