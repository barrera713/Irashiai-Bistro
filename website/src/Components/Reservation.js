import React from 'react';
import { connect } from 'react-redux';
import { postReservation } from '../Actions/Reservation';


class Reservation extends React.Component {

    state = {
        name: '',
        reservations: false
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }

    capitalize = (word) =>  {
        if (word !== '') {
            return word.toLowerCase().split(' ').map( i =>  i[0].toUpperCase() + i.slice(1)).join(' ')
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        let nameArr = [];
        let firstName = e.target["first-name"].value  
        let lastName = e.target["last-name"].value
        nameArr.push(firstName, lastName);
        let stringName = nameArr.join(' ');
        let capitalizedName = this.capitalize(stringName);
        const formData = {
           "date": e.target["date"].value,
           "time": e.target["time"].value,
           "count": e.target["count"].value,
           "guest": {
               "name": capitalizedName,
               "contact": e.target["contact"].value
           }
        }
        console.log('Inside submit', formData)
        this.props.postReservation(formData)
    };

    handleClick = () => {
        window.location = '/'
    };
    

    
    render() {

        let name = this.state.name

        return(<div>{this.state.reservations ? 
        <div>
            <h1>Thank you for reserving with us! See you soon, {this.capitalize(name)}</h1>
            <button onClick={this.handleClick}>Return</button>
        </div>
        :
        <div className="form-container">
            <h1>Reservations</h1>
            <h4>*Please contact us if your party is larger than 6</h4>
            <form onSubmit={this.handleSubmit} className="res-form">
                <label>Date</label>
                <input type="date" name="date" ></input>
                <label>First Name</label>
                <input type="text" name="first-name" onChange={this.handleChange}></input>
                <label>Last Name</label>
                <input type="text" name="last-name"></input>
                <label>Phone Number</label>
                <input type="tel" name="contact"></input>
                <label>Time</label>
                <select name="time">
                    <option value="11:00am">11:00 am</option>
                    <option value="12:00am">12:00 am</option>
                    <option value="1:00pm">1:00 pm</option>
                    <option value="2:00pm">2:00 pm</option>
                    <option value="3:00pm">3:00 pm</option>
                    <option value="4:00pm">4:00 pm</option>
                    <option value="5:00pm">5:00 pm</option>
                    <option value="6:00pm">6:00 pm</option>
                    <option value="7:00pm">7:00 pm</option>
                    <option value="8:00pm">8:00 pm</option>
                </select>
                <label>Party Size</label>
                <select name="count">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <div>
                <button type="submit">Submit</button>
                </div>
            </form>
        </div> }
        </div>)
    }

}

export default connect(null, { postReservation })(Reservation);