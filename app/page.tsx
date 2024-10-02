import { Metadata } from 'next'
import EnglishHome from './en/page'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://aianswer.pro/',
  },
}

export default function Home() {
  return <EnglishHome />;
}
