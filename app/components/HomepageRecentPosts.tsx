import getSortedPosts from "@/helpers/getSortedPosts";
import Post from "./Post";

export default function HomepageRecentPosts() {
  const posts = getSortedPosts(3);

  return (
    <section>
      <h2 className="mb-3 text-xl font-medium">Recent posts</h2>
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </section>
  );
}
