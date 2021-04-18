import React from 'react';
import './SkillSection.css';
import SkillCard from '../Components/SkillCard'

function SkillSection(){
    return(
        <div id="SkillSection" className="full-height section">
            <div className="section-header align-center mt-50">
                <p className="sectionTitle rep-overlay large bold" data-rep-overlay="Skills">Skills</p>
            </div>
            <div className="skill-cards-wrapper mt-50">
                <SkillCard skill="HTML" score="9" />
                <SkillCard skill="CSS" score="8" />
                <SkillCard skill="JS" score="6" />
                <SkillCard skill="JQuery" score="7" />
                <SkillCard skill="ReactJS" score="5" />
                <SkillCard skill="Photoshop" score="6" />
            </div>
            <div className="button-block mt-50 mb-50">
                <div className="button-wrapper">
                    <a href={process.env.PUBLIC_URL + '/documents/Ayush_Manral_Resume.pdf'} className="button bg-yellow medium-button pt-10 pb-10" download="Ayush_Manral_Resume">Download CV</a>
                </div>
            </div>
        </div>
    );
}

export default SkillSection;