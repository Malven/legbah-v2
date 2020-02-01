import React, { useState } from 'react';
import { useAppState } from '../contexts/app/useAppState';
import { AdminPhotos } from './admin-photos';
import { AdminPosts } from './admin-posts';
import { AdminTours } from './admin-tours';
import { AdminContacts } from './admin-contacts';

const sections = {
  posts: 'posts',
  photos: 'photos',
  tours: 'tours',
  contacts: 'contacts'
};

export const Admin = () => {
  const { user } = useAppState();
  const [activeSection, setActiveSection] = useState(sections.posts);

  return user.authenticated ? (
    <div>
      <div className="flex flex-col justify-around md:flex-row mb-4">
        <button
          className={`cursor-pointer border hover:border-legbah-gold hover:text-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded ${
            activeSection === sections.posts ? 'bg-legbah-gold' : ''
          }`}
          onClick={() => setActiveSection(sections.posts)}
        >
          News
        </button>
        <button
          className={`cursor-pointer border hover:border-legbah-gold hover:text-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded ${
            activeSection === sections.photos ? 'bg-legbah-gold' : ''
          }`}
          onClick={() => setActiveSection(sections.photos)}
        >
          Photos
        </button>
        <button
          className={`cursor-pointer border hover:border-legbah-gold hover:text-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded ${
            activeSection === sections.tours ? 'bg-legbah-gold' : ''
          }`}
          onClick={() => setActiveSection(sections.tours)}
        >
          Tours
        </button>
        <button
          className={`cursor-pointer border hover:border-legbah-gold hover:text-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded ${
            activeSection === sections.contacts ? 'bg-legbah-gold' : ''
          }`}
          onClick={() => setActiveSection(sections.contacts)}
        >
          Contacts
        </button>
      </div>
      <div>
        {activeSection === sections.posts && <AdminPosts />}
        {activeSection === sections.photos && <AdminPhotos />}
        {activeSection === sections.tours && <AdminTours />}
        {activeSection === sections.contacts && <AdminContacts />}
      </div>
    </div>
  ) : (
    <div>logged out</div>
  );
};
