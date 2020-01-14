import React from 'react';
import useSiteMetadata from '../hooks/use-SiteMetadata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFreeCodeCamp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const {author} = useSiteMetadata();

    return(
        <div id="footer">
            <div id="social-icons">
                <a href="https://github.com/alex-nicaise" target="_blank" rel="noreferrer noopener" ><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                <a href="https://www.freecodecamp.org/anicaise" target="_blank" rel="noreferrer noopener" ><FontAwesomeIcon icon={faFreeCodeCamp} size="2x" /></a>
                <a href="https://linkedin.com/in/alexander-nicaise/" target="_blank" rel="noreferrer noopener" ><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            </div>
            <p>{author} © {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
    )
}

export default Footer;