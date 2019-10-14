import React from 'react';
import { connect } from 'react-redux';
import { postReservation } from '../Actions/Reservation';


class Reservation extends React.Component {

    state = {
        reservations: false
    }

    
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
           "date": e.target["date"].value,
           "time": e.target["time"].value,
           "count": e.target["count"].value,
           "guest": {
               "name": e.target["full-name"].value,
               "contact": e.target["contact"].value
           }
        }
        console.log('Inside submit', formData)
        this.props.postReservation(formData);
        this.setState({ reservations: !this.state.reservations })
    };
    

    
    render() {


        return(<div>{this.state.reservations ? 
        <div>
            <h1>Reservation Confirmed!</h1>
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
                <label>Full Name</label>
                <input type="text" name="full-name" ></input>
                <label>Phone Number</label>
                <input type="tel" name="contact" ></input>
                <button type="submit">Submit</button>
            </form>
        </div> }
        </div>)
    }

}

export default connect(null, { postReservation })(Reservation);