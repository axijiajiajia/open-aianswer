import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          AI Answer Generator
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-600 hover:text-gray-800">
                Blog
              </Link>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;