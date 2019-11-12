import React from 'react';

function Footer() {

    return(<div>
        <ul className="footer">
            <li>
            <a href="tel:1-321-312-4540">Contact</a>
            </li>
            {/* <li>
            <a href="mailto: irashiaibistro@gmail.com">Email</a>
            </li> */}
            <li>
            <a href="https://goo.gl/maps/JkyZLS3XToPGxVGK9">Directions</a>
            </li>
        </ul> 
        <div className="footer-end"></div>
    </div>
    
    )
}

export { Footer };