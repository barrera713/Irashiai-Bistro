import Reservation from './Reservation';
import Employee from './Employee';
import Admin from './Admin';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
    allReservations: Reservation,
    current_user: Employee,
    admin: Admin
});