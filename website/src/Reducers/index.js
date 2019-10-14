import Reservation from './Reservation';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
    allReservations: Reservation
});