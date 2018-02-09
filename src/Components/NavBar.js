import {Button, Well, Col, Grid, Row, 
  ButtonToolbar, ButtonGroup, MenuItem,
  DropdownButton, Dropdown, Glyphicon} from 'react-bootstrap';
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';


export default (props) => {
  return (
    <Temp/>
    );
}

class Temp extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
  <Dropdown id="dropdown-custom-1">
    <Dropdown.Toggle>
      <Glyphicon glyph="star" />
      Pow! Zoom!
    </Dropdown.Toggle>
    <Dropdown.Menu className="super-colors">
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>
        Active Item
      </MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </Dropdown.Menu>
  </Dropdown>  

  )}
}

class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
    	<div>
        <Grid>
          <Row>
            <Col xs={0} md={1}/>
            <Col xs={12} md={10}>
              <ButtonToolbar>
                <DropdownButton
                  bsSize="large"
                  title="Large button"
                  id="dropdown-size-large"
                >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3">Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
              </ButtonToolbar>

              <ButtonToolbar>
                  <ButtonGroup>
                    <Button bsStyle="link" bsSize="large" >
                        Previous Positions
                    </Button>
                    

                    <ButtonToolbar>
                      <DropdownButton
                        title="Projects"
                      >
                        <MenuItem eventKey="1">"Action"</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3" active>
                          Active Item
                        </MenuItem>
                      </DropdownButton>
                      </ButtonToolbar>
                  </ButtonGroup>
              </ButtonToolbar>
            </Col>
            <Col xs={0} md={1}/>
          </Row>
        </Grid>    		  
    	</div>
    )
  }
}

