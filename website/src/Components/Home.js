import React from 'react';
import MenuContainer from './MenuContainer';
import About from './About';

class Home extends React.Component {


    render() {

        return(
            <div className="main-container">
                    <div className="hours-container">
                        <div className="hours-header">
                            <li>
                                <h3>Hours and Location</h3>
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/JkyZLS3XToPGxVGK9">4870 Babcock St. NE, Palm Bay, Florida</a>
                            </li>
                            <li>
                                <a href="tel:1-321-312-4540">(321)-312-4540</a>
                            </li>
                        </div>
                        <ul className="hours">
                            <li>
                                <h3>Monday & Sunday</h3>
                                <p>Closed</p>
                            </li>
                            <li>
                                <h3>Tuesday - Saturday</h3>
                                <p>11:00AM - 9:30PM</p>
                            </li>
                            <li>
                                <h3>Lunch</h3>
                                <p>Served until 3PM</p>
                            </li>
                        </ul>
                    </div>
                    <div className="row">   
                        <div className="column">
                            <img src='/entree.jpg' alt=''></img>
                        </div>
                        <div className="column">
                            <img src='/fish.jpg' alt=''></img>
                        </div>
                        <div className="column">
                            <img src='/roll-2.jpg' alt=''></img>
                        </div>
                        <div className="column">
                            <img src='/roll-3.jpg' alt=''></img>
                        </div>
                        <div className="column">
                            <img src='/img5.jpg' alt=''></img>
                        </div>
                        <div className="column">
                            <img src='/steak-onions.jpg' alt=''></img>
                        </div>
                        <div className="column">
                            <img src='/img2.jpg' alt=''></img>
                        </div>
                        <div className="column">
                            <img src='/img4.jpg' alt=''></img>
                        </div>
                    </div>
                <MenuContainer />
                <About />
            </div>
        )
    }

}

export { Home }