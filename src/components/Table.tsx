import React from "react";
import clsx from "clsx";

interface tableProps {
  className?: string;
}

export const Table: React.FC<React.PropsWithChildren<tableProps>> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx("overflow-x-auto", className)}>
      <table>{children}</table>
    </div>
  );
};
