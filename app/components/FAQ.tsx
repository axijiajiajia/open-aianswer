'use client';

import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How can I contribute to Devjoy?",
      answer: "You can contribute to Devjoy by submitting your own projects, providing feedback, or helping to improve existing resources."
    },
    // ... 添加更多 FAQ 项目
  ];

  return (
    <div>
      <h2 className="mx-auto text-center font-bold text-black lg:text-3xl lg:text-4xl">FAQ</h2>
      {faqItems.map((item, index) => (
        <div key={index} className="relative my-3 w-full rounded-md border border-gray-300 px-12 py-8">
          <div className="max-w-3xl">
            <h2 className="font-bold white text-xl">{item.question}</h2>
          </div>
          <button 
            className="absolute right-5 top-9"
            onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="white"></circle>
              {expandedQuestion === index ? (
                <path d="M7.05078 12H16.9508" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              ) : (
                <>
                  <path d="M7.05078 12H16.9508" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12 7.05005V16.95" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </>
              )}
            </svg>
          </button>
          {expandedQuestion === index && (
            <div className="mt-4">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;