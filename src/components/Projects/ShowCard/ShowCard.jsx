import React from 'react';
import styles from './ShowCard.module.scss';

const ShowCard = (props) => {

    const {name, date, link, image, tags} = props;

    return (
        <div className='showCard' className={styles.showCard}>
            <div className={styles.cardContents}>
                <img src={image}></img>
                <div className={styles.cardInfo}>
                    <p>{date}</p>
                    <h4>{name}</h4>
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
