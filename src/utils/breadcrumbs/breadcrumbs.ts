import { NextRouter } from "next/router";
import unSlugify from "@/utils/slugs/unslugify";

export const generatePaths = (routePath: NextRouter["asPath"]) => {
  return routePath
    .split("/")
    .map((path, index) => {
      return routePath
        .split("/")
        .slice(0, index + 1)
        .join("/");
    })
    .filter((path) => !!path);
};

export const generateBreadcrumbs = (routePath: NextRouter["asPath"]) => {
  const generatedPaths = generatePaths(routePath);

  return generatedPaths.map((path) => {
    const getLabelText = path.split("/").pop() || "";
    const label = getLabelText.replace(/#.*/, "");
    const href = path.startsWith("/") ? path : `/${path}`;

    return {
      label: unSlugify(label),
      href,
    };
  });
};
