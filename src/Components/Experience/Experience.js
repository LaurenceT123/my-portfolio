import React from 'react'
import './Experience.css'

function Experience({ reference }) 
{
  return (
    <div class = "experienceMain" ref = {reference}>
      <h1 class="experienceHeader">Experience</h1>
      <div class = "degreeSection">
        
        <div class = "box_experience">
          <h3 class = "text_experience">Bachelor of Science in Computer Science</h3>
          <p class = "school_name">California Polytechnic State University</p>
        </div>

        <div class = "box_experience">
          
          <h3 class = "text_experience">High School Diploma</h3>
          <p class = "school_name">Girls Academic Leadership Academy</p>
        </div>

      </div>

      <div class = "resumeList">
        <div class = "longLine"></div>

        <div class= "experience_info">
          
          <div class="experience_container">
            <div class = "top_experience">
              <div class = "top_right_experience">
                <h2> Teacher and Teacher Assistant</h2>
                <p>Learning Individual Studies Academy (LISA)</p>
              </div>
              <p>Summer 2021 and 2022</p>
            </div>
            <ul class = "experience_list">
              <li>Tutored students in K-6th grade in English, Math and STEM</li>
              <li>Worked closely with team members to deliver project requirements, develop solutions and meet deadlines</li>
              <li>Tailored courses to meet goals and objectives of every student</li>
              <li>Collaborated with students and parents to determine students’ needs and develop effective tutoring strategies</li>
            </ul>
          </div>

          <div class="experience_container">
            <div class = "top_experience">
              <div class = "top_right_experience">
                <h2> Social Media Intern</h2>
                <p>Prime Opportunities Investment Group,LLC</p>
              </div>
              <p>Summer 2019</p>
            </div>
            <ul class = "experience_list">
              <li>Created informative and entertaining posts for client’s Facebook pages with the use of Canva</li>
              <li>Responded to online reviews both positive and negative</li>
            </ul>
          </div>

          <div class="experience_container">
            <div class = "top_experience">
              <div class = "top_right_experience">
                <h2> Student Researcher</h2>
                <p>USC’s Young Researcher Program</p>
              </div>
              <p>Summer 2019</p>
            </div>
            <ul class = "experience_list">
              <li>The Young Researchers Program is a six-week summer program where I experienced hands-on university-level research. My project was called “Testing the Removal of Nitromethane for Applications in Potable Reuse”</li>
              <li>I attended weekly workshops that provided fundamental knowledge about college applications and the key steps to pursuing careers in STEM (Science, Technology, Engineering and Mathematics) fields</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Experience
