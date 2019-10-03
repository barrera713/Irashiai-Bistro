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
                    <a href="tel: 713-373-6474" className="contact-btn">Contact Us</a>
                    <a href="https://goo.gl/maps/JkyZLS3XToPGxVGK9">Directions</a>
                </div>
                </div>
                <div className="social-media-container">
                    <ul className="social-links">
                        <li>
                            <a href="https://www.facebook.com/Irashiai2/" className="fa fa-facebook"> </a>
                        </li>
                        <li>
                            <a href="https://www.yelp.com/biz/irashiai-2-japanese-bistro-palm-bay" className="fa fa-yelp"> </a>
                        </li>
                        <li>
                            <a href="mailto: irashiaibistro@gmail.com" className="glyphicon glyphicon-envelope"> </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export { NavBar }