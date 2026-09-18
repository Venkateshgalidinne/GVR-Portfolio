function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        GVR
      </div>

      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#education">Education</a>
        <a href="#goals">Goals</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="connect-button">
        Hire Me
      </a>
    </nav>
  );
}

export default Navbar;