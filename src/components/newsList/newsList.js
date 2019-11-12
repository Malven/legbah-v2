import React from 'react';

export const NewsList = () => (
  <div className="flex flex-col p-5">
    <h1 className="self-center font-display">News</h1>
    <div className="flex flex-col">
      <h2 className="self-center">17.9.2019</h2>
      <img
        className="self-center object-contain"
        src="/static/legbah.jpeg"
        alt="album cover of limited edition"
      />
      <div className="self-center">
        <p className="text-lg">
          Brambled 12" Vinyl in gatefold sleeadwdadawdawdawdawdawdawdawdve
        </p>
        <p className="text-lg">Limited edition of 100 copies</p>
        <p className="text-lg">Headnumbered and signed</p>
      </div>
    </div>
  </div>
);
