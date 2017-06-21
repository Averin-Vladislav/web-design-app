import React, {Component} from 'react';
import './App.css';

import CalculationStory from './components/calculationStory/calculationStory.js';
import Calculator from './components/calculator/calculator.js';
import Home from './components/home/home.js';
import Login from './components/login/login.js';
import Profile from './components/profile/profile.js';
import Project from './components/project/project.js';
import Projects from './components/projects/projects.js';
import Settings from './components/settings/settings.js';
import WorkflowBoard from './components/workflowBoard/workflowBoard.js';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { createHistory as browserHistory } from 'history';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <div>
                    <div className='container'>
                        <h1>Home Page</h1>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/calculationStory'>Calculation Story</Link></li>
                            <li><Link to='/calculator'>Calculator</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/profile'>Profile</Link></li>
                            <li><Link to='/projects'>Projects</Link></li>
                            <li><Link to='/project'>Project</Link></li>
                            <li><Link to='/settings'>Settings</Link></li>
                            <li><Link to='/workflowBoard'>Workflow Board</Link></li>
                        </ul>
                    </div>

                    <Route exact path='/' component={Home}/>
                    <Route exact path='/calculationStory' component={CalculationStory}/>
                    <Route exact path='/calculator' component={Calculator}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/projects' component={Projects}/>
                    <Route exact path='/project' component={Project}/>
                    <Route exact path='/settings' component={Settings}/>
                    <Route exact path='/workflowBoard' component={WorkflowBoard}/>
                </div>
            </Router>
        );
    }
}

export default App;
