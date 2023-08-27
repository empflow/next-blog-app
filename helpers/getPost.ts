import path from "path";
import postsDir from "./postsDir";
import fs from "fs";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm"; // github flavored markdown
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import formatStrDate from "@/utils/formatStrDate";

export default async function getPost(
  postId: string
): Promise<PostWithHtmlContent> {
  const pathToPost = path.join(postsDir, `${postId}.md`);
  const postMarkdownContent = fs.readFileSync(pathToPost, "utf-8");
  const { data: postData } = matter(postMarkdownContent);
  const postHtmlContent = await getPostHtmlFromMarkdown(postMarkdownContent);

  return {
    id: postId,
    title: postData.title,
    date: formatStrDate(postData.date),
    htmlContent: postHtmlContent,
  };
}

async function getPostHtmlFromMarkdown(postMarkdown: string) {
  const { content: markdownContent } = matter(postMarkdown);
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdownContent);

  let html = file.toString();
  html = makeHtmlTablesScrollable(html);

  return html;
}

function makeHtmlTablesScrollable(html: string) {
  return html.replace(
    /(<table.*?>[\s\S]*?<\/table>)/,
    `
        <div style="overflow-x: auto;">
          $1
        </div>
      `
  );
}
