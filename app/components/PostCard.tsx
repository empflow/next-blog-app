import formatStrDate from "@/utils/formatStrDate";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = formatStrDate(post.date);

  return (
    <div className="flex flex-col gap-0">
      <Link href={`/posts/${post.id}`} className="mb-1 hover:underline">
        <h3 className="font-bold">{post.title}</h3>
      </Link>
      <p className="text-[0.9rem] font-light text-gray-400">
        {formattedDate} · {post.readingTime.value} {post.readingTime.timeUnit}{" "}
        read
      </p>
    </div>
  );
}
