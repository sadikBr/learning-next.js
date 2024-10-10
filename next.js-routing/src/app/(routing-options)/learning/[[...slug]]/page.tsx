export default function Learning({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  if (slug?.length === 2) {
    return (
      <h1>
        This is learning page for chapter {slug[0]} and lesson {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>This is learning page for chapter {slug[0]}</h1>;
  }
  return <h1>Learning Page</h1>;
}
