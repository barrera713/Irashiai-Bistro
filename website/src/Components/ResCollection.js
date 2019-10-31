import React from 'react';
import { connect } from 'react-redux';
import { fetchReservations } from '../Actions/Reservation';



class ResCollection extends React.Component {
    

    componentDidMount() {
       this.props.fetchReservations();     
    }




    render() {
        
        const { reservations } = this.props;
        console.log('this is reservations:', reservations)
        
        return (<div>
               <table className="table-data">
                <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Party Size</th>
                </tr>
               {reservations.map(i => <tr>
                  <td>{i.guest.name}</td>
                  <td>{i.guest.contact}</td>
                  <td>{new Date(i.date).toDateString()}</td>
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
