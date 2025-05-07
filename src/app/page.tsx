'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Header from './Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { calculateDiscountPrice } from './utils/utils';
import { categoryMap, Items } from './types/item';

export default function Home() {
  const slideData = [
    {
      id: 1,
      text: '테스트 테스트',
    },
    {
      id: 2,
      text: '테스트 테스트',
    },
    {
      id: 3,
      text: '테스트 테스트',
    },
    {
      id: 4,
      text: '테스트 테스트',
    },
    {
      id: 5,
      text: '테스트 테스트',
    },
  ];

  const [bestItem, setBestItem] = useState<Items[] | null>(null);
  const [newItem, setNewItem] = useState<Items[] | null>(null);

  const bestItems = async () => {
    const res = await fetch('/api/best-items?isBest=true&limit=4');
    const data = await res.json();
    setBestItem(data.data);
  };
  const newItems = async () => {
    const res = await fetch('/api/best-items?new=true&limit=4');
    const data = await res.json();
    setNewItem(data.data);
  };

  useEffect(() => {
    bestItems();
    newItems();
  }, []);

  useEffect(() => {
    console.log('new', newItem);
  }, [newItem]);

  return (
    <div className="max-w-custom font-[family-name:var(--font-geist-sans)] w-">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full h-140 bg-blue-200">
          <div className="h-full swiper-container">
            <Swiper
              modules={[Navigation, Scrollbar, Autoplay]} // 이렇게 넘기는 방식이 최신
              loop={true} // 슬라이드 루프
              navigation={true} // prev, next button
              autoplay={{
                delay: 4000,
                disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
              }}
              className="h-full leading-140 text-center"
            >
              {slideData.map((slide) => (
                <SwiperSlide className="w-full" key={slide.id}>
                  <div>
                    <div>{slide.text}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-full">
          <section className="my-10 px-4">
            <h2 className="flex items-center justify-between py-4">
              <p className="title-p">베스트</p>
              <span>
                <Link
                  href={{
                    pathname: '/best',
                  }}
                >
                  더보기
                </Link>
              </span>
            </h2>
            <ul className="w-full grid grid-cols-[repeat(4,1fr)] gap-x-5 gap-y-12 mb-10">
              {bestItem &&
                bestItem.map((item: Items) => (
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
          <section className="my-10 px-4">
            <h2 className="flex items-center justify-between py-4">
              <p className="title-p">신상품</p>
              <span>
                <Link
                  href={{
                    pathname: '/new',
                  }}
                >
                  더보기
                </Link>
              </span>
            </h2>
            <ul className="w-full grid grid-cols-[repeat(4,1fr)] gap-10">
              {newItem &&
                newItem.map((item: Items) => (
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
          <section className="my-10 px-4">
            <h2 className="flex items-center justify-between py-4">
              <p className="title-p">카테고리</p>
            </h2>
            <ul className="flex justify-between flex-wrap gap-4 p-4rounded-lg ">
              {/* w-full grid grid-cols-[repeat(6,1fr)] gap-10 */}
              <li className="flex flex-col items-center w-20">
                <Link href={{ pathname: `/category/succulent` }}>
                  <div className="w-18 h-18 bg-gray-100 rounded-2xl flex items-center justify-center p-2">
                    <Image src={'/icon/succulent.png'} layout="responsive" width={1} height={1} alt="다육이 아이콘"></Image>
                  </div>
                  <span className="mt-2 text-sm text-gray-800">다육이</span>
                </Link>
              </li>
              <li className="flex flex-col items-center w-20">
                <Link href={{ pathname: `/category/foliage` }}>
                  <div className="w-18 h-18 bg-gray-100 rounded-2xl flex items-center justify-center p-2">
                    <Image src={'/icon/foliage.png'} layout="responsive" width={1} height={1} alt="다육이 아이콘"></Image>
                  </div>
                  <span className="mt-2 text-sm text-gray-800">관엽식물</span>
                </Link>
              </li>
              <li className="flex flex-col items-center w-20">
                <Link href={{ pathname: `/category/hydroponic` }}>
                  <div className="w-18 h-18 bg-gray-100 rounded-2xl flex items-center justify-center p-2">
                    <Image src={'/icon/hydroponic.png'} layout="responsive" width={1} height={1} alt="수경재배식물 아이콘"></Image>
                  </div>
                  <span className="mt-2 text-sm text-gray-800">수경재배식물</span>
                </Link>
              </li>
              <li className="flex flex-col items-center w-20">
                <Link href={{ pathname: `/category/air_purifying` }}>
                  <div className="w-18 h-18 bg-gray-100 rounded-2xl flex items-center justify-center p-2">
                    <Image src={'/icon/air_purifying.png'} layout="responsive" width={1} height={1} alt="공기정화식물 아이콘"></Image>
                  </div>
                  <span className="mt-2 text-sm text-gray-800">공기정화식물</span>
                </Link>
              </li>
              <li className="flex flex-col items-center w-20">
                <Link href={{ pathname: `/category/lucky` }}>
                  <div className="w-18 h-18 bg-gray-100 rounded-2xl flex items-center justify-center p-2">
                    <Image src={'/icon/lucky.png'} layout="responsive" width={1} height={1} alt="행운상징 아이콘"></Image>
                  </div>
                  <span className="mt-2 text-sm text-gray-800">행운상징식물</span>
                </Link>
              </li>
              <li className="flex flex-col items-center w-20">
                <Link href={{ pathname: `/category/etc` }}>
                  <div className="w-18 h-18 bg-gray-100 rounded-2xl flex items-center justify-center p-2">
                    <Image src={'/icon/etc.png'} layout="responsive" width={1} height={1} alt="기타 아이콘"></Image>
                  </div>
                  <span className="mt-2 text-sm text-gray-800">기타</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
