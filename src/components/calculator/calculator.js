import React, {Component} from 'react';
import './calculator.css'
import Menu from '../shared/menu/menu.js';

class Calculator extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <h1>Calculator</h1>
            </div>
        );
    }
}

export default Calculator;
