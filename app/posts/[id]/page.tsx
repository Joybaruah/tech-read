import formateDate from "@/lib/formatData";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { id } }: Props) {
  const post = await getPostByName(`${id}.mdx`); //deduped!

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export const revalidate = 3600

export default async function Post({ params: { id } }: Props) {
  const post = await getPostByName(`${id}.mdx`); //deduped!

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = formateDate(meta.date);

  return (
    <div className="px-3">
      <h2 className="text-3xl mt-4 mb-0 ">{meta.title}</h2>
      <p className="text-sm mt-3">{pubDate}</p>
      <article className="my-6 prose prose-sm md:prose md:prose-xl prose-pre:text-base prose-p:text-base dark:prose-invert prose-a:no-underline prose-a:text-xl">
        {content}
      </article>
    </div>
  );
}
