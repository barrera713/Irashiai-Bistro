import React from 'react';
import { connect } from 'react-redux';
import { fetchReservations } from '../Actions/Reservation';
// import Loader from './Loader'


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
                    <th>Data</th>
                    <th>Party Size</th>
                </tr>
               {reservations.map(i => <tr>
                  <td>{i.guest.name}</td>
                  <td>{i.guest.contact}</td>
                  <td>{i.date}</td>
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
