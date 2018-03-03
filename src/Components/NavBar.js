import {Button, Well, Col, Grid, Row, 
  ButtonToolbar, ButtonGroup, MenuItem,
  DropdownButton, Dropdown, Glyphicon} from 'react-bootstrap';
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';


export default (props) => {
  return (
    <NavBar/>
    );
}

class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
    	<div className="header">
        <Grid className="v-fill">
          <Row className="v-fill">
              <Col xs={0} md={1}/>
              <Col xs={12} md={3}>
                <div className="temp-photo v-fill"/>
              </Col>
              <Col xs={12} md={8}>
                <ButtonGroup>
                  <Button bsStyle="link" bsSize="large" className="top-link">
                      Bio
                  </Button>
                  <Button bsStyle="link" bsSize="large" className="top-link">
                      Past Jobs
                  </Button>
                  <Button bsStyle="link" bsSize="large" className="top-link">
                      Resume
                  </Button>
                  <Button bsStyle="link" bsSize="large" className="top-link">
                      Contact
                  </Button>
                </ButtonGroup>
              </Col>
          </Row>
        </Grid>    		  
    	</div>
    )
  }
}

