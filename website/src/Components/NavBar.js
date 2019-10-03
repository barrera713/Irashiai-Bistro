import React from 'react';

class NavBar extends React.Component {

    contactBtn = () => {
        window.location.href = "tel:1-408-555-5555";
    }

    directionsBtn = () => {
        window.location.href = "https://goo.gl/maps/JkyZLS3XToPGxVGK9";
    }


    render() {
        
        return(
            <div className="nav-container">
                <div className="logo">
                    <img src="/logo.jpg" alt=""/>
                </div>
                <div>
                    <h3>Irashiai Bistro II</h3>
                <div className="info-btns">
                    <button onClick={this.contactBtn}>Contact Us</button>
                    <button onClick={this.directionsBtn}>Directions</button>
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