import React, { Component } from 'react';
import { Navbar } from 'reactstrap';

class Footer extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div>
            <Navbar color="dark" >Stan Inc</Navbar>
            </div>
        );
    }
}

export default Footer;