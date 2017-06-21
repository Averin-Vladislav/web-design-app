import React from 'react';
import './Contact.css'

const Contact = (props) => {
    return (
        <div className="contactContainer">
            <img className="contactImage" src={props.img.link} alt={props.img.alt} />
            <div className="contactInfo">
                <h1 className="contactName">{props.name}</h1>
                <div className="contactPhone">{props.phone}</div>
            </div>
        </div>
    );
}

export default Contact;
