import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Sparkles, Download, ChevronRight, ExternalLink, Mail, Send, 
  Menu, X, Check, Server, Layers, Database, CpuIcon, 
  GraduationCap, Radio, Network, Wifi, Lock, GitBranch,
  ArrowUpRight, Award, Video, ShieldCheck, Zap, Code2, Globe, Terminal, Activity,
  FastForward, BookOpen, RefreshCw, Compass
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [pingLatency, setPingLatency] = useState(11);
  const [activeTrackSpeed, setActiveTrackSpeed] = useState('normal');
  const [capTossed, setCapTossed] = useState(false);
  const [globeAngle, setGlobeAngle] = useState(23.5);
  const [isRotatingFast, setIsRotatingFast] = useState(false);
  const [isLogoRunning, setIsLogoRunning] = useState(false);
  const [state, handleSubmit] = useForm("mqpzpeod");

  // Dynamic live ping telemetry
  useEffect(() => {
    const pingInterval = setInterval(() => {
      setPingLatency(Math.floor(Math.random() * 5) + 9);
    }, 2200);

    return () => {
      clearInterval(pingInterval);
    };
  }, []);

  const triggerCapAnimation = () => {
    setCapTossed(true);
    setTimeout(() => setCapTossed(false), 2400);
  };

  const triggerLogoRun = () => {
    setIsLogoRunning(true);
    setTimeout(() => setIsLogoRunning(false), 2600);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("christovarghese2275@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const spinGlobeFast = () => {
    setIsRotatingFast(true);
    setTimeout(() => setIsRotatingFast(false), 3000);
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
      icon: <Radio className="w-5 h-5 text-indigo-400 animate-pulse" />,
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
      icon: <Server className="w-5 h-5 text-sky-400" />,
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
      icon: <Database className="w-5 h-5 text-emerald-400" />,
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
      icon: <Video className="w-5 h-5 text-rose-400" />,
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
      icon: <Layers className="w-5 h-5 text-amber-400" />,
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
      icon: <CpuIcon className="w-5 h-5 text-pink-400" />,
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
    <div className="min-h-screen bg-[#02050e] text-slate-100 font-sans selection:bg-indigo-600/40 selection:text-white relative overflow-x-hidden antialiased pt-20">
      
      {/* Precision Kinetic CSS Animations */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(2deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(7px) rotate(-2deg); }
        }
        @keyframes extremeCapToss {
          0% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-38px) rotate(-24deg) scale(1.25); }
          50% { transform: translateY(-65px) rotate(360deg) scale(1.35); }
          75% { transform: translateY(-12px) rotate(375deg) scale(1.1); }
          100% { transform: translateY(0) rotate(360deg) scale(1); }
        }
        @keyframes capFloatAmbient {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-4deg); }
        }
        @keyframes transitTrainFast {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(1000%); }
        }
        @keyframes transitTrainTurbo {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(1000%); }
        }
        @keyframes laserSweepVertical {
          0% { transform: translateY(-100%); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes globeSpinY {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes globeSpinYFast {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(1440deg); }
        }
        @keyframes orbitSatellite {
          0% { transform: rotate(0deg) translateX(42px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(42px) rotate(-360deg); }
        }
        @keyframes pageTurnAction {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(-170deg); }
        }
        @keyframes logoSprintEscape {
          0% { transform: translateX(0) scale(1) rotate(0deg); opacity: 1; }
          20% { transform: translateX(-12px) scale(0.9) rotate(-15deg); }
          50% { transform: translateX(160px) translateY(-10px) scale(0.65) rotate(45deg); opacity: 0; }
          70% { transform: translateX(-160px) scale(0.2) rotate(-90deg); opacity: 0; }
          85% { transform: translateX(-20px) scale(0.9) rotate(-10deg); opacity: 1; }
          100% { transform: translateX(0) scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes legRunLeft {
          0%, 100% { transform: rotate(25deg); }
          50% { transform: rotate(-35deg); }
        }
        @keyframes legRunRight {
          0%, 100% { transform: rotate(-35deg); }
          50% { transform: rotate(25deg); }
        }
        .animate-float-slow { animation: floatSlow 5s ease-in-out infinite; }
        .animate-float-reverse { animation: floatReverse 6s ease-in-out infinite; }
        .animate-extreme-cap { animation: extremeCapToss 2.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-cap-float { animation: capFloatAmbient 4s ease-in-out infinite; }
        .animate-transit-fast { animation: transitTrainFast 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-transit-turbo { animation: transitTrainTurbo 1.1s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-laser-v { animation: laserSweepVertical 3.8s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-spin-slow { animation: spinSlow 14s linear infinite; }
        .animate-orbit-dot { animation: orbitSatellite 4s linear infinite; }
        .animate-page-flip { animation: pageTurnAction 2.2s ease-in-out infinite; transform-origin: left center; }
        .animate-globe-spin { animation: globeSpinY 16s linear infinite; transform-style: preserve-3d; }
        .animate-globe-fast { animation: globeSpinYFast 3s cubic-bezier(0.1, 0.9, 0.2, 1) forwards; transform-style: preserve-3d; }
        .animate-logo-escape { animation: logoSprintEscape 2.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-leg-l { animation: legRunLeft 0.22s infinite alternate ease-in-out; transform-origin: top center; }
        .animate-leg-r { animation: legRunRight 0.22s infinite alternate ease-in-out; transform-origin: top center; }
      `}</style>

      {/* Atmospheric Background Ambient Radiance */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] bg-indigo-600/20 rounded-full blur-[130px] animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-blue-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 -left-32 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] bg-violet-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-75"></div>
      </div>

      {/* PERMANENT FIXED NAVIGATION WRAPPER */}
      <div className="fixed top-0 left-0 right-0 z-[100] w-full">
        {/* Top Status Telemetry Ticker */}
        <div className="w-full bg-[#030816]/95 backdrop-blur-xl border-b border-slate-800/80 py-1 px-4 sm:px-8 text-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-slate-400">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-200 font-semibold tracking-wide text-[10px] sm:text-xs truncate">
                Full-Stack Software Engineer • Golang, Node.js, React &amp; WebRTC Systems
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-[11px] font-mono">
              <span className="text-slate-300 flex items-center gap-1">
                <Zap className="w-3 h-3 text-indigo-400" /> Status: <strong className="text-emerald-400">Active Engineer</strong>
              </span>
              <span className="text-slate-700">|</span>
              <span className="text-slate-300">
                Signaling: <strong className="text-indigo-300">&lt;{pingLatency}ms RTT</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Primary Navbar */}
        <header className="w-full backdrop-blur-2xl bg-[#02050e]/95 border-b border-slate-800/80 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 h-14 sm:h-16 flex items-center justify-between">
            
            {/* Custom Cyber "C" Monogram with Interactive Running-Legs Escape Animation */}
            <div 
              onClick={triggerLogoRun}
              title="Touch me to see me run!"
              className="flex items-center gap-2.5 group cursor-pointer select-none relative"
            >
              <div className={`relative ${isLogoRunning ? 'animate-logo-escape' : 'hover:scale-110 active:scale-95 transition-transform'}`}>
                {/* Outer Holographic Badge */}
                <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-indigo-600/40 border border-indigo-300/30 relative">
                  
                  {/* High-Tech Stylized 'C' Monogram with Neon Accents */}
                  <div className="relative font-mono font-black text-sm sm:text-base tracking-tighter text-white drop-shadow-[0_0_8px_#38bdf8]">
                    <span>C</span>
                    <span className="absolute -top-0.5 -right-1 h-1.5 w-1.5 rounded-full bg-cyan-300 animate-ping"></span>
                  </div>

                  {/* Running cyber legs that appear and sprint when triggered */}
                  {isLogoRunning && (
                    <div className="absolute -bottom-2.5 inset-x-0 flex justify-around pointer-events-none">
                      <div className="w-1 h-3 bg-cyan-300 rounded-full animate-leg-l shadow-[0_0_6px_#38bdf8]"></div>
                      <div className="w-1 h-3 bg-indigo-400 rounded-full animate-leg-r shadow-[0_0_6px_#6366f1]"></div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xs sm:text-base font-black tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  CHRISTO VARGHESE
                </span>
                <span className="text-[8px] sm:text-[9px] text-indigo-400 font-mono tracking-widest uppercase font-semibold">
                  Full-Stack Software Engineer
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
              <a href="#about" className="hover:text-indigo-300 transition-all">About</a>
              <a href="#skills" className="hover:text-indigo-300 transition-all">Stack &amp; Skills</a>
              <a href="#projects" className="hover:text-indigo-300 transition-all">Projects</a>
              <a href="#cyber-globe" className="hover:text-indigo-300 transition-all">Cyber Sphere</a>
              <a href="#education" className="hover:text-indigo-300 transition-all">Education</a>
              <a href="#contact" className="hover:text-indigo-300 transition-all">Contact</a>
              
              <a 
                href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" 
                download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf"
                className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider shadow-md shadow-indigo-600/25"
              >
                <Download className="w-3 h-3" /> Resume
              </a>
            </nav>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white p-1.5 rounded-lg bg-slate-900 border border-slate-800 active:scale-95 transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-indigo-400" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-[#030816]/98 backdrop-blur-2xl border-b border-slate-800 px-5 py-4 flex flex-col gap-2.5 text-center text-xs font-semibold shadow-2xl">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-indigo-300 py-1.5 border-b border-slate-800/60">About</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-indigo-300 py-1.5 border-b border-slate-800/60">Stack &amp; Skills</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-indigo-300 py-1.5 border-b border-slate-800/60">Featured Projects</a>
              <a href="#cyber-globe" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-indigo-300 py-1.5 border-b border-slate-800/60">Cyber Sphere</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-indigo-300 py-1.5 border-b border-slate-800/60">Education</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-indigo-300 py-1.5 border-b border-slate-800/60">Contact</a>
              <a 
                href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" 
                download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider mt-1 shadow-lg shadow-indigo-600/30 active:scale-95"
              >
                <Download className="w-3.5 h-3.5" /> Download Resume
              </a>
            </div>
          )}
        </header>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
        
        {/* Photo Container: Mobile First */}
        <div className="order-first lg:order-last lg:col-span-5 flex justify-center w-full relative pt-2 sm:pt-0">
          
          <div className="flex absolute -top-3 sm:-top-5 -left-1 sm:-left-6 z-30 animate-float-slow items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[#030816]/95 border border-indigo-500/40 backdrop-blur-xl shadow-xl hover:scale-105 transition-transform cursor-pointer">
            <Radio className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-400 animate-pulse shrink-0" />
            <div className="text-left">
              <p className="text-[7px] sm:text-[8px] uppercase font-mono font-bold text-slate-400">WebRTC Mesh</p>
              <p className="text-[9px] sm:text-[11px] font-bold text-white whitespace-nowrap">Sub-second P2P</p>
            </div>
          </div>

          <div className="flex absolute -bottom-3 sm:-bottom-5 -right-1 sm:-right-5 z-30 animate-float-reverse items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[#030816]/95 border border-blue-500/40 backdrop-blur-xl shadow-xl hover:scale-105 transition-transform cursor-pointer">
            <Server className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <div className="text-left">
              <p className="text-[7px] sm:text-[8px] uppercase font-mono font-bold text-slate-400">Golang Core</p>
              <p className="text-[9px] sm:text-[11px] font-bold text-white whitespace-nowrap">Goroutines</p>
            </div>
          </div>

          <div className="flex absolute top-1/2 -right-2 sm:-right-6 z-30 animate-float-slow items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[#030816]/95 border border-violet-500/40 backdrop-blur-xl shadow-xl hover:scale-105 transition-transform cursor-pointer">
            <Code2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
            <div className="text-left">
              <p className="text-[7px] sm:text-[8px] uppercase font-mono font-bold text-slate-400">React &amp; Redux</p>
              <p className="text-[9px] sm:text-[11px] font-bold text-white whitespace-nowrap">Reactive UI</p>
            </div>
          </div>

          <div className="relative group w-full max-w-[260px] sm:max-w-sm md:max-w-md">
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500/40 via-blue-500/30 to-violet-500/40 rounded-[28px] blur-xl opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"></div>

            <div className="absolute -inset-0.5 rounded-[28px] overflow-hidden pointer-events-none z-0">
              <div className="w-full h-6 bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent animate-laser-v"></div>
            </div>

            <div className="relative z-10 rounded-[26px] overflow-hidden border border-slate-700/80 bg-gradient-to-b from-slate-900/90 to-[#02050e] shadow-xl p-2 sm:p-2.5 hover:border-indigo-400/70 transition-all duration-300">
              <div className="relative h-[310px] sm:h-[390px] rounded-[18px] overflow-hidden bg-slate-950">
                <img 
                  src="/PHOTO-2026-08-09-23-34-02.jpg" 
                  alt="Christo Varghese" 
                  className="w-full h-full object-cover object-top filter contrast-[1.06] brightness-[1.02] group-hover:scale-105 transition-transform duration-700 relative z-10"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/20 to-transparent opacity-95 z-20 pointer-events-none"></div>

                <div className="absolute top-2.5 left-2.5 backdrop-blur-xl bg-black/60 border border-white/10 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-md z-30">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[9px] font-semibold text-slate-200">Active Engineer</span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 backdrop-blur-xl bg-slate-950/85 border border-slate-800/90 p-2.5 sm:p-3 rounded-xl shadow-lg z-30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-xs sm:text-sm">Christo Varghese</p>
                      <p className="text-indigo-400 text-[10px] sm:text-xs font-semibold">Master of Computer Applications (MCA)</p>
                    </div>
                    <span className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 animate-pulse">
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Content Column */}
        <div className="order-last lg:order-first lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-violet-500/10 border border-indigo-500/30 text-indigo-300 text-[11px] font-semibold mb-3 shadow-sm backdrop-blur-md">
            <Radio className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>Full-Stack Software Engineer &amp; Distributed Architect</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3 leading-tight text-white">
            Engineering <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400">
              End-to-End Scalable
            </span> <br />
            Systems &amp; Interfaces.
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl font-light mb-5">
            Specializing in end-to-end software engineering: from designing high-concurrency microservices and real-time streaming backends in <strong className="text-white font-semibold">Golang (Gin)</strong>, <strong className="text-white font-semibold">Node.js</strong>, and <strong className="text-white font-semibold">WebSockets / WebRTC</strong> to building dynamic, reactive user interfaces in <strong className="text-white font-semibold">React</strong> and <strong className="text-white font-semibold">Tailwind CSS</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white font-bold hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider shadow-md shadow-indigo-600/30 transform hover:-translate-y-0.5"
            >
              Explore Full Projects <ChevronRight className="w-3.5 h-3.5" />
            </a>

            <a 
              href="#contact" 
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/90 text-slate-200 font-semibold hover:bg-slate-800 hover:text-white active:scale-95 transition-all flex items-center justify-center gap-1.5 text-xs backdrop-blur-md"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" /> Start Conversation
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-4 mt-5 border-t border-slate-800/80 w-full max-w-md">
            <div className="text-center lg:text-left">
              <p className="text-lg sm:text-xl font-extrabold text-white">8.58</p>
              <p className="text-[10px] text-slate-400 mt-0.5 font-mono">MCA CGPA</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg sm:text-xl font-extrabold text-indigo-400">&lt;15ms</p>
              <p className="text-[10px] text-slate-400 mt-0.5 font-mono">Signaling RTT</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg sm:text-xl font-extrabold text-white">60%</p>
              <p className="text-[10px] text-slate-400 mt-0.5 font-mono">Latency Cut (DB)</p>
            </div>
          </div>

        </div>

      </section>

      {/* 🚀 HIGH-SPEED TRANSIT RAIL TRACK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 relative">
        <div className="p-3 rounded-2xl bg-slate-950/85 border border-slate-800 backdrop-blur-2xl shadow-xl flex flex-col gap-2 relative overflow-hidden group hover:border-indigo-500/50 transition-all">
          
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-indigo-300 font-bold">
              <Activity className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
              <span className="tracking-wider uppercase text-[10px] sm:text-xs">High-Concurrency Transit Bus (Round-Robin Node Dispatch)</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[9px] text-slate-400 font-mono hidden sm:inline">SPEED:</span>
              <button
                onClick={() => setActiveTrackSpeed((prev) => (prev === 'normal' ? 'turbo' : 'normal'))}
                className="px-2 py-0.5 rounded-md bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all text-[9px] font-bold font-mono flex items-center gap-1 active:scale-90"
              >
                <FastForward className="w-2.5 h-2.5" /> {activeTrackSpeed === 'normal' ? '1X' : 'TURBO'}
              </button>
            </div>
          </div>

          <div className="relative w-full h-3 sm:h-3.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800 flex items-center shadow-inner">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#334155_2px,transparent_2px)] bg-[size:16px_100%] opacity-40"></div>
            
            <div 
              className={`absolute top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-transparent via-cyan-400 to-indigo-400 rounded-full shadow-[0_0_18px_#38bdf8] flex items-center justify-end pr-1.5 ${
                activeTrackSpeed === 'turbo' ? 'animate-transit-turbo' : 'animate-transit-fast'
              }`}
            >
              <div className="h-2 w-2 rounded-full bg-white animate-ping"></div>
            </div>
          </div>

          <div className="flex justify-between text-[9px] font-mono text-slate-500">
            <span>CLIENT_ENTRY :8080</span>
            <span className="hidden sm:inline">ROUTING ENGINE ➔ CHAT_NODE_1 &amp; 2 CLUSTER</span>
            <span>REDIS_PUBSUB :6379</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-2">
              <Award className="w-3.5 h-3.5 text-indigo-400" /> BACKGROUND &amp; DRIVE
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 leading-snug">
              Academic Rigor Meets <br className="hidden sm:inline" />
              Full-Stack Production Execution.
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-2 font-light">
              Holding a Master of Computer Applications (MCA) from MACFAST with an 8.58 CGPA, I blend algorithmic foundations, distributed computing paradigms, and database principles with full-cycle software engineering.
            </p>

            <p className="text-slate-400 text-xs leading-relaxed mb-5 font-light">
              My engineering philosophy focuses on building end-to-end products: decoupling domain microservices, optimizing low-latency concurrency pipelines in Go and Node, and delivering responsive, accessible front-ends in React.
            </p>

            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start w-full">
              <a 
                href="https://github.com/CHRISTO25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-indigo-500 text-white active:scale-95 transition-all text-xs font-bold font-mono flex items-center gap-1.5 shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5 text-indigo-400" /> GitHub: @CHRISTO25
              </a>
              <a 
                href="mailto:christovarghese2275@gmail.com"
                className="px-5 py-2 rounded-xl bg-indigo-600/20 border border-indigo-500/40 hover:bg-indigo-600 hover:text-white text-indigo-300 active:scale-95 transition-all text-xs font-bold font-mono flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" /> Get in Touch
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900/60 to-[#02050e] border border-slate-800/90 rounded-2xl p-4 sm:p-5 backdrop-blur-2xl shadow-xl relative hover:border-indigo-500/40 transition-all">
            <h3 className="text-sm sm:text-base font-bold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" /> Full-Stack Engineering Tenets
            </h3>

            <div className="space-y-2.5 relative z-10">
              <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-2.5 hover:border-indigo-500/40 transition-all">
                <div className="h-7 w-7 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Server className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Distributed Golang &amp; Node.js Microservices</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Clean architecture, domain-driven design, Goroutine synchronization, and connection lifecycles.</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-2.5 hover:border-blue-500/40 transition-all">
                <div className="h-7 w-7 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Wifi className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Full-Duplex WebSockets &amp; WebRTC Mesh</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Sub-second messaging pumps, custom signaling nodes, and horizontal Redis Pub/Sub broadcast layers.</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-2.5 hover:border-violet-500/40 transition-all">
                <div className="h-7 w-7 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Dynamic Reactive Frontends</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Modular component systems with React, Redux state management, TypeScript, and modern Tailwind CSS.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Technical Stack & Skills Section: Fully Centered Items & Balanced Geometry */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-2">
            <CpuIcon className="w-3.5 h-3.5 text-indigo-400" /> TECHNICAL EXPERTISE
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Core Competencies &amp; Stack</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Battle-tested technologies utilized across production full-stack apps, real-time microservices, and interactive web clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-slate-900/40 border border-slate-800/90 rounded-2xl p-4 hover:border-indigo-500/60 hover:-translate-y-1 transition-all group shadow-xl flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-2 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-2">Full-Stack Engineering</h3>
            <ul className="space-y-1.5 text-xs text-slate-300 font-medium flex flex-col items-center w-full">
              {skills.fullstack.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center gap-1.5 text-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/90 rounded-2xl p-4 hover:border-blue-500/60 hover:-translate-y-1 transition-all group shadow-xl flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2 group-hover:scale-110 transition-transform">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <h3 className="text-sm font-bold text-white mb-2">Real-Time &amp; Streaming</h3>
            <ul className="space-y-1.5 text-xs text-slate-300 font-medium flex flex-col items-center w-full">
              {skills.streaming.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center gap-1.5 text-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/90 rounded-2xl p-4 hover:border-emerald-500/60 hover:-translate-y-1 transition-all group shadow-xl flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-2">Databases &amp; Pub/Sub</h3>
            <ul className="space-y-1.5 text-xs text-slate-300 font-medium flex flex-col items-center w-full">
              {skills.database.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center gap-1.5 text-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/90 rounded-2xl p-4 hover:border-violet-500/60 hover:-translate-y-1 transition-all group shadow-xl flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-2 group-hover:scale-110 transition-transform">
              <CpuIcon className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-2">Cloud &amp; DevOps</h3>
            <ul className="space-y-1.5 text-xs text-slate-300 font-medium flex flex-col items-center w-full">
              {skills.devops.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center gap-1.5 text-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0"></span> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 border-t border-slate-800/80">
        
        <div className="flex flex-col items-center text-center mb-8 gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" /> REPOSITORIES &amp; SYSTEMS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Featured Projects</h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg">
            Explore distributed systems, production web applications, and real-time streaming engines.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 shadow-lg mt-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-bold active:scale-95 transition-all cursor-pointer ${
                activeFilter === 'all' 
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-3 py-1 rounded-lg text-xs font-bold active:scale-95 transition-all cursor-pointer ${
                activeFilter === 'fullstack' 
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full-Stack
            </button>
            <button
              onClick={() => setActiveFilter('backend')}
              className={`px-3 py-1 rounded-lg text-xs font-bold active:scale-95 transition-all cursor-pointer ${
                activeFilter === 'backend' 
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveFilter('frontend')}
              className={`px-3 py-1 rounded-lg text-xs font-bold active:scale-95 transition-all cursor-pointer ${
                activeFilter === 'frontend' 
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Frontend
            </button>
          </div>
        </div>

        {(activeFilter === 'all' || activeFilter === 'fullstack') && (
          <div className="mb-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/80 to-[#02050e] border-2 border-indigo-500/40 p-4 sm:p-6 shadow-2xl relative overflow-hidden group hover:border-indigo-400/80 hover:shadow-[0_0_35px_rgba(99,102,241,0.2)] transition-all">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 pb-4 border-b border-indigo-500/20 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-[10px] font-mono font-bold mb-1.5 uppercase tracking-wider">
                  <Radio className="w-3 h-3 text-indigo-400 animate-pulse" /> FLAGSHIP FULL-STACK PLATFORM
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Real-Time Connect Platform
                </h3>
              </div>

              <a 
                href="https://github.com/CHRISTO25/realtime-connect-platform"
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-indigo-600/30 self-stretch sm:self-auto justify-center"
              >
                <span>Access Repository</span> <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-4 items-center">
              <div className="lg:col-span-7 space-y-2.5 text-center lg:text-left">
                <p className="text-slate-300 text-xs leading-relaxed font-light">
                  A production-grade distributed microservices monorepo orchestrating high-concurrency real-time messaging, WebRTC audio/video mesh calling, dynamic reverse proxy API routing, and multi-instance Redis Pub/Sub broadcast synchronization.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs text-left">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-indigo-500/20 flex items-start gap-2 hover:border-indigo-400/50 hover:bg-slate-900/60 transition-all">
                    <Wifi className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-[11px]">Full-Duplex WebSockets</strong>
                      <span className="text-slate-400 text-[10px]">Goroutines, read/write pumps</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-indigo-500/20 flex items-start gap-2 hover:border-blue-400/50 hover:bg-slate-900/60 transition-all">
                    <Video className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-[11px]">WebRTC P2P Audio &amp; Video</strong>
                      <span className="text-slate-400 text-[10px]">STUN/TURN signaling exchange</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-indigo-500/20 flex items-start gap-2 hover:border-indigo-400/50 hover:bg-slate-900/60 transition-all">
                    <GitBranch className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-[11px]">Redis Pub/Sub Sync</strong>
                      <span className="text-slate-400 text-[10px]">Horizontal broadcast cluster</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-indigo-500/20 flex items-start gap-2 hover:border-blue-400/50 hover:bg-slate-900/60 transition-all">
                    <Lock className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-[11px]">API Gateway &amp; Auth</strong>
                      <span className="text-slate-400 text-[10px]">Reverse proxy &amp; silent JWT rotation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-black/60 rounded-xl p-3.5 border border-indigo-500/20 font-mono text-[11px] text-slate-300 shadow-xl text-left">
                <div className="flex items-center justify-between mb-2 text-slate-500 text-[10px] pb-1 border-b border-white/10">
                  <span>TOPOLOGY_MAP</span>
                  <span className="text-indigo-400">DOCKER_COMPOSE</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between p-1 rounded bg-slate-900/60 border border-white/5">
                    <span className="text-indigo-300 font-semibold">gateway-service</span>
                    <span className="text-slate-500">:8080 (Proxy)</span>
                  </div>
                  <div className="flex justify-between p-1 rounded bg-slate-900/60 border border-white/5">
                    <span className="text-blue-300 font-semibold">auth-service</span>
                    <span className="text-slate-500">:8001 (JWT)</span>
                  </div>
                  <div className="flex justify-between p-1 rounded bg-slate-900/60 border border-white/5">
                    <span className="text-blue-300 font-semibold">user-service</span>
                    <span className="text-slate-500">:8002 (Postgres)</span>
                  </div>
                  <div className="flex justify-between p-1 rounded bg-slate-900/60 border border-white/5">
                    <span className="text-indigo-300 font-semibold">chat-service (x2)</span>
                    <span className="text-slate-500">:8003 / :8004</span>
                  </div>
                  <div className="flex justify-between p-1 rounded bg-slate-900/60 border border-white/5">
                    <span className="text-amber-400 font-semibold">redis-broker</span>
                    <span className="text-slate-500">:6379 (State)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-indigo-500/20 justify-center lg:justify-start">
              {["Golang", "Gin", "Gorilla WebSockets", "WebRTC", "Redis Pub/Sub", "PostgreSQL", "Docker", "React", "Redux"].map((tech, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-[10px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.filter(p => p.id !== 'realtime-connect').map((project) => (
            <div 
              key={project.id}
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-indigo-500/60 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group transform hover:-translate-y-1"
            >
              <div className="p-4 text-left">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 shadow-sm group-hover:scale-110 group-hover:border-indigo-500/50 group-hover:rotate-6 transition-all duration-300">
                    {project.icon}
                  </div>
                  
                  <a 
                    href={project.githubLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-slate-800/60 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700/80 active:scale-95 transition-all text-[11px] font-bold font-mono flex items-center gap-1 shadow-sm"
                  >
                    <span>SOURCE</span> <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <span className={`inline-block text-[9px] font-bold px-2.5 py-0.5 rounded-full border mb-2 uppercase tracking-wider bg-gradient-to-r ${project.badgeColor}`}>
                  {project.categoryBadge}
                </span>

                <h3 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-xs leading-relaxed font-light mb-3">
                  {project.description}
                </p>

                {project.stats && (
                  <div className="grid grid-cols-2 gap-2 mb-1 p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[10px] font-mono">
                    {project.stats.map((st, i) => (
                      <div key={i}>
                        <span className="text-slate-500 text-[8px] block uppercase">{st.label}</span>
                        <span className="text-slate-200 font-semibold">{st.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800/80 flex flex-wrap gap-1">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌐 CYBER REVOLVING GLOBE (INTERACTIVE DESK-STAND WITH TILT AXIS) */}
      <section id="cyber-globe" className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 border-t border-slate-800/80 relative">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900/90 to-[#030716] border-2 border-indigo-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Globe Description */}
          <div className="lg:max-w-md text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin" /> CYBER SPHERE MATRIX
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Software Governing the Modern World
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
              Interactive physical-style cybernetic globe modeled on a 23.5° axial tilt. Built to visualize distributed node signaling, edge computation, and global real-time synchronization.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <button
                onClick={spinGlobeFast}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all cursor-pointer"
              >
                <FastForward className="w-3.5 h-3.5" /> Fast Axial Spin
              </button>
              <button
                onClick={() => setGlobeAngle((prev) => (prev === 23.5 ? 0 : 23.5))}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs hover:border-indigo-400 active:scale-95 transition-all cursor-pointer"
              >
                Toggle Tilt: {globeAngle}°
              </button>
            </div>
          </div>

          {/* Interactive Mechanical Globe with Stand & Semi-Meridian Ring */}
          <div 
            onClick={spinGlobeFast}
            title="Click to spin the cybernetic globe!"
            className="relative w-64 h-72 sm:w-80 sm:h-84 flex flex-col items-center justify-center cursor-pointer select-none [perspective:1000px] group"
          >
            {/* Upper Finial Knob */}
            <div className="w-3 h-3 rounded-full bg-slate-400 border border-cyan-400 shadow-[0_0_8px_#38bdf8] z-20"></div>
            
            {/* The Semi-Meridian Metal Ring */}
            <div 
              style={{ transform: `rotate(${globeAngle}deg)` }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-indigo-500/40 border-r-transparent border-b-indigo-400 flex items-center justify-center transition-transform duration-700 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
            >
              {/* Center Spinning Globe Body */}
              <div 
                className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-slate-950 via-indigo-950 to-[#040816] border-2 border-cyan-400/60 shadow-[inset_0_0_25px_rgba(56,189,248,0.4)] flex items-center justify-center overflow-hidden ${
                  isRotatingFast ? 'animate-globe-fast' : 'animate-globe-spin'
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:14px_14px] opacity-40"></div>
                <div className="absolute inset-x-0 h-px bg-cyan-400/40 top-1/2 -translate-y-1/2 shadow-[0_0_8px_#38bdf8]"></div>
                <div className="absolute inset-y-0 w-px bg-cyan-400/40 left-1/2 -translate-x-1/2 shadow-[0_0_8px_#38bdf8]"></div>
                
                <Globe className="w-24 h-24 sm:w-28 sm:h-28 text-cyan-300 opacity-80 animate-pulse" />
                <div className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] animate-ping"></div>
              </div>

              {/* Axial Pin Through the Globe */}
              <div className="absolute top-[-10px] bottom-[-10px] w-1 bg-gradient-to-b from-cyan-400 via-indigo-400 to-cyan-400 rounded-full pointer-events-none shadow-[0_0_10px_#38bdf8]"></div>
            </div>

            {/* Stand Stem & Base Platform */}
            <div className="w-3 h-8 bg-gradient-to-b from-indigo-500 to-slate-700 border-x border-slate-600"></div>
            <div className="w-24 sm:w-32 h-3 rounded-full bg-slate-900 border-2 border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
          </div>

        </div>
      </section>

      {/* 🎓 INTERACTIVE EDUCATION & CREDENTIALS SECTION */}
      <section id="education" className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 border-t border-slate-800/80 relative">
        <div className="text-center max-w-xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-blue-400 animate-cap-float" /> ACADEMIC CREDENTIALS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Education &amp; Honors</h2>
          <p className="text-slate-400 text-xs mt-1">
            Master's degree foundation in Computer Applications and core system architecture.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900/70 via-[#030816]/90 to-[#02050e] border-2 border-indigo-500/30 hover:border-indigo-400/60 rounded-2xl p-4 sm:p-6 backdrop-blur-2xl shadow-xl relative overflow-hidden group transition-all duration-500">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 relative z-10">
            
            <div className="shrink-0 flex flex-col items-center gap-2">
              <div 
                onClick={triggerCapAnimation}
                title="Click or Touch to Toss Cap!"
                className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-violet-500 flex items-center justify-center text-white shadow-xl shadow-indigo-600/40 relative cursor-pointer active:scale-90 group/cap hover:scale-105 transition-all duration-300 select-none p-4"
              >
                <GraduationCap 
                  className={`w-9 h-9 sm:w-10 sm:h-10 text-white drop-shadow-md ${
                    capTossed ? 'animate-extreme-cap text-amber-300' : 'animate-cap-float'
                  }`} 
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#38bdf8] animate-orbit-dot"></div>
                </div>
                <div className="absolute -top-1 -right-1">
                  <span className="flex h-3.5 w-3.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500 items-center justify-center text-[7px] font-black text-black">★</span>
                  </span>
                </div>
              </div>

              <div className="p-1.5 rounded-xl bg-slate-950 border border-indigo-500/30 flex items-center gap-1.5 shadow-inner">
                <div className="relative w-6 h-5 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <div className="absolute right-1 top-0 bottom-0 w-2 bg-cyan-400/40 rounded animate-page-flip"></div>
                </div>
                <div className="text-[9px] font-mono text-indigo-300 font-bold">
                  <span>CURRICULUM v2.6</span>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 mb-1.5">
                <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/30">
                  2024 – 2026 BATCH
                </span>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold shadow-md shadow-emerald-500/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  CGPA: 8.58 / 10.00
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-0.5">
                Master of Computer Applications (MCA)
              </h3>
              
              <p className="text-slate-300 text-xs font-medium mb-2 text-indigo-200/90">
                Mar Athanasios College for Advanced Studies (MACFAST), Tiruvalla
              </p>

              <p className="text-slate-400 text-xs leading-relaxed font-light mb-3">
                Specialized in advanced algorithmic analysis, distributed backend communication, database schema normalization, and full-stack software architecture patterns.
              </p>

              <div className="space-y-1 pt-2 border-t border-slate-800/80">
                <p className="text-[9px] font-mono uppercase font-bold text-slate-400">Core Disciplines Studied:</p>
                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                  {[
                    "Data Structures & Algorithms", "Distributed Computing", "Database Management (DBMS)",
                    "Software Engineering Architecture", "Operating Systems", "Web Application Development",
                    "Computer Networks & Protocols"
                  ].map((subject, idx) => (
                    <span 
                      key={idx}
                      className="text-[9px] px-2 py-0.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 font-medium hover:border-indigo-500/50 hover:text-white transition-colors"
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

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 border-t border-slate-800/80 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-2">
              <Mail className="w-3.5 h-3.5 text-indigo-400" /> CONTACT &amp; INQUIRIES
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Let's Build Something Exceptional.
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 max-w-md font-light">
              Open for full-time full-stack software engineering roles, high-scale backend engineering opportunities, and collaborative distributed software projects.
            </p>

            <div className="space-y-2.5 w-full max-w-sm">
              <div 
                onClick={copyEmailToClipboard}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 active:scale-95 transition-all cursor-pointer group shadow-md"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left font-mono">
                    <span className="text-[9px] uppercase font-bold text-slate-500 block">Direct Email</span>
                    <span className="text-xs font-semibold text-white truncate block">christovarghese2275@gmail.com</span>
                  </div>
                </div>
                <div className="text-xs text-indigo-400 font-semibold flex items-center gap-1 font-mono">
                  {copiedEmail ? <span className="text-emerald-400 flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Copied</span> : 'Copy'}
                </div>
              </div>

              <a 
                href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" 
                download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 active:scale-95 transition-all cursor-pointer group shadow-md font-mono"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <Download className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] uppercase font-bold text-slate-500 block">Download Resume</span>
                    <span className="text-xs font-semibold text-white">Christo_Varghese_FULL_STACK_DEVELOPER.pdf</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800/90 rounded-2xl p-4 sm:p-6 backdrop-blur-2xl shadow-xl">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center text-center py-8 space-y-2">
                <div className="h-10 w-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-1">
                  <Sparkles className="w-5 h-5 animate-bounce" />
                </div>
                <h3 className="text-base font-bold text-white">Message Dispatched!</h3>
                <p className="text-slate-400 text-xs max-w-xs">
                  Thank you for reaching out. I've received your note and will reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-left">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1 font-mono" htmlFor="name">
                    Your Name
                  </label>
                  <input 
                    id="name"
                    type="text" 
                    name="name"
                    required 
                    placeholder="e.g. Alex Mercer" 
                    className="w-full bg-[#02050e] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors text-xs shadow-inner"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1 font-mono" htmlFor="email">
                    Email Address
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    required 
                    placeholder="alex@enterprise.com" 
                    className="w-full bg-[#02050e] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors text-xs shadow-inner"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1 font-mono" htmlFor="message">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    rows="3" 
                    name="message"
                    required 
                    placeholder="Discuss project opportunities, full-stack engineering roles, or collaboration parameters..." 
                    className="w-full bg-[#02050e] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors text-xs resize-none shadow-inner"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white font-bold hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/30 cursor-pointer disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send Message"} <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-5 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <p>© {new Date().getFullYear()} Christo Varghese. Full-Stack Software Engineer.</p>
          <div className="flex items-center gap-4 text-[10px]">
            <a href="https://github.com/CHRISTO25" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="mailto:christovarghese2275@gmail.com" className="hover:text-white transition-colors">Email</a>
            <a href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf" className="hover:text-white transition-colors">Resume</a>
          </div>
        </div>
      </footer>

    </div>
  );
}