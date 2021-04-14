import React from 'react'
import "./ResumeCard.css";

const ResumeCard = ({ year, course, institute, details }) => {
    return(
      <div className="ResumeCard_wrapper">
          <div className="textblock">
              <p className="yearText">{year}</p>
              <p className="courseNameText">{course}</p>
              <p className="instituteText">{institute}</p>
              <p className="detailsText">{details}</p>
          </div>
      </div>
    );
}
export default ResumeCard;