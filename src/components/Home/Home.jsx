import React from 'react';
import Header from '../Header';
import Projects from '../Projects';
import Vibes from '../Vibes';
import Links from '../Links';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
            <section className={styles.header}>
                <Header />
            </section>
            <section className={styles.projects}>
                <Projects />
            </section>
            <section className={styles.vibes}>
                <Vibes />
            </section>
            <section className={styles.links}>
                <Links />
            </section>
        </div>
    )
}

export default Home


    