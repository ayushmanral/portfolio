import React from 'react';
import './ContactSection.css';

function ContactSection(){
    return(
        <div id="ContactSection" className="full-height section">
            <div className="section-header align-center mt-50">
                <p className="sectionTitle rep-overlay large bold" data-rep-overlay="Contact">Contact</p>
            </div>
            <div className="contact-cards-wrapper mt-50">
                <div className="contact-text-block">
                    <p>Hey you <span>beautiful</span> person on the internet!</p>
                    <p>I would love you listen from you.</p>
                    <p>Drop a mail and let's start working together to make something <span>AWESOME</span>.</p>
                    <p>Email: <span className="emailText">manralayush1@gmail.com</span></p>
                    <div class="socialLink_wrapper mt-20">
                      <a href="https://www.linkedin.com/in/ayush-manral/" target="_blank" rel="noopener noreferrer">in</a>
                      <a className="gitLink" href="https://github.com/ayushmanral" target="_blank" rel="noopener noreferrer">git</a>
                    </div>
                </div>
                <div className="contact-image-block">
                    <img src={process.env.PUBLIC_URL + '/img/image_4.png'} alt="Contact Section" />
                </div>
            </div>
        </div>
    );
}

export default ContactSection;