import React from "react";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import useSiteMetadata from "../hooks/use-SiteMetadata";
import Favicon from "../../static/favicon.png";
import Header from "../components/header";
import Footer from "../components/footer";

export const Layout = ({children}) => {

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
                { children }
            </div>

            <Footer />
        </div>
    );

}


export default Layout;