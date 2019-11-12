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
                        {/* <a href="https://www.facebook.com/Irashiai2/" className="fa fa-facebook"> </a> */}
                        <button onClick={this.handleMenu}>menu</button>
                    </li>
                    <li>
                        {/* <a href="https://www.yelp.com/biz/irashiai-2-japanese-bistro-palm-bay" className="fa fa-yelp"> </a> */}
                        <button onClick={this.handleReserve}>reserve</button>
                    </li>
                    <li>
                        {/* <a href="mailto: irashiaibistro@gmail.com" className="glyphicon glyphicon-envelope"> </a> */}
                        <button onClick={this.handleAbout}>about</button>
                    </li>
                </ul> 
            </div>
        </div>
        )
    }
}

export { PageLinks }