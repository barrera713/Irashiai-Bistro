import React from 'react';
import history from '../history';

class PageLinks extends React.Component {



   handleMenu = () => {
       history.push('/menu')
   }


    handleReserve = () => {
        history.push('/reserve')
    }

    handleAbout = () => {
        history.push('/about')
    }


    render() {

        return (
        <div className="page-links-container">
            <div className="page-links">
                <ul >
                    <li>
                        <button onClick={this.handleMenu}>menu</button>
                    </li>
                    <li>
                        <button onClick={this.handleReserve}>reserve</button>
                    </li>
                    <li>
                        <button onClick={this.handleAbout}>about</button>
                    </li>
                </ul> 
            </div>
        </div>
        )
    }
}

export { PageLinks }