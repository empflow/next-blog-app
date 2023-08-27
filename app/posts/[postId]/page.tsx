import getPosts from "@/helpers/getPosts";
import getPost from "@/helpers/getPost";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./styles.module.css";

interface PostParams {
  params: { postId: string };
}

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ postId: post.id }));
}

export async function generateMetadata({
  params: { postId },
}: PostParams): Promise<Metadata> {
  const posts = getPosts();
  const currPost = posts.find((post) => post.id === postId);
  if (!currPost) return { title: "Post not found" };
  return { title: currPost.title };
}

export default async function Post({ params: { postId } }: PostParams) {
  const posts = getPosts();
  const postExists = !!posts.find((post) => post.id === postId);
  if (!postExists) return notFound();

  const post = await getPost(postId);

  return (
    <>
      <p className="font-light text-gray-600">{post.date}</p>
      <article
        className={`
          ${styles.prose}

          prose

          overflow-x-auto
          text-gray-600

          prose-headings:font-bold
          prose-headings:text-black

          prose-p:text-gray-700

          prose-a:font-semibold
          prose-a:text-gray-900

          prose-blockquote:text-gray-800

          prose-code:text-black

          prose-pre:border
          prose-pre:border-gray-300
          prose-pre:bg-gray-200
        `}
      >
        <h1>{post.title}</h1>
        <section
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        ></section>
      </article>
    </>
  );
}
