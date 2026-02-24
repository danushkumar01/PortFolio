import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Github, Linkedin, Twitter, Mail, ExternalLink, MapPin, ChevronUp, ArrowRight,
  Home, User, Wrench, FolderKanban, MessageCircle, Code2, Palette, Database, Terminal,
  Briefcase, GraduationCap, Coffee, Sparkles, Download, Eye, Heart,
  Atom, FileCode, FileJson, Globe, Wind, Server, GitBranch, MonitorSmartphone, PenTool, 
  Users, Brain, Clock, Lightbulb, MessageSquare, Zap, Flame, Network, Plug, CloudCog,
  Leaf, Rocket, Box
} from "lucide-react";
import { personalInfo, socialLinks, skills, projects, navLinks } from "./data/portfolioData";
import "./App.css";

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

const navIconMap = {
  Home: Home,
  About: User,
  Skills: Wrench,
  Projects: FolderKanban,
  Contact: MessageCircle,
};

const categoryIconMap = {
  Frontend: Code2,
  Backend: Database,
  Database: Database,
  Tools: Terminal,
  Design: Palette,
  "Soft Skills": Heart,
  "Currently Learning": Rocket,
  "Problem Solving": Brain,
};

const skillIconMap = {
  "React": Atom,
  "JavaScript": FileJson,
  "TypeScript": FileCode,
  "HTML/CSS": Globe,
  "Tailwind CSS": Wind,
  "Java": Coffee,
  "Node.js": Server,
  "Git": GitBranch,
  "VS Code": Code2,
  "Figma": PenTool,
  "Python": FileCode,
  "MongoDB": Database,
  "SQL": Database,
  "MySQL": Database,
  "SQL / MySQL": Database,
  "OOP & Design Patterns": Brain,
  "REST API Development": Plug,
  "Firebase": Flame,
  "REST APIs": Plug,
  "REST API": Plug,
  "GitHub": Github,
  "IntelliJ IDEA": Coffee,
  "Problem Solving": Brain,
  "Team Collaboration": Users,
  "Communication": MessageSquare,
  "Quick Learner": Zap,
  "Time Management": Clock,
  "Adaptability": Lightbulb,
  "Spring": Leaf,
  "Spring Boot": Leaf,
  "Microservices": Network,
  "Docker": Box,
};

function ResponsiveIcon({ icon: Icon, sm, md, className = "" }) {
  return (
    <>
      <Icon size={sm} className={`sm:hidden ${className}`} />
      <Icon size={md} className={`hidden sm:block ${className}`} />
    </>
  );
}

function GradientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="gradient-blob gradient-blob-1"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="gradient-blob gradient-blob-2"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="gradient-blob gradient-blob-3"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -20, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      <motion.div
        className="gradient-blob gradient-blob-4"
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />
      
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-neutral-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-lg sm:text-xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          {personalInfo.name.split(" ")[0]}<span className="text-neutral-500">.</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const NavIcon = navIconMap[link.name];
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors group"
              >
                {NavIcon && <NavIcon size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
                {link.name}
              </a>
            );
          })}
        </div>

        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-neutral-800"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const NavIcon = navIconMap[link.name];
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {NavIcon && <NavIcon size={18} />}
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      <div className="hero-glow" />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.2),transparent)]" />
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />
      
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 sm:mb-8"
        >
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full bg-linear-to-br from-neutral-700 to-neutral-900 border-2 border-neutral-700 flex items-center justify-center shadow-2xl" aria-hidden="true">
            <ResponsiveIcon icon={User} sm={36} md={48} className="text-neutral-400" />
          </div>
        </motion.div>

        {personalInfo.available && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-900 border border-neutral-800 rounded-full mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-neutral-300">Available for work</span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight"
        >
          <span className="text-white">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-neutral-400 mb-3 sm:mb-4"
        >
          {personalInfo.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-sm sm:text-base text-neutral-500 mb-8 sm:mb-10 max-w-xl mx-auto px-4"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border border-neutral-700 text-white font-medium rounded-full hover:bg-neutral-900 hover:border-neutral-600 transition-all flex items-center justify-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border border-neutral-700 text-white font-medium rounded-full hover:bg-neutral-900 hover:border-neutral-600 transition-all text-center"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3 sm:gap-4 justify-center mt-10 sm:mt-16"
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-3.5 border border-neutral-800 rounded-full text-neutral-500 hover:text-white hover:border-neutral-600 transition-all"
              >
                {Icon && <Icon size={18} />}
              </a>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-700 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-neutral-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  const highlights = [
    { icon: Coffee, label: "Projects Built", value: projects.length + "+" },
    { icon: Code2, label: "Technologies", value: skills.length + "+" },
    { icon: Sparkles, label: "Years Learning", value: "2+" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-neutral-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            <ResponsiveIcon icon={User} sm={14} md={16} />
            Get to know me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-3 sm:mb-4 tracking-tight">About Me</h2>
          <div className="w-12 sm:w-16 h-0.5 bg-white mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {personalInfo.aboutParagraphs.map((para, i) => (
            <p key={i} className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-4 sm:mb-6 px-2">
              {para}
            </p>
          ))}
          
          <div className="flex items-center justify-center gap-2 text-neutral-500 mb-8 sm:mb-12">
            <ResponsiveIcon icon={MapPin} sm={16} md={18} />
            <span className="text-sm sm:text-base">{personalInfo.location}</span>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-3 sm:p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl sm:rounded-2xl hover:border-neutral-700 transition-colors"
              >
                <ResponsiveIcon icon={item.icon} sm={20} md={24} className="mx-auto mb-2 sm:mb-3 text-neutral-500" />
                <div className="text-lg sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">{item.value}</div>
                <div className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-16 sm:py-24 bg-black/80 section-glow relative">
      <div className="hidden sm:block absolute top-1/2 left-0 -translate-y-1/2 w-100 h-100 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent)] pointer-events-none" />
      <div className="hidden sm:block absolute top-1/2 right-0 -translate-y-1/2 w-100 h-100 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-neutral-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            <ResponsiveIcon icon={Wrench} sm={14} md={16} />
            What I work with
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-3 sm:mb-4 tracking-tight">Skills & Technologies</h2>
          <div className="w-12 sm:w-16 h-0.5 bg-white mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, catIndex) => {
            const CategoryIcon = categoryIconMap[category] || Code2;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="p-4 sm:p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl sm:rounded-2xl hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-neutral-800 rounded-lg">
                    <ResponsiveIcon icon={CategoryIcon} sm={16} md={20} className="text-neutral-400" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-medium text-white uppercase tracking-wider">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => {
                      const SkillIcon = skillIconMap[skill.name] || Code2;
                      return (
                        <motion.span
                          key={skill.name}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-neutral-800/50 border border-neutral-700/50 rounded-full text-xs sm:text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-600 transition-all cursor-default"
                        >
                          <ResponsiveIcon icon={SkillIcon} sm={12} md={14} className="text-neutral-500" />
                          {skill.name}
                        </motion.span>
                      );
                    })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-neutral-950/80 section-glow relative">
      <div className="hidden sm:block absolute top-20 right-1/4 w-125 h-125 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.06),transparent)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-neutral-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            <ResponsiveIcon icon={FolderKanban} sm={14} md={16} />
            My recent work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-3 sm:mb-4 tracking-tight">Featured Projects</h2>
          <div className="w-12 sm:w-16 h-0.5 bg-white mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-neutral-600 hover:shadow-lg hover:shadow-neutral-900/50 transition-all duration-300"
            >
              {project.image && (
                <div className="h-40 sm:h-48 bg-neutral-800 relative overflow-hidden">
                  <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full" aria-label="Featured project">
                      <Sparkles size={14} className="text-neutral-300" />
                    </div>
                  )}
                </div>
              )}
              {!project.image && (
                <div className="h-40 sm:h-48 bg-linear-to-br from-neutral-800 to-neutral-900 flex items-center justify-center relative overflow-hidden">
                  <ResponsiveIcon icon={FolderKanban} sm={40} md={48} className="text-neutral-700 group-hover:scale-110 transition-transform" />
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                      <Sparkles size={14} className="text-neutral-400" />
                    </div>
                  )}
                </div>
              )}
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-neutral-200">{project.title}</h3>
                <p className="text-neutral-500 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-neutral-800 text-neutral-400 text-[10px] sm:text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 sm:gap-3 pt-2 border-t border-neutral-800">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title}`}
                      className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full hover:bg-neutral-800"
                    >
                      <ResponsiveIcon icon={Github} sm={12} md={14} />
                      <span>Source</span>
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live preview of ${project.title}`}
                      className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full hover:bg-neutral-800"
                    >
                      <ResponsiveIcon icon={Eye} sm={12} md={14} />
                      <span>Preview</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-black/80 section-glow relative">
      <div className="hidden sm:block absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.1),transparent)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-neutral-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            <ResponsiveIcon icon={MessageCircle} sm={14} md={16} />
            Let's connect
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-3 sm:mb-4 tracking-tight">Get In Touch</h2>
          <div className="w-12 sm:w-16 h-0.5 bg-white mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="p-5 sm:p-8 bg-neutral-900/50 border border-neutral-800 rounded-xl sm:rounded-2xl mb-6 sm:mb-8">
            <ResponsiveIcon icon={MessageCircle} sm={24} md={32} className="mx-auto mb-3 sm:mb-4 text-neutral-500" />
            <p className="text-sm sm:text-base text-neutral-400">
              Open to backend internships and developer roles. Let's build something great together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send email"
              className="inline-flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3 bg-white text-black text-sm sm:text-base font-medium rounded-full hover:bg-neutral-200 transition-colors"
            >
              <ResponsiveIcon icon={Mail} sm={16} md={18} />
              <span className="truncate max-w-50 sm:max-w-none">{personalInfo.email}</span>
            </a>
          </div>

          <div className="flex gap-3 sm:gap-4 justify-center mt-8 sm:mt-10">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-3.5 border border-neutral-800 rounded-full text-neutral-500 hover:text-white hover:border-neutral-600 transition-all"
                >
                  {Icon && <Icon size={18} />}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 sm:py-8 bg-black border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-neutral-600 text-xs sm:text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 p-3 bg-white text-black rounded-full shadow-lg hover:bg-neutral-200 transition-colors z-50"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <GradientBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
