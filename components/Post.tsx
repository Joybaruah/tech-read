import React from "react";

import { Bricolage_Grotesque, Urbanist } from "next/font/google";
import Link from "next/link";

const urbanist = Urbanist({
  weight: "500",
  subsets: ["latin"],
});

const bricolage_Grotesque = Bricolage_Grotesque({
  weight: "400",
  subsets: ["latin"],
});

type Props = {
  post: Meta;
};

const formatTags = (tags: string[]) => {

  const formattedTags = tags.join(", ");

  return formattedTags;
}

export default function Post({ post }: Props) {
  return (
    <Link className="p-1 cursor-pointer" href={`/posts/${post.id}`}>
      <p
        style={bricolage_Grotesque.style}
        className="py-2 text-sm text-gray-700 uppercase dark:text-gray-300"
        >
        {post.date} / {formatTags(post.tags)}
      </p>
      <h4 style={urbanist.style} className="text-xl hover:text-primary">
        {post.title}
      </h4>
      <p
        style={urbanist.style}
        className="text-base py-1 dark:text-gray-400 text-gray-600"
      >
        {post.description}
      </p>
    </Link>
  );
}
