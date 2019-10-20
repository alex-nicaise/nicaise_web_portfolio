import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import Header from "../components/header";
import Intro from "../components/intro";
import Title from "../components/title";
import ProjectContainer from "../components/proj-container";
import Footer from "../components/footer";

class Layout extends React.Component {
    render(){
        return (
            <div>
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
}


export default Layout;