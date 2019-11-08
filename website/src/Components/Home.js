import React from 'react';
import Slider from './Slider';
import { Footer } from './Footer';
import Dessert from '../Menu/Dessert';
import BarContainer from '../Menu/Bar/BarContainer';
import Appetizers from '../Menu/Appetizers';
import Lunch from '../Menu/Lunch';
import Dinner from '../Menu/Dinner';
import Specialty from '../Menu/Specialty';




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

    // const images = [
    //     {
    //       src: "/entree.jpg"
    //     },
    //     {
    //         src: "/roll-2.jpg"
    //     },
    //     {
    //         src: "/fish.jpg"
    //     }, 
    //     {
    //       src: "/roll-3.jpg"
    //     },
    //     {
    //       src: '/steak-onions.jpg'
    //     }
    //   ]

    render() {


        return(

            <div>
                <div className="section-b">
                {/* <div className="menu-log-container">
                    <ul className="menu-log">
                        <li onClick={this.handleAppetizers}>Kitchen</li>
                        <li onClick={this.handleBar}>Bar</li>
                        <li onClick={this.handleLunch}>Lunch</li>
                        <li onClick={this.handleDinner}>Dinner</li>
                        <li onClick={this.handleDessert}>Dessert</li>
                        <li onClick={this.handleSpecialty}>Specials</li>
                    </ul>
                    <div className="menu-container">
                        {this.state.dessert ? <Dessert /> : null }
                        {this.state.bar ? <BarContainer /> : null }
                        {this.state.appetizers ? <Appetizers /> : null }
                        {this.state.lunch ? <Lunch /> : null }
                        {this.state.dinner ? <Dinner /> : null }
                        {this.state.specialty ? <Specialty /> : null }
                    </div>
                </div>  */}
                    <div className="hours-container">
                        <div className="hours-header">
                            <h3>Hours and Location</h3>
                            <a href="https://goo.gl/maps/JkyZLS3XToPGxVGK9">4870 Babcock St. NE, Palm Bay, Florida</a>
                        </div>
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
                {/* <Slider /> */}
                <div className="img-container">
                    <ul>
                        <li>
                            <img src='/roll-2.jpg' alt=''></img>
                        </li>
                        <li>
                            <img src='/steak-onions.jpg' alt=''></img>
                        </li>
                        <li>
                            <img src='/fish.jpg' alt=''></img>
                        </li>
                        <li>
                            <img src='/entree.jpg' alt=''></img>
                        </li>
                        <li>
                            <img src='/roll-3.jpg' alt=''></img>
                        </li>
                    </ul>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export { Home }