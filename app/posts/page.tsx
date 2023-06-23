import getLatestPosts from "@/helpers/getLatestPosts";
import PostCard from "../components/PostCard";

export default function Posts() {
  const posts = getLatestPosts();

  return (
    <>
      <h1 className="mb-8 text-3xl font-semibold">All posts</h1>
      <section className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </section>
    </>
  );
}
