import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styles from './NavBar.module.scss'

const NavBar = () => {

    const themeContext = useContext(ThemeContext);

    const selectTheme = (event) => {
        themeContext.toggleTheme(event.target.value);
    }
    
    return (
    <div className={themeContext.theme}>
        <div className={`navbar ${styles.search}`}>
            <div className={styles.themeSelector}>
                <label>THEME</label>
                <select onChange={(event) => selectTheme(event)}>
                    <option value='classic'>classic</option>
                    <option value='forest'>forest</option>
                    <option value='pinky'>pinky</option>
                    <option value='blue'>deep blue</option>
                </select>
            </div>
            <div className={styles.searchBar}>
                <p>SEARCH</p>
            </div>
        </div>
    </div>
    )
}

export default NavBar
