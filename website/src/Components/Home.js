import React from 'react';
import Slider from './Slider';



class Home extends React.Component {


    render() {
        
        return(
            <div>
                <Slider />
                <div className="section-b">
                    <h1>Opening Hours</h1>
                    <div className="hours-container">
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
                </div>
            </div>
        )
    }

}

export { Home }