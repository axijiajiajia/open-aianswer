import { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'AI Answer Generator - Free, No Signup',
  description: 'Get instant answers to digital marketing questions with free AI Answer Generator. (Free, No Signup)',
  alternates: {
    canonical: 'https://aianswer.pro/zh',
  },
}

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
            <h2 className="text-2xl font-bold mb-6">为什么选择我们的AI答案生成器？</h2>
            <div className="bg-gray-800 p-6 rounded-lg space-y-6">
              <h3 className="text-lg font-semibold mb-4">探索我们为营销人员提供的AI驱动解决方案的优势：</h3>
              <div className="space-y-6">
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">免费使用，无需注册</p>
                  <p className="mb-2">我们的工具完全免费使用，无需注册，让您可以：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>无需任何财务承诺即可获得即时答案</li>
                    <li>快速测试工具对您特定需求的适用性</li>
                    <li>无限制地与团队成员或客户分享工具</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">用户友好界面</p>
                  <p className="mb-2">我们的直观设计确保所有技术水平的用户都能获得流畅的体验：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>简单的一键式流程生成AI响应</li>
                    <li>移动响应式设计，随时随地访问</li>
                    <li>AI生成答案的易读格式，便于快速理解</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">精确的语言模型</p>
                  <p className="mb-2">由尖端AI技术驱动，我们的工具提供：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>关于最新数字营销趋势和策略的最新信息</li>
                    <li>理解问题细微差别的上下文感知响应</li>
                    <li>基于行业最佳实践和数据的详细解释</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">独特和创意的答案</p>
                  <p className="mb-2">我们的AI不仅仅是重复信息，它提供创意洞察：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>您可能没有考虑过的创新想法和策略</li>
                    <li>结合经过验证的方法和前沿方法</li>
                    <li>可应用于各种营销场景的适应性建议</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">节省时间的解决方案</p>
                  <p className="mb-2">通过我们高效的AI工具最大化您的生产力：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>在几秒钟内获得复杂营销问题的即时答案</li>
                    <li>减少研究和头脑风暴会议所花费的时间</li>
                    <li>快速为内容创作和营销策略生成想法</li>
                    <li>无需广泛搜索即可获取丰富的营销知识</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">多样化应用</p>
                  <p className="mb-2">我们的AI答案生成器适用于各种营销需求：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>SEO优化策略和关键词研究</li>
                    <li>社交媒体内容规划和参与策略</li>
                    <li>电子邮件营销活动创意和最佳实践</li>
                    <li>PPC广告技巧和性能改进建议</li>
                    <li>针对不同平台和受众的内容营销策略</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 常见问题 */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">常见问题</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">如何使用 AI 答案生成器？</h3>
                <p>只需在提供的文本区域输入您的问题，然后点击"生成 AI 答案"。AI 将处理您的问题并提供答案。</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">我可以问什么类型的问题？</h3>
                <p>我们的 AI 答案生成器专门设计用于数字营销问题。您可以询问有关在线营销的任何方面，包括 SEO、内容营销、社交媒体策略、电子邮件营销、PPC 广告等。</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">我可以问的问题数量有限制吗？</h3>
                <p>您可以问的问题数量没有限制。但是，每个问题应该在 500 个字符以内。</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">如果遇到错误该怎么办？</h3>
                <p>如果遇到错误，请稍后再试。如果问题仍然存在，您可以联系 support@aianswer.pro 寻求帮助。</p>
              </div>
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