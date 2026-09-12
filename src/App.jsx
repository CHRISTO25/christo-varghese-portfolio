import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Terminal, Mail, ExternalLink, Send, 
  Menu, X, ChevronRight, CheckCircle2, ShieldCheck, 
  Layers, Sparkles, Code, Globe, Server, Database, Activity, CpuIcon, Download, GraduationCap,
  Radio, Network, Wifi, Lock, GitBranch, ArrowUpRight, Check, Eye, MessageSquare, PhoneCall
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [state, handleSubmit] = useForm("mqpzpeod");

  // Interactive Live Architecture Demo State
  const [activeMeshNode, setActiveMeshNode] = useState('gateway');
  const [pingLatency, setPingLatency] = useState(14);
  const [liveLog, setLiveLog] = useState("Gateway routing requests with round-robin health checks.");

  useEffect(() => {
    const interval = setInterval(() => {
      setPingLatency(Math.floor(Math.random() * 8) + 11);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("christovarghese2275@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const skills = {
    backend: ["Golang (Gin)", "Node.js", "Express.js", "RESTful APIs", "Microservices", "Clean Architecture"],
    frontend: ["React.js", "Redux Toolkit", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3"],
    database: ["PostgreSQL", "MongoDB", "Redis (Pub/Sub & Cache)", "Database Normalization", "Query Optimization"],
    devops: ["Docker / Compose", "AWS (EC2 / S3)", "Nginx Reverse Proxy", "WebSockets", "WebRTC (STUN/TURN)", "Git / CI/CD"]
  };

  const projects = [
    {
      id: "realtime-connect",
      title: "fullstack",
      category: "backend",
      categoryLabel: "Distributed Systems & Real-Time",
      tagColor: "from-indigo-500/20 to-violet-500/20 text-indigo-300 border-indigo-500/30",
      description: "Production-grade microservices suite orchestrating sub-second instant messaging, WebRTC P2P audio/video calls, dynamic round-robin load-balanced chat nodes, and Redis Pub/Sub horizontal synchronization.",
      tech: ["Golang", "Gin", "WebRTC", "Gorilla WebSockets", "Redis Pub/Sub", "PostgreSQL", "Docker", "React"],
      githubLink: "https://github.com/CHRISTO25/realtime-connect-platform",
      icon: <Radio className="w-5 h-5 text-indigo-400" />,
      featured: true,
      stats: [
        { label: "Signaling", value: "<15ms" },
        { label: "Architecture", value: "Microservices" },
        { label: "Nodes", value: "Multi-Instance" }
      ]
    },
    {
      id: "symphoney",
      title: "Symphoney Backend",
      category: "backend",
      categoryLabel: "Backend Microservices",
      tagColor: "from-sky-500/20 to-blue-500/20 text-sky-300 border-sky-500/30",
      description: "High-throughput REST API layer built with Golang and Gin. Features structured layered architecture, GORM PostgreSQL connection pooling, and optimized query routing.",
      tech: ["Golang", "Gin Framework", "PostgreSQL", "RESTful APIs", "JWT Auth"],
      githubLink: "https://github.com/CHRISTO25/symphoney-backend",
      icon: <Server className="w-5 h-5 text-sky-400" />,
      featured: false,
      stats: [
        { label: "Response", value: "Sub-20ms" },
        { label: "Storage", value: "PostgreSQL" }
      ]
    },
    {
      id: "zntra",
      title: "Zntra E-Commerce Suite",
      category: "fullstack",
      categoryLabel: "Full-Stack Enterprise App",
      tagColor: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30",
      description: "Scalable MVC e-commerce platform with automated inventory ledgers, Razorpay payment gateway integration, and MongoDB database query indexing reducing API response latency by 60%.",
      tech: ["Node.js", "Express.js", "MongoDB", "Razorpay", "EJS", "Tailwind CSS"],
      githubLink: "https://github.com/CHRISTO25/zntra-ecommerce",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      featured: false,
      stats: [
        { label: "Efficiency", value: "+60%" },
        { label: "Payments", value: "Razorpay" }
      ]
    },
    {
      id: "netflix",
      title: "StreamFlix Media Client",
      category: "frontend",
      categoryLabel: "Frontend Experience",
      tagColor: "from-rose-500/20 to-red-500/20 text-rose-300 border-rose-500/30",
      description: "High-performance dynamic streaming web application featuring responsive carousel sliders, poster trailers, and asynchronous TMDB REST API consumption.",
      tech: ["React.js", "JavaScript", "HTML5 / CSS3", "TMDB REST API"],
      githubLink: "https://github.com/CHRISTO25/netflix",
      icon: <Globe className="w-5 h-5 text-rose-400" />,
      featured: false,
      stats: [
        { label: "Fluid Grid", value: "100% Responsive" },
        { label: "Latency", value: "Instant UI" }
      ]
    },
    {
      id: "olx",
      title: "OLX Classifieds Engine",
      category: "fullstack",
      categoryLabel: "Full-Stack Platform",
      tagColor: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30",
      description: "Peer-to-peer commerce and listing ecosystem featuring user session token security, real-time query filtering, and dynamic product catalogs.",
      tech: ["JavaScript", "Node.js", "MongoDB", "Express", "REST API"],
      githubLink: "https://github.com/CHRISTO25/olx_clone",
      icon: <Layers className="w-5 h-5 text-amber-400" />,
      featured: false,
      stats: [
        { label: "Auth", value: "Session / JWT" },
        { label: "Search", value: "Instant Match" }
      ]
    },
    {
      id: "zomato",
      title: "Zomato Experience Platform",
      category: "frontend",
      categoryLabel: "UI / UX System",
      tagColor: "from-pink-500/20 to-rose-500/20 text-pink-300 border-pink-500/30",
      description: "Responsive restaurant discovery and food menu navigation interface built with modern CSS grid design patterns and interactive components.",
      tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive UI"],
      githubLink: "https://github.com/CHRISTO25/Zomato-clone",
      icon: <Code className="w-5 h-5 text-pink-400" />,
      featured: false,
      stats: [
        { label: "Layout", value: "CSS Grid & Flex" },
        { label: "Experience", value: "Mobile Optimized" }
      ]
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-indigo-500/40 selection:text-white relative overflow-x-hidden">
      
      {/* Background Ambient Glow Lights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
      </div>

      {/* Top Live Metric Bar */}
      <div className="w-full bg-[#050b18]/80 backdrop-blur-md border-b border-slate-800/80 py-2 px-4 sm:px-8 text-xs relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-200 font-medium tracking-wide">Available for Full-Stack & Distributed Backend Opportunities</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Activity className="w-3.5 h-3.5 text-indigo-400" /> Gateway: <strong className="text-emerald-400">99.9% Uptime</strong>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">
              Avg Latency: <strong className="text-indigo-400">{pingLatency}ms</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Primary Header */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#030712]/80 border-b border-slate-800/80 shadow-2xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                Christo Varghese
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                Software Engineer
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Expertise</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            
            <a 
              href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" 
              download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:brightness-110 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-600/20 transform hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5" /> Resume
            </a>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2.5 rounded-xl bg-slate-900 border border-slate-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-indigo-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#050b18]/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 flex flex-col gap-4 text-center text-sm font-semibold shadow-2xl">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-2 border-b border-slate-800/60">About</a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-2 border-b border-slate-800/60">Architecture Demo</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-2 border-b border-slate-800/60">Projects</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-2 border-b border-slate-800/60">Expertise</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-2 border-b border-slate-800/60">Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-2 border-b border-slate-800/60">Contact</a>
            <a 
              href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" 
              download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold flex items-center justify-center gap-2 text-xs uppercase tracking-wider mt-2 shadow-lg shadow-indigo-600/30"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Full-Stack & Distributed Backend Architect
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight sm:leading-[1.1]">
            Building scalable <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400">
              real-time platforms
            </span> <br />
            with precision.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light mb-8">
            Specializing in high-throughput backend services using <strong className="text-white font-semibold">Golang</strong> and <strong className="text-white font-semibold">Node.js</strong>, real-time synchronization with <strong className="text-white font-semibold">WebSockets / WebRTC</strong>, and dynamic responsive user interfaces in <strong className="text-white font-semibold">React</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 text-sm shadow-xl shadow-indigo-600/30 transform hover:-translate-y-0.5"
            >
              Explore Projects <ChevronRight className="w-4 h-4" />
            </a>

            <a 
              href="#architecture" 
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 text-slate-200 font-semibold hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2 text-sm backdrop-blur-md"
            >
              <Activity className="w-4 h-4 text-indigo-400" /> View Architecture Demo
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-slate-800/80 w-full max-w-lg">
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-white">8.58</p>
              <p className="text-xs text-slate-400 mt-0.5">MCA Academic CGPA</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400">&lt;15ms</p>
              <p className="text-xs text-slate-400 mt-0.5">Real-Time Latency</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-white">60%</p>
              <p className="text-xs text-slate-400 mt-0.5">DB Query Optimization</p>
            </div>
          </div>

        </div>

        {/* Premium Executive Profile Card */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative group w-full max-w-sm sm:max-w-md">
            
            {/* Ambient Multi-Hue Aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/40 via-blue-500/30 to-violet-500/40 rounded-[36px] blur-2xl opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"></div>

            <div className="relative rounded-[32px] overflow-hidden border border-slate-700/80 bg-gradient-to-b from-slate-900/90 to-[#050b18] shadow-2xl p-3">
              
              <div className="relative h-[400px] sm:h-[460px] rounded-[24px] overflow-hidden">
                <img 
                  src="/PHOTO-2026-08-09-23-34-02.jpg" 
                  alt="Christo Varghese" 
                  className="w-full h-full object-cover object-top filter contrast-[1.06] brightness-[1.02] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-transparent opacity-90"></div>

                {/* Floating Interactive Status Chip */}
                <div className="absolute top-4 left-4 backdrop-blur-xl bg-black/60 border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[11px] font-semibold text-slate-200">Active Engineer</span>
                </div>

                {/* Bottom Card Summary */}
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-xl bg-slate-950/80 border border-slate-800/90 p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-base">Christo Varghese</p>
                      <p className="text-indigo-300 text-xs font-medium">Full-Stack & Distributed Backend Dev</p>
                    </div>
                    <span className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                      <Radio className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Interactive Microservices Architecture Simulation Section */}
      <section id="architecture" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <Radio className="w-3.5 h-3.5 text-indigo-400" /> SYSTEM ARCHITECTURE INSPECTOR
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Real-Time Connect Platform</h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Click on any microservice node below to inspect its topology, internal protocol, and dynamic traffic distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-900/40 border border-slate-800/90 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          
          {/* Interactive Node Selector (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">Select Microservice Node</h3>

            <button
              onClick={() => {
                setActiveMeshNode('gateway');
                setLiveLog("Gateway routing incoming REST / WS requests across dual backend nodes via round-robin.");
              }}
              className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 cursor-pointer ${
                activeMeshNode === 'gateway'
                  ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                  : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/50'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mt-0.5">
                <Network className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">api-gateway:8080</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">ONLINE</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Reverse proxy, CORS handling, client connection dispatch</p>
              </div>
            </button>

            <button
              onClick={() => {
                setActiveMeshNode('auth');
                setLiveLog("Auth Service verifying JWT bearer tokens, handling Argon2 hashes and silent refresh rotations.");
              }}
              className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 cursor-pointer ${
                activeMeshNode === 'auth'
                  ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                  : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/50'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 mt-0.5">
                <Lock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">auth-service:8001</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">ONLINE</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Argon2id password hashing, silent refresh token rotation</p>
              </div>
            </button>

            <button
              onClick={() => {
                setActiveMeshNode('chat');
                setLiveLog("Chat Node instances managing goroutine read/write pumps, WebSockets, and WebRTC peer signaling.");
              }}
              className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 cursor-pointer ${
                activeMeshNode === 'chat'
                  ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                  : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/50'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 mt-0.5">
                <Radio className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">chat-nodes:8003 & 8004</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">CLUSTERED</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Full-duplex WebSockets, typing pulses, STUN/TURN WebRTC calls</p>
              </div>
            </button>

            <button
              onClick={() => {
                setActiveMeshNode('redis');
                setLiveLog("Redis Pub/Sub broker broadcasting cross-node messages between isolated chat containers.");
              }}
              className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 cursor-pointer ${
                activeMeshNode === 'redis'
                  ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                  : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/50'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mt-0.5">
                <GitBranch className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">redis-pubsub:6379</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">SYNCHRONIZED</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Cross-instance channel broadcasting, ephemeral presence cache</p>
              </div>
            </button>
          </div>

          {/* Dynamic Inspector Panel (Right 7 cols) */}
          <div className="lg:col-span-7 bg-[#02050b] rounded-2xl border border-slate-800/90 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-400 animate-pulse"></span>
                  <span className="font-mono text-xs text-slate-300 uppercase tracking-widest font-bold">Node Telemetry Inspector</span>
                </div>
                <a 
                  href="https://github.com/CHRISTO25/realtime-connect-platform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  View Code <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Dynamic Readout */}
              <div className="mt-6 space-y-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <p className="text-slate-400 text-[11px] mb-1">LIVE SYSTEM STATUS MESSAGE</p>
                  <p className="text-indigo-300 font-semibold text-sm">{liveLog}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                    <span className="text-[10px] text-slate-500 block">PROTOCOL</span>
                    <span className="text-white font-bold">
                      {activeMeshNode === 'chat' ? 'WSS & WebRTC' : activeMeshNode === 'redis' ? 'RESP Engine' : 'HTTP/2 REST'}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                    <span className="text-[10px] text-slate-500 block">SCALING TARGET</span>
                    <span className="text-emerald-400 font-bold">Horizontally Scaled</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-slate-500 block">HEALTH PROBE</span>
                    <span className="text-indigo-400 font-bold">200 OK (0 fail)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 space-y-1.5 text-[11px]">
                  <div className="text-slate-500 pb-1 border-b border-slate-900 flex justify-between">
                    <span>CONTAINER RUNTIME</span>
                    <span>DOCKER-COMPOSE</span>
                  </div>
                  <p className="text-emerald-400">&gt; docker ps --filter "name=realtime-platform"</p>
                  <p className="text-slate-400">&gt; gateway (running :8080) -&gt; chat_node_1 (:8003) &amp; chat_node_2 (:8004)</p>
                  <p className="text-slate-400">&gt; redis_broker [CONNECTED: 2 subscribers registered]</p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">Integrated with React front-end and WebRTC media streams</span>
              <a 
                href="#projects"
                className="text-xs px-3.5 py-2 rounded-xl bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition-all font-semibold"
              >
                Inspect All Repositories
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Projects Portfolio Section with Interactive Filter Tabs */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
              <Code className="w-3.5 h-3.5 text-blue-400" /> PRODUCTION SOFTWARE & SERVICES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Featured Projects</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Explore distributed backends, full-stack enterprise platforms, and interactive client applications.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('backend')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'backend' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Backend / Real-Time
            </button>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'fullstack' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full-Stack
            </button>
            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'frontend' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Frontend
            </button>
          </div>
        </div>

        {/* Dynamic Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 ${
                project.featured 
                  ? 'bg-gradient-to-b from-indigo-950/30 via-slate-900/60 to-[#050b18] border-indigo-500/40 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/10'
                  : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 hover:shadow-xl'
              }`}
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-md group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-slate-800/60 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700/80 transition-all text-xs font-bold flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Code</span> <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full border mb-3 uppercase tracking-wider bg-gradient-to-r ${project.tagColor}`}>
                  {project.categoryLabel}
                </span>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {/* Key Stats Row */}
                {project.stats && (
                  <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                    {project.stats.map((st, i) => (
                      <div key={i}>
                        <span className="text-slate-500 text-[10px] block uppercase">{st.label}</span>
                        <span className="text-slate-200 font-semibold">{st.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Technologies footer */}
              <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise & Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold mb-3">
            <CpuIcon className="w-3.5 h-3.5 text-violet-400" /> TECHNICAL EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Core Competencies & Stack</h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Engineered across backend concurrency, frontend reactive state, and cloud deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-slate-900/40 border border-slate-800/90 rounded-3xl p-6 hover:border-indigo-500/60 transition-all group shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-3">Backend Engineering</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {skills.backend.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/90 rounded-3xl p-6 hover:border-blue-500/60 transition-all group shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-3">Frontend Architecture</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {skills.frontend.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/90 rounded-3xl p-6 hover:border-emerald-500/60 transition-all group shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-3">Databases & Caching</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {skills.database.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/90 rounded-3xl p-6 hover:border-violet-500/60 transition-all group shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-5 group-hover:scale-110 transition-transform">
              <CpuIcon className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-3">DevOps & Cloud</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {skills.devops.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Education & Academic Credentials Section */}
      <section id="education" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" /> ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Credentials & Degree</h2>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-900/40 border border-slate-800/90 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">2024 – 2026</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-1">
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-medium mb-3">
                Mar Athanasios College for Advanced Studies (MACFAST), Tiruvalla
              </p>
              
              <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-4">
                Cumulative CGPA: 8.58 / 10.00
              </div>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                <strong className="text-slate-300 font-semibold">Specialized Modules:</strong> Data Structures & Algorithms, Distributed Computing, Database Management Systems (DBMS), Operating Systems, Software Engineering Architecture, Web Development, and Advanced Computer Networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact & Transmission Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28 border-t border-slate-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
              <Mail className="w-3.5 h-3.5 text-indigo-400" /> GET IN TOUCH
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Let's Build Something Exceptional.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-light">
              Available for full-time full-stack software development roles, high-scale backend engineering positions, and collaborative distributed projects.
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
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Direct Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">christovarghese2275@gmail.com</span>
                  </div>
                </div>
                <div className="text-xs text-indigo-400 font-semibold flex items-center gap-1">
                  {copiedEmail ? <span className="text-emerald-400 flex items-center gap-1"><Check className="w-4 h-4" /> Copied</span> : 'Copy'}
                </div>
              </div>

              <a 
                href="/Christo_Varghese_FULL_STACK_DEVELOPER.pdf" 
                download="Christo_Varghese_FULL_STACK_DEVELOPER.pdf"
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer group shadow-lg"
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
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thank you for reaching out. I've received your note and will reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input 
                    id="name"
                    type="text" 
                    name="name"
                    required 
                    placeholder="e.g. Sarah Jenkins" 
                    className="w-full bg-[#030712] border border-slate-800 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm shadow-inner"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    required 
                    placeholder="sarah@company.com" 
                    className="w-full bg-[#030712] border border-slate-800 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm shadow-inner"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    rows="4" 
                    name="message"
                    required 
                    placeholder="Discuss project opportunities, engineering roles, or collaboration parameters..." 
                    className="w-full bg-[#030712] border border-slate-800 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none shadow-inner"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-xl shadow-indigo-600/30 cursor-pointer disabled:opacity-50"
                >
                  {state.submitting ? "Transmitting..." : "Send Message"} <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Christo Varghese. Engineered with React.js & Tailwind CSS.</p>
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