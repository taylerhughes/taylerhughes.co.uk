import React from "react";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import clsx from "clsx";

import NextImg from "@/components/NextImg";
import {
  XIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
} from "@/icons/social";
import { textLink } from "@/utils/tailwind/links";

interface AuthorProps {
  src: string;
  authorName: string;
  date?: string;
  compact?: boolean;
  className?: string;
  href: string;
  readTime?: string;
}

const iconProps = {
  className: "fill-current dark:text-secondary w-5 h-5",
};

const Author: React.FC<AuthorProps> = ({
  src,
  authorName,
  date,
  compact = true,
  className,
  href,
  readTime,
}) => {
  if (compact) {
    return (
      <Link
        href={href}
        className="grid grid-cols-[max-content,1fr] justify-items-start items-center gap-2.5 md:gap-4"
      >
        <NextImg
          className="rounded-full w-[3rem] h-[3rem] md:w-[3.75rem] md:h-[3.75rem]"
          src={src}
          alt={`Photo of the author, ${authorName}`}
        />
        <div className="grid">
          <p className="font-bold dark:text-primary flex">{authorName}</p>
          <p className="font-light text-xs text-tertiary dark:text-secondary flex items-center gap-1.5">
            {readTime} min read
            <span className="w-0.5 h-0.5 rounded-full bg-tertiary dark:bg-secondary"></span>
            {date ? (
              <time dateTime={date}>
                {format(parseISO(date), "LLL d, yyyy")}
              </time>
            ) : null}
          </p>
        </div>
      </Link>
    );
  }
  return (
    <div className={clsx("grid items-center gap-4", className)}>
      <NextImg
        className="rounded-full w-[3.75rem] h-[3.75rem]"
        src={src}
        alt={`Photo of the author, ${authorName}`}
      />
      <div>
        {authorName ? (
          <>
            <Link
              href={href}
              className="font-bold dark:text-primary text-xl block"
            >
              Written by {authorName}
            </Link>
            <p className="dark:text-secondary">
              Learn more{" "}
              <Link className={textLink()} href="/about">
                about {authorName.split(" ")[0]}
              </Link>
            </p>
          </>
        ) : null}
        <div className="flex flex-wrap gap-[clamp(0.5rem,10cqw,1.5rem)] mt-6">
          <XIcon
            {...iconProps}
            ariaLabel="Follow me on X"
            href="https://x.com"
          />
          <GithubIcon
            {...iconProps}
            ariaLabel="Follow me on Github"
            href="https://github.com"
          />
          <InstagramIcon
            {...iconProps}
            ariaLabel="Follow me on Github"
            href="https://instagram.com"
          />
          <LinkedInIcon
            {...iconProps}
            ariaLabel="Follow me on Github"
            href="https://linkedin.com"
          />
          <FacebookIcon
            {...iconProps}
            ariaLabel="Follow me on Github"
            href="https://facebook.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Author;
