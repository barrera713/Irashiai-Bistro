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
            <form onSubmit={this.adminSubmit} className="login-form">
                <h3>Admin Login</h3>
                <input placeholder="Username" type="text" name="admin-name" />
                <input placeholder="Password" type="password" name="admin-password" />
                <div>
                    <button>Confirm</button>
                </div>
            </form>
            <div>
                <form onSubmit={this.userSubmit} className="login-form" >
                    <h3>User Login</h3>
                    <input placeholder="Username" type="text" name="name" />
                    <input placeholder="Password" type="password" name="password" />
                    <div>
                        <button>Confirm</button>
                    </div>
                </form>
            </div>
        </div>
        )

    }
}

export default connect(null, { employeeLogin, adminLogin })(Login);