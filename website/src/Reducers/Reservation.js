import { RESERVATIONS } from '../Actions/types';

const initialState = {
    reservations: []
};

export default function( state = initialState, action ) {
    switch (action.type) {
        case RESERVATIONS: 
        console.log('Inside reducer')
        return {
            ...state,
            reservations: action.payload
        };
        default: 
        return state;
    }
}