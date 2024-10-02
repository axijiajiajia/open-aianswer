import { Metadata } from 'next'
import EnglishHome from './en/page'
import FriendlyLinks from './components/FriendlyLinks'

export const metadata: Metadata = {
  title: 'AI Answer Generator - Free, No Signup',
  description: 'Get instant answers to digital marketing questions with free AI Answer Generator. (Free, No Signup)',
  alternates: {
    canonical: 'https://aianswer.pro/',
  },
}

export default function Home() {
  return (
    <>
      <EnglishHome />
      <FriendlyLinks />
    </>
  );
}
