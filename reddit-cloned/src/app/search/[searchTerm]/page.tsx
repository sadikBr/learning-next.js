import Image from "next/image";

import { Card, CardBody, CardHeader, Link, User } from "@nextui-org/react";

export default async function ExtendedSearchPage({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) {
  const subredditsResponse = await fetch(
    `https://www.reddit.com/r/subreddit/search.json?type=sr&q=${searchTerm.split(" ").join("")}&limit=15`
  );
  const subredditsData = await subredditsResponse.json();
  const subreddits = subredditsData.data?.children.map((subreddit) => {
    return {
      displayName: subreddit.data.display_name,
      icon: subreddit.data.community_icon.split("?")[0],
      members: Number(subreddit.data.subscribers),
    };
  });

  const response = await fetch(
    `https://www.reddit.com/r/subreddit/search.json?q=${searchTerm.split(" ").join("")}&limit=100`
  );
  const json = await response.json();

  const posts = json.data.children.filter(
    (post) =>
      post.data.post_hint === "image" ||
      (post.data.post_hint === "hosted:video" &&
        (post.data?.media?.reddit_video?.fallback_url ||
          post.data?.secure_media?.reddit_video?.fallback_url))
  );

  return (
    <div className="mx-auto my-8 w-full max-w-7xl px-4">
      <Card className="mx-auto max-w-fit">
        <CardHeader className="font-extrabold">Subreddits</CardHeader>
        {subreddits && subreddits.length > 0 && (
          <CardBody className="flex flex-row items-center justify-start gap-8">
            {subreddits &&
              subreddits.length > 0 &&
              subreddits.map((subreddit) => (
                <Link
                  key={subreddit.displayName}
                  href={`/subreddit/${subreddit.displayName}`}
                >
                  <User
                    className="flex flex-col items-center justify-center"
                    name={subreddit.displayName.substring(0, 10)}
                    avatarProps={{
                      src: `${subreddit.icon}`,
                    }}
                  />
                </Link>
              ))}
          </CardBody>
        )}
      </Card>
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
                  src={
                    post.data?.media?.reddit_video?.fallback_url ||
                    post.data?.secure_media?.reddit_video?.fallback_url
                  }
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
