import React from 'react';
import './Navbar.css';
import NavItem from '../Components/NavItem';

function Navbar(){
    return(
        <section className="Navbar__wrapper">
            <div className="Navbar__container">
                <NavItem text="Home" sectionID="topSection"/>
                <NavItem text="About" sectionID="AboutSection"/>
                <NavItem text="Resume" sectionID="ResumeSection"/>
                <NavItem text="Skills" sectionID="SkillSection"/>
                <NavItem text="Contact" sectionID="ContactSection"/>
            </div>
        </section>
    );
}

export default Navbar;