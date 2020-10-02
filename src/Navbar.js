import React from 'react';
import './Navbar.css';
import NavItem from './NavItem';

function Navbar(){
    return(
        <section className="Navbar__wrapper">
            <div className="Navbar__container">
                <NavItem text="Home" sectionID="section-1"/>
                <NavItem text="About" sectionID="section-2"/>
                <NavItem text="Skills" sectionID="section-3"/>
                <NavItem text="Projects" sectionID="section-4"/>
                <NavItem text="Hire Me" sectionID="section-5"/>
            </div>
        </section>
    );
}

export default Navbar;