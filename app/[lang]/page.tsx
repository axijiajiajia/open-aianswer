import { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
  // 获取当前页面的实际路径
  const path = params.lang === 'en' ? '' : params.lang

  return {
    alternates: {
      canonical: `https://yourdomain.com/${path}`,
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