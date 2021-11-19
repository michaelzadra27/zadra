import React from 'react';


function AboutMe() {
    return (
        <div className="row" >
            <div className="col-4">
                <img src = "https://avatars.githubusercontent.com/u/80440959?s=400&u=af3c4c8619a64fae756c110a794a93212e897705&v=4" alt = "mike with his dog" id="aboutMe"/>
            </div>
            <div className="col-1">
            </div>
            <div className="col-6">
                <h2>Hi, My Name is Michael Zadra.</h2>
                <h4>I've built this site to house some of my projects that I've worked on over the past year. I got into Web Development because the idea of creating applications from scratch has always intrigued me. I graduated Chico State with a degree in Business Marketing and have spent the majority of my career in the tech world. Thank you for visiting my page!</h4>
            </div>
            <div className="col-1">
            </div>
        </div>

    );
}

export default AboutMe;