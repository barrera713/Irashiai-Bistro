import { NEW_RESERVATION, FETCH_RESERVATIONS } from '../Actions/types';

const initialState = {
    newReservation: [],
    fetchReservations: []
};

export default function( state = initialState, action ) {
    switch (action.type) {
        case NEW_RESERVATION: 
        console.log('Inside Reservation reducer')
        return {
            ...state,
            newReservation: action.payload
        };
        case FETCH_RESERVATIONS:
            return {
                ...state,
                fetchReservations: action.payload
            };
        default: 
        return state;
    }
};