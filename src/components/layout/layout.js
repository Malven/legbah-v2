import React from 'react';
import { Navbar } from '../nav/navbar';
import BandcampIcon from '../../icons/bandcamp';
import SpotifyIcon from '../../icons/spotify';
import YouTubeIcon from '../../icons/youtube';
import FacebookIcon from '../../icons/facebook';
import useMedia from 'use-media';

export const Layout = ({ children }) => {
  const isWide = useMedia({ minWidth: 1450 });

  return (
    <div className="container">
      <div className="legbah-grid-container">
        <div
          className={`legbah-header ${!isWide ? 'header-logo__center' : ''}`}
        >
          {isWide ? (
            <img
              style={{ height: '250px' }}
              src="/static/sun.png"
              alt="sun of Legbah"
            />
          ) : null}

          <img
            style={{
              height: '250px',
              width: '500px'
            }}
            src="/static/legbah-inverted.png"
            alt="logotype of Legbah"
          />

          {isWide ? (
            <img
              style={{ height: '250px' }}
              src="/static/sun.png"
              alt="sun of Legbah"
            />
          ) : null}
        </div>
        <div className="legbah-navbar">
          <Navbar />
        </div>
        <div className="legbah-main">{children}</div>
        <div className="legbah-social">
          <div className="socials">
            <a
              href="https://legbahofficial.bandcamp.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BandcampIcon size={48} className="social-icon" />
            </a>
            <a
              href="https://open.spotify.com/artist/2FFMu56Q0lpQceBNMtlpRk"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SpotifyIcon size={48} className="social-icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCtWBq19ICCRieDbF2yyiPXw"
              target="_blank"
              rel="noreferrer noopener"
            >
              <YouTubeIcon size={48} className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/Legbah/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FacebookIcon size={48} className="social-icon" />
            </a>
          </div>
        </div>
        <div className="legbah-tour-dates">
          <div style={{ height: '400px' }}></div>
        </div>
      </div>
    </div>
  );
};
