import { CURRENT_EMPLOYEE } from '../Actions/types';

const initialState = {
    current_user: []
}

export default function( state = initialState, action ) {
    switch (action.type) {
        case CURRENT_EMPLOYEE: 
        console.log('Inside Current User reducer')
        return {
            ...state,
            current_user: action.payload
        };
        default: 
        return state;
    }
};