import React from 'react';



class Home extends React.Component {


    render() {
        
        return(
            <div>
            <section className="section-a">
                <div>
                    <h1>Section A</h1>
                </div>
            </section>
            <section className="section-b">
                <h1>Section B</h1>
                <div>
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
                </div>
            </section>
            <section className="section-c">
                <h4>Section C</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nobis temporibus! Alias amet perspiciatis libero id eligendi, omnis hic vel voluptas iure a exercitationem suscipit fugit ea eaque? Saepe, facere.</p>
            </section>
            </div>
        )
    }

}

export { Home }