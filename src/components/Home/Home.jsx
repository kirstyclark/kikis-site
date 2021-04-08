import React from 'react';
import Header from '../Header';
import Projects from '../Projects';
import Vibes from '../Vibes';
import Links from '../Links';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={`homeLayout ${styles.homeLayout}`}>
            <section className={`headerLayout ${styles.headerLayout}`}>     
                <Header />
            </section>
            <section className={`contentLayout ${styles.contentLayout}`}>
                <Projects />
            </section>
            <section className={`vibesLayout ${styles.vibesLayout}`}>
                <Vibes />
            </section>
            <section className={`linksLayout ${styles.linksLayout}`}>
                <Links />
            </section>
        </div>
    )
}

export default Home


    