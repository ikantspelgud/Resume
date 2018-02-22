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
    	<div>
        <div className="header">

        <Grid>
          <Row>
              <Col xs={6}>
                <div className="temp-photo"/>
              </Col>
              <Col xs={6}>
                <ButtonToolbar>
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
                </ButtonToolbar>
              </Col>
          </Row>
        </Grid>    		  
            </div>

    	</div>
    )
  }
}

