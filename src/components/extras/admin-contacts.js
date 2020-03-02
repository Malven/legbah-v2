import React, { useEffect } from 'react';
import { useAppState } from '../contexts/app/useAppState';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import { format } from 'date-fns';
import draftToHtml from 'draftjs-to-html';

export const AdminContacts = () => {
  const {
    data: { contacts, loading }
  } = useAppState();
  const { getContacts, deleteContact } = useAppDispatch();

  useEffect(() => {
    if (contacts.length === 0) {
      getContacts();
    }
  }, [contacts.length, getContacts]);

  return (
    <div>
      {contacts.length > 0 && <h1>Contacts</h1>}
      {contacts &&
        contacts.map(contact => (
          <div
            key={contact.contactId}
            className="p-2 my-1 border rounded border-legbah-gold"
          >
            <p>
              From{' '}
              <span className="p-1 text-gray-500 bg-gray-900 border border-gray-500 rounded">
                {contact.email}
              </span>{' '}
              at{' '}
              <span className="text-legbah-gray">
                {format(new Date(contact.createdAt), 'dd.MM.yyyy HH:mm')}
              </span>
              .
            </p>
            <hr className="my-2" />
            <div
              dangerouslySetInnerHTML={{ __html: draftToHtml(contact.message) }}
            />

            <div className="flex justify-end">
              <button
                className={`border hover:border-legbah-gold hover:text-legbah-gold px-1 rounded ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => !loading && deleteContact(contact.contactId)}
              >
                Delete message
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
