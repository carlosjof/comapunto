import React, { Component } from 'react';
import HeaderComponent from './Components/HeaderComponent'
import Post from './Components/PostComponent'
import LoginModal from "./Components/LogInComponent";
import SignUpModal from "./Components/SignUpComponent";
import './css/App.css';

class App extends Component {
  render() {
    return <div className="App">
      <LoginModal />
      <SignUpModal />
        <div className="banner">
          <div className="header">
            <HeaderComponent />
          </div>
          <div className="slogan-container">
            <div className="slogan-title">
              Comunidad para desarrolladores
            </div>
            <div className="slogan">
              Ven a aprender y a compartir tus conocimientos con otros
              desarrolladores
            </div>
          </div>

        </div>
        <div className="body">
        <h1>Articulos Recientes</h1>
          <Post/>
        </div>
      </div>;
  }
}

export default App;
