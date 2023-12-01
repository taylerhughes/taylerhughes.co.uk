import clsx from "clsx";
import React, { FC } from "react";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import NextImg from "@/components/NextImg";
import { Work } from "contentlayer/generated";
import { H2, H3, H4, H5 } from "@/components/Headings";
import { Table } from "@/components/Table";
import Blockquote from "@/components/mdx/BlockQuote";
import { buttonVariants } from "@/components/ui/Button";
import ArrowRight from "@/icons/fontawesome/ArrowRight";
import NextImage from "@/components/NextImg";
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

const WorkTemplate: FC<{
  post: Work;
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
        <div className="grid grid-cols-12 gap-x-4 gap-[clamp(2rem,12cqw,6rem)]">
          <header className="col-span-12 md:col-start-2 md:col-span-10 grid gap-[clamp(2rem,12cqw,3rem)]">
            <h1 className="[grid-column:1/-1] font-bold dark:text-secondary text-fluid-2xl/[1] [text-wrap:balance]">
              {post.title}
            </h1>
            <p className="[grid-column:1/-1] max-w-[50ch] dark:text-tertiary text-fluid-md">
              {post.description}
            </p>
          </header>
          <NextImg
            src={
              post.featured_image?.url
                ? getImageSrc(
                    post.featured_image.url,
                    post.featured_image.width,
                    post.featured_image.height,
                  )
                : ""
            }
            className="aspect-[2/1] col-span-12"
            alt=""
          />

          <main
            className={clsx(
              "grid grid-cols-12 order-2 md:order-1 col-span-12 md:col-start-1 md:col-span-8 text-fluid-sm dark:text-neutral-400",
              s.main,
            )}
          >
            <div className="grid [grid-column:1/-1] md:col-start-2 bodyContent [&>:is(p,ul,ol)]:dark:text-tertiary">
              <MDXContent components={mdxComponents as any} />
              <figure className="grid gap-4">
                {post.examples?.map((example, index) => {
                  return (
                    <NextImage
                      className="sticky top-0"
                      key={`${example.url}-${index}`}
                      src={getImageSrc(
                        example.url,
                        example.width,
                        example.height,
                      )}
                      alt={example.alt}
                    />
                  );
                })}
              </figure>
            </div>
          </main>
          <aside className="@container order-1 col-span-12 md:col-start-10 md:col-span-3 md:sticky md:top-8 self-start grid gap-8 mb-[clamp(1rem,10cqw,6rem)] md:mb-0 dark:text-neutral-400">
            <div>
              <p className="font-bold">Date</p>
              <p className="dark:text-tertiary">
                {format(parseISO(post.date), "LLL d, yyyy")}
              </p>
            </div>
            <div>
              <p className="font-bold">Client</p>
              <p className="dark:text-tertiary">{post.client}</p>
            </div>
            <div>
              <p className="font-bold">Services</p>
              {post.services?.map((service, index) => {
                return (
                  <p className="dark:text-tertiary" key={`${service}-${index}`}>
                    {service}
                  </p>
                );
              })}
            </div>
            <Link
              className={clsx(
                "gap-4",
                buttonVariants({ variant: "outline", size: "lg" }),
              )}
              href={post?.website_url ?? "/"}
            >
              Visit website
              <ArrowRight />
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
};

export default WorkTemplate;
