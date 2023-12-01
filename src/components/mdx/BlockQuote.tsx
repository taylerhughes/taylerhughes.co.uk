import React from "react";
import Link from "next/link";
import clsx from "clsx";
import s from "./BlockQuote.module.css";

const isCaption = (str: string) => str.startsWith("CAPTION=");

const isCaptionInChildren = ({
  props,
}: {
  props: { children: string | Array<string> };
}) => {
  return (
    props &&
    ((typeof props.children === "string" && isCaption(props.children)) ||
      (Array.isArray(props.children) &&
        props.children.some((child: string) => isCaption(child))))
  );
};

const splitCaption = (p: string | React.ReactNode) => {
  if (typeof p === "string" && p?.startsWith("CAPTION=")) {
    return p?.split("CAPTION=")[1];
  }
  return p;
};

const mapChildren = ({
  props,
}: {
  props?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
}) => {
  if (!props) return null;

  if (typeof props.children === "string" && isCaption(props.children)) {
    return splitCaption(props.children);
  }

  if (Array.isArray(props.children)) {
    return props.children.map((child) => {
      if (child.type === "a" && child.props.href) {
        return (
          <cite key={`${child.props.children}`}>
            <Link href={child.props.href}>{child.props.children}</Link>
          </cite>
        );
      } else {
        return splitCaption(child);
      }
    });
  }

  return null;
};

const Blockquote: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <figure className={clsx("grid gap-y-2 my-24 text-fluid-md/[1.25]", s.root)}>
      <blockquote>
        {Array.isArray(children) &&
          children?.map(({ props: p }) => {
            if (p) {
              if (typeof p.children === "string" && !isCaption(p.children)) {
                return (
                  <p className="font-bold" key={p.children}>
                    {p.children}
                  </p>
                );
              }
            }
          })}
      </blockquote>
      {Array.isArray(children) && children.some(isCaptionInChildren) && (
        <figcaption className="text-sm">
          — {children?.map(mapChildren)}
        </figcaption>
      )}
    </figure>
  );
};

export default Blockquote;
