import React from 'react';
import { SectionHeader, Card3D } from '../components/UI';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'Sarah Connor', role: 'CEO & Founder', image: 'https://picsum.photos/400/500?random=1' },
  { id: 2, name: 'David Chen', role: 'Head of AI Strategy', image: 'https://picsum.photos/400/500?random=2' },
  { id: 3, name: 'Elena Rodriguez', role: 'Creative Director', image: 'https://picsum.photos/400/500?random=3' },
  { id: 4, name: 'Marcus Johnson', role: 'Lead Developer', image: 'https://picsum.photos/400/500?random=4' },
];

export const About: React.FC = () => {
  return (
    <div className="pt-10 pb-20 relative overflow-hidden">
      {/* Hero Background Animation */}
      <div className="absolute top-0 left-0 w-full h-[800px] -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
        {/* Subtle Tech Grid for AI Feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <SectionHeader title="We Are XYRA" subtitle="Our Story" align="left" />
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              XYRA INFOTECH was born from a simple idea: <span className="text-cyan-400 font-semibold">The future of marketing is artificial intelligence.</span>
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Founded in 2023, we set out to bridge the gap between creative storytelling and data-driven machine learning. We aren't just an agency; we are a tech-first partner for brands that want to dominate their niche in the digital era.
            </p>
            <div className="flex gap-8 mt-8 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">2+</h4>
                <p className="text-xs text-gray-500 uppercase">Years of AI R&D</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                <p className="text-xs text-gray-500 uppercase">Team Experts</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
                <p className="text-xs text-gray-500 uppercase">Client Retention</p>
              </div>
            </div>
          </div>
          <div className="relative">
             {/* Abstract Team/Tech Graphic */}
            <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full animate-pulse-slow absolute inset-0 blur-3xl"></div>
            <div className="glass-panel p-2 rounded-3xl relative z-10 rotate-3 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://picsum.photos/600/600?grayscale" 
                alt="XYRA Team Office" 
                className="rounded-2xl w-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 glass-panel px-6 py-4 rounded-xl border border-cyan-500/30">
                <p className="text-cyan-400 font-bold font-display">XYRA HQ</p>
                <p className="text-xs text-white">Innovation Hub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <SectionHeader title="Our Evolution" subtitle="Timeline" />
          <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-1/2 space-y-12">
            {[
              { year: '2023', title: 'Inception', desc: 'XYRA founded with a core team of AI engineers and marketers.' },
              { year: '2024', title: 'Expansion', desc: 'Launched proprietary AI ad-optimization tool "X-Optimize".' },
              { year: '2025', title: 'The Future', desc: 'Expanding to global markets with fully autonomous marketing agents.' }
            ].map((item, i) => (
              <div key={i} className="relative pl-8 md:pl-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                <div className={`md:flex items-center justify-between w-full ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                   <div className="hidden md:block w-5/12"></div> 
                   <div className="md:w-5/12 glass-panel p-6 rounded-xl border-l-4 border-l-purple-500 hover:border-l-cyan-400 transition-all">
                      <span className="text-4xl font-display font-bold text-white/10 absolute right-4 top-2">{item.year}</span>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <SectionHeader title="The Minds Behind XYRA" subtitle="Our Team" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card3D key={member.id} className="p-0 overflow-hidden group border border-white/5 hover:border-cyan-500/50 transition-colors duration-500">
              <div className="h-80 bg-gray-900 relative overflow-hidden">
                {/* Image */}
                <img 
                   src={member.image}
                   alt={member.name}
                   className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:grayscale-0 grayscale-[0.3]"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-black/60 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-500 ease-in-out"></div>
                
                {/* Top Shine Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-50"></div>

                {/* Content Container */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  
                  {/* Decorative Line */}
                  <div className="w-12 h-1 bg-cyan-500 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                  
                  <h4 className="text-white font-bold text-xl mb-1 group-hover:text-cyan-300 transition-colors duration-300 ease-in-out">{member.name}</h4>
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-white/80 transition-colors duration-300 ease-in-out">{member.role}</p>
                  
                  {/* Social Icons */}
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 transform hover:scale-110">
                      <Linkedin size={16} />
                    </a>
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 transform hover:scale-110">
                      <Twitter size={16} />
                    </a>
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 transform hover:scale-110">
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </div>
  );
};