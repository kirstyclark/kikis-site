import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = (props) => {

    const themeContext = useContext(ThemeContext);
    const {setSearch} = props;

    const selectTheme = (event) => {
        themeContext.toggleTheme(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        setSearch(event.target[0].value);
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
            {/* <div className={styles.searchBar}> */}
                {/* <form onSubmit={(event)=>handleSearch(event)}> */}
                    {/* <input className='searchInput' type='text' placeholder='type here'></input> */}
                    {/* <Link to='/searchresults' > */}
                        {/* <button type='submit'>SEARCH</button> */}
                    {/* </Link> */}
                {/* </form> */}
            {/* </div> */}
        </div>
    </div>
    )
}

export default NavBar
