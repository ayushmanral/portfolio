import React from 'react';
import './ResumeSection.css';
import ResumeCard from './ResumeCard';

function ResumeSection(){
    return(
        <div id="ResumeSection" className="full-height section">
            <div className="section-header align-center mt-50">
                <p className="sectionTitle rep-overlay large bold" data-rep-overlay="Resume">Resume</p>
            </div>
            <div className="resume-cards-wrapper mt-50">
                <ResumeCard
                    year="2010 - 2011"
                    course="Highschool"
                    institute="Kendriya Vidhyalaya No. 1 (AFS) Jodhpur, Rajasthan"
                    details="Passed with 8.8 CGPA"
                />
                <ResumeCard
                    year="2012 - 2013"
                    course="Intermediate"
                    institute="Kendriya Vidhyalaya No. 1 (AFS) Jodhpur, Rajasthan"
                    details="Passed with 68.2% ( Science stream &amp; Computer Science )"
                />
                <ResumeCard
                    year="2013 - 2017"
                    course="Graduation"
                    institute="Maharishi Dayanand University"
                    details="Done my Bachelor of Technology from World College of Tech. &amp; Management and passed with 65.8%"
                />                
                <ResumeCard
                    year="March 2021"
                    course="MERN-Stack Certification"
                    institute="Udemy"
                    details="Course Name: The Complete Web Developer in 2021: Zero to Mastery. Completed the
                    course and developed various sample projects using web development
                    technologies like ReactJS, Postgres, MySQL, ExpressJS and NodeJS."
                />
                <ResumeCard
                    year="2018 - Present"
                    course="Frontend Developer"
                    institute="Mobikasa Pvt. Ltd."
                    details="As a Frontend developer, I am responsible for client-side development, API consumption, 
                    deployment, support, remediate bugs and issues found during testing, WCAG 
                    accessibility compliance and implementation of small to medium components of a 
                    project module from layout to function and according to client's specification."
                />
                <ResumeCard
                    year="April 2021 - Present"
                    course="React Native Certification"
                    institute="Udemy"
                    details="Course Name: Complete React Native in 2021: Zero to Mastery [with Hooks]. Pursuing this
                    course to learn and get familiar with development of React Native apps, using React Hooks and their 
                    deployment on platforms like Heroku or AWS."
                />
            </div>
        </div>
    );
}

export default ResumeSection;