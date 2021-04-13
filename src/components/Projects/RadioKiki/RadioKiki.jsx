import React, { useContext } from 'react';
import { ThemeContext } from '../../../ThemeProvider';
import styles from './RadioKiki.module.scss';
import '../../../assets/styles/styles.scss';
import Vibes from '../../Vibes';
import Links from '../../Links';
import Header from '../../Header';
import ShowCard from '../ShowCard/ShowCard';
import { rkShows } from '../../../data/radioKiki.js';

const RadioKiki = (props) => {

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
                        <h2>Radio Kiki</h2>
                        <p>
                            Concepts untainted by sound or sight, just rolling about shutting ideas down before they even get a chance to start.<br></br> 
                            Thoughts are little seeds underground which need sunlight, let them breathe. Water your mind, cultivate!<br></br>  
                            Join me, the writer, right at the start, right on for the motivation slash thoughtfulness slash white noise you know you need.<br></br> 
                            All tunes can be found, on the rocks, in <a href='https://open.spotify.com/playlist/6gzSbLTVSvOqV5Mc60gjSy?si=3152bc77467a45bb' target='_blank'>this spotify playlist</a>.
                        </p>
                    </div>
                    <div className='showContainer'>
                        {
                            rkShows.map(show => {
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

export default RadioKiki
