import React, { useState } from 'react';
import { SectionHeader, Button } from '../components/UI';
import { Calendar, Clock, Check, Loader2 } from 'lucide-react';

export const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock calendar days
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  });

  const times = ['10:00 AM', '11:00 AM', '02:00 PM', '03:30 PM', '05:00 PM'];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Append the selected date and time to the form data
    if (selectedDate) formData.append('Appointment Date', selectedDate);
    if (selectedTime) formData.append('Appointment Time', selectedTime);
    
    // FormSubmit Configuration
    formData.append('_subject', 'New Strategy Call Booking - XYRA');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    try {
      const response = await fetch("https://formsubmit.co/ajax/getjoyclub20062000@gmail.com", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStep(3);
      } else {
        alert("There was an issue submitting your booking. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader title="Book Your Strategy Call" subtitle="Start Your Growth" />

        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-purple-500/30 relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 h-2 bg-purple-900 w-full">
            <div 
              className="h-full bg-cyan-400 transition-all duration-500" 
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>

          {step === 1 && (
            <div className="animate-float" style={{ animation: 'fadeIn 0.5s ease-out' }}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="text-purple-400" /> Select Date & Time
              </h3>
              
              <div className="mb-8">
                <label className="block text-gray-400 mb-4 text-sm uppercase tracking-wider">Available Dates</label>
                <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                  {days.map((date, i) => {
                    const dateKey = date.toDateString(); 
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedDate(dateKey)}
                        className={`flex-shrink-0 w-24 h-24 rounded-xl border flex flex-col items-center justify-center transition-all ${
                          selectedDate === dateKey
                            ? 'bg-purple-600 border-purple-400 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)]'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                        }`}
                      >
                        <span className="text-sm">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                        <span className="text-2xl font-bold">{date.getDate()}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-400 mb-4 text-sm uppercase tracking-wider">Available Slots</label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {times.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-lg border text-sm transition-all ${
                        selectedTime === time
                          ? 'bg-cyan-600 border-cyan-400 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                variant="primary" 
                className="w-full" 
                disabled={!selectedDate || !selectedTime}
                onClick={() => setStep(2)}
              >
                Continue to Details
              </Button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="animate-float" style={{ animation: 'fadeIn 0.5s ease-out' }}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="text-purple-400" /> Your Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                  <input name="fullName" required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                  <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Phone (WhatsApp)</label>
                  <input name="phone" required type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none" placeholder="+1 234 567 890" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Company Name</label>
                  <input name="company" required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none" placeholder="Acme Inc." />
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-gray-400 text-sm mb-2">What are your primary goals?</label>
                <textarea name="goals" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none h-32" placeholder="Tell us about your project..."></textarea>
              </div>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1" disabled={isSubmitting}>Back</Button>
                <Button type="submit" variant="primary" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={18} /> Processing...
                    </span>
                  ) : (
                    'Confirm Booking'
                  )}
                </Button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-12 animate-float">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                <Check size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">Booking Confirmed!</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                We have received your details. A confirmation email has been sent to your inbox.
              </p>
              <Button variant="secondary" onClick={() => { setStep(1); setSelectedDate(null); setSelectedTime(null); }}>Book Another</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};