import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import Layout from "../components/layout";
import Intro from "../components/intro";
import Title from "../components/title";
import ProjectContainer from "../components/proj-container";

const IndexPage = () => {

    return (
        <Layout>
            <Intro />
            <Title name="Work" />
            <ProjectContainer />
        </Layout>     
    );

}


export default IndexPage;