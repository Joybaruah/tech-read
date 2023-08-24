import Post from "@/components/Post";
import { getPostsMeta } from "@/lib/posts";
import { Bricolage_Grotesque } from "next/font/google";
import React from "react";

const bricolage_Grotesque = Bricolage_Grotesque({
  weight: "400",
  subsets: ["latin"],
});

export const revalidate = 3600

export default async function Home() {
  const posts = await getPostsMeta();

  return (
    <div className="p-2 h-[90vh]">
      <h5
        className="text-secondary uppercase py-4 border-b"
        style={bricolage_Grotesque.style}
      >
        Recently Published
      </h5>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 space-y-2 md:space-y-0 md:space-x-4">
        {posts?.map((post) => {
          return (
              <Post key={post.id} post={post} />
          );
        })}
      </div>
    </div>
  );
}
