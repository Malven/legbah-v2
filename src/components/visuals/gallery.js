import React, { useCallback, useState } from 'react';
import RPH from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

export const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
      <div>
        <RPH photos={photos} onClick={openLightbox} targetRowHeight={300} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                  alt: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
};
