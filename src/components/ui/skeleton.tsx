import clsx from "clsx";
import React from "react";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
