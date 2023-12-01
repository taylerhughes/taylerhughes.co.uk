"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import links from "@/src/data/links";

const isPathActive = (pathname: string, href: string) => {
  const regex = new RegExp(`^${href}`);
  return regex.test(pathname);
};

const MainHeader: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <Link className="text-2xl font-light dark:text-secondary" href="/">
        Randy.
      </Link>
      <nav className="hidden md:grid grid-flow-col gap-10 content-baseline">
        {links.map(({ href, label }, index) => (
          <Link
            className={clsx("font-bold", {
              "dark:text-primary": isPathActive(pathname, href),
              "dark:text-secondary": !isPathActive(pathname, href),
            })}
            href={href}
            key={href}
          >
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default MainHeader;
