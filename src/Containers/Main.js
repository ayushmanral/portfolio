import React from 'react';
import './Main.css';
import TopSection from '../Components/TopSection';
import AboutSection from '../Components/AboutSection';
import ResumeSection from './ResumeSection';
import SkillSection from './SkillSection';
import ContactSection from '../Components/ContactSection';

function Main(){
    return(
        <div className="container">
            <TopSection/>
            <AboutSection/>
            <ResumeSection/>
            <SkillSection/>
            <ContactSection/>
        </div>
    );
}

export default Main;