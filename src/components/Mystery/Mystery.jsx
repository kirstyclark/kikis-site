import React, { useEffect } from 'react';
import styles from './Mystery.module.scss';
import { mystery } from '../../data/mystery.js';

const Mystery = () => {

    // let date;

    // useEffect(() => {
    //     date = (new Date()).getDate();
    // }, [])

    let mysteryToday = mystery[11];

    return (
        <div className={`mysteryContainer ${styles.mysteryContainer}`}>
            <div className={styles.mysteryMotion}>
                <p  className={`mysteryDay ${styles.mysteryDay}`}>
                    MYSTERY OF THE DAY... {mysteryToday}
                    MYSTERY OF THE DAY... {mysteryToday}
                    MYSTERY OF THE DAY... {mysteryToday}
                    MYSTERY OF THE DAY... {mysteryToday}
                    MYSTERY OF THE DAY... {mysteryToday}
                    MYSTERY OF THE DAY... {mysteryToday}
                    MYSTERY OF THE DAY... {mysteryToday}
                    MYSTERY OF THE DAY... {mysteryToday}
                    MYSTERY OF THE DAY... {mysteryToday}
                    MYSTERY OF THE DAY... {mysteryToday}
                    MYSTERY OF THE DAY... {mysteryToday}
                </p>
            </div>
        </div>
    )
}

export default Mystery
