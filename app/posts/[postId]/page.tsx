import getLatestPosts from "@/helpers/getLatestPosts";
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

export default function Post({ params: { postId } }: PostParams) {
  const posts = getLatestPosts();
  const currPost = posts.find((post) => post.id === postId);
  if (!currPost) return notFound();

  return (
    <>
      <h1>{currPost.title}</h1>
      <p>{currPost.date}</p>
    </>
  );
}
