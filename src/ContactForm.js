import React from 'react';
import './ContactForm.css';

function ContactForm(){
    return(
        <div className="contactForm_wrapper">
            <p>I'm just a mail away.</p>
            <p>manralayush1@gmail.com</p>
            <div className="socialLinks">
                <span className="linkedIn_lnk"><a href="https://www.linkedin.com/in/ayush-manral-1a841b12b/" >LinkedIn</a></span>
                <span className="github_lnk"><a href="https://github.com/ayushmanral" >Github</a></span>
                <span className="facebook_lnk"><a href="https://www.facebook.com/manralayush1" >Facebook</a></span>
                <span className="twitter_lnk"><a href="https://twitter.com/AyushManral3" >Twitter</a></span>
            </div>
        </div>
    );
}

export default ContactForm;