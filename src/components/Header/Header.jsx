import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styles from './Header.module.scss';
import Mystery from '../Mystery';
import { Link } from 'react-router-dom';

const Header = () => {

    const themeContext = useContext(ThemeContext);

    return (
        <div className={`header ${styles.header} ${themeContext.theme}`}>

            <div className={`title ${styles.title}`}>
                <div className={`headerTitle ${styles.headerTitle}`}>
                    <Link to='/' >
                            <h1>KIKI's SITE</h1>
                    </Link>
                </div>
            </div>

            <div className={`titleWithNav ${styles.titleWithNav}`}>
                <div className={`headerTitleCollapsed ${styles.headerTitleCollapsed}`}>
                    <Link to='/' >
                            <h1>KIKI's SITE</h1>
                    </Link>
                </div>
                <div className={`headerLinks ${styles.headerLinks}`}>
                    <Link to='/radiokiki' >
                        <h4>Radio Kiki</h4>
                    </Link>
                    <Link to='/canyoufeelit' >
                        <h4>Can You Feel It</h4>
                    </Link>
                    <Link to='/toptwenty'>
                        <h4>Top Twenty</h4>
                    </Link>
                    <Link to='/archive'>
                        <h4>Archive</h4>
                    </Link>
                </div>
            </div> 
            <div className={styles.mystery}>
                <Mystery />
            </div>
        </div>
    )
}

export default Header
