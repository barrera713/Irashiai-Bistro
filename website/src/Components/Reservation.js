import React from 'react';
import { connect } from 'react-redux';
import { postReservation } from '../Actions/Reservation';
import history  from '../history';


class Reservation extends React.Component {

    state = {
        name: '',
        reserved: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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
        this.setState({ reserved: true });
        let name = this.capitalize(this.state.name);
        if(name.length > 0) {
            window.alert(`Thank you your reservation. See you soon, ${name}!`)
        }
        history.push('/')
    };

    handleClick = () => {
        history.push('/')
    };
    

    
    render() {

        const twoHoursBefore = new Date();
        twoHoursBefore.setHours(twoHoursBefore.getHours() - 2);
        console.log('twoHoursBefore', twoHoursBefore);
        
        // twoHoursBefore.setDate(twoHoursBefore.getDate())
        // let newDate = twoHoursBefore.toISOString().substr(0, 10)
        // console.log('newDate', newDate)
        // let newHours = twoHoursBefore.toISOString().substr(0, 10)
        // console.log('newHours', newHours)

        let newDate = new Date()
        newDate.setHours(newDate.getHours() - 2);
        newDate.setDate(newDate.getDate());
        let today = newDate.toISOString().substr(0, 10);
        
        return(<div className="reservation-container">
        <div className="form-container">
            <h2>Reservation</h2>
            <p>*Please contact us if your party is larger than 6</p>
            <div className="form-contact">
                <a href="tel:1-321-312-4540">(321)-312-4540</a>
            </div>
            <form onSubmit={this.handleSubmit} className="res-form">
                <label>Date</label>
                <input type="date" name="date" defaultValue={twoHoursBefore} min={today} required></input>
                <label>First Name</label>
                <input type="text" name="first-name" onChange={this.handleChange}></input>
                <label>Last Name</label>
                <input type="text" name="last-name" required></input>
                <label>Phone Number</label>
                <input type="tel" name="contact" required></input>
                <label>Time</label>
                <select name="time">
                    <option value="11:00am">11:00 am</option>
                    <option value="12:00pm">12:00 pm</option>
                    <option value="01:00pm">1:00 pm</option>
                    <option value="02:00pm">2:00 pm</option>
                    <option value="03:00pm">3:00 pm</option>
                    <option value="04:00pm">4:00 pm</option>
                    <option value="05:00pm">5:00 pm</option>
                    <option value="06:00pm">6:00 pm</option>
                    <option value="07:00pm">7:00 pm</option>
                    <option value="08:00pm">8:00 pm</option>
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
        </div> 
        </div>)
    }

}

export default connect(null, { postReservation })(Reservation);