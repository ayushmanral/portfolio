import React from 'react';
import './AboutSection.css';

function AboutSection(){
    return(
        <div id="AboutSection" className="full-height section">
            <div className="header-image-section header-child-section flx-bas-40 al-flex-center">
                <img src={process.env.PUBLIC_URL + '/img/image_1.png'} className="large-img header-img" alt="Ayush Manral"/>
            </div>
            <div className="header-text-section header-child-section flx-bas-60 al-flex-center">
                <div className="text-block">
                    <p className="sectionTitle rep-overlay large bold" data-rep-overlay="About">About Me</p>
                    <div className="about-me text small">
                        <p className="mb-20">Well, I describe myself as a passionate developer who loves coding, brain-storming, and the creative platforms&nbsp;<span role="img" aria-label="heart">❤️</span>.</p>
                        <p className="mb-20">Aside from my job, I like to surf internet to search for more learning resources, coding challenges and open-source projects. That helps me to learn a ton of new stuff, grow as a developer and flex my newly acquired skill infront of my non-technical friends&nbsp;<span role="img" aria-label="Juggling">🤹‍♂️</span>.</p>
                        <p className="mb-20">In my free time you can find me in field&nbsp;<span role="img" aria-label="Soccer">⚽️</span> , at the gym&nbsp;<span role="img" aria-label="Gym">🏋️‍♂️</span>, at some mountain valley&nbsp;<span role="img" aria-label="Beach">☃️</span> or button smashing my way to the top of some game&nbsp;<span role="img" aria-label="Beach">🎮</span>.</p>
                    </div>
                    <div className="button-block mt-50">
                        <div className="button-wrapper">
                            <a href={process.env.PUBLIC_URL + '/documents/Ayush_Manral_Resume.pdf'} className="button bg-yellow medium-button pt-10 pb-10" download="Ayush_Manral_Resume">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;