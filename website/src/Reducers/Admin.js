import { ADMIN } from '../Actions/types';

const initialState = {
    admin: []
}

export default function( state = initialState, action ) {
    switch (action.type) {
        case ADMIN:
            console.log('inside admin reducer')
            return {
                ...state,
                admin: action.payload
            };
        default: 
        return state;
    }
};