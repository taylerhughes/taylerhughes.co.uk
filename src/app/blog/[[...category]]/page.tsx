import { compareDesc } from "date-fns";
import React from "react";
import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { getChildContent } from "@/utils/getContent";
import Category from "@/components/Category";
import CategoryCard from "@/components/cards/CategoryCard";

import {
  findPostByPath,
  getPagePath,
  getChildCategories,
} from "@/utils/categoryUtils";
import PostCardMd from "@/components/cards/PostCardMd";
import BlogTemplate from "./BlogTemplate";

type BlogStaticParams = { slug: Array<string> };
type BlogParams = { params: { category: Array<string> } };

export const generateStaticParams = async (): Promise<
  Array<BlogStaticParams>
> => allBlogs.map((post) => ({ slug: [post._raw.flattenedPath] }));

export const generateMetadata = ({ params }: BlogParams) => {
  const pagePath = getPagePath(params.category);
  const post = findPostByPath(allBlogs, pagePath);

  if (!post) {
    return notFound();
  }

  const { title, description, structuredData } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: structuredData.datePublished,
      url: structuredData.url,
      images: [{ url: structuredData.image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [structuredData.image],
    },
  };
};

const BlogPage = async ({ params }: BlogParams) => {
  const pagePath = getPagePath(params.category);
  const post = findPostByPath(allBlogs, pagePath);

  if (!post) {
    return notFound();
  }

  const sortedPosts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  const isCategoryPage = post._raw.sourceFileName === "index.mdx";

  const getCategoryBlogs = getChildContent(
    sortedPosts.filter(
      (sortedPost) => sortedPost._raw.sourceFileName !== "index.mdx",
    ),
    pagePath,
  );

  const renderAllBlogPosts = () => {
    return allBlogs
      .filter((item) => item?._raw?.sourceFileName !== "index.mdx")
      .map((blog) => <PostCardMd key={blog._raw.flattenedPath} {...blog} />);
  };

  const renderCategoryPosts = () => {
    return post.show_child_posts
      ? getCategoryBlogs.map((post) => (
          <PostCardMd key={post._raw.flattenedPath} {...post} />
        ))
      : getChildCategories(sortedPosts, pagePath).map((post, index) => (
          <CategoryCard key={index} {...post} />
        ));
  };

  if (isCategoryPage) {
    // This is the /blog directory
    if (post.show_child_posts && !params.category) {
      return <Category post={post}>{renderAllBlogPosts()}</Category>;
    } else {
      // This is a sub category
      return <Category post={post}>{renderCategoryPosts()}</Category>;
    }
  }

  // This is a blog page
  return <BlogTemplate post={post} />;
};

export default BlogPage;
