import React from 'react';
import { Song } from './song/song';

export const ReleasesList = () => {
  return (
    <div className="flex flex-col p-5">
      <h1 className="self-center font-display">Releases</h1>
      <div className="flex flex-col md:flex-row">
        <img
          className="md:w-1/2 self-center object-contain md:mr-1"
          src="/static/legbah.jpeg"
          alt="album cover of limited edition"
        />
        <div className="flex flex-col items-center md:items-start md:w-1/2 self-center w-full">
          <h2>Legbah (2017)</h2>
          <ul className="text-legbah-gold">
            <li>
              <Song
                spotifyURL="https://open.spotify.com/embed/track/3WBTkHpnhvh41P0b9eD0z1"
                songTitle="01. Sorg"
              />
            </li>
            <li>
              <Song
                spotifyURL="https://open.spotify.com/embed/track/6X5gbbAGlgDSNvpqkZFOzP"
                songTitle="02. Ignited by One"
              />
            </li>
            <li>
              <Song
                spotifyURL="https://open.spotify.com/embed/track/6D2oeQ31sfkV8kJ30uWKjX"
                songTitle="03. Words Will Not Return"
              />
            </li>
            <li>
              <Song
                spotifyURL="https://open.spotify.com/embed/track/5AeG5ReuHUDOmRsT4mjvUi"
                songTitle="04. Vision And The Void"
              />
            </li>
            <li>
              <Song
                spotifyURL="https://open.spotify.com/embed/track/2AXXnh3nazFuw9ZUUNB4BN"
                songTitle="05. Höstvisa"
              />
            </li>
            <li>
              <Song
                spotifyURL="https://open.spotify.com/embed/track/0snzuXULXbeRPkRtMkChfn"
                songTitle="06. The Destroyer"
              />
            </li>
            <li>
              <Song
                spotifyURL="https://open.spotify.com/embed/track/2GN47E69jhzwzHBnZ0zYCv"
                songTitle="07. Towards The Burning Path"
              />
            </li>
          </ul>
          <h2>
            Order:{' '}
            <a
              className="cursor-pointer hover:text-legbah-gold"
              href="https://www.google.com"
            >
              Gatefold LP
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};
