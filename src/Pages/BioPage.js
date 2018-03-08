import {Button, Well, Col, Grid, Row } from 'react-bootstrap';
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import NavBar from '../Components/NavBar'

export default (props) => {
  return (
    <BioPage/>
    );
}

class BioPage extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
    	<div>
        <NavBar/>
        <Well>
          My name is Tom Prince and I live in Austin Texas. I have lived
          in the Austin area for around 15 years, however 4 of those years
          were spent in college going to Abilene Christian University.
        </Well>
    	</div>
    )
  }
}