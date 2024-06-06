import React from 'react'
import './ContactMe.css'
import emailIcon from '../../assets/image.png'
import linkedinIcon from '../../assets/icons8-linkedin-circled-50.png'

function ContactMe({ reference }) {
  return (
    <div class = "ContactMeSection" ref = {reference}>
      <h1 class = "sectionTwo">Contact Me</h1>
      <p class= "sectionOne"> Get In Touch</p>

      <div class = "contactMe_main_container">
        <div class = "contactMe_Container">
          
          <img src={emailIcon} alt = "emailIcon" width = {40} height = {40}/>
          <p class = "contactMeInfo">laurencetremblay10@gmail.com</p>

          <img src={linkedinIcon} alt = "linkedinIcon" width = {40} height = {40}/>
          <p class = "contactMeInfo">laurence-tremblay1</p>
        </div>
      </div>
    </div>
    
  )
}

export default ContactMe
