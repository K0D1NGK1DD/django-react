import React, {Component} from 'react';

import Background from '../assets/img/urban-fog.jpg';

import '../styles/Header.css';

const portfolioStyle = {
    backgroundImage: `url( ${Background} )`,
    height: '80vh',
    backgroundSize: 'cover'
};

class Header extends Component {
    render() {
        return (

            <header style={portfolioStyle}>
                <h1>{this.props.title}</h1>
                <p>A Free Theme by D. P. Tran</p>
            </header>
        )
    };
};

export default Header;