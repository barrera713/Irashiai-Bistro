import React from 'react';

class NavBar extends React.Component {


    render() {
        
        return(
            <nav>
                <img src='/logo.jpg' className="logo-img" alt="" />
                <div>
                    <h3>Irashiai Bistro II</h3>
                </div>
            </nav>
        )
    }

}

export { NavBar }