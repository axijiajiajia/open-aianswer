import { Metadata } from 'next';
import Link from 'next/link';
import QuestionForm from '../components/QuestionForm';
import LanguageSwitcher from '../components/LanguageSwitcher';

const sampleQuestions = [
  { 
    category: "Artificial Intelligence", 
    questions: [
      "How can AI be leveraged to enhance digital marketing strategies?"
    ]
  },
  { 
    category: "SEO", 
    questions: [
      "What are the most effective on-page SEO techniques for 2024?"
    ]
  },
  { 
    category: "Social Media Marketing", 
    questions: [
      "How can I increase my brand's engagement on Instagram?"
    ]
  }
];

export const metadata: Metadata = {
  title: 'AI Answer Generator - Free, No Signup',
  description: 'Get instant answers to digital marketing questions with free AI Answer Generator. (Free, No Signup)',
  alternates: {
    canonical: 'https://aianswer.pro/en',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex-1">
            <Link href="/">
              AI Answer Generator
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/" className="text-white hover:text-blue-300 mx-4">Home</Link>
            <Link href="/blog" className="text-white hover:text-blue-300 mx-4">Blog</Link>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <a href="https://ko-fi.com/aianswer" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
              Buy Me a Coffee
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <div className="p-8">
        <header className="mb-12">
          <h1 className="text-6xl font-bold text-center mb-4">AI Answer Generator</h1>
          <p className="text-center text-blue-400 text-2xl mb-2">
            Intelligent Question Answering System - Free, No Sign Up
          </p>
          <p className="text-center text-gray-300 text-xl">
            Empowering marketers with AI-driven insights and solutions
          </p>
        </header>

        <main className="max-w-2xl mx-auto">
          <QuestionForm sampleQuestions={sampleQuestions} />

          {/* Why Choose Our AI Answer Generator? 部分 */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Why Choose Our AI Answer Generator?</h2>
            <div className="bg-gray-800 p-6 rounded-lg space-y-6">
              <h3 className="text-lg font-semibold mb-4">Discover the advantages of our AI-powered solution for marketers:</h3>
              <div className="space-y-6">
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Free and No Sign-up Required</p>
                  <p className="mb-2">Our tool is completely free to use and requires no sign-up, allowing you to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Get instant answers without any financial commitment</li>
                    <li>Quickly test the tool's capabilities for your specific needs</li>
                    <li>Share the tool with your team members or clients without restrictions</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">User-Friendly Interface</p>
                  <p className="mb-2">Our intuitive design ensures a smooth experience for users of all technical levels:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Simple, one-click process to generate AI responses</li>
                    <li>Mobile-responsive design for on-the-go access</li>
                    <li>Easy-to-read formatting of AI-generated answers for quick comprehension</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Accurate Language Models</p>
                  <p className="mb-2">Powered by cutting-edge AI technology, our tool provides:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Up-to-date information on the latest digital marketing trends and strategies</li>
                    <li>Context-aware responses that understand the nuances of your questions</li>
                    <li>Detailed explanations backed by industry best practices and data</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Unique and Creative Answers</p>
                  <p className="mb-2">Our AI doesn't just regurgitate information; it provides creative insights:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Innovative ideas and strategies you might not have considered</li>
                    <li>Combination of tried-and-true methods with cutting-edge approaches</li>
                    <li>Adaptable suggestions that can be applied to various marketing scenarios</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Time-Saving Solution</p>
                  <p className="mb-2">Maximize your productivity with our efficient AI tool:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Get instant answers to complex marketing questions in seconds</li>
                    <li>Reduce time spent on research and brainstorming sessions</li>
                    <li>Quickly generate ideas for content creation and campaign strategies</li>
                    <li>Access a wealth of marketing knowledge without extensive searching</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Versatile Applications</p>
                  <p className="mb-2">Our AI Answer Generator is suitable for various marketing needs:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>SEO optimization strategies and keyword research</li>
                    <li>Social media content planning and engagement tactics</li>
                    <li>Email marketing campaign ideas and best practices</li>
                    <li>PPC advertising tips and performance improvement suggestions</li>
                    <li>Content marketing strategies for different platforms and audiences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          {/* FAQ 部分 */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">FAQ</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How do I use the AI Answer Generator?</h3>
              <p className="mb-4">Simply enter your question in the text area provided and click on &quot;Generate AI Answer&quot;. The AI will process your question and provide an answer.</p>
              
              <h3 className="text-lg font-semibold mb-2">What kind of questions can I ask?</h3>
              <p className="mb-4">Our AI Answer Generator is specifically designed for digital marketing questions. You can ask about any aspect of online marketing, including SEO, content marketing, social media strategies, email marketing, PPC advertising, and more.</p>
              
              <h3 className="text-lg font-semibold mb-2">Is there a limit to the number of questions I can ask?</h3>
              <p className="mb-4">There is no limit to the number of questions you can ask. However, each question should be within 500 characters.</p>
              
              <h3 className="text-lg font-semibold mb-2">What should I do if I encounter an error?</h3>
              <p>If you encounter an error, please try again later. If the problem persists, you can contact support@aianswer.pro for assistance.</p>
            </div>
          </div>
        </main>

        {/* 页脚 */}
        <footer className="mt-16 text-center text-gray-500">
          <p>&copy; 2024 AI Answer Generator. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}