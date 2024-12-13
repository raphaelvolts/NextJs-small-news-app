import Link from "next/link";

import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

export default function News() {
  return (
    <>
      <h1>NextJs News Page</h1>
      <NewsList newsItems={DUMMY_NEWS} />
    </>
  );
}
