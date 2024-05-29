import './Avatar.css'
import React from 'react'

import profileImage from '../../assets/ProfileImage.png'
import resume from '../../assets/Laurence_Resume_2024.pdf'
import linkedin from '../../assets/icons8-linkedin-50.png'
import github from '../../assets/icons8-github-50.png'
import resumeIcon from '../../assets/icons8-resume-50.png'

function Avatar() {
  return (
    <div class = "aboutMeSection">
      <div class = "profile">

        <div class = "sectionPic">
          <img class = "profileimage" src={profileImage} width = {400} height = {400} alt ="Logo"/>
          <div class ="sectionText">
            <p>Hello, my name is</p>
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

      <div class = "summary">
          <div class ="sectionText">
            <h1 class="about_me">About Me</h1>
            <p class = "section_text_p2">Experienced and dedicated Computer Science graduate with a proven track record of academic excellence and hands-on project involvement. Proficient in programming in Python, Java, C# and JavaScript. Additionally, skilled in collaborative problem-solving, adaptability, and creativity. Seeking a paid internship or career opportunity to utilize my skills and passion for technology</p>
          </div>
        </div>
    </div>
  )
}

export default Avatar
