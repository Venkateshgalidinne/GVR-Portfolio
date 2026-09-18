import { motion } from "framer-motion";

function AnimatedSection({ children, className = "", id }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{
        opacity: 0,
        y: 70,
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
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;