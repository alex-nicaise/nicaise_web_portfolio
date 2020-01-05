import React from "react";
import Helmet from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import Favicon from "../../static/favicon.png";
import Header from "../components/header";
import Intro from "../components/intro";
import Title from "../components/title";
import ProjectContainer from "../components/proj-container";
import Footer from "../components/footer";
import useSiteMetadata from '../hooks/use-SiteMetadata';

const Layout = (props) => {

    const { title, description } = useSiteMetadata;

        return (
            <div>
                <Helmet title={title}>
                    <meta name="description" content={description} />
                    {description && (
                    <meta property="og:description" content={description} />
                    )}
                    <link rel="shortcut icon" href={Favicon} />
                </Helmet>

                <div className="container">
                    <Header />
                    <Intro />
                    <Title name="Work" />
                    <ProjectContainer />
                </div>
                <Footer />
            </div>
        );

}


export default Layout;