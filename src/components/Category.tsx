import React, { FC } from "react";

import BlogHeader from "@/components/headers/BlogHeader";
import { Blog, Work } from "contentlayer/generated";

const Category: FC<React.PropsWithChildren<{ post: Blog | Work }>> = ({
  post,
  children,
}) => {
  return (
    <div
      id="main"
      className="@container grid content-start grid-cols-12 gap-x-4 gap-[clamp(2rem,12cqw,3rem)]"
    >
      <BlogHeader post={post} />
      <div className="col-span-12">
        <section className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,150px),1fr))] sm:grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-x-4 gap-y-8">
          {children}
        </section>
      </div>
    </div>
  );
};

export default Category;
