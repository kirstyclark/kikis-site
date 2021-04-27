import React, { useContext } from 'react';
import { ThemeContext } from '../../../ThemeProvider';
import styles from './Archive.module.scss';
import '../../../assets/styles/styles.scss';
import Vibes from '../../Vibes';
import Links from '../../Links';
import Header from '../../Header';

const Archive = () => {

    const themeContext = useContext(ThemeContext);

    return (
        <div className={`contentFocus ${themeContext.theme}`}>
            <section className='headerCollapsed'>
                <Header currentPlay={currentPlay}/>
            </section>
            <section className='contentBig'>
                <div className={styles.contentRadio}>
                    <div className='projectDescription'>
                        <h2>Archive</h2>
                        <p>Incoming!</p>
                    </div>
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
