import React from 'react';
import { Navbar } from '../components/nav/navbar';
import { Main } from '../components/main/main';
import SpotifyIcon from '../icons/spotify';
import YouTubeIcon from '../icons/youtube';
import FacebookIcon from '../icons/facebook';

import './styles.css';

const Index = () => {
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
};

export default Index;
