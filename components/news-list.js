import Link from "next/link";

export default function NewsList({ newsItems }) {
  return (
    <ul className="news-list">
      {newsItems.map((newsItem) => {
        return (
          <li>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
