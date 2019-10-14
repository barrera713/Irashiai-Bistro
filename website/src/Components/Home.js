import React from 'react';
import Slider from './Slider';
import Dessert from '../Menu/Dessert';
import BarContainer from '../Menu/Bar/BarContainer';
import Appetizers from '../Menu/Appetizers';
import Lunch from '../Menu/Lunch';
import Dinner from '../Menu/Dinner';
import Specialty from '../Menu/Specialty';
import { Link } from 'react-router-dom';



class Home extends React.Component {

    state = {
        dessert: false,
        bar: false, 
        appetizers: false, 
        lunch: false,
        dinner: false,
        specialty: false
    }


    handleDessert = (e) => {
        this.setState({
            dinner: false,
            specialty: false,
            lunch: false,
            bar: false,
            appetizers: false,
            dessert: !this.state.dessert 
        })
    }

    handleBar = (e) => {
        this.setState({ 
            dinner: false,
            specialty: false,
            lunch: false,
            dessert: false,
            appetizers: false,
            bar: !this.state.bar
        })
    }

    handleAppetizers = (e) => {
        this.setState({
            dinner: false,
            specialty: false,
            lunch: false,
            dessert: false,
            appetizers: !this.state.appetizers,
            bar: false
        })
    }

    handleLunch = (e) => {
        this.setState({
            dinner: false,
            specialty: false,
            dessert: false,
            appetizers: false,
            bar: false,
            lunch: !this.state.lunch
        })
    }

    handleDinner = (e) => {
        this.setState({
            dinner: !this.state.dinner,
            specialty: false,
            dessert: false,
            appetizers: false,
            bar: false,
            lunch: false
        })
    }

    handleSpecialty = (e) => {
        this.setState({
            dinner: false,
            dessert: false,
            appetizers: false,
            bar: false,
            lunch: false,
            specialty: !this.state.specialty
        })
    }

    render() {


        return(

            <div>
                <div>
                    <ul className="menu-log">
                        <li onClick={this.handleAppetizers}>Kitchen</li>
                        <li onClick={this.handleBar}>Bar</li>
                        <li onClick={this.handleLunch}>Lunch</li>
                        <li onClick={this.handleDinner}>Dinner</li>
                        <li onClick={this.handleDessert}>Dessert</li>
                        <li onClick={this.handleSpecialty}>Specials</li>
                        <li>
                        <Link to="/reserve">Reserve</Link>
                        </li>
                    </ul>
                    <div className="menu-container">
                        {this.state.dessert ? <Dessert /> : null }
                        {this.state.bar ? <BarContainer /> : null }
                        {this.state.appetizers ? <Appetizers /> : null }
                        {this.state.lunch ? <Lunch /> : null }
                        {this.state.dinner ? <Dinner /> : null }
                        {this.state.specialty ? <Specialty /> : null }
                    </div>
                </div> 
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
                <ul className="footer">
                    <li>
                    <a href="tel:1-321-312-4540">Contact</a>
                    </li>
                    <li>
                    <a href="mailto: irashiaibistro@gmail.com">Email</a>
                    </li>
                    <li>
                    <a href="https://goo.gl/maps/JkyZLS3XToPGxVGK9">4870 Babcock St NE #1, Palm Bay, FL 32905</a>
                    </li>
                </ul>
            </div>
        )
    }

}

export { Home }