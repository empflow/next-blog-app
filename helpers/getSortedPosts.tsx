import { readdirSync, readFileSync } from "fs";
import path from "path";
import { promisify } from "util";
import matter from "gray-matter";
import { nanoid } from "nanoid";
import strDatesToMsDates from "@/utils/strDatesToMsDates";

const postsDir = path.join(process.cwd(), "posts");

export default function getSortedPosts() {
  const postsFilenames = readdirSync(postsDir);
  const allPosts = getAllPostsUnsorted(postsFilenames);
  return sortPostsByDate(allPosts);
}

function getAllPostsUnsorted(postsFilenames: string[]) {
  return postsFilenames.map((postFilename): Post => {
    const id = `${postFilename.replace(/\.md$/, "")}-${nanoid(8)}`;
    const pathToPost = path.join(postsDir, postFilename);
    const postContent = readFileSync(pathToPost, "utf-8");
    const matterResult = matter(postContent, { excerpt: true });

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };
  });
}

function sortPostsByDate(posts: Post[]) {
  return posts.sort((a, b) => {
    const dates = [a.date, b.date];
    const [dateMsA, dateMsB] = strDatesToMsDates(dates);
    return dateMsB - dateMsA;
  });
}
