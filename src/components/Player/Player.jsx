import React from 'react';
import styles from './Player.module.scss';

const Player = (props) => {

    // const themeContext = useContext(ThemeContext);
    const {currentPlay} = props;

    return (
        <>
            {
                currentPlay != '' ? 
                <div className={styles.currentPlay}>
                    <iframe src={currentPlay} frameborder="0" allow="autoplay">
                    </iframe> 
                </div> 
                : null
            } 
        </>
    )
}

export default Player
