import { makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypePrettyCodeOptions } from "./src/utils/rehype/rehypePrettyCode";
import Blog from "./src/contentlayer/Blog";
import Work from "./src/contentlayer/Work";

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Work],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});
