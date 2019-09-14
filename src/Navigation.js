import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md" id="navbarbootom" style={{backgroundColor: '#fee600', opacity: 1}}>
                <div className="container-fluid"><i className="far fa-money-bill-alt" style={{fontSize: '33px'}} /><i className="fas fa-history" style={{fontSize: '33px'}} /><i className="fas fa-map-marked-alt" style={{fontSize: '33px'}} /><i className="fab fa-cc-apple-pay" style={{fontSize: '33px'}} /></div>
            </nav>
        )
    }
}

export default Navigation;