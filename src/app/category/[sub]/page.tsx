import Header from '@/app/Header';
import { categoryMap, Items } from '@/app/types/item';
import { calculateDiscountPrice } from '@/app/utils/utils';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryPageProps {
  params: {
    sub: string;
  };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { sub } = params;

  // API 호출 (query string에 category 사용)
  const res = await fetch(`http://localhost:3000/api/best-items?category=${sub}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch items');
  }

  const items = await res.json();

  console.log('item', sub, items);

  if (!items) return <div className="text-center mt-10">로딩 중...</div>;

  return (
    <div>
      <Header />
      <div className="max-w-custom text-right">검색</div>
      <h1 className="title-p px-4">{categoryMap[sub]}</h1>
      <section className="my-10">
        <ul className="w-full grid grid-cols-[repeat(4,1fr)] gap-x-5 gap-y-12 mb-10 px-4">
          {items?.data.map((item: Items) => (
            <li key={item.id}>
              <Link className="inline-block w-full rounded-2xl" href={{ pathname: `/detail/${item.id}` }}>
                <div className="max-w-xs rounded-2xl overflow-hidden shadow-md">
                  <div className="w-full h-auto bg-gray-200">
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
                    <div className="mt-2 text-sm">
                      <span className="text-red-500 font-semibold mr-1">{item.discount}%</span>
                      <span className="font-bold">{calculateDiscountPrice(item.price, item.discount).toLocaleString()}원</span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CategoryPage;
