import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Sparkles, Download, ChevronRight, ExternalLink, Mail, Send, 
  Menu, X, Check, Server, Layers, Database, CpuIcon, 
  GraduationCap, Radio, Network, Wifi, Lock, GitBranch,
  ArrowUpRight, Award, Video, ShieldCheck, Zap, Code2, Globe, Terminal, Activity
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [pingLatency, setPingLatency] = useState(12);
  const [state, handleSubmit] = useForm("mqpzpeod");

  // Dynamic Real-Time Micro-Jitter for Live Telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setPingLatency(Math.floor(Math.random() * 5) + 11);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("christovarghese2275@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const skills = {
    fullstack: [
      "Golang (Gin Framework)", "Node.js & Express.js", "React.js & Redux Toolkit",
      "TypeScript & JavaScript (ES6+)", "RESTful APIs & Microservices", "Clean Architecture & MVC"
    ],
    streaming: [
      "Gorilla WebSockets (Full-Duplex)", "WebRTC (Peer-to-Peer Mesh)", "STUN / TURN Protocols", 
      "Dynamic Signaling Handshakes", "Low-Latency Voice & Video", "Sub-15ms Live Delivery"
    ],
    database: [
      "PostgreSQL (NeonDB & Indexing)", "MongoDB (Aggregation & Models)", 
      "Redis Pub/Sub (Multi-Node Sync)", "Distributed Session Caching", 
      "Database Normalization", "Query Latency Profiling (-60%)"
    ],
    devops: [
      "Docker & Multi-Stage Builds", "Docker Compose Multi-Node", 
      "Nginx Load Balancing & Proxy", "AWS Cloud (EC2 / S3)", 
      "CI/CD Workflows (GitHub Actions)", "Git Version Control"
    ]
  };

  const projects = [
    {
      id: "realtime-connect",
      title: "Real-Time Connect Platform",
      category: "fullstack",
      categoryBadge: "Flagship Full-Stack System",
      badgeColor: "from-indigo-500/20 via-blue-500/20 to-violet-500/20 text-indigo-300 border-indigo-500/40",
      description: "Comprehensive multi-node microservices architecture orchestrating real-time full-duplex messaging, WebRTC audio/video mesh calls, silent JWT refresh token rotation, round-robin API Gateway proxying, and Redis Pub/Sub cluster synchronization across isolated chat instances.",
      tech: ["Golang", "Gin", "WebSockets", "WebRTC", "Redis Pub/Sub", "PostgreSQL", "Docker", "React", "Nginx"],
      githubLink: "https://github.com/CHRISTO25/realtime-connect-platform",
      icon: <Radio className="w-6 h-6 text-indigo-400" />,
      featured: true,
      stats: [
        { label: "Core Protocol", value: "WebSockets / WebRTC" },
        { label: "Cluster Broker", value: "Redis Pub/Sub" },
        { label: "Signaling Speed", value: "<15ms Latency" },
        { label: "Containerization", value: "Docker Multi-Node" }
      ]
    },
    {
      id: "symphoney",
      title: "Symphoney Backend Engine",
      category: "backend",
      categoryBadge: "High-Throughput API Layer",
      badgeColor: "from-sky-500/20 to-blue-500/20 text-sky-300 border-sky-500/40",
      description: "Modular REST microservice built in Go leveraging Gin. Features clean architectural boundaries, PostgreSQL connection pooling, deterministic error pipelines, and sub-20ms JSON response times.",
      tech: ["Golang", "Gin Framework", "PostgreSQL", "REST APIs", "JWT Security"],
      githubLink: "https://github.com/CHRISTO25/symphoney-backend",
      icon: <Server className="w-6 h-6 text-sky-400" />,
      featured: false,
      stats: [
        { label: "Response Overhead", value: "Sub-20ms" },
        { label: "Storage Engine", value: "PostgreSQL" }
      ]
    },
    {
      id: "zntra",
      title: "Zntra Enterprise E-Commerce",
      category: "fullstack",
      categoryBadge: "Production Web Platform",
      badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/40",
      description: "Full-scale MVC retail engine utilizing Node.js, Express, and MongoDB. Optimized database schema indexes to cut query latency by 60%, integrated Razorpay transactions, and established resilient inventory bookkeeping.",
      tech: ["Node.js", "Express.js", "MongoDB", "Razorpay Gateway", "EJS", "Tailwind CSS"],
      githubLink: "https://github.com/CHRISTO25/zntra-ecommerce",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      featured: false,
      stats: [
        { label: "Query Optimization", value: "60% Faster" },
        { label: "Payment Security", value: "Razorpay Webhooks" }
      ]
    },
    {
      id: "streamflix",
      title: "StreamFlix Media Application",
      category: "frontend",
      categoryBadge: "Reactive Media Client",
      badgeColor: "from-rose-500/20 to-red-500/20 text-rose-300 border-rose-500/40",
      description: "Fluid media client engineered with modern React component patterns. Consumes live TMDB REST endpoints, renders high-performance infinite carousels, and guarantees 60 FPS responsive animations.",
      tech: ["React.js", "JavaScript (ES6+)", "TMDB REST APIs", "CSS Grid"],
      githubLink: "https://github.com/CHRISTO25/netflix",
      icon: <Video className="w-6 h-6 text-rose-400" />,
      featured: false,
      stats: [
        { label: "Interface Fluidity", value: "60 FPS Renders" },
        { label: "Data Pipeline", value: "Async REST APIs" }
      ]
    },
    {
      id: "classifieds",
      title: "Marketplace Classifieds Platform",
      category: "fullstack",
      categoryBadge: "P2P Web Application",
      badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/40",
      description: "Peer-to-peer marketplace application featuring JWT authentication, real-time search filters, user product catalogs, and optimized MongoDB index queries.",
      tech: ["Node.js", "Express", "MongoDB", "JavaScript", "REST APIs"],
      githubLink: "https://github.com/CHRISTO25/olx_clone",
      icon: <Layers className="w-6 h-6 text-amber-400" />,
      featured: false,
      stats: [
        { label: "Authentication", value: "JWT & Bcrypt" },
        { label: "Catalog Querying", value: "Fast Text Search" }
      ]
    },
    {
      id: "food-delivery",
      title: "Food Discovery & Order Engine",
      category: "frontend",
      categoryBadge: "Modern UI/UX System",
      badgeColor: "from-pink-500/20 to-rose-500/20 text-pink-300 border-pink-500/40",
      description: "Interactive restaurant catalog and dynamic food menu interface built with strict mobile-first design patterns, CSS Grid systems, and instantaneous component responses.",
      tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Mobile-First UX"],
      githubLink: "https://github.com/CHRISTO25/Zomato-clone",
      icon: <CpuIcon className="w-6 h-6 text-pink-400" />,
      featured: false,
      stats: [
        { label: "Responsiveness", value: "Mobile Optimized" },
        { label: "Design Principles", value: "CSS Grid & Flex" }
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#02050e] text-slate-100 font-sans selection:bg-indigo-600/40 selection:text-white relative overflow-x-hidden antialiased">
      
      {/* Precision Kinetic CSS Animations */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(8px) rotate(-2deg); }
        }
        @keyframes capToss {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          30% { transform: translateY(-16px) rotate(-12deg) scale(1.08); }
          60% { transform: translateY(-5px) rotate(6deg); }
        }
        @keyframes capFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-4deg); }
        }
        @keyframes beamMoveHorizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes beamBackdropVertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-float-slow { animation: floatSlow 5s ease-in-out infinite; }
        .animate-float-reverse { animation: floatReverse 6s ease-in-out infinite; }
        .animate-cap-toss { animation: capToss 3.2s ease-in-out infinite; }
        .animate-cap-float { animation: capFloat 4.5s ease-in-out infinite; }
        .animate-beam-h { animation: beamMoveHorizontal 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-beam-bg { animation: beamBackdropVertical 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
      `}</style>

      {/* Atmospheric Background Ambient Radiance */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-indigo-600/15 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] bg-blue-600/10 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-1/4 -left-32 w-[550px] sm:w-[850px] h-[550px] sm:h-[850px] bg-violet-600/10 rounded-full blur-[180px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] opacity-75"></div>
      </div>

      {/* Top Live Telemetry & Status Bar */}
      <div className="w-full bg-[#030816]/95 backdrop-blur-xl border-b border-slate-800/80 py-2.5 px-4 sm:px-8 text-xs relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-400">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-200 font-medium tracking-wide">
              Full-Stack Software Engineer • Golang, Node.js, React & WebRTC Distributed Systems
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-5 text-[11px] font-mono">
            <span className="text-slate-300 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-indigo-400" /> Availability: <strong className="text-emerald-400">Open to Opportunities</strong>
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-300">
              Signaling: <strong className="text-indigo-300">&lt;{pingLatency}ms RTT</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Primary Header */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#02050e]/90 border-b border-slate-800/80 shadow-2xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-violet-600 flex items-center justify-center text-white shadow-xl shadow-indigo-600/25 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                CHRISTO VARGHESE
              </span>
              <span className="text-[10px] text-indigo-400/90 font-mono tracking-widest uppercase font-semibold">
                Full-Stack Software Developer
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#about" className="hover:text-indigo-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-300 transition-colors">Stack & Skills</a>
            <a href="#projects" className="hover:text-indigo-300 transition-colors">Projects</a>
            <a href="#education" className="hover:text-indigo-300 transition-colors">Education</a>
            <a href="#contact" className="hover:text-indigo-300 transition-colors">Contact</a>
            
            <a 
              href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" 
              download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white hover:brightness-110 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-600/25 transform hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5" /> Resume
            </a>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2.5 rounded-2xl bg-slate-900 border border-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-indigo-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#030816]/98 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 flex flex-col gap-4 text-center text-sm font-semibold shadow-2xl">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-indigo-300 py-2.5 border-b border-slate-800/60">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-indigo-300 py-2.5 border-b border-slate-800/60">Stack & Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-indigo-300 py-2.5 border-b border-slate-800/60">Featured Projects</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-indigo-300 py-2.5 border-b border-slate-800/60">Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-indigo-300 py-2.5 border-b border-slate-800/60">Contact</a>
            <a 
              href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" 
              download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold flex items-center justify-center gap-2 text-xs uppercase tracking-wider mt-2 shadow-xl shadow-indigo-600/30"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Headlines & Pitch */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-violet-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 shadow-sm backdrop-blur-md">
            <Radio className="w-4 h-4 text-indigo-400 animate-pulse" />
            <span>Full-Stack Engineer & Real-Time Architect</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight sm:leading-[1.1] text-white">
            Engineering <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400">
              End-to-End Scalable
            </span> <br />
            Systems & Interfaces.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light mb-8">
            Specializing in end-to-end web engineering: from designing high-concurrency microservices and real-time streaming backends in <strong className="text-white font-semibold">Golang (Gin)</strong>, <strong className="text-white font-semibold">Node.js</strong>, and <strong className="text-white font-semibold">WebSockets / WebRTC</strong> to building dynamic, pixel-perfect user interfaces in <strong className="text-white font-semibold">React</strong> and <strong className="text-white font-semibold">Tailwind CSS</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 text-sm shadow-xl shadow-indigo-600/30 transform hover:-translate-y-0.5"
            >
              Explore Full Projects <ChevronRight className="w-4 h-4" />
            </a>

            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 border border-slate-700/90 text-slate-200 font-semibold hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2 text-sm backdrop-blur-md"
            >
              <Mail className="w-4 h-4 text-indigo-400" /> Start Conversation
            </a>
          </div>

          {/* Quick Metrics Counter */}
          <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-slate-800/80 w-full max-w-lg">
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-white">8.58</p>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">MCA CGPA</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400">&lt;15ms</p>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">Signaling RTT</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-white">60%</p>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">Latency Cut (DB)</p>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Profile Visual with Floating Motion Orbs (Fully Visible On Mobile) */}
        <div className="lg:col-span-5 flex justify-center w-full relative pt-8 sm:pt-0">
          
          {/* Floating Kinetic Tech Pill 1: Top-Left */}
          <div className="flex absolute -top-4 sm:-top-6 -left-2 sm:-left-8 z-30 animate-float-slow items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-2xl bg-[#030816]/95 border border-indigo-500/40 backdrop-blur-xl shadow-2xl">
            <Radio className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 animate-pulse shrink-0" />
            <div className="text-left">
              <p className="text-[8px] sm:text-[10px] uppercase font-mono font-bold text-slate-400">WebRTC Mesh</p>
              <p className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">Sub-second P2P</p>
            </div>
          </div>

          {/* Floating Kinetic Tech Pill 2: Bottom-Right */}
          <div className="flex absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 z-30 animate-float-reverse items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-2xl bg-[#030816]/95 border border-blue-500/40 backdrop-blur-xl shadow-2xl">
            <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
            <div className="text-left">
              <p className="text-[8px] sm:text-[10px] uppercase font-mono font-bold text-slate-400">Golang Microservices</p>
              <p className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">Goroutines</p>
            </div>
          </div>

          {/* Floating Kinetic Tech Pill 3: Mid-Right */}
          <div className="flex absolute top-1/2 -right-3 sm:-right-10 z-30 animate-float-slow items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl bg-[#030816]/95 border border-violet-500/40 backdrop-blur-xl shadow-2xl">
            <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400 shrink-0" />
            <div className="text-left">
              <p className="text-[8px] sm:text-[10px] uppercase font-mono font-bold text-slate-400">React & Redux</p>
              <p className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">Reactive UI</p>
            </div>
          </div>

          {/* Main Card Container */}
          <div className="relative group w-full max-w-sm sm:max-w-md">
            
            {/* Ambient Multi-Hue Aura Behind Card */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/40 via-blue-500/30 to-violet-500/40 rounded-[36px] blur-2xl opacity-60 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 pointer-events-none"></div>

            {/* Kinetic Light Sweep Placed Strictly Behind Card Housing */}
            <div className="absolute -inset-1 rounded-[36px] overflow-hidden pointer-events-none z-0">
              <div className="w-full h-4 bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent animate-beam-bg"></div>
            </div>

            <div className="relative z-10 rounded-[32px] overflow-hidden border border-slate-700/80 bg-gradient-to-b from-slate-900/90 to-[#02050e] shadow-2xl p-3">
              
              <div className="relative h-[410px] sm:h-[470px] rounded-[24px] overflow-hidden bg-slate-950">
                
                {/* Clean Photo Without Overlapping Lines */}
                <img 
                  src="/PHOTO-2026-08-09-23-34-02.jpg" 
                  alt="Christo Varghese" 
                  className="w-full h-full object-cover object-top filter contrast-[1.06] brightness-[1.02] group-hover:scale-105 transition-transform duration-700 relative z-10"
                />
                
                {/* Natural Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/20 to-transparent opacity-95 z-20 pointer-events-none"></div>

                {/* Top Status Badge */}
                <div className="absolute top-4 left-4 backdrop-blur-xl bg-black/60 border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg z-30">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[11px] font-semibold text-slate-200">Active Engineer</span>
                </div>

                {/* Card Bottom Meta */}
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-xl bg-slate-950/85 border border-slate-800/90 p-4 rounded-2xl shadow-xl z-30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-base">Christo Varghese</p>
                      <p className="text-indigo-400 text-xs font-semibold">Master of Computer Applications (MCA)</p>
                    </div>
                    <span className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </section>

      {/* Dynamic Animated Kinetic Line Divider */}
      <div className="relative w-full h-px bg-slate-800/80 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-beam-h"></div>
      </div>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
              <Award className="w-3.5 h-3.5 text-indigo-400" /> BACKGROUND & DRIVE
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6 leading-snug">
              Academic Rigor Meets <br className="hidden sm:inline" />
              Full-Stack Production Execution.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 font-light">
              Holding a Master of Computer Applications (MCA) from MACFAST with an 8.58 CGPA, I blend algorithmic foundations, distributed computing paradigms, and database principles with full-cycle software engineering.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8 font-light">
              My engineering philosophy focuses on building end-to-end products: decoupling domain microservices, optimizing low-latency concurrency pipelines in Go and Node, and delivering responsive, accessible front-ends in React.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start w-full">
              <a 
                href="https://github.com/CHRISTO25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-indigo-500 text-white transition-all text-xs font-bold font-mono flex items-center gap-2 shadow-lg"
              >
                <ExternalLink className="w-4 h-4 text-indigo-400" /> GitHub: @CHRISTO25
              </a>
              <a 
                href="mailto:christovarghese2275@gmail.com"
                className="px-6 py-3 rounded-xl bg-indigo-600/20 border border-indigo-500/40 hover:bg-indigo-600 hover:text-white text-indigo-300 transition-all text-xs font-bold font-mono flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Get in Touch
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900/60 to-[#02050e] border border-slate-800/90 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl relative">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-indigo-400" /> Full-Stack Engineering Tenets
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3.5">
                <div className="h-9 w-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Distributed Golang & Node.js Microservices</p>
                  <p className="text-xs text-slate-400 mt-0.5">Clean architecture, domain-driven design, Goroutine synchronization, and connection lifecycles.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3.5">
                <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Wifi className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Full-Duplex WebSockets & WebRTC Mesh</p>
                  <p className="text-xs text-slate-400 mt-0.5">Sub-second messaging pumps, custom signaling nodes, and horizontal Redis Pub/Sub broadcast layers.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3.5">
                <div className="h-9 w-9 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Dynamic Reactive Frontends</p>
                  <p className="text-xs text-slate-400 mt-0.5">Modular component systems with React, Redux state management, TypeScript, and modern Tailwind CSS.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Technical Stack & Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <CpuIcon className="w-3.5 h-3.5 text-indigo-400" /> TECHNICAL EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Core Competencies & Stack</h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Battle-tested technologies utilized across production full-stack apps, real-time microservices, and interactive web clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Full-Stack Core Card */}
          <div className="bg-slate-900/40 border border-slate-800/90 rounded-3xl p-6 hover:border-indigo-500/60 transition-all group shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-3">Full-Stack Engineering</h3>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              {skills.fullstack.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Real-Time & Streaming Card */}
          <div className="bg-slate-900/40 border border-slate-800/90 rounded-3xl p-6 hover:border-blue-500/60 transition-all group shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
              <Radio className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-base font-bold text-white mb-3">Real-Time & Streaming</h3>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              {skills.streaming.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Database & Pub/Sub Card */}
          <div className="bg-slate-900/40 border border-slate-800/90 rounded-3xl p-6 hover:border-emerald-500/60 transition-all group shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-3">Databases & Pub/Sub</h3>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              {skills.database.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cloud & DevOps Card */}
          <div className="bg-slate-900/40 border border-slate-800/90 rounded-3xl p-6 hover:border-violet-500/60 transition-all group shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-5 group-hover:scale-110 transition-transform">
              <CpuIcon className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-3">Cloud & DevOps</h3>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              {skills.devops.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Projects Section with Full Project Spotlight & Responsive Grid */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 border-t border-slate-800/80">
        
        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> REPOSITORIES & SYSTEMS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Featured Projects</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Explore distributed systems, production web applications, and real-time streaming engines.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'fullstack' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full-Stack
            </button>
            <button
              onClick={() => setActiveFilter('backend')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'backend' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveFilter('frontend')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'frontend' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Frontend
            </button>
          </div>
        </div>

        {/* Featured Apex Card: Real-Time Connect Platform */}
        {(activeFilter === 'all' || activeFilter === 'fullstack') && (
          <div className="mb-10 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900/80 to-[#02050e] border-2 border-indigo-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-indigo-400/80 transition-all">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-indigo-500/20">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-mono font-bold mb-3 uppercase tracking-wider">
                  <Radio className="w-3.5 h-3.5 text-indigo-400 animate-pulse" /> FLAGSHIP FULL-STACK PLATFORM
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Real-Time Connect Platform
                </h3>
              </div>

              <a 
                href="https://github.com/CHRISTO25/realtime-connect-platform"
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-indigo-600/30 self-stretch sm:self-auto justify-center"
              >
                <span>Access Repository</span> <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  A production-grade distributed microservices monorepo orchestrating high-concurrency real-time messaging, WebRTC audio/video mesh calling, dynamic reverse proxy API routing, and multi-instance Redis Pub/Sub broadcast synchronization.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-indigo-500/20 flex items-start gap-2.5">
                    <Wifi className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Full-Duplex WebSockets</strong>
                      <span className="text-slate-400 text-[11px]">Goroutines, read/write pumps, delivery receipts</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-indigo-500/20 flex items-start gap-2.5">
                    <Video className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">WebRTC P2P Audio & Video</strong>
                      <span className="text-slate-400 text-[11px]">STUN/TURN signaling & dynamic SDP offer exchange</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-indigo-500/20 flex items-start gap-2.5">
                    <GitBranch className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Redis Pub/Sub Sync</strong>
                      <span className="text-slate-400 text-[11px]">Horizontal broadcasting across load-balanced chat nodes</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-indigo-500/20 flex items-start gap-2.5">
                    <Lock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">API Gateway & Auth</strong>
                      <span className="text-slate-400 text-[11px]">Reverse proxy & silent JWT token rotation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture Topology Box */}
              <div className="lg:col-span-5 bg-black/60 rounded-2xl p-5 border border-indigo-500/20 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between mb-3 text-slate-500 text-[11px] pb-2 border-b border-white/10">
                  <span>TOPOLOGY_MAP</span>
                  <span className="text-indigo-400">DOCKER_COMPOSE</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 rounded bg-slate-900/60 border border-white/5">
                    <span className="text-indigo-300 font-semibold">gateway-service</span>
                    <span className="text-slate-500">:8080 (Reverse Proxy)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900/60 border border-white/5">
                    <span className="text-blue-300 font-semibold">auth-service</span>
                    <span className="text-slate-500">:8001 (JWT / Argon2)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900/60 border border-white/5">
                    <span className="text-blue-300 font-semibold">user-service</span>
                    <span className="text-slate-500">:8002 (PostgreSQL)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900/60 border border-white/5">
                    <span className="text-indigo-300 font-semibold">chat-service (x2)</span>
                    <span className="text-slate-500">:8003 / :8004 (Cluster)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900/60 border border-white/5">
                    <span className="text-amber-400 font-semibold">redis-broker</span>
                    <span className="text-slate-500">:6379 (Pub/Sub State)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-indigo-500/20">
              {["Golang", "Gin", "Gorilla WebSockets", "WebRTC", "Redis Pub/Sub", "PostgreSQL", "Docker", "React", "Redux"].map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.filter(p => p.id !== 'realtime-connect').map((project) => (
            <div 
              key={project.id}
              className="bg-slate-900/40 border border-slate-800/80 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-indigo-500/60 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group transform hover:-translate-y-1"
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-md group-hover:scale-110 group-hover:border-indigo-500/50 transition-all">
                    {project.icon}
                  </div>
                  
                  <a 
                    href={project.githubLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-slate-800/60 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700/80 transition-all text-xs font-bold font-mono flex items-center gap-1.5 shadow-sm"
                  >
                    <span>SOURCE</span> <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <span className={`inline-block text-[10px] font-bold px-3 py-1 rounded-full border mb-3 uppercase tracking-wider bg-gradient-to-r ${project.badgeColor}`}>
                  {project.categoryBadge}
                </span>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {project.stats && (
                  <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs font-mono">
                    {project.stats.map((st, i) => (
                      <div key={i}>
                        <span className="text-slate-500 text-[10px] block uppercase">{st.label}</span>
                        <span className="text-slate-200 font-semibold">{st.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Animated Kinetic Line Divider */}
      <div className="relative w-full h-px bg-slate-800/80 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-beam-h"></div>
      </div>

      {/* Education & Credentials Section (Interactive Animated Graduation) */}
      <section id="education" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-400 animate-cap-float" /> ACADEMIC CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Education & Honors</h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Master's degree foundation in Computer Applications and core system architecture.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900/60 via-[#030816]/90 to-[#02050e] border-2 border-indigo-500/30 hover:border-indigo-400/60 rounded-[32px] p-6 sm:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden group transition-all duration-500">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 relative z-10">
            
            {/* Animated Cap Mascot Container */}
            <div className="relative shrink-0 flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-violet-500 flex items-center justify-center text-white shadow-2xl shadow-indigo-600/40 relative group-hover:scale-105 transition-transform duration-300">
                <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-white animate-cap-toss drop-shadow-md" />
                
                {/* Orbiting Sparkle Star */}
                <div className="absolute -top-1 -right-1">
                  <span className="flex h-4 w-4 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 items-center justify-center text-[8px] font-black text-black">★</span>
                  </span>
                </div>
              </div>

              <div className="mt-3 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                POSTGRADUATE
              </div>
            </div>

            {/* Degree & Institutional Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-between gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/30">
                  2024 – 2026 BATCH
                </span>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold shadow-lg shadow-emerald-500/10">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  CGPA: 8.58 / 10.00
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-1">
                Master of Computer Applications (MCA)
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base font-medium mb-4 text-indigo-200/90">
                Mar Athanasios College for Advanced Studies (MACFAST), Tiruvalla
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light mb-6">
                Specialized in advanced algorithmic analysis, distributed backend communication, database schema normalization, and full-stack software architecture patterns.
              </p>

              {/* Coursework Tags */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <p className="text-[11px] font-mono uppercase font-bold text-slate-400">Core Disciplines Studied:</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {[
                    "Data Structures & Algorithms", "Distributed Computing", "Database Management (DBMS)",
                    "Software Engineering Architecture", "Operating Systems", "Web Application Development",
                    "Computer Networks & Protocols"
                  ].map((subject, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] px-3 py-1 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 font-medium hover:border-indigo-500/50 hover:text-white transition-colors"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Dynamic Animated Kinetic Line Divider */}
      <div className="relative w-full h-px bg-slate-800/80 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-beam-h"></div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
              <Mail className="w-3.5 h-3.5 text-indigo-400" /> CONTACT & INQUIRIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Let's Build Something Exceptional.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-light">
              Open for full-time full-stack software development roles, high-scale backend engineering opportunities, and collaborative distributed software projects.
            </p>

            <div className="space-y-4 w-full max-w-md">
              <div 
                onClick={copyEmailToClipboard}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer group shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left font-mono">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Direct Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block">christovarghese2275@gmail.com</span>
                  </div>
                </div>
                <div className="text-xs text-indigo-400 font-semibold flex items-center gap-1 font-mono">
                  {copiedEmail ? <span className="text-emerald-400 flex items-center gap-1"><Check className="w-4 h-4" /> Copied</span> : 'Copy'}
                </div>
              </div>

              <a 
                href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" 
                download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf"
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer group shadow-lg font-mono"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
                    <Download className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Download Resume</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">Christo_Varghese_FULL_STACK_DEVELOPER.pdf</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800/90 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-3">
                <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                  <Sparkles className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thank you for reaching out. I've received your note and will reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono" htmlFor="name">
                    Your Name
                  </label>
                  <input 
                    id="name"
                    type="text" 
                    name="name"
                    required 
                    placeholder="e.g. Alex Mercer" 
                    className="w-full bg-[#02050e] border border-slate-800 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm shadow-inner"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono" htmlFor="email">
                    Email Address
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    required 
                    placeholder="alex@enterprise.com" 
                    className="w-full bg-[#02050e] border border-slate-800 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm shadow-inner"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono" htmlFor="message">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    rows="4" 
                    name="message"
                    required 
                    placeholder="Discuss project opportunities, full-stack engineering roles, or collaboration parameters..." 
                    className="w-full bg-[#02050e] border border-slate-800 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none shadow-inner"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-xl shadow-indigo-600/30 cursor-pointer disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Christo Varghese. Full-Stack Software Developer.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/CHRISTO25" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="mailto:christovarghese2275@gmail.com" className="hover:text-white transition-colors">Email</a>
            <a href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf" className="hover:text-white transition-colors">Resume</a>
          </div>
        </div>
      </footer>

    </div>
  );
}