
import './NavBar.css'
import React, {useState} from 'react'
import hamburgerIcon from '../assets/hamburger-menu.png'

function NavBar({ onSelectionClick }) 
{

    const [open,setOpen] = useState(false);

    return (
        <div>
            <nav class="mainNav">
                <div class="logo"></div>
                <div>
                    <ul className = "NavLinks">
                        <li> <a href="#about" onClick={() => onSelectionClick("about")}>About</a></li>
                        <li> <a href="#experience" onClick={() => onSelectionClick("experience")}>Experience</a></li>
                        <li> <a href="#project">Projects</a></li>
                        <li> <a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            
            <nav class="hamburgerNav">
                <div class="logo">Laurence Tremblay</div>
                <div class = "hamburgerMenu">
                    <div classname="hamburgerIcon" onClick={() => setOpen(!open)}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <img classname = "image" src={hamburgerIcon} width = {50} height = {50} alt ="Logo"/>
                    </div>
                    <div class= {open ? "menuLinks" : "menuLinks_hide"}>
                        <ul classname = "NavList">
                            <li> <a href="#about">About</a></li>
                            <li> <a href="#experience">Experience</a></li>
                            <li> <a href="#project">Projects</a></li>
                            <li> <a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
       </div>
    )
}

export default NavBar