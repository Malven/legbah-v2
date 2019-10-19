import React from 'react';
import Link from 'next/link';

export const EnterSite = () => (
  <div className="enter-container">
    <h1>
      <Link href="/news">
        <a href="/news">Enter site</a>
      </Link>
    </h1>
    <h2>
      <Link href="/news">
        <a href="/news">www.legbah.com</a>
      </Link>
    </h2>
    <Link href="/news">
      <a href="/news">
        <img src="/static/enter.png" alt="enter site" />
      </a>
    </Link>
  </div>
);
