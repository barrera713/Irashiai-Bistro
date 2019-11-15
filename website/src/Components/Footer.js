import React from 'react';

function Footer() {

    return(<div className="footer-container">
        <div className="social-links">
            <ul>
                <li>
                    <a href="https://www.facebook.com/Irashiai2/" className="fa fa-facebook"> </a>
                </li>
                    <a href="https://www.yelp.com/biz/irashiai-2-japanese-bistro-palm-bay" className="fa fa-yelp"> </a>
                <li>
                    <a href="mailto: irashiaibistro@gmail.com" className="glyphicon glyphicon-envelope"> </a>
                </li>
            </ul>
        </div>
        <div className="contact-info">
            <ul>
                <li>
                    <a href="tel:1-321-312-4540">Contact</a>
                </li>
                <li>
                    <a href="https://goo.gl/maps/JkyZLS3XToPGxVGK9">Directions</a>
                </li>
            </ul> 
        </div>
        <div className="footer-end"></div>
    </div>
    
    )
}

export { Footer };