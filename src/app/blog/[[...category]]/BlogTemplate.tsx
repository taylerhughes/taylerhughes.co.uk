import Markdown from "markdown-to-jsx";
import clsx from "clsx";
import React, { FC } from "react";
import Link from "next/link";
import { getMDXComponent } from "next-contentlayer/hooks";
import BlogHeader from "@/components/headers/BlogHeader";
import Author from "@/components/Author";
import NextImg from "@/components/NextImg";
import PageNavigation from "@/components/PageNavigation";
import { Blog } from "contentlayer/generated";
import Opener from "@/components/Opener";
import { H2, H3, H4, H5 } from "@/components/Headings";
import { Table } from "@/components/Table";
import Blockquote from "@/components/mdx/BlockQuote";
import getImageSrc from "@/utils/imagery/getImageSrc";
import s from "./category.module.css";

const mdxComponents = {
  NextImg,
  Link,
  a: Link,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  table: Table,
  blockquote: Blockquote,
};

const BlogTemplate: FC<{
  post: Blog;
}> = async ({ post }) => {
  const MDXContent = getMDXComponent(post.body.code ?? "");

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      ></script>
      <div id="main" className="@container">
        <div className="grid grid-cols-12 gap-x-4 gap-[clamp(2rem,12cqw,3rem)]">
          <BlogHeader post={post}>
            <Author
              readTime={post.readTime}
              href="/about"
              date={post.date}
              src={post.author?.avatar ?? ""}
              authorName={post.author?.name ?? ""}
            />
          </BlogHeader>
          <NextImg
            loading="eager"
            src={
              post.featured_image?.url
                ? getImageSrc(
                    post.featured_image.url,
                    post.featured_image.width,
                    post.featured_image.height,
                  )
                : ""
            }
            className="col-span-12"
            alt=""
          />

          {post.description ? (
            <Markdown
              options={{
                forceBlock: true,
                overrides: {
                  p: { component: Opener },
                },
              }}
            >
              {post.description}
            </Markdown>
          ) : null}
          <main
            className={clsx(
              "bodyContent order-2 md:order-1 col-span-12 md:col-start-1 md:col-span-8 text-fluid-sm",
              s.main,
            )}
          >
            <MDXContent components={mdxComponents as any} />
            <aside className="@container">
              <Author
                href="/about"
                className="hidden md:grid"
                date={post.date}
                src={post.author?.avatar ?? ""}
                authorName={post.author?.name ?? ""}
                compact={false}
              />
            </aside>
          </main>
          <aside className="@container order-1 col-span-12 md:col-start-10 md:col-span-3 md:sticky md:top-8 self-start grid gap-20 mb-[clamp(1rem,10cqw,6rem)] md:mb-0">
            <PageNavigation headings={post.headings} className="md:block" />
          </aside>
        </div>
      </div>
    </>
  );
};

export default BlogTemplate;
