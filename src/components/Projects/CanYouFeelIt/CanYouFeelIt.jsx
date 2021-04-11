import React, { useContext } from 'react';
import { ThemeContext } from '../../../ThemeProvider';
import styles from './CanYouFeelIt.module.scss';
import '../../../assets/styles/styles.scss';
import Vibes from '../../Vibes';
import Links from '../../Links';
import Header from '../../Header';
import { Link } from 'react-router-dom';
import ShowCard from '../ShowCard/ShowCard';
import { feelIt } from '../../../data/feelIt.js';

const CanYouFeelIt = (props) => {

    const {currentPlay, setCurrentPlay} = props;
    const themeContext = useContext(ThemeContext);

    return (
        <div className={`contentFocus ${themeContext.theme}`}>
            <section className='headerCollapsed'>
                <Header currentPlay={currentPlay}/>
            </section>
            <section className='contentBig'>
                <div className={styles.contentRadio}>
                    <div className='projectDescription'>
                        <h2>Can you feel it!</h2>
                        <p>
                            Brand new show by me, Kiki, aka soft.singer on the cool as shit station <a href='http://datafruits.fm' target='_blank'>datafruits.fm</a> <br></br>
                            An hour of upbeat fast music for u to dance/ run/ do your home workout/ drink cocktails to...
                            It’s ultimate serotonin vibes<br></br>
                            Inc motivational speaking & shoutouts - lets get it!!!!
                        </p>
                    </div>
                    <div className='showContainer'>
                        {
                            feelIt.map(show => {
                                return <ShowCard name={show.name} date={show.date} link={show.link} image={show.image} tags={show.tags} setCurrentPlay={setCurrentPlay}/>
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

export default CanYouFeelIt
