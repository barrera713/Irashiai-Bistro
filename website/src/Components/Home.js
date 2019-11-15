import React from 'react';
import { Footer } from './Footer';
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
                        <ul>
                            <li>Monday: Closed</li>
                            <li>Tuesday: 11:00 AM - 9:30 PM</li>
                            <li>Wednesday: 11:00 AM - 9:30 PM</li>
                            <li>Thursday: 11:00 AM - 9:30 PM</li>
                            <li>Friday: 11:00 AM - 9:30 PM</li>
                            <li>Saturday: 11:00 AM - 9:30 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="img-container">
                            <li>
                                <img src='/entree.jpg' alt=''></img>
                            </li>
                            <li>
                                <img src='/steak-onions.jpg' alt=''></img>
                            </li>
                            <li>
                                <img src='/fish.jpg' alt=''></img>
                            </li>
                            <li>
                                <img src='/roll-2.jpg' alt=''></img>
                            </li>
                            <li>
                                <img src='/roll-3.jpg' alt=''></img>
                            </li>
                        </ul>
                    </div>
                <div>
                </div>
                <MenuContainer />
                <About />
                <Footer />
            </div>
        )
    }

}

export { Home }