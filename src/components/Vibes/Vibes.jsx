import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styles from './Vibes.module.scss';
import { Link } from 'react-router-dom';

const Vibes = (props) => {

    const themeContext = useContext(ThemeContext);

    return (
        <div className={`vibeLayout ${styles.vibes} ${themeContext.theme}`}>
            <div className={styles.vibesContainer}>
                <h2>Vibes Calculator</h2>
                <h4>incoming...</h4>
                <Link to='/vibes' >
                    <h4>Click to begin...</h4>
                </Link>
            </div>
         </div>
    )
}

export default Vibes
