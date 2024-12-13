import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

export default function FullscreenImage({ params }) {
  const newsId = params.newsId;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <h1>{newsItem.title}</h1>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
