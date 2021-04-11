import React from 'react';
import styles from './ShowCard.module.scss';

const ShowCard = (props) => {

    const {name, date, link, image, tags, setCurrentPlay} = props;

    const playShow = () => {
        setCurrentPlay(link)
    }

    return (
        <div className={`showCard ${styles.showCard}`}>
            <div className={styles.cardContents}>
                <img src={image} onClick={()=>playShow()}></img>
                <div className={`cardInfo ${styles.cardInfo}`}>
                    <p>{date}</p>
                    <h4 onClick={()=>playShow()}>{name}</h4>
                    <ul>
                        {
                            tags.map(tag => {
                                return <li>{tag}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShowCard
