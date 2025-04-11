'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from './../../Header';
import Image from 'next/image';

interface BestItem {
  id: number;
  name: string;
  price: number;
  category: string;
  isBest: boolean;
  rank?: number;
  image: string;
  originalPrice: number;
}

const categoryMap: Record<string, string> = {
  succulent: '다육이',
  foliage: '관엽식물',
  hydroponic: '수경재배식물',
  air_purifying: '공기정화식물',
  lucky: '행운상징 식물',
  etc: '기타',
};

const BestItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState<BestItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [topFiveItem, setTopFiveItem] = useState<BestItem | null>(null);

  const fetchDetailItem = async () => {
    const res = await fetch(`/api/best-items/${id}`);
    const data = await res.json();
    setItem(data);
    setSelectedImage(data.image || '/images/default.jpg');
  };

  const topFiveItems = async () => {
    const res = await fetch('/api/best-items?isBest=true&limit=5');
    const data = await res.json();
    setTopFiveItem(data.data);
  };

  useEffect(() => {
    if (id) {
      fetchDetailItem();
      topFiveItems();
    }
  }, [id]);

  if (!item) return <div className="text-center mt-10">로딩 중...</div>;

  return (
    <>
      <Header />
      <div className="max-w-custom mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[400px_auto] gap-10 font-sans border-b-gray-300 border-b-1 pb-10">
        {/* 이미지 섹션 */}
        <div>
          <Image src={selectedImage} alt="상품 메인" width={300} height={300} className="w-full rounded-xl shadow-md" />
        </div>

        {/* 정보 섹션 */}
        <div className="flex flex-col justify-between ">
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <div className="space-y-6">
            <p className="text-lg text-gray-600">{categoryMap[item.category]}</p>

            <div className="space-y-1">
              {item.originalPrice && <p className="text-gray-500 line-through">₩{item.originalPrice.toLocaleString()}</p>}
              <p className="text-2xl font-bold text-green-600">₩{item.price.toLocaleString()}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">배송비: ₩3,500</span>
              <span className="text-xs text-gray-400">(조건부 무료배송)</span>
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="quantity" className="text-sm font-medium">
                수량
              </label>
              <input id="quantity" type="number" min="1" defaultValue="1" className="w-16 border rounded-lg px-2 py-1 text-center" />
            </div>

            <div className="flex gap-3 mt-6">
              <button className="flex-1 bg-black text-white py-3 rounded-xl hover:opacity-80 transition">장바구니</button>
              <button className="flex-1 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition">바로구매</button>
              <button className="flex-1 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition">관심상품</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestItemDetails;
