export const isExternal = (src: any) =>
  typeof src === "string" && src.startsWith("http");
