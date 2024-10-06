import React from 'react';
import Link from 'next/link';

const HomeFooter = () => {
  const advantages = [
    { title: "高效", description: "快速生成准确答案" },
    { title: "智能", description: "基于先进AI技术" },
    { title: "多样化", description: "适用于各种问题类型" },
    { title: "易用", description: "简单直观的用户界面" },
  ];

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Our AI Answer Generator?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <h3 className="font-bold mb-2">{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/about" className="text-blue-600 hover:text-blue-800">About</Link>
          <Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">Blog</Link>
          <a href="https://fluxai.pro/" title="Flux AI Pro" className="text-blue-600 hover:text-blue-800">Flux AI Pro</a>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;