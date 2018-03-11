import {Button, Well, Col, Grid, Row } from 'react-bootstrap';
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import NavBar from '../Components/NavBar'

export default (props) => {
  return (
    <ResumePage/>
    );
}

class ResumePage extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
    	<div>
        <NavBar/>
        <Well>
          temp
        </Well>
    	</div>
    )
  }
}