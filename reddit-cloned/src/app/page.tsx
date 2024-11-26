import Image from "next/image";

import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react";

export default async function Home() {
  const response = await fetch(
    "https://www.reddit.com/r/earthporn.json?limit=100"
  );
  const json = await response.json();

  const posts = json.data.children.filter(
    (post) =>
      post.data.post_hint === "image" ||
      post.data.post_hint === "rich:video" ||
      (post.data.post_hint === "rich:video" &&
        post.data.preview?.reddit_video_preview?.fallback_url)
  );

  return (
    <div className="mx-auto my-8 w-full max-w-7xl px-4">
      <Link href="/search" className="mx-auto mb-8 block w-full max-w-sm">
        <Button className="w-full">Search</Button>
      </Link>
      <div className="columns-1 lg:columns-2">
        {posts.map((post) => (
          <Card
            key={post.data.id}
            className="group relative mb-4 h-fit w-full py-2"
          >
            <CardHeader className="absolute -top-full left-0 flex flex-col items-start bg-white px-4 pb-6 transition duration-400 group-hover:top-0 dark:bg-black">
              <p className="mb-4 line-clamp-1 text-ellipsis text-tiny font-bold uppercase">
                {post.data.title}
              </p>
              <h4 className="text-large font-bold">u/{post.data.author}</h4>
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
    </div>
  );
}
