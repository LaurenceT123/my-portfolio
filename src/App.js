
import './App.css';
import { useRef } from 'react';

import Avatar from './Components/Avatar/Avatar';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe/AboutMe';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import ContactMe from './Components/ContactMe/ContactMe';

function App() {

  const aboutMeSection = useRef(null);
  const experienceSection = useRef(null);
  const projectSection = useRef(null);
  const contactSection = useRef(null);

  const handleSectionClick = (sectionId) => {
    const sectionRef = {
        "about": aboutMeSection,
        "experience": experienceSection,
        "project": projectSection,
        "contact": contactSection
    }[sectionId];

    sectionRef.current.scrollIntoView({ behavior: "smooth" });
};

  return (
    <div className="App">
      <div class="container">
        <NavBar onSelectionClick={handleSectionClick}/>
        <Avatar/>
        <AboutMe reference= {aboutMeSection}/>
        <Experience reference = {experienceSection}/>
        <Projects reference = {projectSection}/>
        <ContactMe reference = {contactSection}/>

        <nav class="specialNav">
                <div class="logo"></div>
                <div>
                    <ul className = "NavLinks">
                        <li> <a href="#about" onClick={() => handleSectionClick("about")}>About</a></li>
                        <li> <a href="#experience" onClick={() => handleSectionClick("experience")}>Experience</a></li>
                        <li> <a href="#project" onClick={() => handleSectionClick("project")}>Projects</a></li>
                        <li> <a href="#contact" onClick={() => handleSectionClick("contact")}>Contact</a></li>
                    </ul>
                </div>
          </nav>

        <div class = "header">
            <p class = "copyright">Copyright  &#169; 2024 Laurence Tremblay. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default App;
