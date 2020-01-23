import React from 'react';


export default function About() {
    
    window.scrollTo(0, 0);

    return(<div>
    <h3 className="our-story">Our Story</h3>
    <div className="about-section">
        <div className="about-img">
            <img src='/mimi-kansan.jpg' alt=''/>
        </div>
        <div className="about-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
    </div>)

}