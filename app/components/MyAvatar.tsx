import Image from "next/image";

export default function MyAvatar() {
  return (
    <Image
      className="rounded-full border-4 border-gray-500 dark:border-gray-400"
      src="/imgs/avatar500x500.jpeg"
      width={200}
      height={200}
      alt="An image of the author"
      priority
    />
  );
}
