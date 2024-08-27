"use client";
import Image from "next/image";
import { IoLocation } from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import { IoLogoTwitter } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

interface GitHubUser {
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string | null;
  created_at: string;
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: boolean | null;
  html_url: string;
  id: number;
  location: string | null;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string;
  updated_at: string;
  url: string;
}

const Search: React.FC = () => {
  const [userName, setUserName] = useState("Mirmansur");
  const { isLoading, isFetching, error, data, refetch } = useQuery<GitHubUser>({
    queryKey: ["repoData", userName],
    queryFn: () =>
      fetch(`https://api.github.com/users/${userName}`).then((res) =>
        res.json()
      ),
    enabled: false, // Disable automatic fetching
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    refetch(); // Manually trigger a refetch
  }

  return (
    <div className="flex justify-center items-center flex-col mt-28">
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </form>
      </div>
      <section className="w-full max-w-md p-4 bg-white shadow-md rounded-lg mt-10 flex flex-col">
        {isFetching && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && (
          <>
            <section className="flex items-center gap-10">
              <Image
                width={200}
                height={200}
                src={data.avatar_url}
                alt="user-img"
                className="h-20 w-20 rounded-full"
              />
              <section className="text-blue-950">
                <div>
                  <h1>{data.name}</h1>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://github.com/${data.login}`}
                  >
                    {data.login}
                  </a>
                </div>
              </section>
            </section>
            <section className="text-blue-950 mt-3">
              <p>
                {data.bio ?? (
                  <span className="opacity-60">This profile has no bio</span>
                )}
              </p>
            </section>
            <section>
              <div className="flex justify-between gap-3 rounded-lg bg-stone-100 px-6 py-4 min-h-[50px] mt-3">
                <div className="flex flex-col items-center text-blue-950 font-bold">
                  <p>Repos</p>
                  <p>{data.public_repos}</p>
                </div>
                <div className="flex flex-col items-center text-blue-950 font-bold">
                  <p>Followers</p>
                  <p>{data.followers}</p>
                </div>
                <div className="flex flex-col items-center text-blue-950 font-bold">
                  <p>Following</p>
                  <p>{data.following}</p>
                </div>
              </div>
              <div className="flex flex-col mt-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center font-bold text-blue-950">
                    <IoLocation className="text-xl" />
                    <p>
                      {data.location ?? (
                        <span className="opacity-60">Not Available</span>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center font-bold text-blue-950">
                    <LuLink className="text-xl" />
                    <p>
                      <a
                        className="hover:underline opacity-60 max-w-[200px] overflow-hidden"
                        href={data.blog ?? "#"}
                      >
                        {data.blog}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center font-bold text-blue-950">
                    <IoLogoTwitter className="text-xl" />
                    <p>
                      {data.twitter_username ?? (
                        <span className="opacity-60">Not Available</span>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center font-bold text-blue-950">
                    <BsBuildings className="text-xl" />
                    <p>
                      {data.company ?? (
                        <span className="opacity-60">Not Available</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </section>
    </div>
  );
};

export default Search;
