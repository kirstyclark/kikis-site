import React, { useContext } from 'react';
import { ThemeContext } from '../../../ThemeProvider';
import styles from './VibesTest.module.scss';
import '../../../assets/styles/styles.scss';
import Header from '../../Header';
import Projects from '../../Projects';
import Links from '../../Links';


const VibesTest = () => {

    const themeContext = useContext(ThemeContext);

    return (
        <div className={`vibesFocus ${styles.vibesFocus} ${themeContext.theme}`}>
            <section className={`headerLayout ${styles.headerLayout}`}>     
                <Header />
            </section>
            <section className={`contentLayout ${styles.contentLayout}`}>
                <Projects />
            </section>
            <section className={`vibesLayout ${styles.vibesLayout}`}>
                Vibes
            </section>
        </div>
    )
}

export default VibesTest
