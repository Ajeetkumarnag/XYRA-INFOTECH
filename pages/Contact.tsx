import React, { useState } from 'react';
import { SectionHeader, Button } from '../components/UI';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append('_subject', 'New Contact Message - XYRA');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    try {
      const response = await fetch("https://formsubmit.co/ajax/getjoyclub20062000@gmail.com", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("Message sent successfully! We will get back to you shortly.");
        e.currentTarget.reset();
      } else {
        alert("There was an issue sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Let's Build the Future" subtitle="Get in Touch" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-cyan-400">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Our HQ</h4>
                    <p className="text-gray-400">123 Innovation Tower, Tech Hub District,<br />Future City, FC 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email Us</h4>
                    <p className="text-gray-400">hello@xyrainfotech.com</p>
                    <p className="text-gray-400">support@xyrainfotech.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-green-400 shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Call Us</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-2xl overflow-hidden glass-panel relative">
               <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                 <p className="text-gray-500">Interactive Map Integration</p>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/20 rounded-full blur-[60px] -mr-10 -mt-10"></div>
            
            <h3 className="text-2xl font-display font-bold text-white mb-2 relative z-10">Send a Message</h3>
            <p className="text-gray-400 mb-8 relative z-10">Have a project in mind? Fill out the form below.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="firstName" type="text" placeholder="First Name" required className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none w-full" />
                <input name="lastName" type="text" placeholder="Last Name" required className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none w-full" />
              </div>
              <input name="email" type="email" placeholder="Email Address" required className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none w-full" />
              <select name="service" className="bg-white/5 border border-white/10 rounded-lg p-3 text-gray-400 focus:border-cyan-400 focus:outline-none w-full">
                <option value="General">Select Service Interest</option>
                <option value="Social Media">Social Media</option>
                <option value="Web Development">Web Development</option>
                <option value="PPC Ads">PPC Ads</option>
              </select>
              <textarea name="message" placeholder="Your Message" rows={4} required className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none w-full"></textarea>
              
              <Button type="submit" variant="primary" className="w-full justify-center" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin" size={18} /> Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send size={16} />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};