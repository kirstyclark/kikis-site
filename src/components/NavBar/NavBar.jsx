import React from 'react';
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className='navbar' className={styles.search}>
            <div className={styles.themeSelector}>
                <label>THEME</label>
                <select>
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
