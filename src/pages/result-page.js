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
          <div className='putImage'>
            <img id="cd" src={cdLogo} alt="cdImage"/>
            <a href='/playMusic'>
              <img id="play" src={playLogo} alt="playImage" class="overlay-image"/>
            </a>
          </div>
        </div>
        <div className="RecommendText">
          <h6>TITLE : Dance Monkey</h6>
          <h6>RECOMMEND : DANCE</h6>
        </div>
      </header>
    </div>
  );
}

export default App;



