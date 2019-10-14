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
        // this.props.postReservation(formData);
        this.setState({ reservations: !this.state.reservations })
    };

    handleClick = () => {
        window.location = '/'
    };
    

    
    render() {

        let name = this.state.name

        return(<div>{this.state.reservations ? 
        <div>
            <h3>Thank you, {this.capitalize(name)} for reserving with us!</h3>
            <button onClick={this.handleClick}>Return</button>
        </div>
        :
        <div>
            <h1>Reservation</h1>
            <form onSubmit={this.handleSubmit} id="form" >
                <label>Date</label>
                <input type="date" name="date" ></input>
                <label>Time</label>
                <select name="time">
                    <option value="11:00am">11:00 am</option>
                    <option value="11:30am">11:30 am</option>
                    <option value="12:00am">12:00 am</option>
                    <option value="12:30am">12:30 am</option>
                    <option value="1:00pm">1:00 pm</option>
                    <option value="1:30pm">1:30 pm</option>
                    <option value="2:00pm">2:00 pm</option>
                    <option value="2:30pm">2:30 pm</option>
                    <option value="3:00pm">3:00 pm</option>
                    <option value="3:30pm">3:30 pm</option>
                    <option value="4:00pm">4:00 pm</option>
                    <option value="4:30pm">4:30 pm</option>
                    <option value="5:00pm">5:00 pm</option>
                    <option value="5:30pm">5:30 pm</option>
                    <option value="6:00pm">6:00 pm</option>
                    <option value="6:30pm">6:30 pm</option>
                    <option value="7:00pm">7:00 pm</option>
                    <option value="7:30pm">7:30 pm</option>
                    <option value="8:00pm">8:00 pm</option>
                    <option value="8:30pm">8:30 pm</option>
                </select>
                <label>Party Size</label>
                <input type="text" name="count" ></input>
                <label>First Name</label>
                <input type="text" name="first-name" onChange={this.handleChange}></input>
                <label>Last Name</label>
                <input type="text" name="last-name"></input>
                <label>Phone Number</label>
                <input type="tel" name="contact" ></input>
                <button type="submit">Submit</button>
            </form>
        </div> }
        </div>)
    }

}

export default connect(null, { postReservation })(Reservation);