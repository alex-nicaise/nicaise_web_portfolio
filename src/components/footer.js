import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            year: 0,
            name: '' 
        };
    }

    componentDidMount(){
        this.setState({
            year: new Date().getFullYear(),
            name: 'Alexander Nicaise'
        })
    }


    render(){

        return(
            <div id="footer">
                <p>{this.state.name} © {this.state.year}. All Rights Reserved.</p>
            </div>
        )
    }
}

export default Footer;