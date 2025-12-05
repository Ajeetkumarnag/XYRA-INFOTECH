import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Logo: React.FC<{ variant?: 'default' | 'footer'; className?: string }> = ({ variant = 'default', className = "" }) => {
  const isFooter = variant === 'footer';
  
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Icon Container */}
      <div className={`relative shrink-0 flex items-center justify-center ${isFooter ? 'w-10 h-10 md:w-12 md:h-12' : 'w-8 h-8'}`}>
        {/* SVG Logo */}
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563eb" /> {/* Blue */}
              <stop offset="100%" stopColor="#9333ea" /> {/* Purple */}
            </linearGradient>
            <linearGradient id="circuitGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan */}
              <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
            </linearGradient>
          </defs>
          
          {/* Background Rounded Square */}
          <rect x="5" y="5" width="90" height="90" rx="20" fill="url(#logoGradient)" opacity="0.9" />
          
          {/* Abstract Phoenix / Bird Shape */}
          {/* Wings */}
          <path d="M20 40 C20 40 10 30 15 20 C20 10 35 30 50 35 C65 30 80 10 85 20 C90 30 80 40 80 40" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          
          {/* Head */}
          <path d="M50 35 V 25 L 55 22" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Circuit Chest Medallion */}
          <circle cx="50" cy="60" r="15" stroke="#22d3ee" strokeWidth="2" fill="rgba(0,0,0,0.3)" />
          <path d="M50 52 V 68 M 42 60 H 58" stroke="#22d3ee" strokeWidth="2" />
          
          {/* Circuit Lines Hanging Down */}
          <path d="M50 75 V 85" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M40 70 V 80" stroke="#22d3ee" strokeWidth="1.5" />
          <path d="M60 70 V 80" stroke="#22d3ee" strokeWidth="1.5" />
          
          {/* Circuit Nodes */}
          <circle cx="50" cy="88" r="2" fill="white" />
          <circle cx="40" cy="83" r="1.5" fill="white" />
          <circle cx="60" cy="83" r="1.5" fill="white" />
        </svg>
      </div>

      {/* Text Container */}
      <div className="flex flex-col justify-center">
        <div className={`font-display font-black tracking-tight leading-none flex gap-1 ${isFooter ? 'text-xl md:text-2xl' : 'text-xl'}`}>
          <span className="text-white">XYRA</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">INFOTECH</span>
        </div>
        
        {/* Tagline - Only shown on Footer variant */}
        {isFooter && (
          <div className="flex items-center gap-1.5 mt-1">
            <div className="h-[1px] w-3 md:w-5 bg-gray-600"></div>
            <span className="text-[0.5rem] md:text-[0.6rem] text-gray-400 uppercase tracking-[0.1em] font-medium whitespace-nowrap">
              AI Based Digital Marketing
            </span>
            <div className="h-[1px] w-3 md:w-5 bg-gray-600"></div>
          </div>
        )}
      </div>
    </div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon, className = '', ...props }) => {
  const baseStyle = "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all duration-300 rounded-lg group";
  
  const variants = {
    primary: "bg-brand-gradient text-white shadow-lg shadow-indigo-500/40 hover:shadow-indigo-500/60 hover:-translate-y-1",
    secondary: "bg-white text-indigo-900 hover:bg-gray-50 hover:-translate-y-1 shadow-lg",
    outline: "border border-white/30 text-white hover:bg-white/10 hover:border-white/50",
    glow: "bg-transparent border border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:bg-cyan-950/30"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="relative flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-purple-500/30 mb-4 ${align === 'center' ? 'mx-auto' : ''}`}>
      <Sparkles className="w-4 h-4 text-cyan-400" />
      <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">{subtitle}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
      {title.split(' ').map((word, i) => (
        <span key={i} className={i % 2 !== 0 ? 'text-gradient' : ''}> {word}</span>
      ))}
    </h2>
    <div className={`h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
  </div>
);

export const Card3D: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`glass-panel glass-panel-hover rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-purple-500/20"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};