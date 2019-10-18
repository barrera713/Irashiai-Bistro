import { RESERVATIONS } from './types';
import history from '../history';

export const postReservation = (formData) => dispatch => {
    console.log('in Reservation action');
    fetch('http://localhost:5000/reserve', {
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
                type: RESERVATIONS,
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