import { NEW_RESERVATION, FETCHED } from '../Actions/types';

const initialState = {
    newReservation: [],
    data: [],
    fetched: false
};

export default function( state = initialState, action ) {
    switch (action.type) {
        case NEW_RESERVATION: 
        console.log('Inside Reservation reducer')
        return {
            ...state,
            newReservation: action.payload
        };
        case FETCHED:
        return {
            ...state,
            data: action.payload
        };
        default: 
        return state;
    }
};