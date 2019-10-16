import React from 'react';
import { connect } from 'react-redux';
import { employeeLogin } from '../Actions/Employee';


class Login extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            "name": e.target["name"].value,
            "password": e.target["password"].value
        }
        console.log('inside employee handleSubmit', formData);
        this.props.employeeLogin(formData);
    }

    render() {

        return(<div>
            <form onSubmit={this.handleSubmit} className="login-form" >
                <input placeholder="Username" type="text" name="name"></input>
                <input placeholder="Password" type="text" name="password"></input>
                <div>
                    <button>Confirm</button>
                </div>
            </form>
        </div>
        )

    }
}

export default connect(null, { employeeLogin })(Login);