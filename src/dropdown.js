import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }

    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {
        var dropdownText;
        console.log('isOpened', this.state.isOpened);
        if(this.state.isOpened) {
            dropdownText = <div>i love you!</div>;
        }
        return (
            <div onClick={ this.toggleState.bind(this) }>
                it is dropdown baby!
                {dropdownText}
            </div>
        );
    }
}

export default Dropdown;
