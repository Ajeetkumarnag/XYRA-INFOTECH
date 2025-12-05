import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Pricing } from './pages/Pricing';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';

// Simple placeholder for Blog to save space, but functionally consistent
const Blog = () => (
  <div className="pt-10 pb-20 text-center">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-display font-bold text-white mb-6">Latest Insights</h2>
      <p className="text-gray-400">Coming soon: Deep dives into AI marketing trends.</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/legal" element={<div className="text-center py-20 text-white">Legal Pages Placeholder</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
