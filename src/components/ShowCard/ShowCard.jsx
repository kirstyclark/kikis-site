import React from 'react';
import styles from './ShowCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const ShowCard = (props) => {

    const {name, date, link, image, tags, setCurrentPlay} = props;

    const playShow = () => {
        setCurrentPlay(link)
    }

    return (

        <div className={`showCard ${styles.showCard}`}>
            <div 
            className={styles.infoContainer} 
            onClick={()=>playShow()}
            >
                <img src={image}></img>
                <div className={styles.playIcon}>
                    <FontAwesomeIcon icon={faPlay} className={`fa ${styles.fa}`}/>
                </div>
                <div className={styles.showInfo}>
                    <p>{date}</p>
                    <h4>{name}</h4>
                </div>
            </div>
            <ul>
                {
                    tags.map(tag => {
                        return <li>{tag}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ShowCard
