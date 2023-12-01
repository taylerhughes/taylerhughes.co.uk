import React from "react";
import clsx from "clsx";

const Container: React.FC<
  React.PropsWithChildren<{
    children: React.ReactNode;
    className?: string;
    component?: React.ElementType;
  }>
> = ({ children, className, component: Component = "div" }) => {
  return (
    <Component
      className={clsx(
        "grid grid-cols-[1fr_minmax(0px,1230px)_1fr] gap-6 gap-y-8",
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
