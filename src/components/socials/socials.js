import React from 'react';
import BandcampIcon from '../../icons/bandcamp';
import SpotifyIcon from '../../icons/spotify';
import YouTubeIcon from '../../icons/youtube';
import FacebookIcon from '../../icons/facebook';

export const Socials = () => {
  return (
    <div className="flex flex-row md:flex-row justify-around lg:justify-end p-5">
      <a
        href="https://www.facebook.com/Legbah/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FacebookIcon size={48} className="social-icon lg:hidden" />
        <FacebookIcon size={24} className="social-icon hidden lg:block ml-1" />
      </a>
      <a
        href="https://legbahofficial.bandcamp.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BandcampIcon size={48} className="social-icon lg:hidden" />
        <BandcampIcon size={24} className="social-icon hidden lg:block ml-1" />
      </a>
      <a
        href="https://open.spotify.com/artist/2FFMu56Q0lpQceBNMtlpRk"
        target="_blank"
        rel="noreferrer noopener"
      >
        <SpotifyIcon size={48} className="social-icon lg:hidden" />
        <SpotifyIcon size={24} className="social-icon hidden lg:block ml-1" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCtWBq19ICCRieDbF2yyiPXw"
        target="_blank"
        rel="noreferrer noopener"
      >
        <YouTubeIcon size={48} className="social-icon lg:hidden" />
        <YouTubeIcon size={24} className="social-icon hidden lg:block ml-1" />
      </a>
    </div>
  );
};
