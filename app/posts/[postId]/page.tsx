import getLatestPosts from "@/helpers/getLatestPosts";
import getPost from "@/helpers/getPost";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PostParams {
  params: { postId: string };
}

export async function generateStaticParams() {
  const posts = getLatestPosts();
  return posts.map((post) => ({ postId: post.id }));
}

export async function generateMetadata({
  params: { postId },
}: PostParams): Promise<Metadata> {
  const posts = getLatestPosts();
  const currPost = posts.find((post) => post.id === postId);
  if (!currPost) return { title: "Post Not Found" };
  return { title: currPost.title };
}

export default async function Post({ params: { postId } }: PostParams) {
  const posts = getLatestPosts();
  const postExists = !!posts.find((post) => post.id === postId);
  if (!postExists) return notFound();

  const post = await getPost(postId);

  return (
    <>
      <p className="font-light text-gray-600 dark:text-gray-400">{post.date}</p>
      <article
        className="
        prose

      text-gray-600
      prose-headings:text-black
      prose-p:text-gray-600
      prose-a:font-semibold
      prose-a:text-gray-900

      prose-blockquote:text-gray-800
      prose-code:text-black
      prose-pre:border
      prose-pre:border-gray-300
      prose-pre:bg-gray-200
      dark:text-gray-400
      dark:prose-headings:text-white
      dark:prose-p:text-gray-400
      dark:prose-a:text-gray-200
      dark:prose-blockquote:text-gray-300
      dark:prose-figcaption:text-gray-300
      dark:prose-strong:text-gray-200
      dark:prose-code:text-white
      dark:prose-pre:border-gray-600
        dark:prose-pre:bg-gray-700
        dark:prose-thead:border-y-gray-500
        dark:prose-tr:border-y-gray-600
        dark:prose-hr:border-gray-600
        "
        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
      ></article>
    </>
  );
}

/*
prose-code:text-black
prose-pre:border
prose-pre:border-gray-400
prose-pre:bg-gray-200
*/
