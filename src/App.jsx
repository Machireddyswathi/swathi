import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2, Brain, Shield, Heart, BarChart3, Award, ChevronDown, Menu, X, Sun, Moon, Target, Terminal, Database, Cpu, Zap, Sparkles, Rocket, Instagram } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('.fade-in-section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        if (isVisible) {
          section.classList.add('is-visible');
        }
      });
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Phishing Detection System",
      subtitle: "Full-Stack NLP Web App",
      year: "2025",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-red-500 via-pink-500 to-rose-500",
      solves: "Protects users from phishing attacks by instantly analyzing URLs and detecting malicious links with 99% accuracy",
      description: "AI-driven phishing detection using fine-tuned DistilBERT with 99% URL classification accuracy",
      highlights: [
        "Fine-tuned DistilBERT achieving 99% URL classification accuracy",
        "FastAPI inference service with <500ms latency on Railway/Render",
        "React frontend with real-time URL risk visualization",
        "JWT-based authentication and HuggingFace API integration"
      ],
      tech: ["React", "FastAPI", "DistilBERT", "TailwindCSS", "JWT", "HuggingFace"],
      metrics: { accuracy: "99%", latency: "<500ms" }
    },
    {
      title: "AI-Powered Complaint Analyzer",
      subtitle: "Full-Stack Application",
      year: "2025",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      solves: "Automates complaint categorization and sentiment analysis, reducing manual processing from 10 hours to 48 minutes",
      description: "NLP-based complaint analyzer with RoBERTa & BART models",
      highlights: [
        "RoBERTa & BART models: 87% classification, 83% sentiment accuracy",
        "REST APIs with FastAPI + PostgreSQL handling 500+ daily requests",
        "React dashboard with multi-filter search and data visualization",
        "Reduced processing time by 92% (10h → 48min), 99.5% uptime"
      ],
      tech: ["React", "FastAPI", "PostgreSQL", "RoBERTa", "BART", "SQLAlchemy"],
      metrics: { efficiency: "92%", uptime: "99.5%", requests: "500+" },
      link: "https://ai-complaint-analyzer.vercel.app/"
    },
    {
      title: "CareNest",
      subtitle: "Senior Care Platform",
      year: "2024",
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      solves: "Connects families with verified caregivers through secure KYC verification, eliminating manual verification errors",
      description: "MERN stack caregiving platform connecting families with verified caregivers",
      highlights: [
        "Full MERN stack with verified caregiver connections",
        "Aadhaar & PAN verification with Multer uploads and JWT sessions",
        "Responsive React UI with caregiver filters and role-based dashboards",
        "100% reduction in manual verification errors"
      ],
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Multer", "Vercel"],
      metrics: { accuracy: "100%" },
      link: "https://carenest-frontend-nu.vercel.app/"
    }
  ];

  const skills = {
    "Languages": ["JavaScript (ES6+)", "Python", "Java", "C++"],
    "Frontend": ["React.js (v18)", "Next.js", "Tailwind CSS", "Vite"],
    "Backend": ["Node.js", "Express.js", "FastAPI", "RESTful APIs"],
    "Databases": ["MongoDB", "PostgreSQL", "SQL"],
    "AI & NLP": ["DistilBERT", "RoBERTa", "BART", "HuggingFace Transformers"],
    "DevOps & Tools": ["Git", "GitHub"]
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const theme = {
    bg: isDark ? 'bg-black' : 'bg-white',
    text: isDark ? 'text-white' : 'text-black',
    textSecondary: isDark ? 'text-gray-400' : 'text-gray-600',
    textTertiary: isDark ? 'text-gray-500' : 'text-gray-500',
    border: isDark ? 'border-white/20' : 'border-black/20',
    borderHover: isDark ? 'border-white/40' : 'border-black/40',
    navBg: isDark ? 'bg-black/90' : 'bg-white/90',
    menuBg: isDark ? 'bg-black/95' : 'bg-white/95',
    buttonBg: isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800',
    buttonBorder: isDark ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white',
    cardBg: isDark ? 'bg-white/5' : 'bg-black/5',
    hoverBg: isDark ? 'hover:bg-white/10' : 'hover:bg-black/10',
  };

  const AnimatedCode = () => (
    <div className="relative w-64 h-64 mx-auto mb-8">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`absolute inset-0 border-4 ${isDark ? 'border-white' : 'border-black'} rounded-full animate-ping`}
          style={{
            animationDelay: `${i * 0.3}s`,
            animationDuration: '2s',
            opacity: 0.1
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <Code2 className={`w-32 h-32 ${theme.text} animate-pulse`} />
      </div>
    </div>
  );

  const FloatingIcons = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {[Terminal, Database, Cpu, Brain, Zap, Rocket, Code2].map((Icon, i) => (
        <Icon
          key={i}
          className={`absolute ${theme.text} opacity-10 animate-float`}
          style={{
            left: `${10 + i * 13}%`,
            top: `${5 + (i % 3) * 30}%`,
            width: '50px',
            height: '50px',
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${4 + (i % 3)}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} relative overflow-hidden transition-colors duration-500`}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          25% { transform: translateY(-20px) rotate(5deg); opacity: 0.15; }
          50% { transform: translateY(-40px) rotate(-5deg); opacity: 0.1; }
          75% { transform: translateY(-20px) rotate(5deg); opacity: 0.15; }
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .glow-text {
          text-shadow: 0 0 30px ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'};
        }
        
        .glow-box {
          box-shadow: 0 0 40px ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'};
        }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Enhanced Spotlight effect - only visible in dark mode */}
      {isDark && (
        <div
          className="fixed w-[500px] h-[500px] rounded-full bg-white opacity-5 pointer-events-none blur-3xl transition-all duration-500 z-0"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
        />
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? `${theme.navBg} backdrop-blur-xl border-b ${theme.border} shadow-lg` : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold flex items-center gap-2">
              <span className={theme.text}>&lt;</span>
              <span className="glow-text">MS</span>
              <span className={theme.text}>/&gt;</span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 relative ${activeSection === item ? `${theme.text} glow-text font-semibold` : `${theme.textSecondary}`} hover:${theme.text}`}
                >
                  {item}
                  {activeSection === item && (
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${isDark ? 'bg-white' : 'bg-black'}`}></span>
                  )}
                </button>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full border ${theme.border} ${theme.buttonBorder} transition-all duration-300 transform hover:scale-110 hover:rotate-12`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full border ${theme.border} transition-all duration-300 transform hover:scale-110`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className={theme.text} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${theme.menuBg} backdrop-blur-xl border-b ${theme.border}`}>
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-2 rounded capitalize ${theme.textSecondary} ${theme.hoverBg} hover:${theme.text} transition-all`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
        <FloatingIcons />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedCode />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text">
            MACHIREDDY SWATHI
          </h1>
          <div className={`h-1 w-32 ${isDark ? 'bg-white' : 'bg-black'} mx-auto mb-6 transition-all duration-500`}></div>
          <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-8`}>
            Full-Stack & AI Developer
          </p>
          <p className={`text-lg ${theme.textTertiary} mb-12 max-w-2xl mx-auto leading-relaxed`}>
            Building scalable, intelligent, and user-centric web applications with MERN stack and cutting-edge NLP/ML technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://github.com/Machireddyswathi" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 ${theme.buttonBg} transition-all transform hover:scale-105 hover:-translate-y-1 glow-box rounded-lg font-medium`}>
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/swathi5854" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 border-2 ${theme.buttonBorder} transition-all transform hover:scale-105 hover:-translate-y-1 rounded-lg font-medium`}>
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://www.instagram.com/swathi_2356_?igsh=bmw3djJmbDlheXYy" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 border-2 ${theme.buttonBorder} transition-all transform hover:scale-105 hover:-translate-y-1 rounded-lg font-medium`}>
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <button onClick={() => scrollToSection('contact')} className={`flex items-center gap-2 px-6 py-3 border-2 ${theme.buttonBorder} transition-all transform hover:scale-105 hover:-translate-y-1 rounded-lg font-medium`}>
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>
          <button onClick={() => scrollToSection('about')} className="animate-bounce">
            <ChevronDown className={`w-8 h-8 mx-auto ${theme.text}`} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center glow-text">
              About Me
            </h2>
            <div className={`h-1 w-24 ${isDark ? 'bg-white' : 'bg-black'} mx-auto mb-12 transition-all duration-500`}></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className={`fade-in-section border ${theme.border} rounded-2xl p-8 hover:${theme.borderHover} transition-all duration-300 glow-box group ${theme.hoverBg}`}>
              <Brain className={`w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300 ${theme.text}`} />
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className={`${theme.text} font-semibold text-lg`}>B.Tech in Computer Science</p>
                  <p className={theme.textSecondary}>VIT-AP University</p>
                  <p className={theme.textTertiary}>Expected 2027 • CGPA: 9.3</p>
                </div>
                <div className={`border-t ${theme.border} pt-4`}>
                  <p className={`${theme.text} font-semibold text-lg`}>Intermediate (PCM)</p>
                  <p className={theme.textSecondary}>Narayana Junior College</p>
                  <p className={theme.textTertiary}>2021-2023 • 99%</p>
                </div>
              </div>
            </div>

            <div className={`fade-in-section border ${theme.border} rounded-2xl p-8 hover:${theme.borderHover} transition-all duration-300 glow-box group ${theme.hoverBg}`}>
              <Award className={`w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300 ${theme.text}`} />
              <h3 className="text-2xl font-bold mb-4">Certification</h3>
              <div className="space-y-2">
                <p className={`${theme.text} font-semibold text-lg`}>Oracle Cloud Infrastructure</p>
                <p className={theme.textSecondary}>Certified Generative AI Professional</p>
                <p className={`${theme.textTertiary} mb-4`}>Valid till August 2027</p>
                <p className={`text-sm ${theme.textSecondary} leading-relaxed mb-4`}>Validates expertise in Large Language Models (LLMs), Prompt Engineering, and AI deployment on OCI</p>
                <a 
                  href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=4B4B8E0C9EFF35C193CCA505DDC87D32B6F9C7603F22522C14E423E9F9D15409" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 border ${theme.border} rounded-lg hover:${theme.borderHover} transition-all text-sm font-medium`}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Credential
                </a>
              </div>
            </div>
          </div>

          <div className={`fade-in-section border ${theme.border} rounded-2xl p-8 glow-box ${theme.hoverBg} hover:${theme.borderHover} transition-all duration-300`}>
            <p className={`text-lg ${theme.textSecondary} leading-relaxed`}>
              I'm a full-stack and AI developer specializing in MERN and Python ecosystems, with a proven track record of building 
              intelligent and user-centric applications. My projects have delivered exceptional results, achieving <span className={`${theme.text} font-semibold`}>99% accuracy 
              in phishing detection</span>, <span className={`${theme.text} font-semibold`}>92% efficiency improvements in complaint processing</span>, and <span className={`${theme.text} font-semibold`}>100% elimination of manual 
              verification errors</span>. I leverage cutting-edge frameworks and NLP/ML technologies to architect and deploy scalable, production-ready solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center glow-text">
              Featured Projects
            </h2>
            <div className={`h-1 w-24 ${isDark ? 'bg-white' : 'bg-black'} mx-auto mb-12 transition-all duration-500`}></div>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className={`fade-in-section border ${theme.border} rounded-2xl p-8 hover:${theme.borderHover} transition-all duration-300 glow-box group ${theme.hoverBg}`}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 border-2 ${isDark ? 'border-white' : 'border-black'} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 bg-gradient-to-br ${project.gradient}`}>
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                        <p className={theme.textSecondary}>{project.subtitle} • {project.year}</p>
                      </div>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 ${theme.text} hover:glow-text mt-2 md:mt-0 transition-all group/link`}>
                          <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                          <span className="font-medium">View Live</span>
                        </a>
                      )}
                    </div>
                    <div className={`${theme.cardBg} border ${theme.border} p-4 rounded-xl mb-4 group-hover:border-opacity-50 transition-all`}>
                      <p className={`text-sm ${theme.textSecondary} italic flex items-center gap-2 mb-2`}>
                        <Target className="w-4 h-4" />
                        What it solves:
                      </p>
                      <p className={`${theme.text} font-medium leading-relaxed`}>{project.solves}</p>
                    </div>
                    <p className={`${theme.textSecondary} mb-4 leading-relaxed`}>{project.description}</p>
                    <ul className="space-y-2 mb-4">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className={`flex items-start gap-2 text-sm ${theme.textSecondary}`}>
                          <span className={`${theme.text} mt-1 font-bold`}>▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className={`px-3 py-1 border ${isDark ? 'border-white/30' : 'border-black/30'} rounded-full text-sm font-medium hover:${theme.borderHover} transition-all`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.metrics && (
                      <div className="flex flex-wrap gap-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className={`border ${isDark ? 'border-white/30' : 'border-black/30'} rounded-lg px-4 py-2 hover:${theme.borderHover} transition-all`}>
                            <p className={`text-xs ${theme.textSecondary} capitalize`}>{key}</p>
                            <p className={`text-lg font-bold ${theme.text}`}>{value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center glow-text">
              Technical Skills
            </h2>
            <div className={`h-1 w-24 ${isDark ? 'bg-white' : 'bg-black'} mx-auto mb-12 transition-all duration-500`}></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`fade-in-section border ${theme.border} rounded-2xl p-6 hover:${theme.borderHover} transition-all duration-300 glow-box group ${theme.hoverBg}`}>
                <h3 className="text-xl font-bold mb-4 group-hover:glow-text transition-all">{category}</h3>
                <div className="space-y-2">
                  {items.map((skill, i) => (
                    <div key={i} className={`flex items-center gap-3 ${theme.textSecondary} group-hover:${theme.text} transition-all`}>
                      <div className={`w-1.5 h-1.5 ${isDark ? 'bg-white' : 'bg-black'} rounded-full group-hover:scale-150 transition-transform`}></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 glow-text">
              Get In Touch
            </h2>
            <div className={`h-1 w-24 ${isDark ? 'bg-white' : 'bg-black'} mx-auto mb-12 transition-all duration-500`}></div>
          </div>
          
          <p className={`fade-in-section text-xl ${theme.textSecondary} mb-12 leading-relaxed`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="mailto:machireddyswathi90@gmail.com" className={`fade-in-section border ${theme.border} rounded-2xl p-8 hover:${theme.borderHover} transition-all duration-300 glow-box flex items-center gap-4 group ${theme.hoverBg}`}>
              <Mail className={`w-8 h-8 group-hover:scale-110 transition-transform ${theme.text}`} />
              <div className="text-left">
                <p className={`${theme.textSecondary} text-sm mb-1`}>Email</p>
                <p className={`${theme.text} font-medium break-all`}>machireddyswathi90@gmail.com</p>
              </div>
            </a>
            <a href="tel:+919398525854" className={`fade-in-section border ${theme.border} rounded-2xl p-8 hover:${theme.borderHover} transition-all duration-300 glow-box flex items-center gap-4 group ${theme.hoverBg}`}>
              <Phone className={`w-8 h-8 group-hover:scale-110 transition-transform ${theme.text}`} />
              <div className="text-left">
                <p className={`${theme.textSecondary} text-sm mb-1`}>Phone</p>
                <p className={`${theme.text} font-medium`}>+91-9398525854</p>
              </div>
            </a>
          </div>
          <div className={`fade-in-section border ${theme.border} rounded-2xl p-8 glow-box flex items-center justify-center gap-4 ${theme.hoverBg} hover:${theme.borderHover} transition-all`}>
            <MapPin className={`w-8 h-8 ${theme.text}`} />
            <div>
              <p className={`${theme.textSecondary} text-sm mb-1`}>Location</p>
              <p className={`${theme.text} text-lg font-medium`}>Vijayawada, Andhra Pradesh, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-black/50' : 'bg-white/50'} backdrop-blur-lg py-8 px-4 border-t ${theme.border}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={theme.textTertiary}>© 2025 Machireddy Swathi. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;