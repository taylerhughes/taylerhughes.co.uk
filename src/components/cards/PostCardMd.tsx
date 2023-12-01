import Link from "next/link";
import { format, parseISO } from "date-fns";
import React, { FC } from "react";
import clsx from "clsx";
import { Blog, Work } from "contentlayer/generated";
import NextImg from "@/components/NextImg";
import getImageSrc from "@/utils/imagery/getImageSrc";

const PostCardMd: FC<Blog | Work> = (props) => {
  let width = 300;
  let height = 150;

  return (
    <Link
      href={`/${props.url}`}
      className={clsx("@container", "grid", "gap-2", "grid-rows-[auto,1fr]")}
    >
      <NextImg
        src={
          props?.featured_image?.url
            ? getImageSrc(props?.featured_image?.url, width, height)
            : ""
        }
        className="aspect-[2/1]"
        alt=""
      />

      <div className="grid content-start">
        <h4 className="mb-0.5 text-fluid-xs/[1.25] font-bold [text-wrap:balance]">
          {props.title}
        </h4>
        <p className="mb-2 block text-xs dark:text-neutral-400">
          {format(parseISO(props.date), "LLL d, yyyy")}
        </p>
      </div>
    </Link>
  );
};

export default PostCardMd;
