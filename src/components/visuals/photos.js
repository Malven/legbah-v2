import React from 'react';
import { Gallery } from './gallery/gallery';

export const PhotoGallery = () => {
  const photos = [
    {
      src: '/static/legbah-inverted.png',
      width: 4,
      height: 2,
      title: 'Band logo with white text'
    },
    {
      src: '/static/band.png',
      width: 5,
      height: 1,
      title: 'Band members'
    },
    {
      src: '/static/legbah.jpeg',
      width: 3,
      height: 1,
      title: 'Band logo in gold text'
    }
  ];

  return (
    <div className="flex flex-col items-center  p-5">
      <h1 className="text-center font-display pt-5">Photos</h1>
      <Gallery photos={photos} />
    </div>
  );
};
