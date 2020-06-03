import React from 'react';
import { client } from '../../prismic-configuration';
import Prismic from 'prismic-javascript';
import { GalleryLoader } from '../../components/visuals/galleryLoader';

const Artwork = ({ photos }) => {
  return <GalleryLoader label="Artwork" photos={photos} />;
};

export async function getStaticProps() {
  const photos = await client.query(
    Prismic.Predicates.at('my.photos.photo_type', 'Artwork')
  );

  return {
    props: { photos }
  };
}

export default Artwork;
