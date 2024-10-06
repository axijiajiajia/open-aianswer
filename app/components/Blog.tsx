import React from 'react';

const Blog: React.FC = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold md:text-5xl">
          AI Answer Generator blog
          </h2>
          <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Explore content related to AI marketing
          </p>
          {/* Content */}
          <div className="mb-8 grid gap-5 sm:grid-cols-2 sm:justify-items-stretch md:mb-12 md:grid-cols-3 lg:mb-16 lg:gap-6">
            {/* Item */}
            {/* ... (保留您提供的三个博客项目代码) ... */}
          </div>
          {/* Button */}
          <a
            href="#"
            className="rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;