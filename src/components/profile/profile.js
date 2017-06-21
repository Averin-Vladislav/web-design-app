import React, {Component} from 'react';
import './profile.css'
import '../shared/shared.css';
import Menu from '../shared/menu/menu.js';

class Profile extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <h1>Profile</h1>
            </div>
        );
    }
}

export default Profile;
