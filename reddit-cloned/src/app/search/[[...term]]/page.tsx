"use client";

import { useEffect, useRef, useState } from "react";

import { Card, CardBody, Input, Link, User } from "@nextui-org/react";

import Loading from "@/app/loading";
import { formatNumber } from "@/utils/formatters/format-number";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [subreddits, setSubreddits] = useState<
    { displayName: string; icon: string; members: number }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!searchTerm) return;
    setLoading(true);
    setSubreddits([]);

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    async function fetchSubreddits() {
      const response = await fetch(
        `https://www.reddit.com/r/subreddit/search.json?type=sr&q=${searchTerm}&limit=15&include_over_18=true`
      );
      const json = await response.json();

      const subreddits = json.data?.children.map((subreddit) => {
        return {
          displayName: subreddit.data.display_name,
          icon: subreddit.data.community_icon.split("?")[0],
          members: Number(subreddit.data.subscribers),
        };
      });

      setSubreddits(subreddits);
    }

    timeout.current = setTimeout(() => {
      fetchSubreddits();
      setLoading(false);
    }, 300);

    return () => {
      if (!timeout.current) return;
      return clearTimeout(timeout.current);
    };
  }, [searchTerm]);

  return (
    <div className="mx-auto my-8 grid w-full max-w-xl grid-cols-3 gap-4">
      <div className="col-span-full mx-auto mb-2 w-full max-w-sm">
        <Input
          type="text"
          label="🔍 Search"
          value={searchTerm}
          onInput={(event) => setSearchTerm(event.currentTarget.value)}
        />
      </div>

      <Card className="col-span-full flex flex-col gap-4">
        {(loading || (subreddits && subreddits.length > 0)) && (
          <CardBody className="flex flex-col gap-4">
            {loading && <Loading />}
            {subreddits &&
              subreddits.length > 0 &&
              subreddits.map((subreddit) => (
                <Link
                  key={subreddit.displayName}
                  href={`/subreddit/${subreddit.displayName}`}
                >
                  <User
                    name={subreddit.displayName}
                    description={`${formatNumber(subreddit.members)} members`}
                    avatarProps={{
                      src: `${subreddit.icon}`,
                    }}
                  />
                </Link>
              ))}
          </CardBody>
        )}
      </Card>
    </div>
  );
}
