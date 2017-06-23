import React, {Component} from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="headerContainer">
                <h1 className="headerTitle">{this.props.currentPageTitle}</h1>
                <Link to="/" className="headerLogoContainer">
                    <img className="headerLogoImage" src={process.env.PUBLIC_URL + '/vitruvian-man.png'} alt="logo"/>
                    <span className="headerLogoTitle">design organizing tool</span>
                </Link>
            </div>
        );
    }
}

export default Header;
