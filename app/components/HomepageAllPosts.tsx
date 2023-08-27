import getPosts from "@/helpers/getPosts";
import PostCard from "./PostCard";

export default function HomepageAllPosts() {
  const posts = getPosts();

  return (
    <section>
      <h2 className="mb-4 text-2xl font-medium">Произведения</h2>
      <div className="flex flex-col gap-4">
        {posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </section>
  );
}
