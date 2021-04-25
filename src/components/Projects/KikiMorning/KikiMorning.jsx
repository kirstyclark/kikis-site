import React, { useContext } from 'react';
import { ThemeContext } from '../../../ThemeProvider';
import styles from './KikiMorning.module.scss';
import '../../../assets/styles/styles.scss';
import Vibes from '../../Vibes';
import Links from '../../Links';
import Header from '../../Header';
import ShowCard from '../../ShowCard';
import { shows } from '../../../data/shows.js';

const KikiMorning = (props) => {

    const themeContext = useContext(ThemeContext);
    const {currentPlay, setCurrentPlay} = props;
    
    return (
        <div className={`contentFocus ${themeContext.theme}`}>
            <section className='headerCollapsed'>
                <Header />
            </section>
            <section className='contentBig'>
                <div className='contentRadio'>
                    <div className='projectDescription'>
                        <h2>Easy Like A Kiki Morning</h2>
                        <p>
                            Easy like a Kiki Morning is a hug, an encouraging nod, the sun shining on your face as you walk down the road in the morning. <br/>
                            Including Kiki’s Big Top 10, Birds B2B Water and conversations with fellow creatives… <br/>
                            Join Kiki for a soothing, inspiring and motivating start to your week, broadcast last Monday morning of the month at 10.00 on whynow Radio.
                        </p>
                    </div>
                    <div className='showContainer'>
                        {   
                            shows.map(show => {
                                if (show.category === 'kikiMorning') {
                                    return <ShowCard name={show.name} date={show.date} link={show.link} image={show.image} tags={show.tags} setCurrentPlay={setCurrentPlay}/>
                                } 
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

export default KikiMorning
