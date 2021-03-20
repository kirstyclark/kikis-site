import React from 'react';
import styles from './Projects.module.scss';
import { Link } from 'react-router-dom';

const Projects = (props) => {

    const {shows} = props; 

    return (
        <div className={styles.projects}>
            <div className={styles.currentTitle}>
                <h4>Current Projects</h4>
            </div>
            <div className={styles.linkContainer}>
                <Link to='/radiokiki' >
                    <h2>Radio Kiki</h2>
                </Link>
                <Link to='/canyoufeelit' >
                    <h2>Can You Feel It</h2>
                </Link>
                <Link to='/toptwenty'>
                    <h2>Top Twenty</h2>
                </Link>
                <Link to='/archive'>
                    <h2>Archive</h2>
                </Link>
            </div>
        </div>
    )
}

export default Projects
