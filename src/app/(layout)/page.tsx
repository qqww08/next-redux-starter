'use client';

import type { NextPage } from 'next';

import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <main className="p-50 flex flex-auto flex-col">
      <nav className="gap-30 flex  items-center">
        <Link className="ripple px-20 py-5" href="/ssr">
          SSR PAGE
        </Link>
        <Link className="ripple px-20 py-5" href="/ssg">
          SSG PAGE
        </Link>
      </nav>
    </main>
  );
};
export default Home;
