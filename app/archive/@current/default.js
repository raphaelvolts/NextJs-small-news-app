import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNews() {
  const newsItems = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList newsItems={newsItems} />
    </>
  );
}
