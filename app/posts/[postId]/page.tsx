import getLatestPosts from "@/helpers/getLatestPosts";
import getPost from "@/helpers/getPost";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PostParams {
  params: { postId: string };
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
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <article dangerouslySetInnerHTML={{ __html: post.htmlContent }}></article>
    </>
  );
}
