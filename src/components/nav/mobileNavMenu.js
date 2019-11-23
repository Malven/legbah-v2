import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const MobileNavMenu = () => {
  const router = useRouter();
  const routes = ['/visuals/photos', '/visuals/videos', '/visuals/artwork'];

  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const onNavigate = () => {
    setOpen(false);
    setSubMenuOpen(false);
  };

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
              <button onClick={onNavigate}>News</button>
            </Link>
          </div>
          <div
            className={`text-2xl font-display hover:text-legbah-gold px-1 ${
              router.pathname === '/releases' ? 'text-legbah-gold' : ''
            }`}
          >
            <Link href="/releases">
              <button onClick={onNavigate}>Releases</button>
            </Link>
          </div>
          <div
            className={`flex flex-col font-display hover:text-legbah-gold items-end px-1 text-2xl ${
              routes.includes(router.pathname) ? 'text-legbah-gold' : ''
            }`}
          >
            <button onClick={() => setSubMenuOpen(state => !state)}>
              Visuals
            </button>
            <div
              className={`${
                subMenuOpen
                  ? 'bg-black text-white w-full flex flex-col items-end'
                  : 'hidden'
              }`}
            >
              <Link href="/visuals/photos">
                <button
                  className={`${
                    router.pathname === '/visuals/photos'
                      ? 'text-legbah-gold'
                      : 'text-white'
                  }`}
                  onClick={onNavigate}
                >
                  Photos
                </button>
              </Link>
              <Link href="/visuals/videos">
                <button
                  className={`${
                    router.pathname === '/visuals/videos'
                      ? 'text-legbah-gold'
                      : 'text-white'
                  }`}
                  onClick={onNavigate}
                >
                  Videos
                </button>
              </Link>
              <Link href="/visuals/artwork">
                <button
                  className={`${
                    router.pathname === '/visuals/artwork'
                      ? 'text-legbah-gold'
                      : 'text-white'
                  }`}
                  onClick={onNavigate}
                >
                  Artwork
                </button>
              </Link>
            </div>
          </div>
          <div
            className={`text-2xl font-display hover:text-legbah-gold  px-1 ${
              router.pathname === '/webstore' ? 'text-legbah-gold' : ''
            }`}
          >
            <Link href="/releases">
              <button onClick={onNavigate}>Webstore</button>
            </Link>
          </div>
          <div
            className={`text-2xl font-display hover:text-legbah-gold px-1 ${
              router.pathname === '/contact' ? 'text-legbah-gold' : ''
            }`}
          >
            <Link href="/contact">
              <button onClick={onNavigate}>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
