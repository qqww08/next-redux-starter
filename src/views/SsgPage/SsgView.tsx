'use client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import { getPosts } from '@/api/getPosts';
import { Posts } from '@/types/posts';

const SsgView = () => {
  const { data } = useQuery<Posts[]>(['ssg-posts'], () => getPosts());

  return (
    <main className="flex flex-col gap-50">
      <h1 className="text-20 font-bold text-emerald-700">SSG PAGE</h1>

      <ul className="flex flex-col gap-30">
        {data?.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/ssg/${item.id}`}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default SsgView;
