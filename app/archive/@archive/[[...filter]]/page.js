import Link from "next/link";

import NewsList from "@/components/news-list";
import {
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth
} from "@/lib/news";

export default function FilteredArchiveNews({ params }) {
  let links = getAvailableNewsYears();
  const filter = params.filter;
  const newsYear = filter?.[0];
  const newsMonth = filter?.[1];
  console.log(newsMonth);
  let newsItems;

  if (newsYear && !newsMonth) {
    newsItems = getNewsForYear(newsYear);
    links = getAvailableNewsMonths(newsYear);
  }

  if (newsYear && newsMonth) {
    newsItems = getNewsForYearAndMonth(newsYear, newsMonth);
    links = [];
  }

  if (
    (newsYear && !getAvailableNewsYears().includes(+newsYear)) ||
    (newsMonth && !getAvailableNewsMonths(newsYear).includes(+newsMonth))
  ) {
    throw new Error("Invalid year or month filter");
  }

  let newsContent = (
    <p>No articles found in the archive for the requested year.</p>
  );

  if (newsItems && newsItems.length > 0) {
    newsContent = <NewsList newsItems={newsItems} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              let href = newsYear
                ? `/archive/${newsYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {filter && newsContent}
    </>
  );
}
