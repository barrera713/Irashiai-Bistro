import React from 'react';
import { connect } from 'react-redux';
import { fetchReservations } from '../Actions/Reservation';
// import Loader from './Loader'


class ResCollection extends React.Component {
    

    componentDidMount() {
       this.props.fetchReservations();     
    }




    render() {
        
        const { reservations, isLoaded } = this.props;
        console.log('this is reservations:', reservations, 'this is isLoaded:', isLoaded)

        if(reservations) return reservations.map(i => {
            return (<div>
                <ul>
                <li>{i.date}</li>
                </ul>
            </div>) 
        })
    }

}


const mapStateToProps = state => ({
    reservations: state.allReservations.data,
    isLoaded: state.allReservations.fetched
})


export default connect(mapStateToProps, { fetchReservations })(ResCollection)
