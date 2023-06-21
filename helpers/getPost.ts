import path from "path";
import postsDir from "./postsDir";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtmlPlugin from "remark-html";
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
  const processedContent = await remark()
    .use(remarkHtmlPlugin)
    .process(markdownContent);
  return processedContent.toString();
}
