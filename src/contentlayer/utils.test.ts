import { isExternal } from "./utils";

describe("isExternal", () => {
  it("should return true for external URLs", () => {
    expect(isExternal("http://example.com")).toBeTruthy();
    expect(isExternal("https://example.com")).toBeTruthy();
  });

  it("should return false for non-external URLs", () => {
    expect(isExternal("/local/path")).toBeFalsy();
    expect(isExternal("ftp://example.com")).toBeFalsy();
  });

  it("should return false for non-string inputs", () => {
    expect(isExternal(undefined)).toBeFalsy();
    expect(isExternal(null)).toBeFalsy();
    expect(isExternal(123)).toBeFalsy();
    expect(isExternal({})).toBeFalsy();
  });
});

import { formatUrl } from "./utils";

describe("formatUrl", () => {
  it("should format a URL correctly with domain and path", () => {
    expect(formatUrl("/path", "http://example.com")).toBe(
      "http://example.com/path",
    );
  });

  it("should handle URLs without a domain", () => {
    expect(formatUrl("/path")).toBe("/path");
  });

  it("should remove consecutive slashes", () => {
    expect(formatUrl("//path", "http://example.com")).toBe(
      "http://example.com/path",
    );
    expect(formatUrl("/path//to//resource", "http://example.com")).toBe(
      "http://example.com/path/to/resource",
    );
  });

  it("should return the original URL if it does not have a protocol", () => {
    expect(formatUrl("example.com")).toBe("example.com");
  });

  it("should handle edge cases", () => {
    expect(formatUrl("")).toBe("");
    expect(formatUrl("", "http://example.com")).toBe("http://example.com");
    expect(formatUrl("http://example.com")).toBe("http://example.com");
  });
});
