import React from 'react';
import { Song } from './song/song';
import Link from 'next/link';

export const ReleasesList = () => {
  return (
    <div className="flex flex-col p-5">
      <h1 className="self-center font-display">Releases</h1>
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center">
        <img
          className="self-center object-contain md:mr-4 md:w-1/2"
          src="/static/legbah.jpeg"
          alt="album cover of limited edition"
        />
        <div className="flex flex-col md:items-start">
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
            <span>Order from our</span>{' '}
            <Link href="/store">
              <a className="text-legbah-gold hover:text-white" href="/store">
                store
              </a>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};
