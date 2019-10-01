import React from 'react';

class NavBar extends React.Component {


    render() {
        
        return(<main id="main">
            <div className="logo-container">
                <ul className="logo-items">
                    <li>
                    <img src='/logo.jpg' className="logo-img"/>
                    </li>
                    <li>
                        <h1>Irashiai Bistro II</h1>
                    </li>
                </ul>
            </div>
        </main>)
    }

}

export { NavBar }