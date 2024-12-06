import Image from "next/image";

import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";

export default async function SubredditPage({
  params: { name },
}: {
  params: { name: string };
}) {
  const response = await fetch(
    `https://www.reddit.com/r/${name.split(" ").join("")}.json?limit=50`
  );
  const json = await response.json();

  const posts = json.data.children.filter(
    (post) =>
      post.data.post_hint === "image" ||
      (post.data.post_hint === "rich:video" &&
        post.data.preview?.reddit_video_preview?.fallback_url)
  );

  return (
    <div className="mx-auto my-8 w-full max-w-7xl columns-1 px-4 lg:columns-2">
      {posts.map((post) => (
        <Card
          key={post.data.id}
          className="group relative mb-4 h-fit w-full py-2"
        >
          <CardHeader className="absolute -top-full left-0 flex flex-col items-start bg-white px-4 pb-6 transition duration-400 group-hover:top-0 dark:bg-black">
            <p className="mb-4 line-clamp-1 text-ellipsis text-tiny font-bold uppercase">
              {post.data.title}
            </p>
            <Link
              href={`/subreddit/${post.data.subreddit.toLowerCase()}`}
              className="text-large font-bold"
            >
              {post.data.subreddit}
            </Link>
          </CardHeader>
          <CardBody className="w-full overflow-visible py-2">
            {post.data.post_hint === "image" ? (
              <Image
                alt="Card background"
                className="h-full w-full rounded-xl object-contain"
                src={post.data.url}
                loading="lazy"
                width={2000}
                height={2000}
              />
            ) : (
              <video
                src={post.data.preview.reddit_video_preview.fallback_url}
                className="h-full w-full rounded-xl object-contain"
                controls
                width={2000}
                height={2000}
              />
            )}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
