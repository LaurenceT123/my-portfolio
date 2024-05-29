import './Avatar.css'
import React from 'react'

import profileImage from '../../assets/profile_transparent.png'
import resume from '../../assets/Laurence_Resume_2024(2).pdf'
import linkedin from '../../assets/icons8-linkedin-50 (1).png'
import github from '../../assets/icons8-github-50 (1).png'
import resumeIcon from '../../assets/icons8-resume-50 (1).png'

/* Avatar component, this includes the about me section and profile */
function Avatar() 
{

  return (
    <div class = "aboutMeSection">
        <div class = "profile">
          <div class = "sectionPic">
            <img class = "profileimage" src={profileImage} width = {500} height = {500} alt ="Logo"/>
            <div class ="sectionText">
              <h1 class ="title">Laurence Tremblay</h1>
              <p class= "section_text_p2">Bachelor Degree in Computer Science from Cal Poly Pomona</p>
              <div class = "socialLinks">
                <img class = "resume" src={resumeIcon} alt="resume" onClick={() => window.open(resume)}/>
                <img class = "linkedin" src={linkedin} alt="MyLinkedin" onClick={() => window.open('https://www.linkedin.com/in/laurence-tremblay1/',"_blank")}/>
                <img class = "github" src={github} alt="MyGithub" onClick={() => window.open('https://github.com/LaurenceT123',"_blank")}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Avatar
