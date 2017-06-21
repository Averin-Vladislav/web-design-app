import React, {Component} from 'react';
import './workflowBoard.css'
import '../shared/shared.css';
import  Menu from '../shared/menu/menu.js'

class WorkflowBoard extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <h1>Workflow Board</h1>
            </div>
        );
    }
}

export default WorkflowBoard;
