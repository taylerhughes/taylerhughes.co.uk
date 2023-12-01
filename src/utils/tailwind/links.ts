import clsx from "clsx";
export const textLink = () => {
  return clsx(
    "underline",
    "hover:decoration-transparent",
    "decoration-current",
    "transition",
  );
};
