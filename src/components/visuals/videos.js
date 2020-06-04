import React from 'react';
import ReactPlayer from 'react-player';

export const VideoGallery = ({ videos }) => {
  return (
    <div className="p-5">
      <h1 className="text-center font-display">Videos</h1>
      <div className="flex flex-col flex-wrap items-center justify-center md:flex-row">
        {videos?.map(video => (
          <ReactPlayer
            className="m-2 border rounded hover:border-legbah-gold"
            key={video}
            url={`https://www.youtube.com/watch?v=${video}`}
            width="300px"
          />
        ))}
      </div>
    </div>
  );
};
