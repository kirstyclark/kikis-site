import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styles from './Header.module.scss';
import Mystery from '../Mystery';
import { Link } from 'react-router-dom';

const Header = () => {

    const themeContext = useContext(ThemeContext);

    return (
        <div className={`header ${styles.header} ${themeContext.theme}`}>
            <div className={styles.title}>
                <Link to='/' >
                        <h1>KIKI's SITE</h1>
                </Link>
            </div> 
            <div className={styles.mystery}>
                <Mystery />
            </div>
        </div>
    )
}

export default Header
