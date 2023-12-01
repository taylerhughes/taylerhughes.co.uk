import React from "react";
import clsx from "clsx";

import Link from "next/link";
import links from "@/src/data/links";
import { textLink } from "@/utils/tailwind/links";

const today = new Date();
const year = today.getFullYear();

const linkProps = {
  className: clsx("p-2", "-ml-2", textLink()),
};

const liProps = {
  className: "grid justify-items-start",
};

const contactLinkProps = {
  ...linkProps,
  target: "_blank",
  rel: "noreferrer",
};

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <footer
      className={clsx(
        "grid grid-cols-12 content-start gap-4 mb-10 z-10",
        className,
      )}
    >
      <section className="grid gap-4 col-start-1 col-end-12 md:col-end-5 mb-6 md:mb-0">
        <p className="dark:text-secondary">
          Randy is a next.js starter kit for tech bloggers, designers,
          developers, or anyone that wants it, it’s really flexible and can be
          used in a way that suits you
        </p>
        <p>
          <Link href="/contact">Say hi</Link>.
        </p>
        <p className="text-xs dark:text-secondary mt-6">
          &copy; {year} Randy. All rights reserved.
        </p>
      </section>
      <section className="md:col-start-7 col-span-3">
        <ul>
          {links.map(({ href, label }) => (
            <li key={href} {...liProps}>
              <Link href={href} {...linkProps}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="col-span-3">
        <ul>
          <li {...liProps}>
            <a {...contactLinkProps} href="https://www.linkedin.com">
              LinkedIn
            </a>
          </li>
          <li {...liProps}>
            <a {...contactLinkProps} href="https://x.com/">
              Twitter
            </a>
          </li>
          <li {...liProps}>
            <a {...contactLinkProps} href="https://github.com">
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
