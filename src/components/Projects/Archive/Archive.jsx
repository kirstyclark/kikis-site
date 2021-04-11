import React, { useContext } from 'react';
import { ThemeContext } from '../../../ThemeProvider';
import styles from './Archive.module.scss';
import '../../../assets/styles/styles.scss';
import Vibes from '../../Vibes';
import Links from '../../Links';
import Header from '../../Header';
import { Link } from 'react-router-dom';

const Archive = () => {

    const themeContext = useContext(ThemeContext);

    return (
        <div className={`contentFocus ${themeContext.theme}`}>
            <section className='headerCollapsed'>
                <Link to='/' >
                        <Header />
                </Link>
            </section>
            <section className='contentBig'>
                <div className={styles.contentRadio}>
                    <h2>Archvee bba</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut hic facilis perferendis animi aperiam?</p>
                </div>
            </section>
            <section className='vibesCollapsed'>
                <Vibes />
            </section>
            <section className='linksCollapsed'>
                <Links />
            </section>
        </div>
    )
}

export default Archive
