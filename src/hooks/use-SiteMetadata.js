import {useStaticQuery, graphql} from 'gatsby';

const useSiteMetadata = () => {

    const data = useStaticQuery(graphql`
        {
            site {
            siteMetadata {
                author
                description
                title
            }
            }
        }
    `)

    return data.site.siteMetadata;
}

export default useSiteMetadata;