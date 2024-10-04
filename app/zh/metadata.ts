import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI 答案生成器 - 免费，无需注册',
  description: '使用免费的 AI 答案生成器获取数字营销问题的即时答案。（免费，无需注册）',
  alternates: {
    canonical: 'https://aianswer.pro/zh',
  },
}

export async function generateMetadata(): Promise<Metadata> {
  return metadata;
}