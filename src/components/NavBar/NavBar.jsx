import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styles from './NavBar.module.scss'

const NavBar = () => {

    const themeContext = useContext(ThemeContext);
    
    return (
        <div className='navbar' className={styles.search}>
            <div className={styles.themeSelector}>
                <label>THEME</label>
                <select onSelect={themeContext.toggleTheme}>
                    <option value='classic'>classic</option>
                    <option value='forest'>forest</option>
                    <option value='pinky'>pinky</option>
                </select>
            </div>
            <div className={styles.searchBar}>
                <p>SEARCH</p>
            </div>
        </div>
    )
}

export default NavBar
