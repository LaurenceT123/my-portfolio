import React, { useState } from 'react'
import './SkillsSmall.css'

import animatedMouseClick from '../../../assets/Tired-Coffee-GIF-by-molehill-unscreen.gif'

function SkillsSmall() {

  const [number,changenumber] = useState(1);

  function changeWords() {
    const newNumber = number >= 3 ? 1 : number + 1;
    changenumber(newNumber);
  };

  function ComponentOne()
  {
    return <div class = "text"> 
              <li>Java</li>
              <li>Python</li>
              <li>Javascript (React)</li>
              <li>C#</li>
            </div>
  }

  function ComponentTwo()
  {

    return <div class = "text">
            <li>Unity</li>
            <li>Figma</li>
            <li>Microsoft Azure</li>
            <li>Canva</li>
            <li>Blender</li>
            <li>Tensorflow</li>
          </div>
  }

  function ComponentThree()
  {

    return <div class = "text">
                <li>Lesson Planning</li>
                <li>Dependable</li>
                <li>Problem Solving</li>
                <li>Critical Thinking</li>
                <li>Creative</li>
                <li>Team Collaboration</li>
                <li>Time Management</li>
            </div>
  }
  return (
    <div class="skills_small_container" onClick={() => changeWords()}>
      <button class="skill_small_box">
          <div class="Skillcomponents">
            {number === 1 && <ComponentOne />}
            {number === 2 && <ComponentTwo />}
            {number === 3 && <ComponentThree />}
          </div>
          <img class = "gif_click" src={animatedMouseClick}  width = {60} height = {50} alt="animated mouse click"/>
      </button>
    </div>
  )
}

export default SkillsSmall
