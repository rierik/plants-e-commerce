import Link from 'next/link';
import Header from '../Header';
import Image from 'next/image';

const Best = () => {
  const currentPage = 1;
  const totalPages = 10;

  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div>
      <Header />
      <div className="max-w-custom text-right">검색</div>
      <h1>베스트 아이템</h1>
      <section className="my-10">
        <ul className="w-full grid grid-cols-[repeat(3,1fr)] gap-x-5 gap-y-20 mb-10 px-4">
          <li>
            <a className="inline-block w-full rounded-2xl" href="">
              <div className="max-w-xs rounded-2xl overflow-hidden shadow-md">
                <div className="w-full h-auto bg-gray-200 p-4">
                  <Image width={269} height={269} src={'/favicon.ico'} alt=""></Image>
                </div>
                <h3 className="text-base font-semibold mb-1">제목</h3>
                <span>필터링</span>
                <p className="text-lg font-bold">$145</p>
              </div>
            </a>
          </li>
        </ul>
        <div className="w-full flex justify-center items-center border-t border-t-gray-400 pt-4">
          <div className="flex items-center space-x-2">
            {/* Previous Button */}
            <button className="flex items-center border rounded-md px-3 py-1 text-sm text-gray-900 hover:bg-gray-100 disabled:opacity-50" disabled>
              <span className="mr-1">←</span> Previous
            </button>

            {/* Page Numbers */}
            {getPages().map((page) => (
              <button
                key={page}
                className={`w-8 h-8 rounded-md text-sm ${page === currentPage ? 'bg-gray-200 text-black font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button className="flex items-center border rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
              Next <span className="ml-1">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Best;
