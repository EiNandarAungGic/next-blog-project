import React from "react";

const PostFooter = () => {
  return (
    <footer className="border-t border-gray-300 mt-20">
      <div className="py-28 flex flex-col lg:flex-row items-center">
        <h1 className="text-4xl font-bold text-center lg:text-left lg:w-1/2 mb-8">
          Statically Generated with Next.js.
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <button className="py-3 px-11 mb-8 bg-black text-white font-bold hover:bg-white hover:text-black border border-black">
            <a
              href={`https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts`}
            >
              Read Documentation
            </a>
          </button>
          <div className="px-10 font-bold mb-8">
            <a
              className="hover:underline"
              href={`https://github.com/EiNandarAungGic/next-blog-project`}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PostFooter;
