import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Database,
  Sparkles,
  Cpu,
  Bot,
} from "lucide-react";

function Hero() {
  const technologies = [
    "PYTHON",
    "GENERATIVE AI",
    "AGENTIC AI",
    "MACHINE LEARNING",
    "PEGA",
    "STREAMLIT",
    "SUPABASE",
    "PROMPT ENGINEERING",
  ];

  const floatingTech = [
    { name: "Python", icon: <Code2 size={20} />, className: "tech-1" },
    { name: "GenAI", icon: <Sparkles size={20} />, className: "tech-2" },
    { name: "Agentic AI", icon: <Bot size={20} />, className: "tech-3" },
    { name: "ML", icon: <BrainCircuit size={20} />, className: "tech-4" },
    { name: "Pega", icon: <Cpu size={20} />, className: "tech-5" },
    { name: "Database", icon: <Database size={20} />, className: "tech-6" },
  ];

  return (
    <section id="home" className="hero">

      {/* Background glow */}
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.div
            className="availability-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          <motion.p
            className="hero-small-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            GALIDINNE
            <span> VENKATESWARA RAO</span>
          </motion.h1>

          <div className="hero-role">
            <span className="role-prefix">&lt;</span>

            <span className="typing-text">
              AI & Data Science Developer
            </span>

            <span className="typing-cursor"></span>

            <span className="role-prefix">&gt;</span>
          </div>

          <p className="hero-tagline">
            Building Intelligent Solutions with
            <span> Code, Data & AI</span>
          </p>

          <p className="hero-description">
            Passionate technology professional with a Data Science background,
            focused on Python, Generative AI, Agentic AI, Machine Learning
            and Pega Platform development.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a href="#projects" className="hero-btn primary-btn">
              <span>View My Projects</span>
              <span>→</span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="hero-btn secondary-btn"
            >
              Download Resume
              <span>↓</span>
            </a>

            <a href="#contact" className="hero-btn outline-btn">
             Hire Me
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE - AI PROFILE */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >

          {/* Rotating rings */}
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          {/* Main AI Core */}
          <motion.div
            className="ai-core"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="core-inner">
              <div className="core-icon">
                <BrainCircuit size={70} strokeWidth={1.3} />
              </div>

              <div className="core-text">
                <span>AI</span>
                <small>CORE</small>
              </div>
            </div>

          </motion.div>

          {/* Floating technology cards */}
          {floatingTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={`floating-tech ${tech.className}`}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {tech.icon}
              <span>{tech.name}</span>
            </motion.div>
          ))}

          {/* Decorative particles */}
          <span className="particle particle-1"></span>
          <span className="particle particle-2"></span>
          <span className="particle particle-3"></span>
          <span className="particle particle-4"></span>
          <span className="particle particle-5"></span>

        </motion.div>

      </div>

      {/* INFINITE SCROLLING TECHNOLOGY BAR */}
      <div className="tech-marquee">

        <div className="marquee-track">

          {[...technologies, ...technologies].map((tech, index) => (
            <div className="marquee-item" key={index}>

              <span className="marquee-star">✦</span>

              {tech}

            </div>
          ))}

        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </motion.div>

    </section>
  );
}

export default Hero;