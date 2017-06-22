import './home.css'
import React, {Component} from 'react';

import Header from '../shared/header/header.js';
import Footer from '../shared/footer/footer.js';
import Register from '../register/register.js';
import Login from '../login/login.js';
import Calculator from '../calculator/calculator.js';
import CalculationStory from '../calculationStory/calculationStory.js';
import Profile from '../profile/profile.js';
import WorkflowBoard from '../workflowBoard/workflowBoard.js';
import Projects from '../projects/projects.js';
import Settings from '../settings/settings.js';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { createHistory as browserHistory } from 'history';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Router history={browserHistory}>
                    <div>
                        <Route exact path='/' render={() =>
                                <ul>
                                    <li><Link to='/register'>Try it now</Link></li>
                                    <li><Link to='/login'>Sign In</Link></li>
                                </ul>
                            }
                        />
                        <Route exact path='/register' component={ Register }/>
                        <Route exact path='/login' component={ Login }/>
                        <Route exact path='/calculator' component={ Calculator }/>
                        <Route exact path='/calculationStory' component={ CalculationStory }/>
                        <Route exact path='/profile' component={ Profile }/>
                        <Route exact path='/setttings' component={ Settings }/>
                        <Route exact path='/workflowBoard' component={ WorkflowBoard }/>
                        <Route exact path='/projects' component={ Projects }/>
                        <Route exact path='/settings' component={ Settings }/>
                    </div>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default Home;
