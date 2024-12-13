export default function ArchiveLayout({ archive, current }) {
  return (
    <div>
      <h1>The Archives Page</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{current}</section>
    </div>
  );
}
