import React from 'react';
import './Banner.css';

function Banner( {title,subtitle} ){
    return(
        <div className="Banner__wrapper">
            <div className="Banner__container">
                <h1 className="Banner__title">{title}</h1>
                <p className="Banner__subtitle">{subtitle}</p>
            </div>
        </div>
    );
}

export default Banner;