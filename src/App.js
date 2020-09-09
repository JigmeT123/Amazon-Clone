import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import styles from './app.module.css';
import Checkout from './components/checkout/Chekout';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
    return (
        <Router>
            <div className={styles.app}>
            <Header/>
                <Switch>
                  <Route path="/checkout">
                  <Checkout />
                  </Route>
                  <Route exact path="/">
                    <Home/>
                  </Route>
                   
                </Switch>

            </div>
        </Router>

    );
}

export default App;
