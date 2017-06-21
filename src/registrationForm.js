import React, { Component } from 'react';
import './RegistrationForm.css';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("form was submitted. email value is", this.state.email);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
        console.log("email was changed", this.state.email);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="enter email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    className="emailField"
                />
                <button className="submitButton">Save</button>
            </form>
        );
    }
}

export default RegistrationForm;
