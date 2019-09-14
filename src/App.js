import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Navigation from './Navigation';
import History from './History';

function App() {
    return (<Router>
            <div>
                <Header />
                <Route exact path="/" component={Main} />
                <Route path="/history" component={History} />
                <Footer/>
                <Navigation/>
            </div>
        </Router>
    );
}

export default App;
