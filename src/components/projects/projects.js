import React, {Component} from 'react';
import './projects.css'
import '../shared/shared.css';
import Menu from '../shared/menu/menu.js';

class Projects extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <h1>Projects</h1>
            </div>
        );
    }
}

export default Projects;
