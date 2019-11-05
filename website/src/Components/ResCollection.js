import React from 'react';
import { connect } from 'react-redux';
import { fetchReservations } from '../Actions/Reservation';



class ResCollection extends React.Component {
    

    componentDidMount() {
       this.props.fetchReservations();     
    }




    render() {
        const { reservations } = this.props;

        // Reformating date
        let newDates = reservations.map(i => { return i.date.slice(0, 10) });
        let newFormat = newDates.map(i => i.replace(/-/g, "/"));
        console.log('replace hyphen for slash', newFormat);

        
        
        console.log('this is reservations:', reservations)
        reservations.sort( (a, b) => { return new Date(a.date) > new Date(b.date) ? 1 : -1 } )
        if(reservations.sort( (a, b) => { return new Date(a.time) - new Date(b.time) })) 
        
        return (<div>
               <table className="table-data">
                <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Party Size</th>
                </tr>
               {reservations.map(i => 
                <tr>
                  <td>{i.guest.name}</td>
                  <td>{i.guest.contact}</td>
                  <td>{new Date(i.date.slice(0, 10).replace(/-/g, "/")).toDateString()}</td>
                  <td>{i.time}</td>
                  <td>{i.count}</td>
               </tr>)}
               </table>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    reservations: state.allReservations.data
})


export default connect(mapStateToProps, { fetchReservations })(ResCollection)
