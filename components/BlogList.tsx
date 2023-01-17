import urlFor from "lib/urlFor";
import Image from "next/image";
import React from "react";
import post from "schemas/post";
import { Post } from "typings";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />

      <div>
        {/* Posts */}
        {posts?.map((post) => (
          <div key={post._id} className="flex flex-col cursor-pointer group">
            <div className="relative w-full transition-transform duration-200 ease-out h-80 drop-shadow-xl group-hover:scale-105 ">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
