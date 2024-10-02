import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // 获取当前页面的实际路径
  const path = params.lang === 'en' ? '' : params.lang

  return {
    alternates: {
      canonical: `https://aianswer.pro/${path}`,
    },
  }
}

export default function Page() {
  return (
    <div>
      <h1>Welcome to our multilingual page</h1>
      {/* 这里可以添加更多的页面内容 */}
    </div>
  )
}