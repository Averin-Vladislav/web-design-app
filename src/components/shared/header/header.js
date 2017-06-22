import React, {Component} from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className="headerContainer">
                <h1 className="headerTitle">Header</h1>
                <div className="headerLogoContainer">
                    <img className="headerLogoImage" src={process.env.PUBLIC_URL + '/vitruvian-man.png'} alt="logo"/>
                    <span className="headerLogoTitle">design organizing tool</span>
                </div>

            </div>
        );
    }
}

export default Header;
