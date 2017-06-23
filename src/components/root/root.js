import './root.css'
import React, {Component} from 'react';

import Home from '../home/home.js';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Menu from '../menu/menu.js';
import Register from '../register/register.js';
import Login from '../login/login.js';
import Calculator from '../calculator/calculator.js';
import CalculationStory from '../calculationStory/calculationStory.js';
import Profile from '../profile/profile.js';
import WorkflowBoard from '../workflowBoard/workflowBoard.js';
import Projects from '../projects/projects.js';
import Settings from '../settings/settings.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createHistory as browserHistory } from 'history';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageTitle: 'home'
        };
    }

    render() {
        return (
            <Router history={ browserHistory }>
                <div>
                    <Header className="headerContainer" currentPageTitle={ this.state.currentPageTitle }/>
                    <div className="contentContainer">
                        <Menu className="menuContainer" isVisible={this.state.currentPageTitle === 'home' ? false : true}/>
                        <Route exact path='/' component= { Home } />
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
                    <Footer className="footerContainer"/>
                </div>
            </Router>
        );
    }
}

export default Root;
