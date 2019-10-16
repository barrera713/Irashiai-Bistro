import Reservation from './Reservation';
import Employee from './Employee';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
    allReservations: Reservation,
    current_user: Employee
});