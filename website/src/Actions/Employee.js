import { CURRENT_EMPLOYEE } from './types';
import history from '../history';

export const employeeLogin = (formData) => async dispatch => {
    await fetch('http://localhost:5000/partner/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => {
        if(res.ok) {
            return res.json()
            .then(data => sessionStorage.setItem('token', data.token))
            .then(partner => dispatch({
                type: CURRENT_EMPLOYEE,
                payload: partner
            })
            )
            .then(history.push('/reservations'))
        } else {
            window.alert('Invalid name or password')
        }
    })
};