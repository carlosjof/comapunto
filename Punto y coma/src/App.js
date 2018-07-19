import React, { Component } from 'react';
import HeaderComponent from './Components/HeaderComponent'
import Post from './Components/PostComponent'
import downArrow from './Ico-img/downArrow.png'
import './css/App.css';

class App extends Component {
  render() {
    return <div className="App">
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
          <div className="buttonContainer">
            <div className="floatButton">
              <img src={downArrow} className="downbutton" alt="Down Button" />
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
