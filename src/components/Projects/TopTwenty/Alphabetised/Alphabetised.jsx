import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../../ThemeProvider';
import styles from './Alphabetised.module.scss';
import '../../../../assets/styles/styles.scss';
import Vibes from '../../../Vibes';
import Links from '../../../Links';
import Header from '../../../Header';
import { Link } from 'react-router-dom';
import { topTwentys } from '../../../../data/top-twentys';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Alphabetised = () => {

    const themeContext = useContext(ThemeContext);
    const [list, setList] = useState();

    useEffect(() => {
        let alphabetisedList= [];
        topTwentys.map(entry => {
            entry.contents.map(item => {
                alphabetisedList.push(item)
            })
        })
        setList(alphabetisedList.sort());
    }, [])

    return (
        <div className={`contentFocus ${themeContext.theme}`}>
            <section className='headerCollapsed'>
                <Header />
            </section>
            <section className='contentBig'>
                <div className='contentRadio'>
                    <div className='projectDescription'>
                        <h2>Top Twenty</h2>
                        <p>My top twenty things, updated every Thursday.</p>
                    </div>
                    <div className={`topTwentyGrid ${styles.topTwentyGrid}`}>
                        <Link to='/toptwenty'>
                            <p className={styles.back}>
                                <FontAwesomeIcon icon={faArrowLeft} className={styles.fa}/>
                                Go back
                            </p>
                        </Link>
                        <div className={`gridFocus ${styles.gridFocus}`}>
                            <h3>Alphabetised List</h3>
                            {
                                list &&
                                <ul>
                                    {
                                        list.map(item => {
                                            return <li>{item}</li>
                                        })
                                    }
                                </ul>
                            }
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

export default Alphabetised
