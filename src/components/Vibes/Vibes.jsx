import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styles from './Vibes.module.scss';

const Vibes = () => {

    const themeContext = useContext(ThemeContext);

    return (
        <div className={`vibeLayout ${styles.vibes} ${themeContext.theme}`}>
            <div className={styles.vibesContainer}>
                <h2>Vibes Calculator</h2>
                <h4>Click to begin</h4> 
            </div>
         </div>
    )
}

export default Vibes
