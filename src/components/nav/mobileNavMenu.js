import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const MobileNavMenu = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="fixed w-full">
        <div
          className={`flex justify-between text-2xl cursor-pointer text-white bg-black border border-white p-1 `}
        >
          <Link href="/news">
            <span className="font-body hover:text-legbah-gold">
              LEGBAH: Official site
            </span>
          </Link>
          <button
            className="outline-none font-display border-solid border border-white hover:border-legbah-gold px-2 text-white bg-black hover:text-legbah-gold"
            onClick={() => setOpen(o => !o)}
          >
            Menu
          </button>
        </div>

        <div
          className={`${
            open
              ? 'border-b border-l border-r border-white block bg-black text-white w-full p-5 flex flex-col items-end'
              : 'hidden'
          } `}
        >
          <div
            className={`text-2xl font-display hover:text-legbah-gold px-1 ${
              router.pathname === '/news' ? 'text-legbah-gold' : ''
            }`}
          >
            <Link href="/news">
              <button onClick={() => setOpen(false)}>News</button>
            </Link>
          </div>
          <div
            className={`text-2xl font-display hover:text-legbah-gold px-1 ${
              router.pathname === '/releases' ? 'text-legbah-gold' : ''
            }`}
          >
            <Link href="/releases">
              <button onClick={() => setOpen(false)}>Releases</button>
            </Link>
          </div>
          <div
            className={`text-2xl font-display hover:text-legbah-gold px-1 ${
              router.pathname === '/visuals' ? 'text-legbah-gold' : ''
            }`}
          >
            <Link href="/releases">
              <button onClick={() => setOpen(false)}>Visuals</button>
            </Link>
          </div>
          <div
            className={`text-2xl font-display hover:text-legbah-gold  px-1 ${
              router.pathname === '/webstore' ? 'text-legbah-gold' : ''
            }`}
          >
            <Link href="/releases">
              <button onClick={() => setOpen(false)}>Webstore</button>
            </Link>
          </div>
          <div
            className={`text-2xl font-display hover:text-legbah-gold px-1 ${
              router.pathname === '/contact' ? 'text-legbah-gold' : ''
            }`}
          >
            <Link href="/contact">
              <button onClick={() => setOpen(false)}>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
