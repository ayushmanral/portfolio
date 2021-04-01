import React from 'react';
import './Banner.css';
import ContactForm from './ContactForm';

function Banner( { title,
                   subtitle,
                   sectionIdentifier,
                   bgColor,
                   showContactForm
    }){
        
    const renderContactForm = () => {
        if (showContactForm) {
            return <ContactForm/>;
        }
    }

    return(
        <>
            <div className="Banner__wrapper" id={sectionIdentifier} style={{ backgroundColor: bgColor }}>
                <div className="Banner__container">
                    <h1 className="Banner__title">{title}</h1>
                    <p className="Banner__subtitle">{subtitle}</p>
                </div>
                {renderContactForm()}
            </div>
        </>
    );
}

export default Banner;