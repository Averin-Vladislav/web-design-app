import React, {Component} from 'react';
import './register.css';
import '../shared/shared.css';

import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form className="registerForm">
                    <label htmlFor="usernameInput">Username</label>
                    <input id="usernameInput" type="text" placeholder="username"></input>
                    <label htmlFor="nameInput">Name</label>
                    <input id="nameInput" type="text" placeholder="name"></input>
                    <label htmlFor="passwordInput">Password</label>
                    <input id="passwordInput" type="password" placeholder="Password"></input>
                    <label htmlFor="repeatPasswordInput">Repeat Password</label>
                    <input id="repeatPasswordInput" type="password" placeholder="Repeat Password"></input>
                    <button type="submit" value="Submit">Register</button>
                </form>
                <Link className="button" to='/'>Back To Home</Link>
                <Link className="button" to='/calculator'>Calulator</Link>
            </div>
        );
    }
}

export default Register;
