import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function DetailedNews({ params }) {
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === params.newsId
  );
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${params.newsId}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
