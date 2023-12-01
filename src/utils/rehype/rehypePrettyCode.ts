export const rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  tokensMap: {
    fn: "entity.name.function",
  },
  defaultLang: "plaintext",
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
    node.properties.className = [""];
  },
};
