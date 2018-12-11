import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CKEditor from './ckeditor';
class App extends Component {
  render() {
    return (
      <div className="App">
       <CKEditor/>
      </div>
    );
  }
}
export default App;
