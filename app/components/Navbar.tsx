'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Navbar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">AI Answer Generator</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="py-4 px-2 text-gray-500 hover:text-gray-900">Home</Link>
            <Link href="/blog" className="py-4 px-2 text-gray-500 hover:text-gray-900">Blog</Link>
            {/* 添加其他导航项 */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;