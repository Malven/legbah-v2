import Prismic from 'prismic-javascript';
import React from 'react';
import { GalleryLoader } from '../../components/visuals/galleryLoader';
import { client } from '../../prismic-configuration';

const Artwork = ({ photos }) => {
  return <GalleryLoader label="Artwork" photos={photos} />;
};

export async function getStaticProps() {
  const photos = await client(process.env.PRISMIC).query(
    Prismic.Predicates.at('my.photos.photo_type', 'Artwork')
  );

  return {
    props: { photos }
  };
}

export default Artwork;
