import React from 'react';


function Projects() {
    return (
<div class="row">
    <h2>My Projects</h2>
    <div class="col-4 projectCards">
        <div class="card border-light" >
            <div class='cardTitle'>Activity Selector</div><a
                href="https://michaelzadra27.github.io/FirstAwesomeProject/" >
                <img src="./images/activityselector.JPG" class="card-img-top"
                    alt=" activityselector app"/></a>
                <div class="card-body">
                    <p class="card-text">The Activity Selector was our first project. It incorporates two
                        different APIs to help you figure out what to do when you're bored</p>
                </div>
                    </div>
        </div>
        <div class="col-4 projectCards">
            <div class="card border-light imgBoxParent" >
                <div class='cardTitle'>Pet Placer</div>
                <div class="imgBox"><a href="https://desolate-badlands-34327.herokuapp.com/">
                    <img src="./images/petplacer2.png" id="imgPad" class="card-img-top" alt="..."/></a>
                        </div>
                    <div class="card-body">
                        <p class="card-text petPlacerText">The Pet Placer was our second project. It is essentially
                            tinder for adopting dogs. You link your account with a friend then get to liking real
                            dogs pulled in from real shelters up for adoption</p>
                    </div>

                </div>
            </div>
            <div class="col-4 projectCards">
                <div class="card border-light" >
                    <div class='cardTitle'>Weather Dashboard</div><a
                        href="https://michaelzadra27.github.io/MikesWeatherDashboard/" >
                        <img src="./images/weather.jpg" class="card-img-top" alt="..."/></a>
                        <div class="card-body">
                            <p class="card-text">The Weather Dashboard is an app that allows you to search today's
                                weather along with a 5-Day forecast for any area</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Projects;