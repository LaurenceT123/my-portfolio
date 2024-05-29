import React from 'react'
import './AboutMe.css'

function AboutMe({ reference }) 
{

  return (
    <div ref = {reference}>
      <div class = "summary">
          <div class ="sectionText">
            <h1 class="about_me">About Me</h1>
            <p class = "seciton">Experienced and dedicated Computer Science graduate with a proven track record of academic excellence and hands-on project involvement. Proficient in programming in Python, Java, C# and JavaScript. Additionally, skilled in collaborative problem-solving, adaptability, and creativity. Seeking a paid internship or career opportunity to utilize my skills and passion for technology</p>
          </div>
        </div>
    </div>
  )
}

export default AboutMe
