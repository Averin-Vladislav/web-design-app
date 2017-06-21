import React, {Component} from 'react';
import './App.css';
import MainPage from './mainPage.js';
import AboutPage from './aboutPage.js';
import { BrowserRouter as Router, Route, IndexRoute, Link} from 'react-router-dom';
import { createHistory as browserHistory } from 'history';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <div>
                    <div className='container'>
                        <h1>App</h1>
                        <ul>
                            <li><Link to='/'>MainPage</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </ul>
                    </div>

                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/about' component={AboutPage}/>
                </div>
            </Router>
        );
    }
}

export default App;
