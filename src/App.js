import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import BioPage from './Pages/BioPage'
import MainPage from './Pages/MainPage'
import ContactPage from './Pages/ContactPage'




class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="app-bg"/>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/Bio' component={BioPage}/>
          <Route exact path='/Contact' component={ContactPage}/>

        </Switch>
      </div>
    );
  }
}

export default App;
