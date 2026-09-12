import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Terminal, Mail, ExternalLink, Send, 
  Menu, X, ChevronRight, CheckCircle2, ShieldCheck, 
  Layers, Sparkles, Code, Globe, Server, Database, Activity, CpuIcon, Download, GraduationCap,
  Radio, Network, Wifi, Lock, GitBranch
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm("mqpzpeod");

  const skills = {
    backend: ["Golang", "Node.js", "Express.js", "Gin Framework", "RESTful APIs", "Microservices"],
    frontend: ["React.js", "Redux", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"],
    database: ["PostgreSQL", "MongoDB", "Redis", "Database Normalization"],
    devops: ["Docker", "AWS", "Nginx", "Git & GitHub", "Postman", "WebSockets / WebRTC"]
  };

  const projects = [
    {
      title: "Real-Time Connect Platform",
      category: "Distributed Core & WebRTC Mesh",
      tagColor: "from-emerald-500/30 text-emerald-300 border-emerald-500/50",
      description: "Production-grade multi-node microservices ecosystem orchestrating real-time messaging, WebRTC P2P audio/video streaming, sub-second delivery receipts, and Redis Pub/Sub cross-instance broadcast sync.",
      tech: ["Golang", "WebRTC", "WebSockets", "Redis", "Docker", "PostgreSQL", "React", "Nginx"],
      githubLink: "https://github.com/CHRISTO25/realtime-connect-platform",
      icon: <Radio className="w-6 h-6 text-emerald-400 animate-pulse" />,
      featured: true,
      metrics: "Sub-10ms Latency • Dual Chat Nodes • STUN/TURN"
    },
    {
      title: "Symphoney Backend",
      category: "Backend Microservice / API",
      tagColor: "from-blue-500/30 text-blue-300 border-blue-500/50",
      description: "Developed scalable REST APIs using Golang and Gin framework for managing application data, robust routing, and PostgreSQL integration.",
      tech: ["Golang", "Gin Framework", "PostgreSQL", "REST API"],
      githubLink: "https://github.com/CHRISTO25/symphoney-backend",
      icon: <Server className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Zntra E-Commerce Platform",
      category: "Full-Stack Web App",
      tagColor: "from-cyan-500/30 text-cyan-300 border-cyan-500/50",
      description: "Led development of an MVC-based e-commerce platform using Node.js & Express, increasing daily transactions and transaction speeds significantly.",
      tech: ["Node.js", "Express.js", "MongoDB", "Razorpay", "EJS"],
      githubLink: "https://github.com/CHRISTO25/zntra-ecommerce",
      icon: <Database className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Netflix Clone",
      category: "Frontend Web Application",
      tagColor: "from-indigo-500/30 text-indigo-300 border-indigo-500/50",
      description: "A dynamic streaming UI replica featuring media carousels, responsive grid layouts, and modern asynchronous JavaScript API integration.",
      tech: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
      githubLink: "https://github.com/CHRISTO25/netflix",
      icon: <Globe className="w-6 h-6 text-indigo-400" />
    },
    {
      title: "OLX Clone",
      category: "Full-Stack Classifieds",
      tagColor: "from-sky-500/30 text-sky-300 border-sky-500/50",
      description: "A peer-to-peer marketplace application supporting user authentication, product listings, live search filters, and structured database handling.",
      tech: ["JavaScript", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/CHRISTO25/olx_clone",
      icon: <Layers className="w-6 h-6 text-sky-400" />
    },
    {
      title: "Zomato Clone",
      category: "UI/UX & Frontend Integration",
      tagColor: "from-blue-600/30 text-blue-300 border-blue-600/50",
      description: "A comprehensive food delivery platform layout with restaurant browsing, dynamic menus, and fully responsive CSS grid design patterns.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      githubLink: "https://github.com/CHRISTO25/Zomato-clone",
      icon: <Code className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Apple Static Site",
      category: "High-Precision UI Design",
      tagColor: "from-cyan-600/30 text-cyan-300 border-cyan-600/50",
      description: "Pixel-perfect replication of Apple’s official product marketing layout, emphasizing layout precision, sleek typography, and mobile responsiveness.",
      tech: ["HTML5", "CSS3", "Responsive Design"],
      githubLink: "https://github.com/CHRISTO25/Apple-Clone",
      icon: <Sparkles className="w-6 h-6 text-cyan-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden">
      
      {/* Precision Matrix Background Grid & Hacker Ambient Gradients */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="absolute top-0 left-1/4 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-emerald-500/5 rounded-full blur-[180px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/3 right-5 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-cyan-500/5 rounded-full blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-5 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] bg-blue-600/5 rounded-full blur-[200px] pointer-events-none"></div>

      {/* TERMINAL STATUS TICKER */}
      <div className="w-full bg-[#050b14]/90 border-b border-emerald-500/20 py-1.5 px-4 text-[11px] font-mono tracking-wider flex items-center justify-between z-50 relative text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400/90 font-bold uppercase tracking-widest">SYSTEM ONLINE</span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-400">MESH: 2 NODES BALANCED</span>
        </div>
        <div className="flex items-center gap-4 text-slate-500 font-mono text-[10px]">
          <span className="hidden md:inline">CIPHER: AES-GCM-256</span>
          <span className="text-emerald-400/80 font-bold">RTT: &lt;1ms</span>
        </div>
      </div>

      {/* PERMANENT STICKY NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#030712]/80 border-b border-emerald-500/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-base sm:text-lg font-mono font-black tracking-widest text-white flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/10 group-hover:border-emerald-400 transition-colors">
              <Terminal className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="tracking-tighter">CHRISTO<span className="text-emerald-400 font-bold">.VARGHESE</span><span className="animate-pulse text-emerald-400">_</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-bold tracking-widest text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">// ABOUT</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">// EXPERTISE</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">// REPOSITORIES</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">// EDUCATION</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">// CONTACT</a>
            <a 
              href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" 
              download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf"
              className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" /> GET_CV
            </a>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none bg-slate-900 rounded-xl border border-emerald-500/20"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#050b14]/95 backdrop-blur-2xl border-b border-emerald-500/20 px-6 py-6 flex flex-col gap-4 text-left font-mono text-sm font-bold shadow-2xl">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-emerald-400 py-2.5 border-b border-white/5">// 01_ABOUT</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-emerald-400 py-2.5 border-b border-white/5">// 02_EXPERTISE</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-emerald-400 py-2.5 border-b border-white/5">// 03_PROJECTS</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-emerald-400 py-2.5 border-b border-white/5">// 04_EDUCATION</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-emerald-400 py-2.5 border-b border-white/5">// 05_CONTACT</a>
            <a 
              href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" 
              download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf"
              className="w-full py-3 rounded-lg bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-mono font-bold flex items-center justify-center gap-2 text-xs uppercase tracking-wider mt-2"
            >
              <Download className="w-4 h-4 text-emerald-400" /> DOWNLOAD_CV
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-7 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold mb-6 tracking-wider uppercase backdrop-blur-md">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> DISTRIBUTED SYSTEMS & BACKEND ARCHITECTURE
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-tight sm:leading-none">
            Engineering <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              Low-Latency Core
            </span> <br className="hidden sm:inline" />
            Infrastructure.
          </h1>
          
          <div className="p-5 sm:p-7 bg-[#050b14]/70 border border-emerald-500/20 rounded-2xl mb-8 backdrop-blur-xl shadow-2xl relative text-left w-full group hover:border-emerald-400/40 transition-colors">
            <div className="font-mono text-xs text-emerald-400/80 mb-2 flex items-center gap-2">
              <span className="text-slate-500">&gt;</span> cat developer_thesis.md
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Designing high-concurrency microservices, self-healing API gateways, and distributed state synchronization. Specializing in <strong className="text-emerald-400 font-semibold">Golang</strong>, full-duplex <strong className="text-cyan-400 font-semibold">WebSockets</strong>, <strong className="text-cyan-400 font-semibold">WebRTC</strong> media streaming, and multi-node <strong className="text-emerald-400 font-semibold">Redis</strong> brokers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-mono font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/20 transform hover:-translate-y-0.5"
            >
              Explore Repositories <ChevronRight className="w-4 h-4" />
            </a>
            <a 
              href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" 
              download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 border border-emerald-500/30 text-slate-200 font-mono font-bold hover:bg-slate-800 hover:border-emerald-400/50 transition-all backdrop-blur-md flex items-center justify-center gap-2 text-sm tracking-wider uppercase"
            >
              <Download className="w-4 h-4 text-emerald-400" /> View CV
            </a>
          </div>
        </div>

        {/* Profile Photo Display with Glowing Cyber Frame */}
        <div className="md:col-span-5 flex justify-center w-full">
          <div className="relative group w-full max-w-[280px] sm:max-w-sm">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-75 transition duration-700"></div>
            <div className="relative w-full h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-emerald-500/30 bg-[#050b14] shadow-2xl">
              <img 
                src="/PHOTO-2026-08-09-23-34-02.jpg" 
                alt="Christo Varghese" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110 grayscale-[15%] group-hover:grayscale-0 object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="p-3.5 rounded-xl bg-[#050b14]/90 backdrop-blur-xl border border-emerald-500/30 shadow-xl font-mono">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-bold text-sm">Christo Varghese</span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">MCA_GRAD</span>
                  </div>
                  <p className="text-slate-400 text-[11px] tracking-wider font-medium">Distributed Backend & Full-Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED APEX PROJECT: REAL-TIME CONNECT PLATFORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#050b14] border-2 border-emerald-500/40 p-6 sm:p-10 shadow-2xl overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-emerald-500/20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs font-mono font-bold mb-3 uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> FLAGSHIP PRODUCTION ARCHITECTURE
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
                Real-Time Connect Platform
              </h2>
            </div>
            
            <a 
              href="https://github.com/CHRISTO25/realtime-connect-platform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 self-stretch sm:self-auto justify-center"
            >
              <span>ACCESS MONOREPO</span> <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                A containerized, multi-node microservices architecture designed to support low-latency communication across distributed clients. Engineered with independent domain services (<span className="text-emerald-400 font-mono text-xs">auth-service</span>, <span className="text-emerald-400 font-mono text-xs">user-service</span>, <span className="text-emerald-400 font-mono text-xs">chat-service</span>) and orchestrated using clean architecture patterns.
              </p>
              
              {/* Technical Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20 flex items-start gap-2.5">
                  <Wifi className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Full-Duplex WebSockets</strong>
                    <span className="text-slate-400 text-[11px]">Goroutines, read/write pumps, ephemeral presence</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20 flex items-start gap-2.5">
                  <Network className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">WebRTC P2P Audio/Video</strong>
                    <span className="text-slate-400 text-[11px]">STUN/TURN traversal & custom socket signaling</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20 flex items-start gap-2.5">
                  <GitBranch className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Redis Pub/Sub Cluster</strong>
                    <span className="text-slate-400 text-[11px]">Horizontal scaling across load-balanced chat nodes</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20 flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">API Gateway & Auth</strong>
                    <span className="text-slate-400 text-[11px]">Dynamic reverse proxy & silent JWT token rotation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Node Blueprint */}
            <div className="lg:col-span-5 bg-black/60 rounded-2xl p-5 border border-emerald-500/20 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between mb-3 text-slate-500 text-[11px] pb-2 border-b border-white/5">
                <span>TOPOLOGY_MAP</span>
                <span className="text-emerald-400">DOCKER_COMPOSE</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between p-2 rounded bg-slate-900/60 border border-white/5">
                  <span className="text-emerald-300">gateway-service</span>
                  <span className="text-slate-500">:8080 (Reverse Proxy)</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900/60 border border-white/5">
                  <span className="text-cyan-300">auth-service</span>
                  <span className="text-slate-500">:8001 (JWT / Argon2)</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900/60 border border-white/5">
                  <span className="text-cyan-300">user-service</span>
                  <span className="text-slate-500">:8002 (Neon Postgres)</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900/60 border border-white/5">
                  <span className="text-emerald-300">chat-service (x2)</span>
                  <span className="text-slate-500">:8003 / :8004 (Cluster)</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900/60 border border-white/5">
                  <span className="text-yellow-400">redis-broker</span>
                  <span className="text-slate-500">:6379 (Pub/Sub State)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-emerald-500/20">
            {["Golang", "WebRTC", "Gorilla WebSockets", "Redis Pub/Sub", "PostgreSQL", "Docker Compose", "Nginx", "React", "Redux"].map((tech, idx) => (
              <span key={idx} className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-emerald-500/10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="inline-block text-xs font-mono font-bold text-emerald-400 tracking-widest uppercase mb-3 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">
              01 // BACKGROUND & PHILOSOPHY
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-6">
              Clean Architecture & Resilient Systems
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base font-light">
              Holding a Master of Computer Applications (MCA) from MACFAST with an 8.58 CGPA, I combine deep theoretical principles in Data Structures, Algorithms, and Distributed Computing with hands-on systems implementation.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 text-xs sm:text-sm font-light">
              My engineering philosophy focuses on decoupling boundaries: domain separation, thread-safe synchronization, minimal memory allocations, and automated container orchestration.
            </p>
            <div className="flex items-center w-full justify-center md:justify-start gap-4">
              <a href="https://github.com/CHRISTO25" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 bg-slate-900 rounded-xl border border-emerald-500/30 text-slate-200 hover:text-emerald-400 hover:border-emerald-400/50 transition-all font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-lg backdrop-blur-md">
                <ExternalLink className="w-4 h-4 text-emerald-400" /> GITHUB_PROFILE: @CHRISTO25
              </a>
            </div>
          </div>
          
          <div className="bg-[#050b14]/70 p-6 sm:p-10 rounded-2xl border border-emerald-500/20 shadow-2xl backdrop-blur-2xl relative overflow-hidden group hover:border-emerald-400/40 transition-colors">
            <h3 className="text-lg sm:text-xl font-mono font-bold text-white mb-6 flex items-center justify-center sm:justify-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" /> Core Engineering Tenets
            </h3>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-emerald-500/10">
                <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></div> 
                Distributed Microservices & Clean Architecture in Golang
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-emerald-500/10">
                <div className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0"></div> 
                Real-Time Messaging, Concurrency & Full-Duplex WebSockets
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-emerald-500/10">
                <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div> 
                Database Normalization & Query Profiling (Postgres / Mongo)
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-emerald-500/10">
                <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></div> 
                Container Orchestration & Reverse Proxy Routing (Docker / Nginx)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-emerald-500/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono font-bold text-emerald-400 tracking-widest uppercase mb-3 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">
            02 // TECH STACK
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4">Precision Frameworks & Tools</h2>
          <p className="text-slate-400 text-sm font-mono">The battle-tested technologies used to build reliable production environments.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Backend Card */}
          <div className="bg-[#050b14]/70 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400/60 transition-all group shadow-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-base font-mono font-bold mb-4 text-white uppercase tracking-wider">Backend Systems</h3>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400 w-full flex flex-col items-center">
              {skills.backend.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-400"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend Card */}
          <div className="bg-[#050b14]/70 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/60 transition-all group shadow-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-base font-mono font-bold mb-4 text-white uppercase tracking-wider">Frontend UI</h3>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400 w-full flex flex-col items-center">
              {skills.frontend.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-cyan-400"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Database Card */}
          <div className="bg-[#050b14]/70 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/60 transition-all group shadow-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-base font-mono font-bold mb-4 text-white uppercase tracking-wider">Databases & Cache</h3>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400 w-full flex flex-col items-center">
              {skills.database.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* DevOps Card */}
          <div className="bg-[#050b14]/70 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400/60 transition-all group shadow-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform">
              <CpuIcon className="w-6 h-6" />
            </div>
            <h3 className="text-base font-mono font-bold mb-4 text-white uppercase tracking-wider">DevOps & Cloud</h3>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400 w-full flex flex-col items-center">
              {skills.devops.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-yellow-400"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-emerald-500/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 text-center md:text-left items-center md:items-end">
          <div>
            <div className="inline-block text-xs font-mono font-bold text-emerald-400 tracking-widest uppercase mb-3 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">
              03 // REPOSITORIES
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-2">Featured Projects</h2>
            <p className="text-slate-400 text-sm font-mono">Real-world production microservices, full-stack apps, and clones.</p>
          </div>
          <a 
            href="https://github.com/CHRISTO25" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-400 hover:text-emerald-300 font-mono text-xs font-bold flex items-center gap-2 group"
          >
            VIEW_ALL_REPOSITORIES <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-[#050b14]/70 border rounded-2xl overflow-hidden flex flex-col justify-between hover:border-emerald-400/70 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group transform hover:-translate-y-1 ${
                project.featured ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/5' : 'border-slate-800'
              }`}
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/50 flex items-center justify-center shadow-inner group-hover:border-emerald-500/40 transition-colors">
                    {project.icon}
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700/60 text-slate-300 hover:text-white hover:border-emerald-400 transition-all font-mono text-xs font-bold flex items-center gap-1.5"
                    title="View Source on GitHub"
                  >
                    <span>SOURCE</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                <span className={`inline-block text-[10px] font-mono font-bold px-3 py-1 rounded border mb-4 uppercase tracking-wider bg-gradient-to-r ${project.tagColor}`}>
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors font-mono">{project.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">{project.description}</p>
              </div>

              <div className="px-6 py-4 bg-black/40 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900/80 border border-white/5 text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-emerald-500/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono font-bold text-emerald-400 tracking-widest uppercase mb-3 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">
            04 // ACADEMIC PROFILE
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4">Education & Credentials</h2>
          <p className="text-slate-400 text-sm font-mono">Foundations in computer science and software architecture.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#050b14]/70 border border-emerald-500/20 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">2024 – 2026</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-1">Master of Computer Applications (MCA)</h3>
              <p className="text-slate-300 font-medium text-sm sm:text-base mb-3">Mar Athanasios College for Advanced Studies (MACFAST), Tiruvalla</p>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold mb-4">
                CGPA: 8.58 / 10.00
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                <strong className="text-slate-300 font-semibold">Core Disciplines:</strong> Data Structures and Algorithms, Software Engineering, Operating Systems, Database Management Systems, Web Development, Computer Networks, Distributed Architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-emerald-500/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="inline-block text-xs font-mono font-bold text-emerald-400 tracking-widest uppercase mb-3 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">
              05 // DISPATCH MESSAGE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Initiate Transmission</h2>
            <p className="text-slate-400 leading-relaxed mb-8 text-sm sm:text-base font-light">
              Available for distributed systems engineering, backend Go roles, and full-stack software development. Let’s connect.
            </p>
            <div className="space-y-4 text-slate-300 w-full flex flex-col items-center md:items-start">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-emerald-500/20 shadow-xl backdrop-blur-md max-w-md w-full">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden text-left font-mono">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">EMAIL_ENDPOINT</p>
                  <a href="mailto:christovarghese2275@gmail.com" className="text-xs sm:text-sm font-bold hover:text-emerald-400 transition-colors truncate block">christovarghese2275@gmail.com</a>
                </div>
              </div>
              
              <a 
                href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" 
                download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf"
                className="w-full max-w-md p-4 rounded-xl bg-slate-900/60 border border-emerald-500/20 shadow-xl backdrop-blur-md flex items-center gap-4 hover:border-emerald-400/50 transition-colors group font-mono"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">RESUME_PAYLOAD</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-300 group-hover:text-emerald-400 transition-colors">Download PDF Document</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[#050b14]/80 border border-emerald-500/20 rounded-2xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative group hover:border-emerald-400/40 transition-colors">
            {state.succeeded ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4 animate-bounce" />
                <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mb-2">Transmission Received</h3>
                <p className="text-slate-400 text-xs font-mono">Payload processed successfully. I will acknowledge and reply shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left font-mono">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2" htmlFor="name">IDENTIFIER / NAME</label>
                  <input 
                    id="name"
                    type="text" 
                    name="name"
                    required 
                    placeholder="e.g. Alex Mercer" 
                    className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors text-xs font-medium"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2" htmlFor="email">RETURN_COORDINATE / EMAIL</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    required 
                    placeholder="alex@enterprise.com" 
                    className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors text-xs font-medium"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2" htmlFor="message">TRANSMISSION_BODY</label>
                  <textarea 
                    id="message"
                    rows="4" 
                    name="message"
                    required 
                    placeholder="Outline architecture requirements, roles, or collaboration parameters..." 
                    className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors text-xs resize-none font-medium"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-wider disabled:opacity-50 cursor-pointer"
                >
                  {state.submitting ? "Transmitting..." : "Send Transmission"} <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-slate-500 text-xs font-mono tracking-wider px-4">
        <p>© {new Date().getFullYear()} Christo Varghese. Engineered with React.js, Tailwind CSS & Golang.</p>
      </footer>

    </div>
  );
}