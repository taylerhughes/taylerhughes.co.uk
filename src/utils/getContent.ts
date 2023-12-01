import { Blog, Work } from "contentlayer/generated";

export const getChildContent = <T extends Blog | Work>(
  items: Array<T>,
  pagePath: string,
) =>
  items.filter((post) => {
    const rawPath = post._raw.flattenedPath;
    if (!rawPath.includes(pagePath)) {
      return false;
    }
    return rawPath.split("/").length === pagePath.split("/").length + 1;
  });
