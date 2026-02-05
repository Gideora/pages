import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, 
  Bot, 
  Receipt, 
  Building2, 
  ArrowRight, 
  Menu, 
  X,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  LayoutDashboard
} from 'lucide-react';

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-400">
    <path d="M20 5L30 10V20L20 25L10 20V10L20 5Z" fill="currentColor" fillOpacity="0.5"/>
    <path d="M20 15L30 20V30L20 35L10 30V20L20 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="20" r="3" fill="white"/>
  </svg>
);

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-brand-500/50 hover:bg-slate-900/80 transition-all group"
  >
    <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-brand-400" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </motion.div>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portalLink = "https://portal.gideora.com";

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-brand-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
            <Logo />
            <span>Gideora</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
            <a href={portalLink} className="group relative px-6 py-2 bg-brand-600 hover:bg-brand-500 rounded-full font-semibold transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.7)]">
              <span className="flex items-center gap-2">
                PORTAL <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 p-6 flex flex-col gap-4">
            <a href="#features" className="text-lg font-medium text-slate-300">Features</a>
            <a href="#about" className="text-lg font-medium text-slate-300">About</a>
            <a href={portalLink} className="w-full py-3 bg-brand-600 rounded-lg font-semibold text-center">
              PORTAL
            </a>
          </div>
        )}
      </nav>

      {/* Floating Action Button (Shows slightly on scroll) */}
      <motion.a
        href={portalLink}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : 100 }}
        className="fixed bottom-8 right-8 z-40 bg-brand-600 hover:bg-brand-500 text-white p-4 rounded-full shadow-lg shadow-brand-600/30 md:hidden"
      >
        <LayoutDashboard className="w-6 h-6" />
      </motion.a>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium">
            Next Generation AI Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Your Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">AI Ecosystem</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Privacy-first intelligence for your life and business. Manage expenses, empower employees, and reclaim your data.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href={portalLink} className="w-full md:w-auto px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-brand-50 transition-colors flex items-center justify-center gap-2">
              Enter Portal <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#features" className="w-full md:w-auto px-8 py-4 bg-slate-800 text-white rounded-full font-bold text-lg hover:bg-slate-700 transition-colors">
              Learn More
            </a>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-950/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Unified Intelligence</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">One platform, endless possibilities. From personal privacy to enterprise management.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Shield}
              title="Privacy First"
              description="Your data remains yours. End-to-end encryption and local-first processing protocols."
              delay={0.1}
            />
            <FeatureCard 
              icon={Bot}
              title="Your Personal AI"
              description="An assistant that evolves with you, understanding your context without compromising secrets."
              delay={0.2}
            />
            <FeatureCard 
              icon={Receipt}
              title="Expenses Manager"
              description="Automated tracking, categorization, and insights for personal and business finance."
              delay={0.3}
            />
            <FeatureCard 
              icon={Building2}
              title="Company Portal"
              description="Empower your workforce with secure AI tools, role-based access, and collaboration hubs."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Logo />
              <span>Gideora</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors"><Instagram className="w-6 h-6" /></a>
            </div>
            
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Gideora. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
