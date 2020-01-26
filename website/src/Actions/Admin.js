import { ADMIN } from './types';


export const adminLogin = (formData) => dispatch => {
    fetch('/admin/login', {
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
            .then( data => sessionStorage.setItem('token', data.token))
            .then( admin => dispatch({
                type: ADMIN,
                payload: admin
            })
            )
        } else {
            window.alert('Invalid name or password')
        }
    })
};