import getLatestPosts from "@/helpers/getLatestPosts";
import PostCard from "./PostCard";

export default function HomepageRecentPosts() {
  const posts = getLatestPosts(3);

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
