import React from 'react';
import { SectionHeader, Card3D, Button } from '../components/UI';
import { ExternalLink } from 'lucide-react';

const projects = [
  { id: 1, title: 'Neon Tech', category: 'Web Development', image: 'https://picsum.photos/800/600?random=10', stats: '+450% Traffic' },
  { id: 2, title: 'Aero Dynamics', category: 'Branding', image: 'https://picsum.photos/800/600?random=11', stats: 'Brand Award' },
  { id: 3, title: 'Crypto Fin', category: 'Marketing', image: 'https://picsum.photos/800/600?random=12', stats: '10k Leads' },
  { id: 4, title: 'Health AI', category: 'App Design', image: 'https://picsum.photos/800/600?random=13', stats: 'Top Rated' },
];

export const Portfolio: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Our Masterpieces" subtitle="Case Studies" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60" 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="glow">View Case Study</Button>
                </div>
              </div>
              <div className="p-6 bg-slate-900 absolute bottom-0 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-cyan-400 text-sm uppercase tracking-wider mb-1">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-400 font-bold text-lg">{project.stats}</p>
                    <ExternalLink size={16} className="text-gray-500 ml-auto mt-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
