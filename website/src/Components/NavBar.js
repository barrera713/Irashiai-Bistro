import React from 'react';

class NavBar extends React.Component {


    render() {
        
        return(
            <div className="nav-container">
                <div className="logo">
                    <img src="/logo.jpg" alt=""/>
                </div>
                <div>
                    <h3>Irashiai Bistro II</h3>
                <div className="info-btns">
                    <button>Contact Us</button>
                    <button>Get Directions</button>
                </div>
                </div>
                <div className="social-media-container">
                    <ul className="social-media-links">
                        <li>IG</li>
                        <li>FB</li>
                        <li>YP</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export { NavBar }