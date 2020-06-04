import React from 'react';
import BandcampIcon from '../../icons/bandcamp';
import SpotifyIcon from '../../icons/spotify';
import YouTubeIcon from '../../icons/youtube';
import FacebookIcon from '../../icons/facebook';

export const Socials = () => {
  return (
    <div className="flex flex-row justify-around p-5 md:flex-row ">
      <a
        href="https://www.facebook.com/Legbah/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Facebook"
      >
        <FacebookIcon size={48} className="social-icon " />
      </a>
      <a
        href="https://legbahofficial.bandcamp.com/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Bandcamp"
      >
        <BandcampIcon size={48} className="social-icon " />
      </a>
      <a
        href="https://open.spotify.com/artist/2FFMu56Q0lpQceBNMtlpRk"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Spotify"
      >
        <SpotifyIcon size={48} className="social-icon " />
      </a>
      <a
        href="https://www.youtube.com/channel/UCtWBq19ICCRieDbF2yyiPXw"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Youtube"
      >
        <YouTubeIcon size={48} className="social-icon " />
      </a>
    </div>
  );
};
