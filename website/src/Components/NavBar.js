import React from 'react';
import history from '../history';

class NavBar extends React.Component {

    contactBtn = () => {
        window.location.href = "tel:1-321-312-4540";
    }

    directionsBtn = () => {
        window.location.href = "https://goo.gl/maps/JkyZLS3XToPGxVGK9";
    }


    handleReserve = () => {
        history.push('/reserve')
    }

    handleAbout = () => {
        history.push('/about')
    }


    render() {
        
        return(<div>
            <div className="top-of-nav">
            </div>
            <div className="nav-container">
                <div className="logo">
                    <img src="/logo.jpg" alt=""/>
                </div>
                <div>
                    <h3>Irashiai Bistro II</h3>
                </div>
                <div className="page-links">
                    <ul className="social-links">
                        <li>
                            {/* <a href="https://www.facebook.com/Irashiai2/" className="fa fa-facebook"> </a> */}
                            <a href="tel:1-321-312-4540">contact</a>
                        </li>
                        <li>
                            {/* <a href="https://www.yelp.com/biz/irashiai-2-japanese-bistro-palm-bay" className="fa fa-yelp"> </a> */}
                            <button onClick={this.handleReserve}>reserve</button>
                        </li>
                        <li>
                            {/* <a href="mailto: irashiaibistro@gmail.com" className="glyphicon glyphicon-envelope"> </a> */}
                            <button onClick={this.handleAbout}>about</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-of-nav">  
            </div>
        </div>
        )
    }

}

export { NavBar }