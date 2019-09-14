import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md" id="navbarbootom"
                 style={{backgroundColor: '#fee600', opacity: 1}}>
                <div className="container-fluid">
                    <Link to='/'><i className="far fa-money-bill-alt" style={{fontSize: '33px'}}></i></Link>
                    <Link to='/history'><i className="fas fa-history" style={{fontSize: '33px'}}></i></Link>
                    <Link to='/'><i className="fas fa-map-marked-alt" style={{fontSize: '33px'}}></i></Link>
                    <Link to='/'><i className="fab fa-cc-apple-pay" style={{fontSize: '33px'}}></i></Link>
                </div>
            </nav>
        )
    }
}

export default Navigation;