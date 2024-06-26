import React from 'react'
import './Projects.css'

import video1 from '../../assets/projectImages/SpotifyApi.mp4'
import sportImg from '../../assets/projectImages/IMG_1999.jpg'
import unityImg from '../../assets/projectImages/fulltitle.jpg'
import portfolioImg from '../../assets/projectImages/image.png'
import { motion} from "framer-motion"

function Projects({ reference }) {

  return (
    <div class="ProjectsSection" ref = {reference}>
      <h1>Projects</h1>

      <div class="ProjectScroll">
        
        
        <motion.div class = "projectBox" whileHover={{ scale: 1.03 }}>
            <video class = "video" src={video1} controls="controls" autoplay="true" />
            <h2 class = "projectTitle">Music Recommendation Website</h2>
            <button class = "projectButton" onClick={() => window.open('https://youtu.be/U-Y5JHaPnK0',"_blank")}>
                <h2 class = "learnMoreText">Learn More</h2>
            </button>
        </motion.div>

        <motion.div class = "projectBox" whileHover={{ scale: 1.03 }}>
            <img class = "video" src={sportImg} alt="Test"/>
            <h2 class = "projectTitle">TicTacSPOT</h2>
            <button class = "projectButton" onClick={() => window.open('https://github.com/p-vinh/TicTacSPOT',"_blank")}>
                <h2 class = "learnMoreText">Learn More</h2>
            </button>
        </motion.div>

        <motion.div class = "projectBox" whileHover={{ scale: 1.03 }}>
            <img class = "video" src={unityImg} alt="Test"/>
            <h2 class = "projectTitle">Underworld Downfall (Unity)</h2>
            <button class = "projectButton" onClick={() => window.open('https://github.com/p-vinh/GameDevFinal',"_blank")}>
                <h2 class = "learnMoreText">Learn More</h2>
            </button>
        </motion.div>

        <motion.div class = "projectBox" whileHover={{ scale: 1.03 }}>
            <img class = "video" src={portfolioImg} alt="Test"/>
            <h2 class = "projectTitle">Portfolio Website</h2>
            <button class = "projectButton" onClick={() => window.open('https://github.com/LaurenceT123/my-portfolio',"_blank")}>
                <h2 class = "learnMoreText">Learn More</h2>
            </button>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Projects
