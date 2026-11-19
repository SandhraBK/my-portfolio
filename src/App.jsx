import './App.css'

function App() {
  const projects = [
    {
      title: 'MonsoonExit',
      category: 'MERN Stack Web Application',
      description:
        'A web application developed using MongoDB, Express, React and Node.js.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/SandhraBK/monsoonExit',
    },
    {
      title: 'SkyGuard',
      category: 'Full Stack Project',
      description:
        'An aircraft workforce surveillance system with role-based dashboards and workforce management features.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://github.com/SandhraBK',
    },
    {
      title: 'Adaptive Traffic Light Control',
      category: 'Final Year Project',
      description:
        'An intelligent traffic management system using YOLO-based vehicle detection and traffic density estimation.',
      tech: ['Python', 'YOLO', 'AI', 'Computer Vision'],
      link: 'https://github.com/SandhraBK',
    },
  ]

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Java',
    'Python',
    'Git',
    'GitHub',
  ]

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          Sandhra<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact" className="contact-button">
            Contact
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="greeting">HELLO, I'M</p>

          <h1>
            Sandhra <span>BK</span>
          </h1>

          <h2>Computer Science Engineering Student</h2>

          <p className="hero-description">
            Aspiring software developer passionate about technology,
            web development and building creative solutions to real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Projects ↗️
            </a>

            <a
              href="https://github.com/SandhraBK"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub ↗️
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/SandhraBK"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span>•</span>
            <a href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">SB</div>
          <p className="card-label">WELCOME TO MY PORTFOLIO</p>
          <h3>Building ideas into reality.</h3>
          <p>
            Learning, developing and exploring the world of software
            and technology.
          </p>
          <div className="status">
            <span className="status-dot"></span>
            Open to opportunities
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <p className="section-tag">01 / ABOUT ME</p>
        <h2>About Me</h2>

        <p className="about-text">
          I am a Computer Science Engineering student interested in
          software development and modern web technologies. I enjoy
          learning new technologies, developing projects and improving
          my programming skills. I am looking forward to starting my
          professional career and contributing to innovative projects.
        </p>
      </section>

      <section className="section" id="skills">
        <p className="section-tag">02 / TECHNICAL SKILLS</p>
        <h2>Technologies I work with</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <p className="section-tag">03 / MY WORK</p>
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={project.title}>
              <div className="project-number">
                0{index + 1}
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub ↗️
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="education">
        <p className="section-tag">04 / EDUCATION</p>
        <h2>Education</h2>

        <div className="education-card">
          <p className="education-date">Bachelor of Technology</p>
          <h3>Computer Science and Engineering</h3>
          <p>MES College of Engineering Kuttippuram</p>
          <p>KTU — Kerala Technological University</p>
          <p className="education-note">
            Undergraduate student
          </p>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <p className="section-tag">05 / CONTACT</p>
        <h2>Let's connect!</h2>

        <p>
          I'm interested in opportunities where I can learn,
          grow and contribute my skills.
        </p>

        <div className="contact-links">
          <a href="https://github.com/SandhraBK" target="_blank" rel="noreferrer">
            GitHub ↗️
          </a>

          <a href="mailto:your-email@example.com">
            Email Me ↗️
          </a>
        </div>
      </section>

      <footer>
        <p>Designed & built by Sandhra BK ©️ 2026</p>
      </footer>
    </div>
  )
}

export default App