import react from 'react';
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Vibes from "./components/Vibes";
import Links from "./components/Links";

const App = () => {
  return (
    <div className={styles.app}>
      <section className={styles.nav}>
        <NavBar />
      </section>
      <section className={styles.header}>
        <Header />
      </section>
      <section className={styles.projects}>
        <Projects />
      </section>
      <section className={styles.vibes}>
        <Vibes />
      </section>
      <section >
        <Links className={styles.links}/>
      </section>
    </div>
  );
}

export default App;
