import './root.css'
import React, { Component } from 'react';

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

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageTitle: 'home'
        };

        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidUpdate');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nexProps, nextState) {
        console.log('shouldComponentUpdate', nexProps, nextState);
        return true;
    }

    componentWillUpdate(nexProps, nextState) {
        console.log('componentWillUpdate', nexProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    checkUrlChange() {
        //TODO: change trigger event
        console.log(window.location.pathname);
        var newPageTitle = window.location.pathname === '/' ? 'home' : window.location.pathname.substring(1);
        newPageTitle = newPageTitle.replace(/([A-Z])/g, ' $1').trim();
        this.setState({
            currentPageTitle: newPageTitle
        });
    }

    isMenuVisible() {
        return (this.state.currentPageTitle === 'home' ||
                this.state.currentPageTitle === 'register' ||
                this.state.currentPageTitle === 'login') ? false : true;
    }

    render() {
        return (
            <Router>
                <div className="pageContainer" onClick= { this.checkUrlChange.bind(this) } onKeyDown= { this.checkUrlChange.bind(this) }>
                    <Header className="headerContainer" currentPageTitle={ this.state.currentPageTitle }/>
                    <div className="overlay"></div>
                    <img className="background" src={ process.env.PUBLIC_URL + '/background.jpg' } alt="background"/>
                    <div className="contentContainer">
                        <Menu className="menuContainer" isVisible={ this.isMenuVisible.bind(this)() }/>
                        <Route exact path='/' component= { Home }/>
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
