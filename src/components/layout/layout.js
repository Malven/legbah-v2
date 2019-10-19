import React from 'react';
import { Navbar } from '../nav/navbar';
import BandcampIcon from '../../icons/bandcamp';
import SpotifyIcon from '../../icons/spotify';
import YouTubeIcon from '../../icons/youtube';
import FacebookIcon from '../../icons/facebook';

export const Layout = ({ children }) => (
  <div className="container">
    <div className="legbah-grid-container">
      <div className="legbah-header">
        <img
          style={{ height: '300px' }}
          src="/static/sun.png"
          alt="sun of Legbah"
        />
        <img
          style={{ height: '300px' }}
          src="/static/legbah-inverted.png"
          alt="logotype of Legbah"
        />
        <img
          style={{ height: '300px' }}
          src="/static/sun.png"
          alt="sun of Legbah"
        />
      </div>
      <div className="legbah-navbar">
        <Navbar />
      </div>
      <div className="legbah-main">{children}</div>
      <div className="legbah-social">
        <div className="socials">
          <BandcampIcon size={48} className="social-icon" />
          <SpotifyIcon size={48} className="social-icon" />
          <YouTubeIcon size={48} className="social-icon" />
          <FacebookIcon size={48} className="social-icon" />
        </div>
      </div>
      <div className="legbah-tour-dates">
        <div style={{ height: '400px' }}></div>
      </div>
    </div>
  </div>
);
