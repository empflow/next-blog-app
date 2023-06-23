interface Post {
  id: string;
  title: string;
  date: string;
  readingTime: ReadingTime;
}

interface PostWithHtmlContent extends Post {
  htmlContent: string;
}

interface ReadingTime {
  timeUnit: "min" | "sec";
  value: number;
}
