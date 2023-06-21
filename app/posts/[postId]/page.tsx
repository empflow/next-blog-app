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
      text-gray-500
        prose-a:font-semibold
      prose-a:text-gray-900

      dark:text-gray-400
      dark:prose-a:text-gray-200
        "
        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
      ></article>
    </>
  );
}
