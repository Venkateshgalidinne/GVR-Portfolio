import { motion } from "framer-motion";
import {
  Rocket,
  Code2,
  BrainCircuit,
  Bot,
  Database,
  TrendingUp,
} from "lucide-react";

function Goals() {
  const goals = [
    {
      icon: Code2,
      title: "Build",
      text: "Build practical and impactful software solutions using modern technologies.",
    },
    {
      icon: BrainCircuit,
      title: "Learn",
      text: "Continuously learn and strengthen my skills in AI, Data Science and software development.",
    },
    {
      icon: Bot,
      title: "Innovate",
      text: "Explore Generative AI and Agentic AI to create intelligent applications.",
    },
    {
      icon: TrendingUp,
      title: "Grow",
      text: "Grow professionally by taking on challenging projects and real-world opportunities.",
    },
    {
      icon: Database,
      title: "Contribute",
      text: "Contribute my technical skills to meaningful projects and collaborative teams.",
    },
  ];

  return (
    <section id="goals" className="goals-section">

      {/* Heading */}
      <motion.div
        className="goals-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">
          // WHERE I'M HEADED
        </span>

        <h2>Experience &amp; Goals</h2>

        <div className="heading-line"></div>
      </motion.div>

      {/* Main Goal Card */}
      <motion.div
        className="main-goal-card"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >

        <motion.div
          className="goal-rocket"
          animate={{
            y: [0, -8, 0],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Rocket size={42} />
        </motion.div>

        <p className="main-goal-text">
          Seeking opportunities as a{" "}
          <span>Gen AI & Agentic AI Developer</span>{" "}
          where I can contribute, learn, and grow by building
          impactful software solutions.
        </p>

        <div className="goal-pills">
          <span>Contribute</span>
          <span>Learn</span>
          <span>Grow</span>
          <span>Build Impact</span>
        </div>

      </motion.div>

      {/* Goal Cards */}
      <div className="goal-grid">

        {goals.map((goal, index) => {
          const Icon = goal.icon;

          return (
            <motion.div
              className="goal-card"
              key={goal.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -7,
              }}
            >
              <div className="goal-icon">
                <Icon size={21} />
              </div>

              <h3>{goal.title}</h3>

              <p>{goal.text}</p>
            </motion.div>
          );
        })}

      </div>

    </section>
  );
}

export default Goals;