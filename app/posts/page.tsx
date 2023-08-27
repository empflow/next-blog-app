import getPosts from "@/helpers/getPosts";
import PostCard from "../components/PostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All posts",
};

export default function Posts() {
  const posts = getPosts();

  return (
    <>
      <h1 className="mb-8 text-3xl font-semibold">All posts</h1>
      <section className="flex flex-col gap-4">
        {posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </section>
    </>
  );
}
