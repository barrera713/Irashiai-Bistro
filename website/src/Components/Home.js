import React from 'react';
import { Footer } from './Footer';
import MenuContainer from './MenuContainer';

class Home extends React.Component {


    render() {

        return(

            <div className="main-container">
                    <div className="hours-container">
                        <div className="hours-header">
                            <h3>Hours and Location</h3>
                            <a href="https://goo.gl/maps/JkyZLS3XToPGxVGK9">4870 Babcock St. NE, Palm Bay, Florida</a>
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
                    <MenuContainer />
                </div>
                <div className="about-section">
                    <h3>About</h3>
                    <ul>
                        <li>
                            <img src='/mimi-kansan.jpg' alt=''/>
                        </li>
                        <li>
                            <p>This is the writing section</p>
                        </li>
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }

}

export { Home }