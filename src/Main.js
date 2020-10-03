import React from 'react';
import './Main.css';
import Banner from './Banner';

function Main( {title,subtitle} ){
    return(
        <div className="container">
            <Banner title="Ayush Manral" subtitle="Hi, I'm Delhi based frontend developer who fancies to learn new skills."/>
        </div>
    );
}

export default Main;