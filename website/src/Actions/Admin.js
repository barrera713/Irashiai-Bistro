import { ADMIN } from './types';

export const adminLogin = (formData) => dispatch => {
    fetch('http://localhost:5000/admin/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then( res => res.json())
    .then( data => sessionStorage.setItem('token', data.token))
    .then( admin => dispatch({
        type: ADMIN,
        payload: admin
    })
    )
};