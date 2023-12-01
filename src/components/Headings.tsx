import React from "react";
import clsx from "clsx";
import { sluggifyTitle, getNodeText } from "@/utils/sluggify";

interface headingProps {
  className?: string;
}

export const H2: React.FC<React.PropsWithChildren<headingProps>> = ({
  children,
  className,
}) => {
  const slug = sluggifyTitle(getNodeText(children));
  return (
    <h2 id={slug} className={clsx(className)}>
      {children}
    </h2>
  );
};

export const H3: React.FC<React.PropsWithChildren<headingProps>> = ({
  children,
  className,
}) => {
  const slug = sluggifyTitle(getNodeText(children));
  return (
    <h3 id={slug} className={clsx(className)}>
      {children}
    </h3>
  );
};

export const H4: React.FC<React.PropsWithChildren<headingProps>> = ({
  children,
  className,
}) => {
  const slug = sluggifyTitle(getNodeText(children));
  return (
    <h4 id={slug} className={clsx(className)}>
      {children}
    </h4>
  );
};

export const H5: React.FC<React.PropsWithChildren<headingProps>> = ({
  children,
  className,
}) => {
  const slug = sluggifyTitle(getNodeText(children));
  return (
    <h5 id={slug} className={clsx(className)}>
      {children}
    </h5>
  );
};
