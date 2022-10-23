import Link from 'next/link';
import React from 'react';

export const EnterSite = () => (
  <div className="flex flex-col items-center">
    <Link href="/news">
      <a href="/news">
        <img
          style={{ maxHeight: 'calc(100vh - 90px)' }}
          className="object-contain w-10/12 m-auto border border-black hover:border-legbah-gold"
          src="/static/entry.jpg"
          alt="enter site"
        />
      </a>
    </Link>
    <h1 className="text-4xl lowercase font-body entry hover:text-legbah-gold -mt-20">
      <Link href="/news">
        <a href="/news">Enter site</a>
      </Link>
    </h1>
  </div>
);
