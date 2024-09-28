import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import QuestionForm from './components/QuestionForm';
import LanguageSwitcher from './components/LanguageSwitcher';

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
  title: 'AI Answer Generator',
  description: 'Get instant answers to your digital marketing questions with our free AI Answer Generator. No sign-up required!',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <LanguageSwitcher />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VP351RX9F9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VP351RX9F9');
        `}
      </Script>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex-1">
            <Link href="/">
              AI Answer Generator
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/" className="text-white hover:text-blue-300 mx-4">Home</Link>
            <Link href="#" className="text-white hover:text-blue-300 mx-4">Blog</Link>
          </div>
          <div className="flex-1"></div>
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

          {/* 新增的 feature 板块 */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Why Choose Our AI Answer Generator?</h2>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">You should choose this AI answers generating tool for its below-listed benefits:</h3>
              <ul className="list-disc list-inside">
                <li className="mb-2">It&apos;s completely free to use and requires no sign-up.</li>
                <li className="mb-2">Our tool is user-friendly and does not require you to have any technical skills.</li>
                <li className="mb-2">It uses accurate language models to write detailed and insightful answers.</li>
                <li className="mb-2">Our creative AI answer generator provides unique answers to questions that you can use anywhere.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">FAQ</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How do I use the AI Answer Generator?</h3>
              <p className="mb-4">Simply enter your question in the text area provided and click on &quot;Generate AI Answer&quot;. The AI will process your question and provide an answer.</p>
              
              <h3 className="text-lg font-semibold mb-2">What kind of questions can I ask?</h3>
              <p className="mb-4">Our AI Answer Generator is specifically designed for digital marketing questions. You can ask about any aspect of online marketing, including SEO, content marketing, social media strategies, email marketing, PPC advertising, and more. Feel free to submit any marketing-related queries you have.</p>
              
              <h3 className="text-lg font-semibold mb-2">Is there a limit to the number of questions I can ask?</h3>
              <p className="mb-4">There is no limit to the number of questions you can ask. However, each question should be within 500 characters.</p>
              
              <h3 className="text-lg font-semibold mb-2">What should I do if I encounter an error?</h3>
              <p>If you encounter an error, please try again later. If the problem persists, you can contact our support team for assistance.</p>
            </div>
          </div>

          <footer className="mt-16 text-center text-gray-500">
            <p>&copy; 2024 AI Answer Generator. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
