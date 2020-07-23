import React from 'react';
import Link from 'next/link';

export const EnterSite = () => (
  <div className="flex flex-col items-center">
    <h1 className="text-4xl uppercase font-body hover:text-legbah-gold">
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
          style={{ maxHeight: 'calc(100vh - 90px)' }}
          className="w-10/12 m-auto border border-black hover:border-legbah-gold"
          src="/static/entry.jpg"
          alt="enter site"
        />
      </a>
    </Link>
  </div>
);
