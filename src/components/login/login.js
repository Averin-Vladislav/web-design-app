import React, {Component} from 'react';
import './login.css';
import '../shared/shared.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form className="registerForm">
                    <label htmlFor="usernameInput">Username</label>
                    <input id="usernameInput" type="text" placeholder="username"></input>
                    <label htmlFor="passwordInput">Password</label>
                    <input id="passwordInput" type="password" placeholder="Password"></input>
                    <button type="submit" value="Submit">Login</button>
                </form>
                <Link className="button" to='/calculator'>Calculator</Link>
                <Link className="button" to='/'>Back To Home</Link>
            </div>
        );
    }
}

export default Login;
