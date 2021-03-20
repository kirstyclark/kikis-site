import React from 'react';
import styles from './Header.module.scss';
import { gif } from '../../assets/images/header-gifs.js';


const Header = () => {
    return (
        <div className={styles.header}>
            <h1>KIKI's SITE</h1>
            {/* <img src={gif[0]}></img>
            <img src={gif[1]}></img>
            <img src={gif[2]}></img>
            <img src={gif[3]}></img> */}
        </div>
    )
}

export default Header
