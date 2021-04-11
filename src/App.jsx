import React from 'react';
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";
import ThemeProvider from './ThemeProvider';

const App = () => {

  return (
    <ThemeProvider>
      <div className={`app ${styles.app}`}> 
          <section className={`navDesk ${styles.navDesk}`}>
              <NavBar />
          </section>
          <section className={styles.mainDesk}>
              <Routes />
          </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
