import React from "react";
import { compareDesc } from "date-fns";
import { notFound } from "next/navigation";
import { findWorkPostByPath, getWorkPagePath } from "@/utils/categoryUtils";
import { allWorks } from "contentlayer/generated";
import { getChildContent } from "@/utils/getContent";
import Category from "@/components/Category";
import PostCardMd from "@/components/cards/PostCardMd";
import WorkTemplate from "./WorkTemplate";

type WorkStaticParams = { slug: Array<string> };
type WorkParams = { params: { work: string } };

export const generateStaticParams = async (): Promise<
  Array<WorkStaticParams>
> => allWorks.map((post) => ({ slug: [post._raw.flattenedPath] }));

export const generateMetadata = ({ params }: WorkParams) => {
  const pagePath = getWorkPagePath(params.work);
  const post = findWorkPostByPath(allWorks, pagePath);

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

const WorkPage = async ({ params }: WorkParams) => {
  const pagePath = getWorkPagePath(params.work);
  const post = findWorkPostByPath(allWorks, pagePath);

  if (!post) {
    return notFound();
  }

  const sortedPosts = allWorks.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  const isWorkPage = post._raw.sourceFileName === "index.mdx";

  const workPosts = getChildContent(
    sortedPosts.filter((post) => post._raw.sourceFileName !== "index.mdx"),
    pagePath,
  );

  if (isWorkPage) {
    return (
      <Category post={post}>
        {workPosts.map((post) => (
          <PostCardMd key={post._raw.flattenedPath} {...post} />
        ))}
      </Category>
    );
  }

  return <WorkTemplate post={post} />;
};

export default WorkPage;
