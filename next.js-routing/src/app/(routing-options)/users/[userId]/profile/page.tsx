export default function Profile({
  params: { userId },
}: {
  params: { userId: string };
}) {
  return <h1>This is the profile of the user with id {userId}</h1>;
}
