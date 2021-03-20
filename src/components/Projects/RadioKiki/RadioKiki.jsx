import React from 'react';
import styles from './RadioKiki.module.scss';
import Vibes from '../../Vibes';
import Links from '../../Links';
import Header from '../../Header';
import { Link } from 'react-router-dom';

const RadioKiki = (props) => {
    
    const {shows} = props;
    
    return (
        <div className={styles.radiokiki_home}>
            <section className={styles.header_collapsed}>
                <Link to='/' >
                        <Header />
                </Link>
            </section>
            <section className={styles.radiokiki_contents}>
                <h2>RADIO IIKIKI</h2>
            </section>
            <section className={styles.vibes_collapsed}>
                <Vibes />
            </section>
            <section className={styles.links_collapsed}>
                <Links />
            </section>
        </div>
    )
}

export default RadioKiki
