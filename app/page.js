import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button className="container mx-auto w-1/5 h-10  items-center border bg-black text-white">
        <a className="font-bold text-md" href={`/posts`}>
          Go To Posts
        </a>
      </button>
    </div>
  );
};

export default Home;
