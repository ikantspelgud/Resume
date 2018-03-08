import {Button, Well, Col, Grid, Row, 
  ButtonToolbar, ButtonGroup, MenuItem,
  DropdownButton, Dropdown, Glyphicon} from 'react-bootstrap';
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { Link } from 'react-router-dom'



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
                <img src="profilePic.jpg" alt="Headshot" height="200" width="200" className="temp-photo"/>
              </Col>
              <Col xs={12} md={8}>
                <ButtonGroup>
                  <Link to="/">
                    <Button bsStyle="link" bsSize="large" className="top-link">
                      Home
                    </Button>
                  </Link>
                  <Link to="/Bio">
                    <Button bsStyle="link" bsSize="large" className="top-link">
                      Bio
                    </Button>
                  </Link>
                  <Link to="/Jobs">
                    <Button bsStyle="link" bsSize="large" className="top-link">
                        Past Jobs
                    </Button>
                  </Link>
                  <Link to="/Resume">
                    <Button bsStyle="link" bsSize="large" className="top-link">
                        Resume
                    </Button>
                  </Link>
                  <Link to="/Contact">
                    <Button bsStyle="link" bsSize="large" className="top-link">
                        Contact
                    </Button>
                  </Link>
                </ButtonGroup>
              </Col>
          </Row>
        </Grid>
    	</div>
    )
  }
}

