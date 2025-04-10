'use client';
import Header from '../Header';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Item = {
  id: number;
  name: string;
  price: number;
  category: string;
  isBest: boolean;
  rank?: number;
  image: string;
};

const categoryMap: Record<string, string> = {
  succulent: '다육이',
  foliage: '관엽식물',
  hydroponic: '수경재배식물',
  air_purifying: '공기정화식물',
  lucky: '행운상징 식물',
  etc: '기타',
};

const Best = () => {
  const [bestItem, setBestItem] = useState<Item[]>([]);

  const currentPage = 1;
  const totalPages = 10;

  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const fetchBestItems = async () => {
    const res = await fetch('/api/best-items?isBest=true');
    const data = await res.json();
    setBestItem(data);
  };

  useEffect(() => {
    fetchBestItems();
  }, []);

  useEffect(() => {
    console.log('bestItem', bestItem);
  }, [bestItem]);

  return (
    <div>
      <Header />
      <div className="max-w-custom text-right">검색</div>
      <h1>베스트 아이템</h1>
      <section className="my-10">
        <ul className="w-full grid grid-cols-[repeat(4,1fr)] gap-x-5 gap-y-20 mb-10 px-4">
          {bestItem?.map((item: Item) => (
            <li key={item.id}>
              <a className="inline-block w-full rounded-2xl" href="">
                <div className="max-w-xs rounded-2xl overflow-hidden shadow-md">
                  <div className="w-full h-auto bg-gray-200 p-4">
                    <Image
                      className="w-full h-[269px] overflow-hidden object-cover object-top-left mx-auto"
                      width={269}
                      height={269}
                      src={item.image}
                      alt=""
                    ></Image>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-gray-500">{categoryMap[item.category]}</span>
                    <p className="text-lg font-bold">{item.price.toLocaleString()}원</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
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
