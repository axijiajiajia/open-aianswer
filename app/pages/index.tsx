import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-100">
        <h1 className="text-2xl font-bold">Your Website</h1>
        <Link href="/blog">
          <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Blog
          </a>
        </Link>
      </header>
      {/* 其他首页内容 */}
    </div>
  );
};

export default Home;