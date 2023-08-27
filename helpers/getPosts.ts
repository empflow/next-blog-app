import fs from "fs";
import path from "path";
import matter from "gray-matter";
import strDatesToMsDates from "@/utils/strDatesToMsDates";
import postsDir from "./postsDir";

export default function getPosts() {
  const postsFilenames = fs.readdirSync(postsDir);
  const allPosts = getAllPostsUnsorted(postsFilenames);
  return sortPostsByDate(allPosts);
}

function getAllPostsUnsorted(postsFilenames: string[]) {
  return postsFilenames.map((postFilename): Post => {
    const id = postFilename.replace(/\.md$/, "");
    const pathToPost = path.join(postsDir, postFilename);
    const postContent = fs.readFileSync(pathToPost, "utf-8");
    const matterResult = matter(postContent);

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
