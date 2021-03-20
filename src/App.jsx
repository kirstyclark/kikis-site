import react from 'react';
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";
import { shows } from "./data/shows.js";

const App = () => {
  return (
    <div className={styles.app}>
        <section className={styles.nav}>
            <NavBar />
        </section>
        <section className={styles.content}>
            <Routes shows={shows}/>
        </section>
    </div>
  );
}

export default App;
