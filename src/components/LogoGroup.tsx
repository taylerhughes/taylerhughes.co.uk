import React from "react";
import clsx from "clsx";
import { Vercel, Netlify, Astro, Nextjs, Tailwind } from "@/icons/brands";
import { H4 } from "@/components/Headings";

const LogoGroup: React.FC<{
  title?: string;
  description?: string;
  className?: string;
}> = ({ title, description, className }) => {
  const iconProps = {
    className:
      "[&>path]:dark:fill-secondary [&>path]:fill-neutral-500 max-w-full",
  };
  return (
    <div
      className={clsx(
        "grid gap-4 relative text-center",
        "before:dark:bg-[linear-gradient(-90deg,rgba(16,16,16,0)0%,rgba(16,16,16,1)100%)]",
        "before:z-10 before:h-full before:w-[8rem] before:absolute before:left-0",
        "after:dark:bg-[linear-gradient(90deg,rgba(16,16,16,0)0%,rgba(16,16,16,1)100%)]",
        "after:z-10 after:h-full after:w-[8rem] after:absolute after:right-0",
        className,
      )}
    >
      {title ? (
        <H4
          className={clsx("text-center text-fluid-xxl/[1] dark:text-secondary")}
        >
          {title}
        </H4>
      ) : null}
      {description ? (
        <p className="text-fluid-md dark:text-neutral-500">{description}</p>
      ) : null}
      <div className="flex items-center justify-between gap-[clamp(1rem,6cqw,3rem)] mt-[clamp(1rem,3cqw,3rem)]">
        <Vercel {...iconProps} />
        <Nextjs {...iconProps} />
        <Astro {...iconProps} />
        <Tailwind {...iconProps} />
        <Netlify {...iconProps} />
      </div>
    </div>
  );
};

export default LogoGroup;
