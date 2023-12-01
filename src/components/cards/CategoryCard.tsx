import React, { FC } from "react";
import Link from "next/link";

const CategoryCard: FC<{ count: number; url: string; title: string }> = ({
  count,
  url,
  title,
}) => {
  return (
    <Link
      href={`/${url}`}
      className="@container grid [&:has(img)]:grid-cols-[auto,1fr] gap-4 bg-neutral-100 hover:border-neutral-300 dark:bg-neutral-900 rounded-2xl p-8 border border-transparent dark:hover:border-neutral-700 transition-all"
    >
      <div>
        <h4 className="mb-1 text-fluid-sm/[1.25] font-bold">{title}</h4>
        <p className="text-base dark:text-neutral-400">
          {count} {count > 1 ? "posts" : "post"}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
