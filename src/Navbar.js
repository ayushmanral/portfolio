import React from 'react';
import './Navbar.css';
import NavItem from './NavItem';

function Navbar(){
    return(
        <section className="Navbar__wrapper">
            <div className="Navbar__container">
                <NavItem text="Home" sectionID="topSection"/>
                <NavItem text="About" sectionID="AboutSection"/>
                <NavItem text="Skills" sectionID="skills"/>
                <NavItem text="Projects" sectionID="projects"/>
                <NavItem text="Contact" sectionID="contact"/>
            </div>
        </section>
    );
}

export default Navbar;