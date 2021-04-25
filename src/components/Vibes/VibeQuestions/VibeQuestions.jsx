import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../ThemeProvider';
import styles from './VibeQuestions.module.scss';
import '../../../assets/styles/styles.scss';

const VibeQuestions = () => {

    const themeContext = useContext(ThemeContext);

    // are you feeling fast or slow?

    // are you feeling thoughtful or funloving?

    // chat or no chat?

    // option 1 slow and quiet
    // option 2 slow and intense
    // option 3 chatty and slow
    // option 4 chatty and fun
    // option 5 fast and loud
    // option 6 fast and happy

    // question 1 = loud or quiet?
        // are you feeling more KIKI!! or ~kiki~

    // question 2 = fast or slow?
        // on top non stop lets fkn have it or slow n steady wins the race?

    // question 3 = chat or nah?
        // 

    const response = [];
    const [currentQ, setQ] = useState(1);

    const handleClick = (e) => {
        const answer = e.target.value;
        response.push(answer);
        setQ(currentQ + 1);
        console.log(response);
    }

    return (
        <div className={`vibeQuestions ${styles.vibeQuestions} ${themeContext.theme}`}>
            <h4>Are you feeling more</h4>
            <div className={currentQ == 1 ? styles.question : styles.questionHidden}>
                <button onClick={(e)=> handleClick(e)} value='loud'>KIKI!</button>
                <p>or</p>
                <button onClick={(e)=> handleClick(e)} value='quiet'>~kiki~</button>
            </div>
            <div className={currentQ == 2 ? styles.question : styles.questionHidden}>
                <button onClick={(e)=> handleClick(e)} value='fast'>fast like a hare</button>
                <p>or</p>
                <button onClick={(e)=> handleClick(e)} value='slow'>slow and steady like the turtle</button>
            </div>
            <div className={currentQ == 3 ? styles.question : styles.questionHidden}>
                <button onClick={(e)=> handleClick(e)} value='chat'>up for a chat</button>
                <p>or</p>
                <button onClick={(e)=> handleClick(e)} value='noChat'>not chatty</button>
            </div>
            <h4>?</h4>
        </div>
    )
}

export default VibeQuestions
