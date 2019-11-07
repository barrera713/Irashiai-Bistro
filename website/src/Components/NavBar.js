import React from 'react';
import history from '../history';


function NavBar() {

    const handleClick = () => {
        history.push('/')
    }
       
    return(<div className="nav-wrapper">
        <div className="top-of-nav">
        </div>
        <div className="nav-container">
            <div onClick={handleClick}className="logo">
                <img src="/logo.jpg" alt=""/>
            </div>
            <div>
                <h3>Irashiai Bistro II</h3>
            </div>
        </div>
    </div>
    )
    

}

export { NavBar }