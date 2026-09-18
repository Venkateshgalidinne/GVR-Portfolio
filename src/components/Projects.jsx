import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Leaf,
  Car,
  Hotel,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    title: "Job Portal",
    status: "COMPLETED",
    description:
      "A web-based Job Portal built with Python and Streamlit for job seekers and recruiters. Integrated Supabase for user details, job listings, and application management with search and filtering features.",
    technologies: [
      "Python",
      "Streamlit",
      "Supabase",
      "Machine Learning",
    ],
  },

  {
    number: "02",
    icon: Leaf,
    title: "Plant Disease Recognition",
    status: "COMPLETED",
    description:
      "A fine-grained plant disease recognition system designed for real-world agricultural conditions using multi-scale feature extraction, CNN, RNN, and Transformer-based attention techniques.",
    technologies: [
      "Python",
      "CNN",
      "RNN",
      "Transformer",
      "PyTorch",
    ],
  },

  {
    number: "03",
    icon: Car,
    title: "Online Driver Service",
    status: "COMPLETED",
    description:
      "A Pega Platform application designed to streamline driver booking and ride management through workflow automation, driver onboarding, user registration, feedback management, and role-based access.",
    technologies: [
      "Pega Platform",
      "Pega Dev Studio",
      "Case Management",
      "Workflow",
    ],
  },

  {
    number: "04",
    icon: Hotel,
    title: "Hotel Management System",
    status: "COMPLETED",
    description:
      "A Pega Platform application designed to streamline hotel operations including guest registration, room booking, check-in, check-out, service management, billing, and reporting.",
    technologies: [
      "Pega Platform",
      "Pega Dev Studio",
      "Case Management",
      "Workflow",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">

      {/* Section heading */}
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">
          // WHAT I'VE BUILT
        </span>

        <h2>Projects</h2>

        <p>
          A collection of projects showcasing my experience
          across Python, AI, Data Science and Pega Platform.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="projects-grid">

        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              className="project-modern-card"
              key={project.number}
              initial={{
                opacity: 0,
                y: 50,
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
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
            >

              {/* Top row */}
              <div className="project-card-top">

                <div className="project-icon">
                  <Icon size={23} strokeWidth={1.6} />
                </div>

                <span className="project-status">
                  {project.status}
                </span>

              </div>

              {/* Project number */}
              <span className="project-number">
                {project.number}
              </span>

              {/* Content */}
              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technologies */}
                <div className="project-tech">

                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

              {/* Bottom arrow */}
              <div className="project-arrow">
                <ArrowUpRight size={19} />
              </div>

            </motion.article>
          );
        })}

      </div>

    </section>
  );
}

export default Projects;