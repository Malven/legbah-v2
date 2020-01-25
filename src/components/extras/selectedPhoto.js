import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import { useAppState } from '../contexts/app/useAppState';

const imgStyle = {
  transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s'
};
const selectedImgStyle = {
  transform: 'translateZ(0px) scale3d(0.9, 0.9, 1)',
  transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s'
};
const cont = {
  backgroundColor: '#eee',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative'
};

export const SelectedImage = ({
  photo: { photoId, ...restPhoto },
  margin,
  direction,
  top,
  left,
  selected
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  //calculate x,y scale
  const sx = (100 - (30 / restPhoto.width) * 100) / 100;
  const sy = (100 - (30 / restPhoto.height) * 100) / 100;
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;
  const { deletePhoto } = useAppDispatch();
  const {
    data: { loading }
  } = useAppState();

  if (direction === 'column') {
    cont.position = 'absolute';
    cont.left = left;
    cont.top = top;
  }

  const onDeletePhoto = async () => {
    if (!loading) {
      await deletePhoto(photoId);
    }
  };

  const handleOnClick = () => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <div>
      <div
        style={{
          margin,
          height: restPhoto.height,
          width: restPhoto.width,
          ...cont
        }}
        className={!isSelected ? 'not-selected' : ''}
      >
        <div
          style={
            isSelected
              ? { left: '4px', top: '4px', position: 'absolute', zIndex: '1' }
              : { display: 'none' }
          }
        >
          <button
            className={`bg-black border cursor-pointer hover:border-legbah-gold hover:text-legbah-gold p-3 rounded text-2xl ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={onDeletePhoto}
          >
            Delete photo
          </button>
        </div>
        <img
          alt={restPhoto.title}
          style={
            isSelected ? { ...imgStyle, ...selectedImgStyle } : { ...imgStyle }
          }
          {...restPhoto}
          onClick={handleOnClick}
        />
        <style>{`.not-selected:hover{outline:2px solid #715526}`}</style>
      </div>
      <div className="bg-yellow-900 border border-yellow-500 m-1 px-1 text-yellow-500">
        <span>{restPhoto.type}</span>
      </div>
    </div>
  );
};
