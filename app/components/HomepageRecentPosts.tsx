import getSortedPosts from "@/helpers/getSortedPosts";
import PostCard from "./PostCard";

export default function HomepageRecentPosts() {
  const posts = getSortedPosts(3);

  return (
    <section>
      <h2 className="mb-4 text-3xl font-medium">Recent posts</h2>
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </section>
  );
}
