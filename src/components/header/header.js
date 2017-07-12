import React, {Component} from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    componentWillMount() {
        console.log('header componentWillMount');
    }

    componentDidMount() {
        console.log('header componentDidUpdate');
    }

    componentWillReceiveProps(nextProps) {
        console.log('header componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nexProps, nextState) {
        console.log('header shouldComponentUpdate', nexProps, nextState);
        return true;
    }

    componentWillUpdate(nexProps, nextState) {
        console.log('header componentWillUpdate', nexProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('header componentDidUpdate', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('header componentWillUnmount');
    }

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
