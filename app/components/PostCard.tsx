import formatStrDate from "@/utils/formatStrDate";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = formatStrDate(post.date);

  return (
    <Link href={`/posts/${post.id}`} className="mb-1 hover:underline">
      <div className="flex flex-col gap-0">
        <h3 className="font-bold">{post.title}</h3>
        <p className="text-[0.9rem] font-light text-gray-600">
          {formattedDate}
        </p>
      </div>
    </Link>
  );
}
