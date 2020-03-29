import React from 'react';
import { connect } from 'react-redux';
import { employeeLogin } from '../Actions/Employee';
import { adminLogin } from '../Actions/Admin';




class Login extends React.Component {

    adminSubmit = (e) => {
        e.preventDefault()
        const formData = {
            "name": e.target["admin-name"].value,
            "password": e.target["admin-password"].value
        }
        // console.log('inside admin form', formData)
        this.props.adminLogin(formData);

    }


    userSubmit = (e) => {
        e.preventDefault()
        const formData = {
            "name": e.target["name"].value,
            "password": e.target["password"].value
        }
        // console.log('inside employee handleSubmit', formData);
        this.props.employeeLogin(formData);
    }

    render() {

        return(<div>
            <div className="forms-wrapper">
                <div className="partner-form-container">
                    <form onSubmit={this.userSubmit} className="login-form" >
                        <h3>Partner Login</h3>
                        <input placeholder="Carlos Barrera" type="text" name="name" />
                        <input placeholder="123123" type="password" name="password" />
                        <button>Confirm</button>
                    </form>
                </div>
            </div>
        </div>)

    }
}

export default connect(null, { employeeLogin, adminLogin })(Login);