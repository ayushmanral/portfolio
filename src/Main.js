import React from 'react';
import './Main.css';
import Banner from './Banner';
import ContactForm from './ContactForm';

function Main( {title, subtitle, sectionIdentifier} ){
    return(
        <div className="container">
            <Banner title="Ayush Manral" subtitle="Hi, I'm Delhi based frontend developer who fancies to learn new skills." sectionIdentifier="home" />
            <Banner title="About" subtitle="Everything you need to know about me." sectionIdentifier="about" />
            <Banner title="Skills" subtitle="All the industry relevant skills." sectionIdentifier="skills" />
            <Banner title="Projects" subtitle="My practice and open-source projects." sectionIdentifier="projects" />
            <Banner title="Contact" subtitle="Interested in working with me?" sectionIdentifier="contact" showContactForm="true">
              <ContactForm/>
            </Banner>
        </div>
    );
}

export default Main;