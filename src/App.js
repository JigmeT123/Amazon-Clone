import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
