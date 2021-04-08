import react from 'react';
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";
import { shows } from "./data/shows.js";

const App = () => {
  return (
    <div className={`app ${styles.app}`}>
        <section className={`navDesk ${styles.navDesk}`}>
            <NavBar />
        </section>
        <section className={styles.mainDesk}>
            <Routes shows={shows}/>
        </section>
    </div>
  );
}

export default App;
