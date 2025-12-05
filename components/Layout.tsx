import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Mail, Phone, Instagram, Linkedin, Facebook, Twitter, ChevronRight } from 'lucide-react';
import { Logo, Button } from './UI';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'SERVICES', path: '/services' },
  { name: 'PORTFOLIO', path: '/portfolio' },
  { name: 'PRICING', path: '/pricing' },
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACT', path: '/contact' },
  { name: 'BLOG', path: '/blog' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-white selection:bg-purple-500/30 selection:text-cyan-300 relative overflow-x-hidden">
      
      {/* --- Global Minimal Engaging Background --- */}
      
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-[#020617]"></div>
        
        {/* Animated Gradient Orbs - Minimal & Fluid */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-blob mix-blend-screen opacity-60"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-blob mix-blend-screen opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse-slow mix-blend-screen opacity-40"></div>

        {/* Minimal Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`, 
            backgroundSize: '80px 80px' 
          }}
        ></div>
        
        {/* Subtle Floating Particles - Stars metaphor */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-indigo-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Mouse Spotlight (Interactive Layer) */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(79, 70, 229, 0.08), transparent 40%)`
        }}
      />
      
      {/* --- End Visuals --- */}

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Standard Variant */}
            <Link to="/" className="flex-shrink-0 group">
              <Logo variant="default" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    location.pathname === link.path ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/booking">
                <Button variant="glow" className="px-5 py-2 text-sm uppercase tracking-wider">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden fixed inset-0 z-40 bg-[#020617]/50 backdrop-blur-lg transform transition-transform duration-300 pt-24 px-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-display font-bold text-white hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/booking" className="mt-4">
              <Button variant="primary" className="w-full justify-center">BOOK APPOINTMENT</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative bg-[#000510] pt-20 pb-10 border-t border-white/5 overflow-hidden z-10">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              {/* Logo - Footer Variant with Tagline */}
              <Logo variant="footer" />
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                Transforming businesses with AI-driven strategies. We blend futuristic technology with creative brilliance to deliver real growth.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600 transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-display font-bold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {['AI Digital Marketing', 'SEO Optimization', 'Web Development', 'Branding & Design', 'Lead Generation'].map((item) => (
                  <li key={item}>
                    <Link to="/services" className="text-gray-400 hover:text-cyan-400 text-sm flex items-center gap-2 transition-colors">
                      <ChevronRight size={14} className="text-purple-500" /> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-display font-bold text-white mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin size={18} className="text-cyan-400 shrink-0 mt-1" />
                  <span>123 Innovation Tower, Tech Hub District, Future City, FC 90210</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone size={18} className="text-cyan-400 shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail size={18} className="text-cyan-400 shrink-0" />
                  <span>hello@xyrainfotech.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-display font-bold text-white mb-6">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Stay ahead of the curve. Join our AI marketing newsletter.</p>
              <form className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
                <Button variant="primary" className="py-2 text-sm">Subscribe</Button>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} XYRA INFOTECH. All rights reserved.</p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <Link to="/legal" className="hover:text-white">Privacy Policy</Link>
              <Link to="/legal" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};