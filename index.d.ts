interface Post {
  id: string;
  title: string;
  date: string;
}

interface PostWithHtmlContent extends Post {
  htmlContent: string;
}
