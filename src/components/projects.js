import React from 'react';


function Projects() {
    return (
<div class="row">
    <h2>My Projects</h2>
    <div className="col-1 padLeft">
            </div>
    <div class="col-3 projectCards">
        <div class="card border-light" >
            <div class='cardTitle'>Activity Selector</div><a
                href="https://michaelzadra27.github.io/FirstAwesomeProject/" >
                <img src="https://media.istockphoto.com/photos/group-of-college-students-studying-together-picture-id1278978962?b=1&k=20&m=1278978962&s=170667a&w=0&h=bVA2tQGr1RTVvyl-LoVOGKusTAfsQXlLzRKkCoHw0WM=" class="card-img-top"
                    alt=" activityselector app"/></a>
                <div class="card-body">
                    <p class="card-text">The Activity Selector was our first project. It incorporates two
                        different APIs to help you figure out what to do when you're bored</p>
                </div>
                    </div>
        </div>
        <div class="col-3 projectCards">
            <div class="card border-light imgBoxParent" >
                <div class='cardTitle'>Pet Placer</div>
                <div class="imgBox"><a href="https://petplacer2.herokuapp.com/">
                    <img src="https://vetsource.com/wp-content/uploads/2018/11/img-pet-adoption-101.jpg" id="imgPad" class="card-img-top" alt="..."/></a>
                        </div>
                    <div class="card-body">
                        <p class="card-text petPlacerText">The Pet Placer was our second project. It is essentially
                            tinder for adopting dogs.</p>
                    </div>

                </div>
            </div>
            <div class="col-3 projectCards">
                <div class="card border-light" >
                    <div class='cardTitle'>Weather Dashboard</div><a
                        href="https://michaelzadra27.github.io/MikesWeatherDashboard/" >
                        <img src="https://media.istockphoto.com/photos/colorful-hot-air-balloon-flying-above-the-clouds-picture-id1282443951?b=1&k=20&m=1282443951&s=170667a&w=0&h=OkjWgjLFyh3zbsA5oT-s0Lgp9nOAuhhE2nxpJTkhccM=" class="card-img-top" alt="..."/></a>
                        <div class="card-body">
                            <p class="card-text">The Weather Dashboard is an app that allows you to search today's
                                weather along with a 5-Day forecast for any area</p>
                        </div>
                    </div>
                </div>
                <div className="col-1">
            </div>
            </div>
    )
}

export default Projects;