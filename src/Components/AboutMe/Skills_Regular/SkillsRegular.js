import React from 'react'
import './SkillsReguler.css'
import { motion} from "framer-motion"

const fadeInAnimationVariants = {
    initial : {opacity:0, y:100},
    animate: (index) => ({ 
        opacity:1,
        y:0,
        transition: {delay:0.5 * index}
    }),
}
function SkillsRegular() {

    const skillBoxes = [
        ["Java", "Python", "Javascript (React)", "C#"],
        ["Unity", "Figma", "Microsoft Azure", "Canva", "Blender", "Tensorflow"],
        ["Lesson Planning", "Dependable", "Problem Solving", "Critical Thinking", "Creative", "Team Collaboration", "Time Management"]
    ];
  
    return (
    <div class="skills_regular_container" >
        {skillBoxes.map((skills, index) => (
            <motion.div 
                className={`skill_box${index}`} 
                    key={index}
                    initial = "initial" 
                    whileInView="animate" 
                    viewport= {{once: true}} 
                    variants = {fadeInAnimationVariants} 
                    custom={index}>
                        <div className="text">
                            {skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </div>
            </motion.div>
            ))}
      
    </div>
  )
}

export default SkillsRegular
