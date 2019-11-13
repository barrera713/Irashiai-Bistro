import React from 'react'
import Dessert from '../Menu/Dessert';
import BarContainer from '../Menu/Bar/BarContainer';
// import Appetizers from '../Menu/Appetizers';
import Kitchen from '../Menu/Kitchen';
import Lunch from '../Menu/Lunch';
import Dinner from '../Menu/Dinner';
import Specialty from '../Menu/Specialty';


export default class MenuContainer extends React.Component {


    state = {
        dessert: false,
        bar: false, 
        kitchen: true, 
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
            kitchen: false,
            dessert: !this.state.dessert 
        })
    }

    handleBar = (e) => {
        this.setState({ 
            dinner: false,
            specialty: false,
            lunch: false,
            dessert: false,
            kitchen: false,
            bar: !this.state.bar
        })
    }

    handleKitchen = (e) => {
        this.setState({
            dinner: false,
            specialty: false,
            lunch: false,
            dessert: false,
            kitchen: true,
            bar: false
        })
    }

    handleLunch = (e) => {
        this.setState({
            dinner: false,
            specialty: false,
            dessert: false,
            kitchen: false,
            bar: false,
            lunch: !this.state.lunch
        })
    }

    handleDinner = (e) => {
        this.setState({
            dinner: !this.state.dinner,
            specialty: false,
            dessert: false,
            kitchen: false,
            bar: false,
            lunch: false
        })
    }

    handleSpecialty = (e) => {
        this.setState({
            dinner: false,
            dessert: false,
            kitchen: false,
            bar: false,
            lunch: false,
            specialty: !this.state.specialty
        })
    }


    render() {


        return(<div>
            <div>
                <div className="menu-log-container">
                <ul>
                    <li onClick={this.handleKitchen}>Kitchen</li>
                    <li onClick={this.handleBar}>Bar</li>
                    <li onClick={this.handleLunch}>Lunch</li>
                    <li onClick={this.handleDinner}>Dinner</li>
                    <li onClick={this.handleDessert}>Dessert</li>
                    <li onClick={this.handleSpecialty}>Specials</li>
                </ul>
                </div>
                <div className="selected-category">
                    {this.state.dessert ? <Dessert /> : null }
                    {this.state.bar ? <BarContainer /> : null }
                    {this.state.kitchen ? <Kitchen /> : null }
                    {this.state.lunch ? <Lunch /> : null }
                    {this.state.dinner ? <Dinner /> : null }
                    {this.state.specialty ? <Specialty /> : null }
                </div>
            </div> 
        </div>)
    }

}

