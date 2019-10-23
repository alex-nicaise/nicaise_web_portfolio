import React from 'react';
import useSiteMetadata from '../hooks/use-SiteMetadata';

const Footer = () => {

    const {author} = useSiteMetadata();

    return(
        <div id="footer">
            <p>{author} © {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
    )
}

export default Footer;