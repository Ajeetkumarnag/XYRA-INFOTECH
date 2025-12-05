import React, { useState } from 'react';
import { SectionHeader, Button } from '../components/UI';
import { Check, Play } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    monthly: '$999',
    yearly: '$899',
    desc: 'Perfect for small startups looking to establish a digital presence.',
    features: ['Social Media Management (2 Platforms)', 'Basic SEO Setup', 'Monthly Performance Report', 'Email Support']
  },
  {
    name: 'Growth',
    monthly: '$2,499',
    yearly: '$2,199',
    desc: 'Accelerate your growth with AI-driven ad campaigns.',
    recommended: true,
    features: ['Everything in Starter', 'AI Ads Management (Google/Meta)', 'Content Creation (4 Blogs/mo)', 'Web Personalization', 'Weekly Strategy Calls']
  },
  {
    name: 'Enterprise',
    monthly: 'Custom',
    yearly: 'Custom',
    desc: 'Full-scale digital transformation for market leaders.',
    features: ['Everything in Growth', 'Custom AI Model Training', 'Full Branding Suite', 'Dedicated Account Manager', '24/7 Priority Support']
  }
];

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <section className="pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Invest in Your Growth" subtitle="Transparent Pricing" />
          
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 p-1 rounded-full border border-white/10 flex items-center relative">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isYearly ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isYearly ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Yearly <span className="text-xs ml-1 text-green-300">-20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
                  plan.recommended 
                    ? 'bg-gradient-to-b from-purple-900/40 to-slate-900 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.15)]' 
                    : 'glass-panel border-white/10'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                   <span className="text-4xl font-display font-bold text-white">{isYearly ? plan.yearly : plan.monthly}</span>
                   {plan.monthly !== 'Custom' && <span className="text-gray-500">/mo</span>}
                </div>
                <p className="text-gray-400 text-sm mb-8">{plan.desc}</p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.recommended ? 'primary' : 'outline'} className="w-full">
                  {plan.monthly === 'Custom' ? 'Contact Sales' : 'Choose Plan'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 relative overflow-hidden bg-[#020617]">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-cyan-500/30 mb-6">
                <Play className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Featured Content</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                See Innovation <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  In Action
                </span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Dive deep into our AI-driven strategies and witness how we revolutionize digital presence. Watch our latest case studies and insights on how we help brands scale effortlessly.
              </p>
              
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <Button variant="primary" icon>Visit YouTube Channel</Button>
              </a>
            </div>

            {/* Video Container */}
            <div className="order-1 lg:order-2 relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-slate-900">
                 {/* Using a placeholder video embed */}
                 <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=control" 
                  title="XYRA Promotional Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                 ></iframe>
              </div>
              {/* Decorative Glow behind video */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-2xl opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};