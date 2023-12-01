const unSlugify = (slug: string) =>
  slug
    // Convert the whole string to lowercase first.
    .toLowerCase()
    // Replace all hyphens with spaces.
    .replace(/\-/g, " ")
    // Capitalize the first character of the resulting string.
    .replace(/^\w/, (c) => c.toUpperCase());

export default unSlugify;
