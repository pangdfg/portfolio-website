"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

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
    <article className="grid grid-cols-1 lg:grid-cols-2 relative w-full rounded-3xl p-6 lg:p-12 border border-amber-50 shadow-[10px_10px_0px_0px_rgba(255,200,257)]">

      {/* LEFT: Avatar */}
      <div className="w-full ">
        <Image
          src={user.avatar_url}
          alt={user.name}
          width={150}
          height={150}
          className="rounded-full mx-auto md:inline-block lg:w-90 md:w-50"
          priority
        />
      </div>

      {/* RIGHT: Info */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-between pl-0 md:pl-6 pt-15 lg:pt-0">
        
        <span className="text-amber-400 font-medium text-lg">
          GitHub Profile
        </span>

        <Link href={user.html_url} target="_blank">
          <h2 className="my-2 text-4xl font-bold hover:underline hover:text-amber-200">
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
            className="ml-4 rounded-lg bg-white text-black px-6 py-2 font-semibold hover:bg-amber-900 hover:text-amber-50 hover:border"
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
      className="p-4 md:p-5 rounded-xl bg-gray-900 border border-amber-50 flex flex-col justify-between shadow-[7px_7px_0px_0px_rgba(255,255,217)]"
    >
      <div className="container mx-auto px-5 max-w-2xl">
        <h3 className="lg:text-lg text-base font-semibold">{repo.name}</h3>

        <p className="text-gray-400 text-xs lg:text-base mt-2">
          {repo.description || "No description"}
        </p>

        <span className="text-xs text-amber-400 mt-2 inline-block">
          {repo.language || ""}
        </span>
      </div>

      <div className="flex  md:flex-row ml-auto mt-4 p-2">
        
        {repo.homepage && (
          <Link href={repo.homepage} target="_blank" className="underline rounded-lg px-4 py-1.5 text-white text-sm lg:text-base hover:text-amber-300 hover:bg-black">
            Live
          </Link>
        )}

        <Link href={repo.html_url} target="_blank" className="w-5 md:w-6 lg:w-7">
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
      <Head>
        <title>Github Repositories</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      <main className="min-h-screen flex flex-col bg-gray-950 text-white">
        <Layout className="pt-20">
          <AnimatedText
            text="GitHub Overview"
            className="lg:text-5xl text-xl mb-12 text-center"
          />

          {loading ? (
            <p className="text-center">Loading...</p>
            ) : (
            <>
                {/* USER */}
                <div className="mb-16">
                {user && <GithubProfile user={user} />}
                </div>

                {/* REPO CONTAINER */}
                <div className="px-6">
                <div className="grid grid-cols-2 gap-10 lg:grid-cols-2 sm:grid-cols-1 content-evenly">
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