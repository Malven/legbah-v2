import React, { useState } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';

export const EnterSite = () => {
  const [showCookieDialog, setShowCookieDialog] = useState(null);

  useEffect(() => {
    if (showCookieDialog === false) {
      localStorage.setItem('cookieConsent', 'yes');
    }
    if (!localStorage.getItem('cookieConsent')) {
      setShowCookieDialog(true);
    }
  }, [showCookieDialog]);

  const onClose = () => {
    setShowCookieDialog(false);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-display hover:text-legbah-gold">
          <Link href="/news">
            <a href="/news">Enter site</a>
          </Link>
        </h1>
        <h2 className="text-2xl hover:text-legbah-gold">
          <Link href="/news">
            <a href="/news">www.legbah.com</a>
          </Link>
        </h2>
        <Link href="/news">
          <a href="/news">
            <img
              className="w-10/12 m-auto border border-black hover:border-legbah-gold"
              src="/static/entry.jpg"
              alt="enter site"
            />
          </a>
        </Link>
      </div>
      <script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/94fc99db-7989-4deb-a786-3414ef131190/cd.js"
        type="text/javascript"
        async
      ></script>
      {showCookieDialog && (
        <div className="flex w-1/2 mx-auto">
          <div className="inline-block p-1 mx-auto text-white border rounded bg-legbah-gold border-legbah-gray">
            This site uses cookies. By entering the site you accept the use of
            all cookies.
            <div>
              <button className="text-legbah-gray" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
