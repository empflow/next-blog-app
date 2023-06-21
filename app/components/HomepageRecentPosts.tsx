import getSortedPosts from "@/helpers/getSortedPosts";

export default function HomepageRecentPosts() {
  const posts = getSortedPosts(3);

  return (
    <>
      <h2>Blog posts</h2>
      <ul>
        {posts.map((post) => (
          <li>{JSON.stringify(post)}</li>
        ))}
      </ul>
    </>
  );
}
