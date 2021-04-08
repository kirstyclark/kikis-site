import React from 'react';
import styles from './RadioKiki.module.scss';
import '../../../assets/styles/styles.scss';
import Vibes from '../../Vibes';
import Links from '../../Links';
import Header from '../../Header';
import { Link } from 'react-router-dom';
import ShowCard from '../ShowCard/ShowCard';
import { shows } from '../../../data/shows.js';

const RadioKiki = () => {
    
    return (
        <div className='contentFocus'>
            <section className='headerCollapsed'>
                <Link to='/' >
                        <Header />
                </Link>
            </section>
            <section className='contentBig'>
                <div className={styles.contentRadio}>
                    <h2>Radio Kiki</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut hic facilis perferendis animi aperiam?</p>
                    <div className={styles.showContainer}>
                        {
                            shows.map(show => {
                                return <ShowCard name={show.name} date={show.date} link={show.link} image={show.image} tags={show.tags} />
                            })
                        }
                    </div>
                </div>
            </section>
            <section className='vibesCollapsed'>
                <Vibes />
            </section>
            <section className='linksCollapsed'>
                <Links />
            </section>
        </div>
    )
}

export default RadioKiki
