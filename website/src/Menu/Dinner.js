import React from 'react';


function Dinner() {

    return(<div className="menu-items">
        <div className="category-container">
                <div className="category-header">
                    <h2>Tuesday-Friday 3:00 - 9:30</h2>
                </div>
            <ul className="category-section">
                <li>
                    <p>Sauté seasonal veggies topped with teriyaki glaze</p>
                    <h3>Tofu Yasai Itame</h3>
                    <p>10.95</p>
                    <h3>Yasai Itame</h3>
                    <p>10.95</p>
                    <h3>Chicken</h3>
                    <p>10.95</p>
                    <h3>Pork</h3>
                    <p>12.95</p>
                    <h3>Sliced Rib Eye</h3>
                    <p>14.95</p>
                </li>
                <li>
                    <div className="category-header">
                        <h2>Katsu & Dragon</h2>
                    </div>
                    <p>Panko Fried Protein served on a bed of shredded cabbage</p>
                    <h3>Tofu Yasai Itame</h3>
                    <p>10.95</p>
                    <h3>Chicken</h3>
                    <p>10.95</p>
                    <h3>Pork</h3>
                    <p>12.95</p>
                    <h3>Sliced Rib Eye</h3>
                    <p>14.95</p>
                </li>
                <li>
                    <div className="category-header">
                        <h2>Tenpura</h2>
                    </div>
                    <h3>Vegetable</h3>
                    <p>8.95</p>
                    <h3>Chicken</h3>
                    <p>10.50</p>
                    <h3>Shrimp and Veggie</h3>
                    <p>13.95</p>
                    <h3>Shiromi</h3>
                    <p>13.95</p>
                </li>
            </ul>
        </div>
            <h5>* Consuming raw or undercooked food meats, poultry, seafood, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.</h5>
        </div>)

}

export default Dinner