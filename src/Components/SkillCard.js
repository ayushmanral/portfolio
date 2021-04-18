import React from 'react';


const SkillCard = ({ skill, score }) => {
    let loadAccent = [],
        accentLimit = score*3;
    for(let i=0; i<30; i++){
      loadAccent.push(
        <span className="loadAccent"
                    key={i+1}
                    data-accent={i<accentLimit}></span>
        );
    }

    return(
        <div className="skill-card">
            <div className="technologyTitle" data-content={skill}></div>
            <div className="loadBar">
                { loadAccent }
            </div>
        </div>
    );
}

export default SkillCard;