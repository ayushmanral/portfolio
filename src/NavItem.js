import React from 'react';
import './NavItem.css';

function NavItem( {text, sectionID} ){
    return(
        <div className="NavItem__wrapper">
            <div className="NavItem__container">
                <a className="NavItem" href={"#"+sectionID} data-item={text}>{text}</a>
            </div>
        </div>
    );
}

export default NavItem;