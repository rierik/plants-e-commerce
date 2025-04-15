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
  discount: number;
  details: string[];
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
  const [topFiveItem, setTopFiveItem] = useState<BestItem[] | null>(null);
  const [visible, setVisible] = useState(false);

  const fetchDetailItem = async () => {
    const res = await fetch(`/api/best-items/${id}`);
    const data = await res.json();
    setItem(data);
    setSelectedImage(data.image || '/images/default.jpg');
  };

  const topFiveItems = async () => {
    const res = await fetch('/api/best-items?isBest=true&limit=20');
    const data = await res.json();
    setTopFiveItem(data.data);
  };

  useEffect(() => {
    if (id) {
      fetchDetailItem();
      topFiveItems();
    }
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!item) return <div className="text-center mt-10">로딩 중...</div>;

  function calculateDiscountPrice(originalPrice: number, discountPercent: number) {
    const discountRate = discountPercent / 100; // % → 소수
    const discountAmount = originalPrice * discountRate;
    const finalPrice = originalPrice - discountAmount;

    return finalPrice;
  }

  return (
    <>
      <Header />
      <div className="max-w-custom mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[400px_auto] gap-10 font-sans border-b-gray-300 border-b-1 pb-10">
        {/* 이미지 섹션 */}
        <div>
          <Image src={selectedImage} alt="상품 메인" width={300} height={300} className="w-full rounded-xl shadow-md" />
        </div>

        {/* 상품 정보 섹션 */}
        <div className="flex flex-col justify-between ">
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <div className="space-y-6">
            <p className="text-lg text-gray-600">{categoryMap[item.category]}</p>

            <div className="space-y-1">
              {item.discount && (
                <div>
                  <span>{item.discount}%</span>
                  <p className="ml-3 inline-block text-gray-500 line-through">{item.price.toLocaleString()}원</p>
                </div>
              )}
              <p className="text-2xl font-bold text-green-600">{calculateDiscountPrice(item.price, item.discount)}원</p>
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

        {/* 인기 상품
        {topFiveItem && (
          <div className="col-span-1 md:col-span-2 mt-10 border-t pt-1 max-w-custom overflow-hidden">
            <h2 className="text-2xl font-bold mb-4">인기 상품</h2>
            <Swiper
              modules={[Navigation, Scrollbar, Autoplay]} // 이렇게 넘기는 방식이 최신
              loop={true} // 슬라이드 루프
              navigation={true} // prev, next button
              slidesPerView={7}
            >
              {topFiveItem.map((item: BestItem) => (
                <SwiperSlide key={item.id}>
                  <li key={item.id} className="w-[144px] flex flex-col items-center border border-gray-300 rounded-lg shadow-sm overflow-hidden">
                    <Image src={item.image || '/images/default.jpg'} alt={item.name} width={180} height={180} className="w-36 h-36 " />
                    <p className="p-2">{item.name}</p>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )} */}
      </div>

      {/* 상세 사진 */}
      <section className="px-4">
        <h2 className="title-p my-10">상세 정보</h2>
        {item.details.map((image: string, index: number) => (
          <div className="w-full h-auto px-36" key={index}>
            <Image src={image} className="my-14 rounded-xl" layout="responsive" width={1} height={1} alt="상세정보"></Image>
          </div>
        ))}
      </section>

      <section></section>

      {visible && (
        <aside>
          <button
            onClick={scrollToTop}
            className="fixed right-5 bottom-5 bg-gray-100 rounded-full text-center leading-12 shadow-lg text-gray-700 cursor-pointer w-12 h-12"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="m-0 mx-auto">
              <path d="M7.69995 16.8L13.7878 10.7121C13.905 10.595 14.0949 10.595 14.2121 10.7121L20.3 16.8" stroke="black" stroke-width="1.4"></path>
            </svg>
          </button>
        </aside>
      )}
    </>
  );
};

export default BestItemDetails;
