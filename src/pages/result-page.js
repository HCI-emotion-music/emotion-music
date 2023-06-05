import React from 'react';
import '../resultPage.css';
import cdLogo from '../image/cd.png';
import playLogo from '../image/play.png';
import  { positiveList, negativeList } from "../api/spotify";

function App() {
  return (
    <div className="App">
      <div className="right-side">
        <a href='/#' className="HOME">HOME</a>
        <a href='/main' className="MAIN">MAIN</a>
      </div>
      <header className="App-header">
        <div className="head">YOUR MUSIC</div>
        <div class="parent">
          <img src={cdLogo} alt="cdImage"/>
          <img src={playLogo} alt="playImage" class="overlay-image"/>
        </div>
        <div className="RecommendText">
          <h6>TITLE : KITSCH</h6>
          <h6>RECOMMEND : DANCE</h6>
        </div>
      </header>
    </div>
  );
}

export default App;



