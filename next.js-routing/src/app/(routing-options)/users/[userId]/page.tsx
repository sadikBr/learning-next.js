export default function User({
  params: { userId },
}: {
  params: { userId: string };
}) {
  return <h1>This is the home page of the user with id {userId}</h1>;
}
