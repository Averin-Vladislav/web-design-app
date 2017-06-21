import React, {Component} from 'react';
import './settings.css';
import '../shared/shared.css';
import Menu from '../shared/menu/menu.js';

class Settings extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <h1>Settings</h1>
            </div>
        );
    }
}

export default Settings;
