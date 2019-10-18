import React from 'react';
import { connect } from 'react-redux';
import { fetchReservations } from '../Actions/Reservation';

class ResCollection extends React.Component {

    componentDidMount() {
        this.props.fetchReservations()
    }


    render() {

        console.log(this.props.reservations)


        return(<div>
            <h2>Reservations</h2>
        </div>)
    }

}

const mapStateToProps = state => ({
    reservations: state.allReservations.fetchReservations
})

export default connect(mapStateToProps, { fetchReservations })(ResCollection);
