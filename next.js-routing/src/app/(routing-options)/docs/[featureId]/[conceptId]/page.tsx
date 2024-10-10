export default function Docs({
  params: { featureId, conceptId },
}: {
  params: { featureId: string; conceptId: string };
}) {
  return (
    <h1>
      This page is for concept {conceptId} within feature {featureId}.
    </h1>
  );
}
