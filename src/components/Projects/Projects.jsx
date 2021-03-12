import React from 'react';
import RadioKiki from './RadioKiki';
import CanYouFeelIt from './CanYouFeelIt';
import TopTwenty from './TopTwenty';
import Archive from './Archive';
import styles from './Projects.module.scss';

const Projects = () => {
    return (
        <div className={styles.projects}>
            <h4>Current Projects</h4>
            <RadioKiki className={styles.project}/>
            <CanYouFeelIt className={styles.project}/>
            <TopTwenty className={styles.project}/>
            <Archive className={styles.project}/>
        </div>
    )
}

export default Projects
