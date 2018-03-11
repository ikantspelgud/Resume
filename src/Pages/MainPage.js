import {Button, Well, Col, Grid, Row, } from 'react-bootstrap';
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import NavBar from '../Components/NavBar'

export default (props) => {
  return (
    <MainPage/>
    );
}

class MainPage extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
    	<div>
        <NavBar/>
        <Well>
          My name is Tom Prince and this is my personal website fully
          developed by me. The site is built using React also using
          Bootstrap for formating. The source code for this site and some
          of my other projects are available on my github. Feel free to browse around and learn 
          a little more about my skillset. The source code for this site and some
          of my other projects are available on my github.
        </Well>
    	</div>
    )
  }
}