import Link from 'next/link';
import QuestionForm from '../components/QuestionForm';
import LanguageSwitcher from '../components/LanguageSwitcher';

const sampleQuestions = [
  { 
    category: "人工智能", 
    questions: [
      "如何利用人工智能增强数字营销策略？"
    ]
  },
  { 
    category: "搜索引擎优化", 
    questions: [
      "2024年最有效的页面SEO技术有哪些？"
    ]
  },
  { 
    category: "社交媒体营销", 
    questions: [
      "如何提高我的品牌在Instagram上的参与度？"
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex-1">
            <Link href="/zh">
              AI Answer Generator
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/zh" className="text-white hover:text-blue-300 mx-4">首页</Link>
            <Link href="#" className="text-white hover:text-blue-300 mx-4">博客</Link>
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
          <h1 className="text-6xl font-bold text-center mb-4">AI答案生成器</h1>
          <p className="text-center text-blue-400 text-2xl mb-2">
            智能问答系统 - 免费使用，无需注册
          </p>
          <p className="text-center text-gray-300 text-xl">
            为营销人员提供AI驱动的洞察和解决方案
          </p>
        </header>

        <main className="max-w-2xl mx-auto">
          <QuestionForm sampleQuestions={sampleQuestions} />

          {/* 为什么选择我们的AI答案生成器？ */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">为什么选择我们的AI答案生成器？</h2>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">您应该选择这个AI答案生成工具，因为它具有以下优势：</h3>
              <ul className="list-disc list-inside">
                <li className="mb-2">完全免费使用，无需注册。</li>
                <li className="mb-2">我们的工具用户友好，不需要任何技术技能。</li>
                <li className="mb-2">它使用精确的语言模型来编写详细和有见地的答案。</li>
                <li className="mb-2">我们的创意AI答案生成器提供独特的答案，您可以在任何地方使用。</li>
              </ul>
            </div>
          </div>

          {/* 常见问题 */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">常见问题</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">如何使用AI答案生成器？</h3>
              <p className="mb-4">只需在提供的文本区域输入您的问题，然后点击"生成AI答案"。AI将处理您的问题并提供答案。</p>
              
              <h3 className="text-lg font-semibold mb-2">我可以问什么类型的问题？</h3>
              <p className="mb-4">我们的AI答案生成器专门设计用于数字营销问题。您可以询问有关在线营销的任何方面，包括SEO、内容营销、社交媒体策略、电子邮件营销、PPC广告等。</p>
              
              <h3 className="text-lg font-semibold mb-2">我可以问的问题数量有限制吗？</h3>
              <p className="mb-4">您可以问的问题数量没有限制。但是，每个问题应该在500个字符以内。</p>
              
              <h3 className="text-lg font-semibold mb-2">如果遇到错误该怎么办？</h3>
              <p>如果遇到错误，请稍后再试。如果问题仍然存在，您可以联系support@aianswer.pro寻求帮助。</p>
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