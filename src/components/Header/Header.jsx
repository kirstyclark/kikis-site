import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styles from './Header.module.scss';
import Mystery from '../Mystery';

const Header = () => {

    const themeContext = useContext(ThemeContext);

    return (
        <div className={`header ${styles.header} ${themeContext.theme}`}>
            <div className={styles.title}>
                <h1>KIKI's SITE</h1>
            </div>
            <div className={styles.mystery}>
                <Mystery />
            </div>
        </div>
    )
}

export default Header
