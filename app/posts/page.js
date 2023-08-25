"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import PostFooter from "./footer/page";

const Home = () => {
  const getAllPosts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/posts");
      return res.data;
    } catch (error) {
      return Promise.reject(new Error("Error"));
    }
  };

  const {
    data: posts,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["get", "posts"],
    queryFn: getAllPosts,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading posts.</p>;
  }

  return (
    <>
      {isSuccess && (
        <div className="container mx-auto px-4 py-8">
          <div className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16">
            <h1 className="text-5xl md:text-8xl font-bold mb-8">Blog.</h1>
            <p className="text-lg text-center">
              A statically generated blog example using{" "}
              <a href={`https://nextjs.org/`} className="underline">
                Next.js
              </a>{" "}
              and Markdown.
            </p>
          </div>
          <div>
            <div>
              <div className="">
                <Link href={`posts/${posts[0].id}`}>
                  <img src={posts[0].cover_img} />
                </Link>
              </div>
              <div className="flex flex-col md:flex-row justify-between mt-8">
                <div className="w-11/12">
                  <div className="mb-4 text-3xl lg:text-5xl">
                    <Link
                      href={`posts/${posts[0].id}`}
                      className="hover:underline"
                    >
                      {posts[0].title}
                    </Link>
                  </div>
                  <div className="mb-4 md:mb-0 text-lg">{posts[0].date}</div>
                </div>
                <div className="w-11/12">
                  <div className="text-lg leading-relaxed mb-4">
                    {posts[0].content}
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src={posts[0].author_img}
                    />
                    <div className="text-xl font-bold">
                      {posts[0].posted_by}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-20">
                <h1 className="my-8 text-6xl md:text-7xl font-bold">
                  More Stories
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 lg:gap-x-28">
                  {posts.slice(1).map((post) => (
                    <div key={post.id}>
                      <div className="w-full">
                        <Link href={`posts/${post.id}`}>
                          <img src={post.cover_img} alt={post.title} />
                        </Link>
                        <div className="mt-3">
                          <p className="text-3xl">
                            <Link
                              href={`posts/${post.id}`}
                              className="hover:underline"
                            >
                              {post.title}
                            </Link>
                          </p>
                          <p className="mt-3 text-lg">{post.date}</p>
                          <p className="mt-3 text-lg">{post.content}</p>
                        </div>
                        <div className="flex items-center mt-4 mb-10">
                          <img
                            className="w-12 h-12 rounded-full mr-4"
                            src={post.author_img}
                            alt={`${post.posted_by}'s profile`}
                          />
                          <div className="text-xl font-bold">
                            {post.posted_by}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <PostFooter />
        </div>
      )}
    </>
  );
};

export default Home;
