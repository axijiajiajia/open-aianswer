import React from 'react';

const Blog: React.FC = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          <h1 className="text-center text-3xl font-bold md:text-5xl">
          AI Answer Generator blog
          </h1>
          <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Explore content related to AI marketing
          </p>
          {/* Content */}
          <div className="mb-8 grid gap-5 sm:grid-cols-2 sm:justify-items-stretch md:mb-12 md:grid-cols-3 lg:mb-16 lg:gap-6">
            {/* Item */}
            <a href="/blogcontent01" className="h-ax-w-full flex flex-col gap-4 rounded-md px-4 md:px-2">
          <img alt="" src="/blog-images/blog01.jpg" />
          <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
            <div className="mb-2 flex flex-col items-start gap-2">
              <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                <p>AI</p>
              </div>
              <p className="text-lg font-bold md:text-2xl">Leveraging AI and Data Analytics in Marketing</p>
            </div>
            <p className="text-sm text-gray-500 max-w-72"> In today's fast-paced digital landscape, the importance of artificial intelligence   </p>
          </div>
        </a>
            {/* Item */}
            <a href="#" className="h-ax-w-full flex flex-col gap-4 rounded-md px-4 md:px-2">
          <img alt="" src="/blog-images/blog02.jpg" />
          <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
            <div className="mb-2 flex flex-col items-start gap-2">
              <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                <p>SEO</p>
              </div>
              <p className="text-lg font-bold md:text-2xl">8 SEO Hiring Managers Share Their #1 Interview Question</p>
            </div>
            <p className="text-sm text-gray-500 max-w-72"> Are you frantically Googling “SEO interview questions” because you’ve got an upcoming interview   </p>
          </div>
        </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Blog;