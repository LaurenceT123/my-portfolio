
import './App.css';
import Avatar from './Components/Avatar/Avatar';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe/AboutMe';
import { useRef } from 'react';

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
      </div>
    </div>
  );
}

export default App;
