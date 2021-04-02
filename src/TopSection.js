import React from 'react';
import './TopSection.css';

function TopSection(){
    return(
        <div id="topSection" className="full-height section">
            <div className="header-text-section header-child-section flx-bas-50">
                <div className="text-block">
                    <p className="small yellow text-uppercase light spaced-out mb-20">Hello!</p>
                    <p className="nameText large bold">I'm&nbsp;<span className="yellow">Ayush<br/>Manral</span></p>
                    <p className="professionalText mt-20 mb-20">A New Delhi Based Frontend<br/>Developer</p>
                </div>
                <div className="button-block">
                    <div className="button-wrapper">
                        <a href="#contact" className="button bg-yellow small-button pt-10 pb-10">Hire Me!</a>
                        <a href="#projects" className="button small-button pt-10 pb-10">Projects</a>
                    </div>
                </div>
            </div>
            <div className="header-image-section header-child-section al-flex-start flx-bas-50">
                <img src={process.env.PUBLIC_URL + '/img/image_3.png'} className="large-img header-img" alt="Ayush Manral"/>
            </div>
        </div>
    );
}

export default TopSection;