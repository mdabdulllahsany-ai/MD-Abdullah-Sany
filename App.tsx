import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Menu, X, Code, Monitor, Gamepad2, Mail, Download, Play, Github, Linkedin, Smartphone, ArrowRight, User, Send, MessageSquare, Loader2, CheckCircle } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { AIChat } from './components/AIChat';
import { projects, certifications, skills } from './data';
import { generateWelcomeSpeech } from './services/gemini';

// --- Layout Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '#' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#skills' },
    { name: 'Certifications', path: '#certifications' },
    { name: 'Contact', path: '#contact' },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo('#')}>
            <span className="font-display font-bold text-2xl tracking-tighter text-white">
              SANY<span className="text-amber-500">.</span>DEV
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.path)}
                  className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {item.name}
                </button>
              ))}
              <button onClick={() => scrollTo('#contact')} className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-4 py-2 rounded-md text-sm font-bold transition-colors">
                Hire Me
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.path)}
                className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 border-t border-white/5 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} MD Abdullah Sany. Built with React, Tailwind & Gemini AI.
      </p>
    </div>
  </footer>
);

const FloatingContacts = () => (
  <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-4">
    <a href="https://wa.me/880123456789" target="_blank" rel="noreferrer" className="bg-[#25D366] p-3 rounded-full text-white shadow-lg shadow-green-900/20 hover:scale-110 transition-transform">
      <Smartphone className="w-6 h-6" />
    </a>
    <a href="mailto:contact@sany.dev" className="bg-slate-800 p-3 rounded-full text-amber-500 border border-amber-500/20 shadow-lg hover:scale-110 transition-transform">
      <Mail className="w-6 h-6" />
    </a>
  </div>
);

// --- Section Components ---

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayBio = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    try {
      const audioBuffer = await generateWelcomeSpeech();
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const source = ctx.createBufferSource();
      source.buffer = await ctx.decodeAudioData(audioBuffer);
      source.connect(ctx.destination);
      source.start();
      source.onended = () => setIsPlaying(false);
    } catch (e) {
      console.error(e);
      setIsPlaying(false);
    }
  };

  return (
    <section id="#" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="text-amber-400 text-sm font-medium tracking-wide">AVAILABLE FOR HIRE</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">MD Abdullah Sany</span>
        </h1>

        <div className="h-12 mb-8 overflow-hidden">
          <div className="animate-float">
            <p className="text-xl md:text-2xl text-slate-400 font-light">Frontend Developer</p>
            <p className="text-xl md:text-2xl text-slate-400 font-light">Full-Stack Engineer</p>
            <p className="text-xl md:text-2xl text-slate-400 font-light">UI/UX Designer</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center gap-2">
            View Projects <ArrowRight className="w-4 h-4" />
          </button>
          
          <button 
            onClick={handlePlayBio}
            className={`px-8 py-3 glass-card text-white font-medium rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2 ${isPlaying ? 'animate-pulse border-amber-500' : ''}`}
          >
            {isPlaying ? 'Listening...' : 'Hear Bio (AI)'} {isPlaying ? <Monitor className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<'Innovation' | 'Web' | 'Games'>('Innovation');

  const filteredProjects = projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Featured <span className="text-amber-500">Works</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A curated selection of my technical projects, ranging from drone innovation to interactive web apps and games.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-1 rounded-xl inline-flex">
            {['Innovation', 'Web', 'Games'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-amber-500 text-slate-900 shadow-lg' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">Technical <span className="text-amber-500">Arsenal</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-xl text-white font-medium border-l-4 border-amber-500 pl-4">Core Technologies</h3>
            <div className="space-y-4">
              {skills.filter(s => s.category === 'Tech').map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-amber-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl text-white font-medium border-l-4 border-blue-500 pl-4">AI & Design</h3>
            <div className="space-y-4">
              {skills.filter(s => s.category !== 'Tech').map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Certifications & <span className="text-amber-500">Courses</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI & Programming */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-amber-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-white">AI & Programming</h3>
            </div>
            <div className="space-y-4">
              {certifications.filter(c => c.category === 'AI & Programming').map(cert => (
                <div key={cert.id} className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-medium group-hover:text-amber-400 transition-colors">{cert.title}</h4>
                      <p className="text-sm text-slate-400">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-slate-500">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="text-blue-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Design & Creative</h3>
            </div>
            <div className="space-y-4">
              {certifications.filter(c => c.category === 'Design & Creative').map(cert => (
                <div key={cert.id} className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">{cert.title}</h4>
                      <p className="text-sm text-slate-400">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-slate-500">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
              Let's <span className="text-amber-500">Connect</span>
            </h2>
            <p className="text-slate-400 mb-8">
              Have a project in mind or want to collaborate? Send me a message and let's create something amazing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
                  </div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all resize-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  isSuccess 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-amber-500 text-slate-900 hover:bg-amber-400 hover:scale-[1.02] shadow-lg shadow-amber-500/20'
                }`}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5" /> Message Sent
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="flex flex-col gap-6 lg:mt-20">
             {/* Info Card */}
             <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                   <Mail className="w-40 h-40 text-amber-500" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-6 relative z-10">
                   <div className="flex items-center gap-4 group/item">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-slate-900 transition-all">
                         <Mail className="w-5 h-5" />
                      </div>
                      <div>
                         <p className="text-sm text-slate-400 mb-1">Email Address</p>
                         <a href="mailto:hello@sany.dev" className="text-white hover:text-amber-400 transition-colors font-medium text-lg">hello@sany.dev</a>
                      </div>
                   </div>

                   <div className="flex items-center gap-4 group/item">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-slate-900 transition-all">
                         <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                         <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
                         <a href="#" className="text-white hover:text-amber-400 transition-colors font-medium text-lg">linkedin.com/in/sany</a>
                      </div>
                   </div>

                   <div className="flex items-center gap-4 group/item">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-slate-900 transition-all">
                         <Github className="w-5 h-5" />
                      </div>
                      <div>
                         <p className="text-sm text-slate-400 mb-1">GitHub</p>
                         <a href="#" className="text-white hover:text-amber-400 transition-colors font-medium text-lg">github.com/sany</a>
                      </div>
                   </div>
                </div>
             </div>

             {/* Availability Card */}
             <div className="glass-card p-6 rounded-2xl border-l-4 border-l-emerald-500 bg-emerald-500/5">
                <h3 className="text-white font-bold mb-2 flex items-center gap-3">
                   <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                   </span>
                   Available for Work
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                   I am currently open for freelance projects and full-time opportunities.
                </p>
             </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white selection:bg-amber-500/30">
        <Navbar />
        <main>
          <Hero />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
        <AIChat />
        <FloatingContacts />
      </div>
    </Router>
  );
}