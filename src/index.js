import React from 'react';
import ReactDOM from 'react-dom';
import legbah from './legbah.jpeg';

import './styles.css';
import FacebookIcon from './icons/facebook';
import YouTubeIcon from './icons/youtube';
import SpotifyIcon from './icons/spotify';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">News</div>
      <div className="nav-links">Releases</div>
      <div className="nav-links">Visuals</div>
      <div className="nav-links">Merch</div>
      <div className="nav-links">Contact</div>
    </div>
  );
};

const Main = () => (
  <div className="main-container">
    <div className="main-container__item">
      <h2>17.9.2019</h2>
    </div>
    <div className="main-container__item">
      <img
        className="main-container__item-img"
        src={legbah}
        alt="album cover of limited edition"
      />
    </div>
    <div className="main-container__item">
      <p>Brambled 12" Vinyl in gatefold sleeve</p>
      <p>Limited edition of 100 copies</p>
      <p>Headnumbered and signed</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="container">
      <div className="header"> </div>
      <div className="social">
        <div className="socials">
          <SpotifyIcon size={48} className="social-icon" />
          <YouTubeIcon size={48} className="social-icon" />
          <FacebookIcon size={48} className="social-icon" />
        </div>
      </div>
      <div className="navs">
        <Navbar />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
