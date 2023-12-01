import Link from "next/link";
import { format, parseISO } from "date-fns";
import React, { FC } from "react";
import clsx from "clsx";
import { Blog } from "contentlayer/generated";
import NextImg from "@/components/NextImg";
import cropParams from "@/utils/cropParams";

const PostCardSm: FC<Blog> = (props) => {
  let width = 192;
  let height = 127;

  return (
    <Link
      href={`/${props.url}`}
      style={{ gridTemplateColumns: `min(100%,${width}px) 1fr` }}
      className={clsx("@container", "grid", "gap-4")}
    >
      {props?.featured_image?.url ? (
        <NextImg
          src={cropParams(props?.featured_image?.url, width, height)}
          className="aspect-[1.95/1.2] col-start-1 col-span-2 @[400px]:col-span-1 w-full"
          alt=""
        />
      ) : null}
      <div
        className={
          props.featured_image ? "col-start-1 @[400px]:col-start-2" : ""
        }
      >
        <h4 className="mb-1 text-fluid-sm/[1.25] font-bold">{props.title}</h4>
        <p className="mb-2 block text-base dark:text-neutral-400">
          {format(parseISO(props.date), "LLL d, yyyy")}
        </p>
      </div>
    </Link>
  );
};

export default PostCardSm;
