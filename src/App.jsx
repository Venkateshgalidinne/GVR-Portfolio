import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimatedCard from "./components/AnimatedCard";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Goals from "./components/Goals";


function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <main>

        {/* HOME */}
        {/* <section id="home" className="section home-section">
          <span className="badge">
            AVAILABLE FOR OPPORTUNITIES
          </span>

          <h1>
            GALIDINNE VENKATESWARA RAO
          </h1>

          <h2>
            AI & Data Science Developer
          </h2>

          <p>
            Python | Generative AI | Agentic AI | Pega
          </p>

          <div className="buttons">
            <a href="#projects">
              View My Projects
            </a>

            <a href="/resume.pdf" download>
              Download Resume
            </a>

            <a href="#contact">
              Let's Connect
            </a>
          </div>
        </section> */}


        {/* ABOUT */}
        <section id="about" className="section">
          <span className="section-label">
            ABOUT ME
          </span>

          <h2>
            Building with Code, Data & AI
          </h2>

          <p>
            I am a Data Science graduate with a strong interest
            in Python, Generative AI, Agentic AI, Machine Learning
            and Pega. I enjoy building practical technology
            solutions and continuously developing my skills
            through projects and certifications.
          </p>
        </section>


        {/* SKILLS */}
        <section id="skills" className="section">
          <span className="section-label">
            MY SKILLS
          </span>

          <h2>
            Technologies & Expertise
          </h2>

          <div className="cards">

            <div className="card">
              <h3>Programming</h3>
              <p>Python, HTML, CSS</p>
            </div>

            <div className="card">
              <h3>Generative AI</h3>
              <p>
                Generative AI, Agentic AI,
                Prompt Engineering
              </p>
            </div>

            <div className="card">
              <h3>Machine Learning</h3>
              <p>
                Machine Learning, Data Science
              </p>
            </div>

            <div className="card">
              <h3>Web Development</h3>
              <p>Streamlit</p>
            </div>

            <div className="card">
              <h3>Database</h3>
              <p>MySQL, Supabase</p>
            </div>

            <div className="card">
              <h3>Pega</h3>
              <p>
                Pega Dev Studio,
                Case Management,
                Workflow Automation
              </p>
            </div>

          </div>
        </section>


        {/* PROJECTS */}
        <Projects />


        {/* CERTIFICATIONS */}
        <section id="certifications" className="section">
          <span className="section-label">
            CERTIFICATIONS
          </span>

          <h2>
            Professional Certifications
          </h2>

          <div className="cards">

            <div className="card">
              <h3>CPSSA 25</h3>
              <p>
                Pega Certified Senior System Architect
              </p>
              <strong>
                February 2026
              </strong>
            </div>

            <div className="card">
              <h3>CPSA 24.2</h3>
              <p>
                Pega Certified System Architect
              </p>
              <strong>
                July 2025
              </strong>
            </div>

            <div className="card">
              <h3>
                Python for Data Science
              </h3>
              <p>
                NPTEL – IIT Madras
              </p>
              <strong>
                Certified
              </strong>
            </div>

            <div className="card">
              <h3>
                Python Essentials 1
              </h3>
              <p>
                Cisco Networking Academy
              </p>
              <strong>
                Certified
              </strong>
            </div>

          </div>
        </section>


        {/* EDUCATION */}
        <section id="education" className="section">
          <span className="section-label">
            EDUCATION
          </span>

          <h2>
            Academic Journey
          </h2>

          <div className="education-card">
            <h3>
              B.Tech in CSE – Data Science
            </h3>

            <p>
              KKR & KSR Institute of Technology
              and Sciences
            </p>

            <strong>
              2023 – 2026 • CGPA 8.41
            </strong>
          </div>


          <div className="education-card">
            <h3>
              Diploma in Electrical & Electronics Engineering
            </h3>

            <p>
              Kallam Haranadhareddy Institute
              of Technology
            </p>

            <strong>
              2020 – 2023 • CGPA 7.30
            </strong>
          </div>


          <div className="education-card">
            <h3>
              SSC
            </h3>

            <p>
              Jubilation High School
            </p>

            <strong>
              2019 – 2020 • CGPA 9.60
            </strong>
          </div>
        </section>


        {/* STRENGTHS */}
        <section id="strengths" className="section">
          <span className="section-label">
            STRENGTHS
          </span>

          <h2>
            What I Bring
          </h2>

          <div className="cards">

            <div className="card">
              Problem Solving
            </div>

            <div className="card">
              Communication
            </div>

            <div className="card">
              Teamwork
            </div>

            <div className="card">
              Adaptability
            </div>

            <div className="card">
              Quick Learning
            </div>

          </div>
        </section>

        {/* GOALS */}
        <Goals />


        {/* CONTACT */}
        <Contact />
        {/* <section id="contact" className="section contact-section">

          <span className="section-label">
            CONTACT
          </span>

          <h2>
            Let's Build Something Intelligent
          </h2>

          <p>
            I am open to opportunities where I can
            apply my skills in Python, Data Science,
            Generative AI, Agentic AI and Pega.
          </p>

          <div className="contact-info">

            <a
              href="mailto:Venkateswararaogalidinne9@gmail.com"
              className="contact-item"
            >
             <strong>Email:</strong>
              <span>Venkateswararaogalidinne9@gmail.com</span>
            </a>

            <a
        href="https://www.linkedin.com/in/venkateswara-rao-galidinne-689030297"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <strong>LinkedIn:</strong>
        <span>www.linkedin.com/in/venkateswara-rao-galidinne-689030297</span>
      </a>

      <a
        href="https://github.com/Venkateshgalidinne"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <strong>GitHub:</strong>
        <span>github.com/Venkateshgalidinne</span>
      </a>

      <a
        href="tel:+919705695719"
        className="contact-item"
      >
        <strong>Phone:</strong>
        <span>+91 9705695719</span>
      </a>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Kondapur%2C%20Hyderabad"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <strong>Location:</strong>
        <span>Kondapur, Hyderabad</span>
      </a>

    </div>

        </section> */}

      </main>


      {/* FOOTER */}
      <footer>
        <p>
          © 2026 GALIDINNE VENKATESWARA RAO.
          All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;