"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostFooter from "../footer/page";

const getPostById = async (id) => {
  const res = await axios.get(`http://localhost:4000/posts/${id}`);
  return res.data;
};

const PostById = () => {
  const router = useRouter();
  const { id } = useParams();

  const {
    data: post,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["get", "posts", id],
    queryFn: () => getPostById(id),
    enabled: !!id,
  });

  return (
    <div>
      {isLoading && "Loading..."}
      {isError && "Error"}
      {isSuccess && (
        <div className="container mx-auto px-4">
          <button
            className="text-2xl md:text-4xl font-bold mb-20 mt-8"
            onClick={() => router.back()}
          >
            <a className="hover:underline">Blog.</a>
          </button>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 text-center md:text-left">
            {post.title}
          </h1>
          <div className="flex items-center mb-8">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={post.author_img}
            />
            <div className="text-xl font-bold">{post.posted_by}</div>
          </div>
          <div>
            <img src={post.cover_img} />
          </div>
          <div className="container mx-auto w-full md:w-2/5 mt-16 text-lg">
            <p className="mb-9">March 16, 2020</p>
            <p>{post.more_contents[0]}</p>
            <p className="mt-5 mb-10">{post.more_contents[1]}</p>
            <h1 className="mb-4 text-3xl">Lorem Ipsum</h1>
            <p>{post.more_contents[2]}</p>
          </div>
          <PostFooter />
        </div>
      )}
    </div>
  );
};

export default PostById;
