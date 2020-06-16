import React from 'react';
import { Song } from './song/song';
import Link from 'next/link';

export const ReleasesList = () => {
  return (
    <div className="flex flex-col p-5">
      <h1 className="self-center font-display">Releases</h1>
      <div className="flex flex-col justify-center mt-12 md:flex-row">
        <img
          className="self-center object-contain w-1/4 mr-4"
          src="/static/legbah.jpeg"
          alt="album cover of limited edition"
        />
        <div className="flex flex-col items-center self-center md:items-start">
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
          <h2 className="mt-4 md:ml-1">
            <span>Order </span>
            <Link href="/store">
              <a className="text-red-600 hover:text-white" href="/store">
                Gatefold LP
              </a>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

/**
 * Göra under Releases: Order from our store bara skriva Order: Gatefold LP och göra Gatefold LP texten röd samt flytta ner den lite från det andra och fram & länka.
 *
 */
