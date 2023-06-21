import getSortedPosts from "@/helpers/getSortedPosts";

export default function Posts() {
  const posts = getSortedPosts();
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
