import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import BioPage from './Pages/BioPage'
import MainPage from './Pages/MainPage'
import ContactPage from './Pages/ContactPage'
import ResumePage from './Pages/ResumePage'
import ProjectsPage from './Pages/ProjectsPage'







class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="app-bg"/>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/Bio' component={BioPage}/>
          <Route exact path='/Contact' component={ContactPage}/>
          <Route exact path='/Resume' component={ResumePage}/>
          <Route exact path='/Projects' component={ProjectsPage}/>

        </Switch>
      </div>
    );
  }
}

export default App;
