import React from 'react';
import styles from './Header.module.scss';
import Mystery from '../Mystery';

const Header = () => {
    return (
        <div className={`header ${styles.header}`}>
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
