import { RESERVATIONS } from './types';

export const postReservation = (formData) => dispatch => {
    console.log('in Reservation action');
    fetch('http://localhost:5000/reserve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(reserve => dispatch({
        type: RESERVATIONS,
        payload: reserve
        })
    )
};