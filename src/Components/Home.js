import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { Alert } from "react-bootstrap"
import Footer from './Footer';

class Home extends Component {

  constructor(props) {
    super(props); 
    this.state={}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div style={{marginTop:"20px"}}>
            <Alert variant="primary">
              <h2>Reactjs JWT Authentication Application</h2>
              <Button color="danger"><Link to="/signin"><span style={{color:"white"}}>Login</span></Link></Button>
            </Alert>

          </div>

        </Container>
       <Footer/>
      </div>
    );
  }
}

export default Home;