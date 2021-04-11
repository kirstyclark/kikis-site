import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../ThemeProvider';
import styles from './TopTwenty.module.scss';
import '../../../assets/styles/styles.scss';
import Vibes from '../../Vibes';
import Links from '../../Links';
import Header from '../../Header';
import { Link } from 'react-router-dom';
import { topTwentys } from '../../../data/top-twentys';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TopTwenty = (props) => {

    const themeContext = useContext(ThemeContext);
    const {currentPlay} = props;
    const [chosenList, setList] = useState(topTwentys[0]);

    const handleClick = (entry) => {
        let clickedEntry = entry.target.innerHTML;
        setList(topTwentys.find(newEntry => newEntry.date == clickedEntry));
    }

    const goPrev = () => {
        let currentIndex = topTwentys.indexOf(chosenList);
        setList(topTwentys[currentIndex+1])
    }

    const goNext = () => {
        let currentIndex = topTwentys.indexOf(chosenList);
        setList(topTwentys[currentIndex-1])
    }
 
    // const alphabet = () => {
    //     let arrayOfArrays = [];
    //     topTwentys.map(list => {
    //         arrayOfArrays.push(list.contents)
    //     })
    //     console.log(arrayOfArrays);
    //     let alphabeticalList = [];
    //     arrayOfArrays.map(content => {
    //         alphabeticalList.push(content)
    //     });
    //     console.log(alphabeticalList);
    // }

    return (
        <div className={`contentFocus ${themeContext.theme}`}>
            <section className='headerCollapsed'>
                <Header currentPlay={currentPlay}/>
            </section>
            <section className='contentBig'>
                <div className='contentRadio'>
                    <div className='projectDescription'>
                        <h2>Top Twenty</h2>
                        <p>My top twenty things, updated every Thursday.</p>
                    </div>
                    <div className={styles.topTwentyGrid}>
                        <div className={styles.gridList}>
                            {/* <h4 onClick={()=>alphabet()} className={styles.click}>Alphabetised</h4> */}
                            <h4>Archive</h4>
                            <ul>
                                {
                                    topTwentys.map(entry => {
                                        return <li onClick={(entry)=>handleClick(entry)}>{entry.date}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className={styles.gridFocus}>
                            <h3>{chosenList.date}</h3>
                            <ol>
                                {
                                    chosenList.contents.map(content => {
                                        return <li>{content}</li>
                                    })
                                }
                            </ol>
                            <br></br>
                            <div className={styles.listToggle}>
                                { chosenList != topTwentys[topTwentys.length-1] ? 
                                    <p onClick={()=>goPrev()} className={styles.click}>
                                        <FontAwesomeIcon icon={faArrowLeft} className={styles.fa}/>
                                        previous
                                    </p>
                                    : null
                                }
                                { chosenList != topTwentys[0] ? 
                                    <p onClick={()=>goNext()} className={styles.click}>
                                        <FontAwesomeIcon icon={faArrowRight} className={styles.fa}/>
                                        next
                                    </p>
                                    : null
                                }
                            </div>
                        </div>
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

export default TopTwenty
