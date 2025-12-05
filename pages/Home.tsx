import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Rocket, BarChart3, Globe, Code, Zap, ArrowRight, Cpu, Activity, Radio, Cloud, Layers, Command, Share2, Video, ShoppingBag, Palette, Play } from 'lucide-react';
import { Button, SectionHeader, Card3D } from '../components/UI';
import { Service } from '../types';

const services: Partial<Service>[] = [
  { id: '1', title: 'AI-Driven Ads', description: 'Maximize ROI with machine learning algorithms that optimize ad spend in real-time.', icon: Zap },
  { id: '2', title: 'Social Growth', description: 'Organic community building with automated engagement strategies and content calendars.', icon: Globe },
  { id: '3', title: 'Web Development', description: 'Futuristic, high-performance websites built with React and 3D technologies.', icon: Code },
  { id: '4', title: 'SEO & Analytics', description: 'Data-first approach to rank higher and understand user behavior deeply.', icon: BarChart3 },
  { id: '5', title: 'SMO Services', description: 'Strategic Social Media Optimization to enhance visibility and brand authority.', icon: Share2 },
  { id: '6', title: 'UGC Video Ads', description: 'Authentic user-generated content ads that drive higher engagement and conversions.', icon: Video },
  { id: '7', title: 'E-Commerce', description: 'Scalable Shopify & WooCommerce solutions designed for maximum sales performance.', icon: ShoppingBag },
  { id: '8', title: 'Branding & Design', description: 'Futuristic visual identities, logos, and brand assets that stand out.', icon: Palette },
];

const stats = [
  { label: 'Projects Delivered', value: '500+' },
  { label: 'ROI Increase', value: '300%' },
  { label: 'AI Models Used', value: '15+' },
  { label: 'Happy Clients', value: '98%' },
];

const partners = [
  { name: 'NexusAI', icon: Cpu, color: 'text-blue-400' },
  { name: 'Vortex', icon: Activity, color: 'text-purple-400' },
  { name: 'EchoSystems', icon: Radio, color: 'text-cyan-400' },
  { name: 'Stratosphere', icon: Cloud, color: 'text-indigo-400' },
  { name: 'Hyperion', icon: Zap, color: 'text-yellow-400' },
  { name: 'Zenith', icon: Layers, color: 'text-emerald-400' },
  { name: 'CoreTech', icon: Command, color: 'text-pink-400' },
];

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract 3D Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-cyan-500/30 mb-8 animate-float">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-medium text-cyan-300">Next-Gen AI Marketing is Here</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight mb-6 leading-[1.1]">
            Transform Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 drop-shadow-[0_0_20px_rgba(124,58,237,0.5)]">
              With AI Intelligence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            XYRA INFOTECH blends futuristic design with artificial intelligence to deliver smart solutions, real growth, and future-ready marketing strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/booking">
              <Button variant="primary" icon className="w-full sm:w-auto h-14 text-lg">Get Strategy Call</Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="w-full sm:w-auto h-14 text-lg">View Our Work</Button>
            </Link>
          </div>

          {/* Floating 3D Elements (Simulated with Icons/CSS) */}
          <div className="absolute top-1/2 -right-12 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
            <div className="glass-panel p-4 rounded-2xl rotate-12 border-purple-500/30">
              <Bot size={48} className="text-purple-400" />
            </div>
          </div>
          <div className="absolute bottom-20 -left-12 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
            <div className="glass-panel p-4 rounded-2xl -rotate-12 border-cyan-500/30">
              <Rocket size={48} className="text-cyan-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 relative bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Intelligent Services" subtitle="What We Do" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card3D key={index} className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-brand-gradient flex items-center justify-center shadow-lg shadow-purple-500/20 mb-6">
                    {service.icon && <service.icon className="text-white w-7 h-7" />}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 min-h-[4.5rem]">{service.description}</p>
                </div>
                <Link to="/services" className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                  Learn More <ArrowRight size={14} />
                </Link>
              </Card3D>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/services"><Button variant="secondary">View All Services</Button></Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-brand-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-display font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">{stat.label}</div>
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

      {/* Business Partners Scrolling Section */}
      <section className="py-16 bg-[#01040f] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#01040f] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#01040f] to-transparent z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">Trusted By Industry Leaders</p>
          <h3 className="text-2xl font-display font-bold text-white">Our Business Partners</h3>
        </div>
        
        <div className="flex overflow-hidden space-x-16 group">
          <div className="flex space-x-20 animate-scroll min-w-full items-center">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 grayscale hover:grayscale-0">
                <div className={`p-2 rounded-lg bg-white/5 ${partner.color}`}>
                  <partner.icon size={32} />
                </div>
                <span className={`text-xl font-display font-bold ${partner.color}`}>{partner.name}</span>
              </div>
            ))}
            {/* Duplicate for Marquee */}
            {partners.map((partner, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 grayscale hover:grayscale-0">
                <div className={`p-2 rounded-lg bg-white/5 ${partner.color}`}>
                  <partner.icon size={32} />
                </div>
                <span className={`text-xl font-display font-bold ${partner.color}`}>{partner.name}</span>
              </div>
            ))}
          </div>
           {/* Second Layer for Infinite Scroll seamlessness if needed, but the first one works if content > 100vw. 
               We will use two identical divs for the standard CSS infinite scroll technique.
           */}
           <div className="flex space-x-20 animate-scroll min-w-full items-center" aria-hidden="true">
            {partners.map((partner, i) => (
              <div key={`l2-${i}`} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 grayscale hover:grayscale-0">
                <div className={`p-2 rounded-lg bg-white/5 ${partner.color}`}>
                  <partner.icon size={32} />
                </div>
                <span className={`text-xl font-display font-bold ${partner.color}`}>{partner.name}</span>
              </div>
            ))}
            {partners.map((partner, i) => (
              <div key={`l2-dup-${i}`} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 grayscale hover:grayscale-0">
                <div className={`p-2 rounded-lg bg-white/5 ${partner.color}`}>
                  <partner.icon size={32} />
                </div>
                <span className={`text-xl font-display font-bold ${partner.color}`}>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Client Success Stories" subtitle="Testimonials" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl relative group hover:border-purple-500/30 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Zap key={j} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"XYRA transformed our online presence. Their AI-driven approach isn't just a buzzword; it actually delivered 3x leads in the first month."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600"></div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">Alex Johnson</h4>
                    <p className="text-xs text-gray-500">CEO, TechStart Inc.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-3xl p-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
            <div className="bg-[#020617] rounded-[22px] px-8 py-16 md:px-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 relative z-10">
                Ready to Dominate Your Market?
              </h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
                Join the future of digital marketing. Let XYRA INFOTECH build your success story with precision AI tools.
              </p>
              <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/booking">
                  <Button variant="primary" className="w-full sm:w-auto">Book Free Consultation</Button>
                </Link>
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto">WhatsApp Us</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};