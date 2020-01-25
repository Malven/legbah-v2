import React, { useEffect, useRef } from 'react';
import { useAppState } from '../contexts/app/useAppState';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import { useForm } from 'react-hook-form';
import RPH from 'react-photo-gallery';
import { SelectedImage } from './selectedPhoto';

export const AdminPhotos = () => {
  const {
    getPhotos,
    getPhotoGroups,
    postPhoto,
    addPhotoGroup
  } = useAppDispatch();
  const {
    data: { groups, photos, loading },
    ui: { errors: uiErrors }
  } = useAppState();
  const newGroupRef = useRef();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const setup = async () => {
      try {
        await getPhotoGroups();
        await getPhotos();
      } catch (error) {
        console.error(error);
      }
    };

    setup();
  }, [getPhotoGroups, getPhotos]);

  const onSubmit = async e => {
    if (!loading) {
      const image = e.photo[0];
      const img = new Image();

      img.onload = async () => {
        const formData = new FormData();
        formData.append('image', image, image.name);
        formData.append('group', e.group);
        formData.append('type', e.photoType);
        formData.append('width', img.width);
        formData.append('height', img.height);
        formData.append('description', e.photoDescription);
        await postPhoto(formData);
        reset();
      };
      img.src = URL.createObjectURL(image);
    }
  };

  const handleAddGroup = async e => {
    e.preventDefault();
    if (
      newGroupRef.current &&
      newGroupRef.current.value.trim() !== '' &&
      !loading
    ) {
      await addPhotoGroup({ name: newGroupRef.current.value });
    }
  };

  const imageRenderer = ({ left, top, key, photo }) => (
    <SelectedImage
      selected={false}
      key={key}
      margin={'2px'}
      photo={photo}
      left={left}
      top={top}
    />
  );

  return (
    <div>
      {groups.map(g => {
        const groupPhotos = photos.filter(x => x.group === g.name);

        const mapped = groupPhotos.map(photo => ({
          src: photo.imageUrl,
          photoId: photo.photoId,
          type: photo.type,
          width: Number.parseInt(photo.width),
          height: Number.parseInt(photo.height),
          title: photo.description ? photo.description : 'Missing description'
        }));
        return groupPhotos.length ? (
          <div key={g.name}>
            <h2>Group: {g.name}</h2>
            <RPH
              photos={mapped}
              targetRowHeight={300}
              renderImage={imageRenderer}
            />
            <hr />
          </div>
        ) : null;
      })}
      <hr />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label className="text-white" htmlFor="photo">
          Upload photo
        </label>
        <input
          id="photo"
          type="file"
          className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
          name="photo"
          ref={register}
        />

        <label className="text-white" htmlFor="newGroup">
          Add photo group
        </label>
        <div className="flex mb-1">
          <input
            ref={newGroupRef}
            id="newGroup"
            name="newGroup"
            className="appearance-none bg-gray-200 border border-transparent focus:bg-white focus:shadow-focus hover:bg-white hover:border-gray-300 leading-tight mb-2 mr-1 mt-1 outline-none rounded text-gray-700"
          />
          <button
            className={`cursor-pointer border hover:border-legbah-gold hover:text-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded mb-2 mt-1 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleAddGroup}
          >
            Add
          </button>
        </div>
        {uiErrors.group && (
          <span className="text-red-500 mb-2">{uiErrors.group}</span>
        )}

        <label className="text-white" htmlFor="group">
          Group
        </label>
        <select
          name="group"
          id="group"
          ref={register}
          className="h-12 mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
        >
          {groups.map(g => (
            <option key={g.name} value={g.name}>
              {g.name}
            </option>
          ))}
        </select>

        <label className="text-white" htmlFor="photoType">
          Type of photo
        </label>
        <select
          name="photoType"
          id="photoType"
          ref={register}
          className="h-12 mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
        >
          <option value="Artwork">Artwork</option>
          <option value="Photos">Photos</option>
          <option value="Press">Press</option>
        </select>

        <label className="text-white" htmlFor="photoDescription">
          Description
        </label>
        <input
          name="photoDescription"
          id="photoDescription"
          ref={register}
          className="h-12 mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
        />
        <button
          className={`cursor-pointer border hover:border-legbah-gold hover:text-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded mb-2 mt-1 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          type="submit"
        >
          Upload photo
        </button>
      </form>
    </div>
  );
};
