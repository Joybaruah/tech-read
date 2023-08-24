import React from "react";

import { Bricolage_Grotesque, Urbanist } from "next/font/google";;
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
  post: Meta
}

export default function Post({ post }: Props) {

  return (
    <Link className="p-1 cursor-pointer" href={`/posts/${post.id}`}>
      <h4 style={urbanist.style} className="text-xl hover:text-primary">
        {post.title}
      </h4>
      <p
        style={bricolage_Grotesque.style}
        className="py-2 text-gray-700 dark:text-gray-300"
        >
        {post.date}
      </p>

      <p className="text-sm hover:text-primary">Read more</p>
    </Link>
  );
}
