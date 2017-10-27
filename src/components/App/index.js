import React, { Component } from 'react';
import MoviesContainer from '../../containers/MoviesContainer';
import Header from '../../components/Header';
import styles from './App.scss';

/**
 * Main App component
 */
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className={styles.masthead}></div>
        <main className={styles.main}>
          <MoviesContainer />
        </main>
      </div>
    );
  }
}

export default App;
