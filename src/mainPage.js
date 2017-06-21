import React, {Component} from 'react';
import './mainPage.css';
import Contact from './contact';

class MainPage extends Component {
    CONTACTS = [
        {
            id: 1,
            name: 'Vladislav Averin',
            phone: '+375298015156',
            img: {
                link: process.env.PUBLIC_URL + '/vlad.jpg',
                alt: 'vladislav averin\'s avatar'
            }
        }, {
            id: 2,
            name: 'Nadezhda Tsegelnik',
            phone: '+375297404766',
            img: {
                link: process.env.PUBLIC_URL + '/nadya.jpg',
                alt: 'nadzezhda tsegelnik\'s avatar'
            }
        }, {
            id: 3,
            name: 'Kovalchuk Ekaterina',
            phone: '+375445304704',
            img: {
                link: process.env.PUBLIC_URL + '/katya.jpg',
                alt: 'kovalchuk ekaterina\'s avatar'
            }
        }, {
            id: 4,
            name: 'Viktor Kravchenko',
            phone: '+375447422103',
            img: {
                link: process.env.PUBLIC_URL + '/vitya.jpg',
                alt: 'viktor kravchenko\'s avatar'
            }
        },
    ];

    constructor(props) {
        super(props);
        this.state = {
            searchResult: this.CONTACTS
        }
    }

    handleChange = (event) => {
        let searchQuery = event.target.value.toLowerCase();
        let searchResult = this.CONTACTS.filter((item, index) => {
            let currentValue = item.name.toLowerCase();
            return currentValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            searchResult: searchResult
        });
    }

    render() {
        return (
            <div className="container">
                <label className="searchLabel" htmlFor="searchInput">Search Contacts</label>
                <input id="searchInput" className="searchInput" type="text" placeholder="type..." onChange={this.handleChange}/>
                <ul className="concactList">
                    {
                        this.state.searchResult.map((item, index) => {
                            return <Contact
                                key={item.id}
                                name={item.name}
                                phone={item.phone}
                                img={item.img} />;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MainPage;
