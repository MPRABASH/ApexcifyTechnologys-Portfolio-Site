const About = () => {
  return (
    <section className='about-section'>
      <h1>About Me</h1>
      <p>
        Passionate frontend developer skilled in HTML5, CSS3, JavaScript, and
        React.js. Experienced in building responsive web apps and eager to learn
        new technologies. Strong problem-solving abilities and ready to
        contribute to a dynamic team.
      </p>
      <h2>Education</h2>
      <div className='education-details'>
        <div>
          <h3>BCA (Computer Application)</h3>
          <p>2022-2025</p>
        </div>
      </div>
      <h2>Skills</h2>
      <div className='skills-container'>
        {/* Technical Skills */}
        <div className='skills-category'>
          <h3>Technical Skills</h3>
          <ul>
            <li>
              <i className='bx bxl-html5'></i>
              Html5
            </li>
            <li>
              <i className='bx bxl-css3'></i>
              CSS3
            </li>
            <li>
              <i className='bx bxl-javascript'></i>
              Javascript
            </li>
            <li>
              <i className='bx bxl-react'></i>
              React
            </li>
            <li>
              <i className='bx bx-devices'></i>
              Responsive Design
            </li>
            <li>
              <i className='bx bx-layer'></i>
              SPA
            </li>
            <li>
              <i className='bx bx-cloud-download'> </i>
              API Integration
            </li>
            <li>
              <i className='bx bx-code-curly'> </i>
              DOM Manipulation
            </li>
          </ul>
        </div>
        {/* TOOLS */}
        <div className='skills-category'>
          <h3>Tools</h3>
          <ul>
            <li>
              <i className='bx bxl-visual-studio'></i>
              VS Code
            </li>
            <li>
              <i className='bx bxl-github'></i>
              GitHub
            </li>
            <li>
              <i className='bx bxl-chrome'></i>
              Chrome DevTools
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default About