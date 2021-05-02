import Prismic from 'prismic-javascript';
import React from 'react';
import { ContactPage } from '../components/contactPage/contactPage';
import { client } from '../prismic-configuration';

const Contact = ({ photos }) => <ContactPage photos={photos} />;

export async function getServerSideProps() {
  const photos = await client(process.env.PRISMIC).query(
    Prismic.Predicates.at('my.photos.photo_type', 'Press')
  );

  return {
    props: { photos }
  };
}

export default Contact;
