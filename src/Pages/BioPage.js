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
I am just a guy who likes to work with others to write software. I enjoy working in collaborative work environments to come up with great solutions to tough problems.

Languages: JavaScript, Python, C++, C 
Front End: HTML, CSS, jQuery, JSON, AJAX 
Frameworks & Environments: React, Node.js, Django 
Other: Git, SVN, CVS, Linux, Windows, Sublime

I am a quick learner and enjoy adding new tools to my skill set. I enjoy trying new things and like to see how both software and software development are improving and evolving every day.

If you think I would be a good fit on your team or would like to collaborate on a project, feel free to get in touch. 

TomRobPrince@gmail.com
Code: github.com/ikantspelgud
        </Well>
    	</div>
    )
  }
}