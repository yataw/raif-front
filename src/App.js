import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Main from './Main';
import Footer from './Footer';
import Navigation from './Navigation';

function App() {
  return (<div>
        <Main></Main>
        <Footer></Footer>
        <Navigation></Navigation>
      </div>

  );
}

export default App;
