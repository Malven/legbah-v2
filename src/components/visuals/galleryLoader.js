import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Gallery } from './gallery';

export const GalleryLoader = ({ label, photos }) => {
  return (
    <div className="p-5">
      {label && <h1 className="text-center font-display">{label}</h1>}
      {photos?.results.map(photoResult => {
        const mapped = photoResult.data.photo_group.map(pg => {
          return {
            src: pg.photo.url,
            width: pg.photo.dimensions.width,
            height: pg.photo.dimensions.height,
            title: pg.photo.alt ? pg.photo.alt : 'Missing description'
          };
        });

        return mapped.length ? (
          <div key={photoResult.uid} className="mb-2">
            <RichText render={photoResult.data.title} />
            <Gallery photos={mapped} />
          </div>
        ) : null;
      })}
    </div>
  );
};
