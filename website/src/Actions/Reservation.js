import { NEW_RESERVATION, FETCHED } from './types';
import history from '../history';


export const postReservation = (formData) => dispatch => {
    console.log('in Reservation action');
    fetch('/reserve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => {
        if(res.ok) {
            return res.json()
            .then(reserve => dispatch({
                type: NEW_RESERVATION,
                payload: reserve
                })
            )
        } else {
            if(res.status === 400) {
                return res.json()
                .then(err => window.alert(err.error))
            }
        }
    })
};

export const fetchReservations = () => dispatch => {
    fetch('/reservations', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `${sessionStorage.getItem('token')}`
        }
    })
    .then(res => {
        if(res.ok) {
            return res.json()
            .then(reservations => dispatch({
                type: FETCHED,
                payload: reservations
            })
            )
            .then(!sessionStorage.token ? history.push('/login') : null)
        } 
        // redirects if token is not present. Will not render data if token is not a valid token from server 
    })
};

