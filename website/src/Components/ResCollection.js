import React from 'react';
import { connect } from 'react-redux';
import { fetchReservations } from '../Actions/Reservation';
import Loader from './Loader'


class ResCollection extends React.Component {



    componentDidMount() {
        this.props.fetchReservations()
    }



    render() {
        return(<div>
            <Loader />
        </div>)
    }

}


const mapStateToProps = state => ({
    reservations: state.allReservations.fetchReservations
})


export default connect(mapStateToProps, { fetchReservations })(ResCollection)
