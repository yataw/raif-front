import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Main from './Main';
import History from './History';
import Map from './Map';
import Payment from './Payment';

import Footer from './Footer';
import Navigation from './Navigation';

function App() {
    return (<Router>
            <div>
                <Header />
                <Route exact path="/" component={Main} />
                <Route path="/history" component={History} />
                <Route path="/map" component={Map} />
                <Route path="/payment" component={Payment} />
                <Footer/>
                <Navigation/>
            </div>
        </Router>
    );
}

export default App;
