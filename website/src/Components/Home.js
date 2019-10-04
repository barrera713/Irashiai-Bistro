import React from 'react';
import Slider from './Slider';
import Dessert from '../Menu/Dessert';
import BarContainer from '../Menu/Bar/BarContainer';
import Appetizers from '../Menu/Appetizers';
import Lunch from '../Menu/Lunch';

class Home extends React.Component {

    state = {
        dessert: false,
        bar: false, 
        appetizers: false, 
        lunch: false
    }


    handleDessert = (e) => {
        this.setState({ 
            lunch: false,
            bar: false,
            appetizers: false,
            dessert: !this.state.dessert 
        })
    }

    handleBar = (e) => {
        this.setState({ 
            lunch: false,
            dessert: false,
            appetizers: false,
            bar: !this.state.bar
        })
    }

    handleAppetizers = (e) => {
        this.setState({
            lunch: false,
            dessert: false,
            appetizers: !this.state.appetizers,
            bar: false
        })
    }

    handleLunch = (e) => {
        this.setState({
            dessert: false,
            appetizers: false,
            bar: false,
            lunch: !this.state.lunch
        })
    }

    render() {
        
        return(
            <div>
                <Slider />
                <div className="section-b">
                    <h1>Opening Hours</h1>
                    <div className="hours-container">
                        <ul>
                            <li>Monday: Closed</li>
                            <li>Tuesday: 11:00 AM - 9:30 PM</li>
                            <li>Wednesday: 11:00 AM - 9:30 PM</li>
                            <li>Thursday: 11:00 AM - 9:30 PM</li>
                            <li>Friday: 11:00 AM - 9:30 PM</li>
                            <li>Saturday: 11:00 AM - 9:30 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                </div>
                    <ul className="menu-log">
                        <li onClick={this.handleAppetizers}>Appetizers</li>
                        <li onClick={this.handleDessert}>Dessert</li>
                        <li onClick={this.handleBar}>Bar</li>
                        <li onClick={this.handleLunch}>Lunch</li>
                    </ul>
                    { this.state.dessert ? <Dessert /> : null }
                    {this.state.bar ? <BarContainer /> : null }
                    {this.state.appetizers ? <Appetizers /> : null }
                    {this.state.lunch ? <Lunch /> : null }
            </div>
        )
    }

}

export { Home }