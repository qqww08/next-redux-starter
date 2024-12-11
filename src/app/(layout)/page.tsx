'use client';

import type { NextPage } from 'next';

import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <main className="p-50 flex flex-auto flex-col">
      <nav className="gap-30 flex  items-center">
        <Link className="ripple px-20 py-5" href="/test">
          Dynamic page 이동
        </Link>
      </nav>
    </main>
  );
};
export default Home;
