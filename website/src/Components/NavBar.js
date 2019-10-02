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
                <div className="social-media-links">
                    <li>
                        <a href="https://www.facebook.com/Irashiai2/" className="fa fa-facebook"></a>
                    </li>
                    <li>
                        <a href="https://www.yelp.com/biz/irashiai-2-japanese-bistro-palm-bay" className="fa fa-yelp"></a>
                    </li>
                    <li>
                        <a href="mailto: irashiaibistro@gmail.com" className="glyphicon glyphicon-envelope"></a>
                    </li>
                </div>
            </div>
        )
    }

}

export { NavBar }