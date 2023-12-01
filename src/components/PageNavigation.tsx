"use client";

import { FC, useState, useEffect } from "react";
import { DocHeading } from "@/src/contentlayer/Blog";
import { getNodeText, sluggifyTitle } from "@/utils/sluggify";

const PageNavigation: FC<{
  headings: Array<DocHeading>;
  className?: string;
}> = ({ headings, className }) => {
  const [activeHeading, setActiveHeading] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const heading of headings) {
        const slug = sluggifyTitle(getNodeText(heading.title));
        const element = document.getElementById(slug);
        if (element && element.getBoundingClientRect().top < 240)
          current = slug;
      }
      setActiveHeading(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  const headingsToRender = headings.filter((_) => _.level > 1);

  if ((headingsToRender ?? []).length === 0) return null;

  const navLink =
    "underline hover:decoration-transparent decoration-current transition";

  const navLinkMd =
    "md:hover:underline md:decoration-transparent md:hover:decoration-current";

  return (
    <div className={className}>
      <h4 className="font-bold mb-4">On this page</h4>
      <ul>
        {headingsToRender.map(({ title, level }, index) => (
          <li className="flex" key={index}>
            <a
              href={`#${sluggifyTitle(getNodeText(title))}`}
              style={{ marginLeft: (level - 2) * 16 }}
              className={`flex p-1 pl-0 ${
                sluggifyTitle(getNodeText(title)) === activeHeading
                  ? "md:decoration-current md:underline"
                  : `${navLink} ${navLinkMd}`
              }`}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: title
                    .replace("`", '<code style="font-size: 0.75rem;">')
                    .replace("`", "</code>"),
                }}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageNavigation;
