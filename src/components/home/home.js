import './home.css'
import React, {Component} from 'react';

import { Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageTitle: 'home'
        };
    }

    render() {
        return (
            <div className="homeContainer">
                <img className="homeAdaptivePresentationImage" src={ process.env.PUBLIC_URL + '/adaptive-presentation.png' } alt="logo"/>
                <div className="homeContentContainer">
                    <div className="homeLogoContainer">
                        <img className="homeLogoImage" src={process.env.PUBLIC_URL + '/vitruvian-man.png'} alt="logo"/>
                        <span className="homeLogoTitle">design organizing tool</span>
                    </div>
                    <div className="homeContentText">
                        <span className="homeMainHeading">Powerful design organizing tool</span>
                        <span>Get high-fidelity project structure of your design in a minutes.</span>
                        <span>Analyze your work, create, edit and deploy projects from variety designing fields.</span>
                        <span>Control you work process with workflow board.</span>
                        <span>Upload files, create artifacts elements, form activity logs.</span>
                        <span>Transform your goals to inpute parameters and path them to style calculator. Get resulst in a second.</span>
                        <span>View calculation history, store personal files and documentation. Login with Facebook and Google services</span>
                        <span>Try A11Y mode and desktop notification to get more progressive results and do pleasant workflow.</span>
                    </div>
                    <Link className="homeContentButton" to='/register' >Try it now</Link>
                    <Link className="homeContentButton" to='/login' >Sign In</Link>
                </div>
            </div>
        );
    }
}

export default Home;
