import unSlugify from "./unslugify";

describe("unSlugify function", () => {
  test("converts a simple slug to a string with each word capitalized", () => {
    expect(unSlugify("hello-world")).toBe("Hello world");
  });

  test("keeps the capitalization of the first letter and lowercases the rest", () => {
    expect(unSlugify("Hello-World")).toBe("Hello world");
  });

  test("converts a complex slug to a capitalized string", () => {
    expect(unSlugify("hello-world-this-is-a-test")).toBe(
      "Hello world this is a test",
    );
  });

  test("works with single-word slugs", () => {
    expect(unSlugify("hello")).toBe("Hello");
  });

  test("handles empty strings", () => {
    expect(unSlugify("")).toBe("");
  });

  // Add more tests as needed for edge cases and complex slugs
});
