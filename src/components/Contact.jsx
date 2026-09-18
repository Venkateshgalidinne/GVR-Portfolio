import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Briefcase,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      {/* Heading */}
      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">
          // LET'S CONNECT
        </span>

        <h2>Get In Touch</h2>

        <p>
          Have an opportunity, a project idea, or just want to
          say hi? My inbox is always open.
        </p>
      </motion.div>


      {/* ================================
          CONTACT DETAILS
      ================================= */}

      <motion.div
        className="contact-details"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <a
          href="mailto:Venkateswararaogalidinne9@gmail.com"
          className="contact-detail-card"
        >
          <div className="contact-detail-icon">
            <Mail size={21} />
          </div>

          <div>
            <span>Email</span>
            <strong>
              Venkateswararaogalidinne9@gmail.com
            </strong>
          </div>
        </a>


        <a
          href="tel:+919705695719"
          className="contact-detail-card"
        >
          <div className="contact-detail-icon">
            <Phone size={21} />
          </div>

          <div>
            <span>Phone</span>
            <strong>
              +91 9705695719
            </strong>
          </div>
        </a>


        <a
          href="https://www.google.com/maps/search/?api=1&query=Kondapur%2C%20Hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-detail-card"
        >
          <div className="contact-detail-icon">
            <MapPin size={21} />
          </div>

          <div>
            <span>Location</span>
            <strong>
              Kondapur, Hyderabad
            </strong>
          </div>
        </a>


        <a
          href="#"
          className="contact-detail-card"
          onClick={(e) => e.preventDefault()}
        >
          <div className="contact-detail-icon">
            <Linkedin size={21} />
          </div>

          <div>
            <span>LinkedIn</span>
            <strong>
              LinkedIn Profile
            </strong>
          </div>
        </a>


        <a
          href="#"
          className="contact-detail-card"
          onClick={(e) => e.preventDefault()}
        >
          <div className="contact-detail-icon">
            <Github size={21} />
          </div>

          <div>
            <span>GitHub</span>
            <strong>
              GitHub Profile
            </strong>
          </div>
        </a>

      </motion.div>


      {/* ================================
          CONTACT FORM
      ================================= */}

      <div className="contact-main">

        {/* Left message */}
        <motion.div
          className="contact-intro"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="contact-mini-label">
            OPEN TO OPPORTUNITIES
          </span>

          <h3>
            Let's build something
            <span> meaningful.</span>
          </h3>

          <p>
            I'm interested in opportunities involving Python,
            Generative AI, Agentic AI, Data Science and
            Pega Platform development.
          </p>

          <div className="contact-availability">
            <span></span>
            Available for opportunities
          </div>
        </motion.div>


        {/* Form */}
        <motion.div
          className="contact-form-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const name =
                e.target.name.value;

              const email =
                e.target.email.value;

              const message =
                e.target.message.value;

              const subject =
                `Portfolio Contact from ${name}`;

              const body =
                `Name: ${name}\nEmail: ${email}\n\n${message}`;

              window.location.href =
                `mailto:Venkateswararaogalidinne9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }}
          >

            <div className="form-row">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <div className="form-buttons">

              <button
                type="submit"
                className="send-message-btn"
              >
                <Send size={17} />
                Send Message
              </button>

              <a
                href="mailto:Venkateswararaogalidinne9@gmail.com"
                className="hire-me-btn"
              >
                <Briefcase size={17} />
                Hire Me
              </a>

            </div>

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;