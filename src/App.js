// import logo from './logo.svg';
// import './DirName'
// import DirName from './DirName';
import FileSystem from './FileSystem';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

import React, { Component } from 'react';
import {
  BrowserRouter as Router,  //new version of React - new is BrowserRouter but we can call it Router
  Route
} from 'react-router-dom'
import './App.css';
///fontawesome stuff:
library.add(faFolder)

export default class App extends Component {
  state = {
    fileArr:[]
  }
  render() {
    
    return (
      <Router>
        <div>
            <Route exact path = "/" component = {FileSystem}/>

        </div>
      </Router>
    );
  }
}


