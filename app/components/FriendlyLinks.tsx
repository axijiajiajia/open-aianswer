import React from 'react';
import Link from 'next/link';

const FriendlyLinks = () => {
  return (
    <footer className="bg-gray-100 !bg-gray-100" style={{backgroundColor: '#f3f4f6'}}>
      <div className="flex-col lg:flex px-5 py-4 md:px-8 md:py-6">
        {/* TOP CONTAINER */}
        <div className="lg:flex lg:flex-row lg:justify-between">
          {/* LOGO DIV */}
          <div>
            {/* LOGO TEXT */}
            <h2 className="text-xl font-bold text-black">AI Answer Generator</h2> {/* 增大了字体大小 */}

            <p className="font-inter mt-2 max-w-80 text-sm font-light text-gray-500"> {/* 增大了字体大小 */}
              Get instant answers to digital marketing questions with free AI Answer Generator. (Free, No Signup)
            </p>
            {/* SOCIAL MEDIA ICONS */}
            {/* 移除了 Facebook 图标和链接 */}
          </div>
          {/* FOOTER LINKS */}
          <div className="flex grow flex-row flex-wrap lg:mx-8 lg:flex-nowrap lg:justify-center">
            {/* LINK BLOCK */}
            <div className="my-2 mr-6 flex max-w-40 grow basis-24 flex-col space-y-2 lg:mx-8 lg:mt-0">
              <a href="https://aiwith.me" title="Discover thousands of AI Tools" className="font-inter text-xs font-light text-gray-500">AI With Me</a>
              <a href="https://fluxai.pro/" title="Flux AI Pro" className="font-inter text-xs font-light text-gray-500">Flux AI Pro</a>
              <a href="https://tap4.ai/ai/flux-ai-io" title="Flux Image AI" className="font-inter text-xs font-light text-gray-500">Flux Image AI</a>
              <a href="https://aitoolcenter.com/" title="AI Tool Center" className="font-inter text-xs font-light text-gray-500">AI Tool Center</a>
              <a href="https://bai.tools" target="_blank" className="font-inter text-xs font-light text-gray-500">BAI.tools</a>
            </div>
            {/* Add other link blocks here */}
          </div>
          {/* LOCATION & SUPPORT */}
          <div className="mt-4 flex flex-col lg:mt-0">
            {/* ITEM */}
            <div className="mb-2 flex flex-row items-center max-w-60">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 5.25L12 13.5L3 5.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-inter ml-2 text-xs text-black">support@aianswer.pro</p>
            </div>
            {/* Add other items here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FriendlyLinks;