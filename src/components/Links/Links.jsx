import React from 'react';
import styles from './Links.module.scss';

const Links = () => {
    return (
        <div className={styles.links}>
            <ul>
                <a href='https://www.instagram.com/soft.singer/' target='_blank'>
                    <li>INSTAGRAM</li>
                </a>
                <a href='https://twitter.com/soft_singer' target='_blank'>
                    <li>TWITTER</li>
                </a>
                <a href='https://github.com/kirstyclark' target='_blank'>
                    <li>GITHUB</li>
                </a>
                <a href='https://www.mixcloud.com/softsinger/' target='_blank'>
                    <li>MIXCLOUD</li>
                </a>
                <a href='https://open.spotify.com/user/alison.ormidale?si=3J_XOw6xQmazYMQGoR3YFA' target='_blank'>
                    <li>SPOTIFY</li>
                </a>
                <a href='https://www.linkedin.com/in/kirstyclark101/' target='_blank'>
                    <li>LINKEDIN</li>
                </a>
                <a href='mailto:kirstyhelenclark@gmail.com'target='_blank'>
                    <li>MAIL</li>
                </a>
            </ul>
        </div>
    )
}

export default Links
