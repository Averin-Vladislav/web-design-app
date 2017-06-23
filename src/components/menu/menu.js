import React, {Component} from 'react';
import './menu.css'
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        if (!this.props.isVisible) {
            return null;
        }

        return (
            <div>
                <h1>Menu</h1>
                <ul>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/calculator'>Calculator</Link></li>
                    <li><Link to='/calculationStory'>Calculation Story</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/settings'>Settings</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;
