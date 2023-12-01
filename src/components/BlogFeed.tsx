import React, { FC } from "react";
import PostCardMd from "@/components/cards/PostCardMd";
import { Blog } from "contentlayer/generated";

const BlogFeed: FC<{
  blogs: Array<Blog>;
  category: string; // This is a blog subdirectory
  limit?: number;
}> = ({ blogs, category, limit = 6 }) => {
  if (!category || blogs.length === 0) {
    return null;
  }
  return (
    <>
      {blogs
        .filter((post) => {
          return post.url.split("/").at(-2) === category;
        })
        .slice(0, limit)
        .map((post, idx) => (
          <PostCardMd key={idx} {...post} />
        ))}
    </>
  );
};

export default BlogFeed;
