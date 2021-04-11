import React, { useState } from 'react';
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Player from "./components/Player";
import Routes from "./containers/Routes";
import ThemeProvider from './ThemeProvider';

const App = () => {

  const [search, setSearch] = useState('');
  const [currentPlay, setCurrentPlay] = useState('');

  return (
    <ThemeProvider>
      <div className={`app ${styles.app}`}> 
          <section className={`navDesk ${styles.navDesk}`}>
              <NavBar setSearch={setSearch}/>
          </section>
          <section className={styles.mainDesk}>
              <Routes search={search} setCurrentPlay={setCurrentPlay}/>
          </section>
          <section className='player'>
              <Player currentPlay={currentPlay}/>
          </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
