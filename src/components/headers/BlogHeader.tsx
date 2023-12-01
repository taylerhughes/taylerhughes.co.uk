"use client";
import React, { FC } from "react";
import BackButton from "@/components/BackButton";
import { Blog, Work } from "contentlayer/generated";
import { generateBreadcrumbs } from "@/utils/breadcrumbs/breadcrumbs";

const BlogHeader: FC<React.PropsWithChildren<{ post: Blog | Work }>> = ({
  post,
  children,
}) => {
  const crumbs = generateBreadcrumbs(post.url);
  const crumb = crumbs?.[crumbs.length - 2];
  if (!post) {
    return null;
  }
  return (
    <header className="col-span-12 grid gap-[inherit]">
      <div className="grid gap-y-4 md:gap-y-6 grid-rows-[1.5rem,auto]">
        <nav className="grid justify-items-start last">
          {crumbs.length > 1 ? <BackButton crumb={crumb} /> : null}
        </nav>
        <h1 className="font-bold text-fluid-xxl leading-fluid [text-wrap:balance]">
          {post.title}
        </h1>
        {children}
      </div>
    </header>
  );
};

export default BlogHeader;
