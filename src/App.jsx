import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Terminal, Mail, ExternalLink, Send, 
  Menu, X, ChevronRight, CheckCircle2, ShieldCheck, 
  Layers, Sparkles, Code, Globe, Server, Database, Activity, CpuIcon
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
      title: "Symphoney Backend",
      category: "Backend Microservice / API",
      tagColor: "from-cyan-500/30 text-cyan-300 border-cyan-500/50",
      description: "Developed scalable REST APIs using Golang and Gin framework for managing application data, robust routing, and PostgreSQL integration.",
      tech: ["Golang", "Gin Framework", "PostgreSQL", "REST API"],
      githubLink: "https://github.com/CHRISTO25/symphoney-backend",
      icon: <Server className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Zntra E-Commerce Platform",
      category: "Full-Stack Web App",
      tagColor: "from-fuchsia-500/30 text-fuchsia-300 border-fuchsia-500/50",
      description: "Led development of an MVC-based e-commerce platform using Node.js & Express, increasing daily transactions and transaction speeds significantly.",
      tech: ["Node.js", "Express.js", "MongoDB", "Razorpay", "EJS"],
      githubLink: "https://github.com/CHRISTO25/zntra-ecommerce",
      icon: <Database className="w-6 h-6 text-fuchsia-400" />
    },
    {
      title: "Netflix Clone",
      category: "Frontend Web Application",
      tagColor: "from-rose-500/30 text-rose-300 border-rose-500/50",
      description: "A dynamic streaming UI replica featuring media carousels, responsive grid layouts, and modern asynchronous JavaScript API integration.",
      tech: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
      githubLink: "https://github.com/CHRISTO25/netflix",
      icon: <Globe className="w-6 h-6 text-rose-400" />
    },
    {
      title: "OLX Clone",
      category: "Full-Stack Classifieds",
      tagColor: "from-emerald-500/30 text-emerald-300 border-emerald-500/50",
      description: "A peer-to-peer marketplace application supporting user authentication, product listings, live search filters, and structured database handling.",
      tech: ["JavaScript", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/CHRISTO25/olx_clone",
      icon: <Layers className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Zomato Clone",
      category: "UI/UX & Frontend Integration",
      tagColor: "from-amber-500/30 text-amber-300 border-amber-500/50",
      description: "A comprehensive food delivery platform layout with restaurant browsing, dynamic menus, and fully responsive CSS grid design patterns.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      githubLink: "https://github.com/CHRISTO25/Zomato-clone",
      icon: <Code className="w-6 h-6 text-amber-400" />
    },
    {
      title: "Apple Static Site",
      category: "High-Precision UI Design",
      tagColor: "from-sky-500/30 text-sky-300 border-sky-500/50",
      description: "Pixel-perfect replication of Apple’s official product marketing layout, emphasizing layout precision, sleek typography, and mobile responsiveness.",
      tech: ["HTML5", "CSS3", "Responsive Design"],
      githubLink: "https://github.com/CHRISTO25/Apple-Clone",
      icon: <Sparkles className="w-6 h-6 text-sky-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#04060b] text-slate-100 font-sans selection:bg-cyan-400 selection:text-black relative overflow-x-hidden">
      
      {/* High-End Deep Cosmic Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/3 right-5 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-fuchsia-600/10 rounded-full blur-[180px] pointer-events-none animate-pulse duration-1000"></div>
      <div className="absolute bottom-1/4 left-5 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] bg-indigo-600/10 rounded-full blur-[190px] pointer-events-none"></div>

      {/* PERMANENT STICKY NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#04060b]/90 border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-base sm:text-xl font-black tracking-widest text-white flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-xl shadow-cyan-500/30 group-hover:rotate-45 transition-transform duration-500">
              <Terminal className="w-5 h-5 text-black" />
            </div>
            <span className="tracking-tighter">CHRISTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">VARGHESE</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">EXPERTISE</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">PROJECTS</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">CONTACT</a>
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-extrabold hover:shadow-lg hover:shadow-cyan-400/40 transition-all transform hover:-translate-y-0.5"
            >
              HIRE ME
            </a>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none bg-white/5 rounded-xl border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-cyan-400" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#070b16] border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-center text-base font-bold shadow-2xl animate-fadeIn">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 py-2.5 border-b border-white/5">ABOUT</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 py-2.5 border-b border-white/5">EXPERTISE</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 py-2.5 border-b border-white/5">PROJECTS</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-cyan-400 py-2.5">CONTACT & HIRE ME</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-7 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-6 tracking-widest uppercase shadow-2xl backdrop-blur-md">
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" /> FULL-STACK ARCHITECT & BACKEND SPECIALIST
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-tight sm:leading-none">
            Architecting <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500">
              High-Throughput
            </span> <br className="hidden sm:inline" />
            Systems & Interfaces.
          </h1>
          
          <div className="p-5 sm:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 rounded-3xl mb-8 backdrop-blur-2xl shadow-2xl relative text-left w-full group hover:border-cyan-400/50 transition-colors">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-fuchsia-500 rounded-l-3xl"></div>
            <p className="text-slate-200 text-sm sm:text-lg leading-relaxed font-light italic">
              "I don't just write code; I engineer resilient, enterprise-grade architecture. From blazing-fast microservices built in <strong className="text-cyan-400 not-italic font-bold">Golang</strong> and <strong className="text-cyan-400 not-italic font-bold">Node.js</strong> to sleek, reactive web apps in <strong className="text-fuchsia-400 not-italic font-bold">React</strong>, I bridge deep backend execution with flawless user interaction."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-black font-extrabold hover:brightness-110 transition-all flex items-center justify-center gap-2.5 shadow-2xl shadow-cyan-500/30 transform hover:-translate-y-1 text-center"
            >
              Explore Portfolio <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/20 text-slate-200 font-bold hover:bg-white/10 hover:border-cyan-400/50 transition-all backdrop-blur-md text-center"
            >
              Direct Contact
            </a>
          </div>
        </div>

        {/* Profile Photo Display with Glowing Cyber Frame */}
        <div className="md:col-span-5 flex justify-center w-full">
          <div className="relative group w-full max-w-[280px] sm:max-w-sm">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-500 rounded-[40px] blur-2xl opacity-60 group-hover:opacity-100 transition duration-700 animate-pulse"></div>
            <div className="relative w-full h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border-2 border-cyan-400/40 bg-[#070b16] shadow-2xl">
              <img 
                src="/PHOTO-2026-08-09-23-34-02.jpg" 
                alt="Christo Varghese" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110 saturate-110 object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-cyan-500/30 shadow-xl text-center sm:text-left">
                  <p className="text-white font-black text-base sm:text-lg tracking-wide">Christo Varghese</p>
                  <p className="text-cyan-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase mt-0.5">Full-Stack & Backend Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-white/10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="inline-block text-xs font-bold text-cyan-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30">
              BACKGROUND & DRIVE
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-6">
              Engineering Mindset & Scalable Execution
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base font-light">
              Currently pursuing my Master of Computer Applications (MCA) at MACFAST, I synthesize deep academic principles in Data Structures, Algorithms, and System Architecture with rigorous production environments.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 text-xs sm:text-sm font-light">
              My core capability rests on architecting maintainable MVC structures, eliminating application latencies, and deploying high-performance services via Docker, AWS, and Nginx infrastructure.
            </p>
            <div className="flex items-center w-full justify-center md:justify-start">
              <a href="https://github.com/CHRISTO25" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3.5 bg-white/5 rounded-2xl border border-white/20 text-slate-200 hover:text-cyan-400 hover:border-cyan-400/50 transition-all text-sm font-bold flex items-center justify-center gap-2.5 shadow-lg backdrop-blur-md">
                <ExternalLink className="w-4 h-4 text-cyan-400" /> GitHub Profile: @CHRISTO25
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 sm:p-10 rounded-[30px] border border-white/15 shadow-2xl backdrop-blur-2xl relative overflow-hidden group hover:border-fuchsia-500/40 transition-colors">
            <div className="absolute top-0 right-0 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-6 flex items-center justify-center sm:justify-start gap-3">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 flex-shrink-0" /> Core Competencies
            </h3>
            <ul className="space-y-3.5 text-slate-300 font-medium text-sm sm:text-base">
              <li className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/50 flex-shrink-0"></div> 
                High-performance backend systems (Golang, Gin, Node.js)
              </li>
              <li className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-md shadow-indigo-400/50 flex-shrink-0"></div> 
                Relational & NoSQL database architecture (PostgreSQL, MongoDB)
              </li>
              <li className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-400 shadow-md shadow-fuchsia-400/50 flex-shrink-0"></div> 
                Dynamic frontends & component states (React, Redux, Tailwind)
              </li>
              <li className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-md shadow-sky-400/50 flex-shrink-0"></div> 
                Containerization & Routing (Docker, AWS, Nginx)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION - FULLY CENTERED & BALANCED ON MOBILE */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold text-cyan-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30">
            TECHNICAL STACK
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4">Precision Frameworks & Tools</h2>
          <p className="text-slate-400 text-sm sm:text-base">The battle-tested technologies used to build reliable production applications.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Backend Card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-7 hover:border-cyan-400/60 hover:bg-white/[0.06] transition-all duration-300 group shadow-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <Server className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="text-lg font-bold mb-4 text-white">Backend Systems</h3>
            <ul className="space-y-3 text-sm text-slate-400 font-medium w-full flex flex-col items-center">
              {skills.backend.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend Card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-7 hover:border-indigo-400/60 hover:bg-white/[0.06] transition-all duration-300 group shadow-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <Layers className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="text-lg font-bold mb-4 text-white">Frontend UI</h3>
            <ul className="space-y-3 text-sm text-slate-400 font-medium w-full flex flex-col items-center">
              {skills.frontend.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Database Card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-7 hover:border-fuchsia-400/60 hover:bg-white/[0.06] transition-all duration-300 group shadow-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <Database className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="text-lg font-bold mb-4 text-white">Databases</h3>
            <ul className="space-y-3 text-sm text-slate-400 font-medium w-full flex flex-col items-center">
              {skills.database.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* DevOps Card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-7 hover:border-sky-400/60 hover:bg-white/[0.06] transition-all duration-300 group shadow-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <CpuIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="text-lg font-bold mb-4 text-white">DevOps & Tooling</h3>
            <ul className="space-y-3 text-sm text-slate-400 font-medium w-full flex flex-col items-center">
              {skills.devops.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 text-center md:text-left items-center md:items-end">
          <div>
            <div className="inline-block text-xs font-bold text-cyan-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30">
              PORTFOLIO HIGHLIGHTS
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-2">Featured Projects</h2>
            <p className="text-slate-400 text-sm sm:text-base">Production clones and custom backend microservices. Click to access repositories.</p>
          </div>
          <a 
            href="https://github.com/CHRISTO25" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-2 text-sm group"
          >
            Explore All GitHub Repositories <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-white/[0.07] to-white/[0.01] border border-white/15 rounded-[30px] overflow-hidden flex flex-col justify-between hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group transform hover:-translate-y-1.5"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-transform">
                    {project.icon}
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 text-slate-200 hover:text-black hover:bg-cyan-400 transition-all shadow-md flex items-center gap-2 text-xs font-black tracking-wider"
                    title="View Source on GitHub"
                  >
                    <span>GITHUB</span> <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                
                <span className={`inline-block text-[11px] font-black px-3.5 py-1 rounded-full border mb-4 uppercase tracking-widest bg-gradient-to-r ${project.tagColor}`}>
                  {project.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">{project.description}</p>
              </div>

              <div className="px-6 sm:px-8 py-5 bg-black/60 border-t border-white/10 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKING CONTACT SECTION WITH FORMSPREE */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="inline-block text-xs font-bold text-cyan-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Let's Build Together</h2>
            <p className="text-slate-400 leading-relaxed mb-8 text-sm sm:text-base font-light">
              Open for full-stack software development roles, high-scale backend engineering opportunities, and exciting collaborative projects. Reach out directly!
            </p>
            <div className="space-y-4 text-slate-300 w-full flex justify-center md:justify-start">
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/15 shadow-xl backdrop-blur-md group hover:border-cyan-400/50 transition-colors max-w-md w-full">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden text-left">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-black">Direct Email</p>
                  <a href="mailto:christovarghese2275@gmail.com" className="text-xs sm:text-sm font-bold hover:text-cyan-400 transition-colors truncate block">christovarghese2275@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 rounded-[30px] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative group hover:border-cyan-400/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/15 rounded-full blur-2xl pointer-events-none"></div>
            
            {state.succeeded ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 className="w-16 h-16 text-cyan-400 mb-4 animate-bounce" />
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">Message Dispatched Successfully!</h3>
                <p className="text-slate-400 text-sm">Thank you for connecting. I have received your message and will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2" htmlFor="name">Your Name</label>
                  <input 
                    id="name"
                    type="text" 
                    name="name"
                    required 
                    placeholder="John Doe" 
                    className="w-full bg-[#05070f] border border-white/20 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors text-sm shadow-inner font-medium"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2" htmlFor="email">Your Email</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    required 
                    placeholder="john@example.com" 
                    className="w-full bg-[#05070f] border border-white/20 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors text-sm shadow-inner font-medium"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    rows="4" 
                    name="message"
                    required 
                    placeholder="Discuss project requirements, roles, or collaboration..." 
                    className="w-full bg-[#05070f] border border-white/20 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none shadow-inner font-medium"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-rose-400 text-xs mt-1" />
                </div>

                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-black font-black hover:brightness-110 transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-cyan-500/30 transform hover:-translate-y-0.5 tracking-wider uppercase text-sm disabled:opacity-50 cursor-pointer"
                >
                  {state.submitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 text-center text-slate-500 text-xs tracking-wider px-4">
        <p>© {new Date().getFullYear()} Christo Varghese. Engineered with React.js & Tailwind CSS.</p>
      </footer>

    </div>
  );
}