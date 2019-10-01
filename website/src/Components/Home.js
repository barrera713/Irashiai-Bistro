import React from 'react';



class Home extends React.Component {


    render() {
        
        return(
            <section className="section-a">
                <h1>Section A</h1>
                <ul>
                    <h3>Hours</h3>
                    <li>Monday: Closed</li>
                    <li>Tuesday: 11:00 AM - 9:30 PM</li>
                    <li>Wednesday: 11:00 AM - 9:30 PM</li>
                    <li>Thursday: 11:00 AM - 9:30 PM</li>
                    <li>Friday: 11:00 AM - 9:30 PM</li>
                    <li>Saturday: 11:00 AM - 9:30 PM</li>
                    <li>Sunday: Closed</li>
                </ul>
            </section>
        )
    }

}

export { Home }