import React from 'react'
import './AboutMe.css'
import { useMediaQuery } from 'react-responsive';

import SkillsRegular from './Skills_Regular/SkillsRegular'
import SkillsSmall from './Skills_Small/SkillsSmall';

function AboutMe({ reference }) 
{

  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <div class = "mainAboutMeSection" ref = {reference}>
      <div class = "summary">
          <div class ="sectionText">
            <h1 class="about_me">About Me</h1>
            <p class = "section">Experienced and dedicated Computer Science graduate with a proven track record of academic excellence and hands-on project involvement. Proficient in programming in Python, Java, C# and JavaScript. Additionally, skilled in collaborative problem-solving, adaptability, and creativity. Seeking a paid internship or career opportunity to utilize my skills and passion for technology</p>
          </div>

          <div class = "skillContainer">
              { isMobile ? ( <SkillsSmall/>) : (<SkillsRegular/>)}
          </div>

        </div>
    </div>
  )
}

export default AboutMe
