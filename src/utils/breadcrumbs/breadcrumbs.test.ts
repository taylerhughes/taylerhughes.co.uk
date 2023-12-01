import { generateBreadcrumbs } from "./breadcrumbs";

describe("breadcrumbs", () => {
  it("should return an array of path objects for /path/to/somewhere", () => {
    const router = {
      asPath: "/path/to/somewhere",
    };
    const breadcrumbs = generateBreadcrumbs(router.asPath);
    expect(breadcrumbs).toEqual([
      { href: "/path", label: "Path" },
      { href: "/path/to", label: "To" },
      { href: "/path/to/somewhere", label: "Somewhere" },
    ]);
  });
  it("should return an array of path objects for /guides/how-to-integrate-google-tag-manager-with-nextjs", () => {
    const router = {
      asPath: "/guides/how-to-integrate-google-tag-manager-with-nextjs",
    };
    const breadcrumbs = generateBreadcrumbs(router.asPath);
    expect(breadcrumbs).toEqual([
      { href: "/guides", label: "Guides" },
      {
        href: "/guides/how-to-integrate-google-tag-manager-with-nextjs",
        label: "How to integrate google tag manager with nextjs",
      },
    ]);
  });
  it("should return an empty array for ''", () => {
    const router = {
      asPath: "",
    };
    const breadcrumbs = generateBreadcrumbs(router.asPath);
    expect(breadcrumbs).toEqual([]);
  });
});
