import React from 'react';


function Navbar() {
    return (
        <div className="row">
            <div className="col-1">
            </div>
            <div className="col-4">
            
                <p>Michael Zadra</p>
                
                
                
            </div>

            <div className="col-6">
                <ul className="list">
                    <li><a href="#aboutMeAnchor">About</a></li>
                    <li><a href="#projectsAnchor">Portfolio</a></li>
                    <li><a href="#techAnchor">Technologies</a></li>
                    <li><a href="#contactAnchor">Contact Me</a></li>
                </ul>
            </div>
            <div className="col-1">
            </div>
        </div>

    );
}

export default Navbar;
