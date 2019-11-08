import React from 'react';
import history from '../history';

class PageLinks extends React.Component {


    contactBtn = () => {
        window.location.href = "tel:1-321-312-4540";
    }

    directionsBtn = () => {
        window.location.href = "https://goo.gl/maps/JkyZLS3XToPGxVGK9";
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
                        <a href="tel:1-321-312-4540">contact</a>
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