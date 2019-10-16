import { CURRENT_EMPLOYEE } from './types';

export const employeeLogin = (formData) => dispatch => {
    console.log('Inside Employee action');
    fetch('http://localhost:5000/partner/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then( partner => localStorage.setItem('auth-token', partner.token))
    .then(partner => dispatch({
        type: CURRENT_EMPLOYEE,
        payload: partner
        })
    )
};