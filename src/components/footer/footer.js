import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footerContainer">
                <ul className="footerList">
                    <li className="footerListLink"><a className="footerListLink" href="/">Terms</a></li>
                    <li className="footerListLink"><a className="footerListLink" href="/">Privacy</a></li>
                    <li className="footerListLink"><a className="footerListLink" href="/">License Agreement</a></li>
                    <li className="footerListLink"><a className="footerListLink" href="/">Design</a></li>
                </ul>
            </div>
        );
    }
}

export default Footer;
