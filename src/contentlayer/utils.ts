export const isExternal = (src: any) =>
  typeof src === "string" && src.startsWith("http");

export const formatUrl = (path: string, domain: string = "") => {
  // Check if the domain has a protocol; if not, prepend 'http://'
  if (domain && !domain.match(/^https?:\/\//)) {
    domain = `https://${domain}`;
  }

  // Concatenate domain and path
  const url =
    domain && path ? `${domain}/${path}` : domain && !path ? domain : path;

  // Extract the protocol and the rest of the URL
  const [protocol, domainAndPath] = url.split("://");
  if (!domainAndPath) return url; // Return the original URL if it doesn't have a protocol

  // Replace multiple consecutive slashes in the path
  // (but not in the protocol) with a single slash
  const formattedPath = domainAndPath.replace(/(?<!:)\/+/g, "/");

  return `${protocol}://${formattedPath}`;
};
