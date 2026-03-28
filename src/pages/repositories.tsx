"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";

import { getGithubUser, getGithubRepos } from "@/data/api/github";

/* ================= TYPES ================= */

type User = {
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
};  

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  homepage: string;
  language: string;
};


const GithubProfile = ({ user }: { user: User }) => {
  return (
    <article className="grid grid-cols-2 relative w-full rounded-3xl p-12 border border-amber-50 shadow-[10px_10px_0px_0px_rgba(255,200,257)]">

      {/* LEFT: Avatar */}
      <div
        className="w-1/2 md:w-ful"
      >
        <Image
          src={user.avatar_url}
          alt={user.name}
          width={300}
          height={300}
          className="rounded-full md:inline-block"
          priority
        />
      </div>

      {/* RIGHT: Info */}
      <div className="w-1/2  flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        
        <span className="text-amber-400 font-medium text-lg">
          GitHub Profile
        </span>

        <Link href={user.html_url} target="_blank">
          <h2 className="my-2 text-4xl font-bold hover:underline">
            {user.name}
          </h2>
        </Link>

        <p className="text-gray-400">
          {user.bio || "No bio available"}
        </p>

        {/* Stats */}
        <div className="flex gap-6 mt-4 text-sm text-gray-300">
          <span>📦 {user.public_repos} repos</span>
          <span>👥 {user.followers} followers</span>
          <span>➡️ {user.following} following</span>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex items-center">

          <Link
            href={user.html_url}
            target="_blank"
            className="ml-4 rounded-lg bg-white text-black px-6 py-2 font-semibold hover:bg-neutral-950 hover:text-amber-50 hover:border"
          >
            View Profile
          </Link>
        </div>
      </div>
    </article>
  );
};


const RepoCard = ({ repo }: { repo: Repo }) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="p-5 rounded-xl bg-gray-900 border border-amber-50 flex flex-col justify-between shadow-[7px_7px_0px_0px_rgba(255,255,217)]"
    >
      <div>
        <h3 className="text-lg font-semibold">{repo.name}</h3>

        <p className="text-gray-400 text-sm mt-2">
          {repo.description || "No description"}
        </p>

        <span className="text-xs text-amber-400 mt-2 inline-block">
          {repo.language || "Unknown"}
        </span>
      </div>

      <div className="flex justify-between items-center mt-4">
        
        {repo.homepage && (
          <Link href={repo.homepage} target="_blank" className="underline text-sm">
            Live
          </Link>
        )}

        <Link href={repo.html_url} target="_blank" className="w-5">
          <GithubIcon />
        </Link>
      </div>
    </motion.article>
  );
};

/* ================= PAGE ================= */

export default function Projects() {
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [userData, repoData] = await Promise.all([
          getGithubUser(),
          getGithubRepos(),
        ]);

        setUser(userData);
        setRepos(repoData);
      } catch (err) {
        console.error("GitHub error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return (
    <>
      <TransitionEffect />

      <main className="min-h-screen flex flex-col bg-gray-950 text-white">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <AnimatedText
            text="GitHub Overview"
            className="text-5xl mb-12 text-center"
          />

          {loading ? (
            <p className="text-center">Loading...</p>
            ) : (
            <>
                {/* USER */}
                <div className="mb-16 px-6">
                {user && <GithubProfile user={user} />}
                </div>

                {/* REPO CONTAINER */}
                <div className="px-6">
                <div className="grid grid-cols-2 gap-10 lg:grid-cols-2 sm:grid-cols-1">
                    {repos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                    ))}
                </div>
                </div>
            </>
            )}
        </Layout>
      </main>
    </>
  );
}