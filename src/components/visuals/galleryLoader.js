import React, { useEffect } from 'react';
import { Gallery } from './gallery';
import { useAppState } from '../contexts/app/useAppState';
import { useAppDispatch } from '../contexts/app/useAppDispatch';

export const GalleryLoader = ({ label, type }) => {
  const {
    data: { photos, groups }
  } = useAppState();
  const { getPhotos, getPhotoGroups } = useAppDispatch();

  useEffect(() => {
    const setup = async () => {
      if (!photos.length) {
        await getPhotoGroups();
        await getPhotos();
      }
    };

    setup();
  }, [getPhotoGroups, getPhotos, photos.length]);

  return (
    <div className="p-5">
      {label && <h1 className="text-center font-display">{label}</h1>}
      {groups &&
        groups.map(g => {
          const groupPhotos = photos.filter(
            x => x.group === g.name && x.type.toLowerCase() === type
          );
          const mapped = groupPhotos
            .filter(x => x.published)
            .map(photo => ({
              src: photo.imageUrl,
              width: Number.parseInt(photo.width),
              height: Number.parseInt(photo.height),
              title: photo.description
                ? photo.description
                : 'Missing description'
            }));

          return mapped.length ? (
            <div key={g.name} className="mb-2">
              <h2>{g.name}</h2>
              <Gallery photos={mapped} />
            </div>
          ) : null;
        })}
    </div>
  );
};
