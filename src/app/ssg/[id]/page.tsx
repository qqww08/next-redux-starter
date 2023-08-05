import { Metadata } from "next";

import { Posts } from "@/types/posts";
import { fetcher } from "@/utils/fetcher";
interface Props {
  params: { id: string };
}
export async function generateStaticParams() {
  const data = await fetcher<Posts[]>(`https://jsonplaceholder.typicode.com/posts`);

  // Generate two pages at build time and the rest (3-100) on-demand
  return data?.map((res) => ({ id: String(res.id) }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await fetcher<Posts>(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  return {
    title: data?.title,
    description: data?.body,
  };
}
export default async function Page({ params }: Props) {
  const data = await fetcher<Posts>(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  return (
    <div className="flex flex-col">
      <div className="">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">{data?.title}</h1>
        <p className="line-clamp-3 font-medium text-gray-500">{data?.body}</p>
      </div>
    </div>
  );
}