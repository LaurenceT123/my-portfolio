
import './App.css';
import { useRef } from 'react';

import Avatar from './Components/Avatar/Avatar';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe/AboutMe';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';

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
        <Projects/>
      </div>
    </div>
  );
}

export default App;
