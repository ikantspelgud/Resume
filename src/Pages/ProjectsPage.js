import {Button, Well, Col, Grid, Row, } from 'react-bootstrap';
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import NavBar from '../Components/NavBar'
import { Link } from 'react-router-dom'

export default (props) => {
  return (
    <ProjectsPage/>
    );
}

class ProjectsPage extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
    	<div>
        <NavBar/>
        <Link to="https://github.com/ikantspelgud">
          <Button bsStyle="link" bsSize="large" className="top-link">
            Github
          </Button>
        </Link>
        
    	</div>
    )
  }
}