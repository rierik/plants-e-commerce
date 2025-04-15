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
import { Items } from './types/item';

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

  const bestItems = async () => {
    const res = await fetch('/api/best-items?isBest=true&limit=4');
    const data = await res.json();
    setBestItem(data.data);
  };

  useEffect(() => {
    bestItems();
  }, []);

  useEffect(() => {
    console.log(bestItem);
  }, [bestItem]);

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
          <section className="my-10">
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
            <ul className="w-full grid grid-cols-[repeat(4,1fr)] gap-10">
              {bestItem &&
                bestItem.map((item: Items) => (
                  <li>
                    <a className="bg-amber-100 inline-block w-full" href="">
                      <Image className="w-full h-auto" width={269} height={269} src={'/favicon.ico'} alt=""></Image>
                      <div>
                        <div className="mb-2 text-sm font-semibold text-gray-800">{item.category}</div>
                        <div className="text-sm text-gray-700 leading-snug">{item.name}</div>
                        <div className="mt-2 text-sm">
                          <span className="text-red-500 font-semibold mr-1">{item.discount}</span>
                          <span className="font-bold">{calculateDiscountPrice(item.price, item.discount)}원</span>
                        </div>
                      </div>
                      <div>
                        <span></span>
                        <h3></h3>
                        <p>{item.price}</p>
                      </div>
                    </a>
                  </li>
                ))}
            </ul>
          </section>
          <section className="my-10">
            <h2 className="flex items-center justify-between py-4">
              <p className="title-p">신상품</p>
              <span>더보기</span>
            </h2>
            <ul className="w-full grid grid-cols-[repeat(4,1fr)] gap-10">
              <li>
                <a className="bg-amber-100 inline-block w-full" href="">
                  <Image className="w-full h-auto" width={269} height={269} src={'/favicon.ico'} alt=""></Image>
                  <div>
                    <span>필터링</span>
                    <h3>상품명</h3>
                    <p>가격</p>
                  </div>
                </a>
              </li>
              <li>
                <a className="bg-amber-100 inline-block w-full" href="">
                  <Image className="w-full h-auto" width={269} height={269} src={'/favicon.ico'} alt=""></Image>
                  <div>
                    <span>필터링</span>
                    <h3>상품명</h3>
                    <p>가격</p>
                  </div>
                </a>
              </li>
              <li>
                <a className="bg-amber-100 inline-block w-full" href="">
                  <Image className="w-full h-auto" width={269} height={269} src={'/favicon.ico'} alt=""></Image>
                  <div>
                    <span>필터링</span>
                    <h3>상품명</h3>
                    <p>가격</p>
                  </div>
                </a>
              </li>
              <li>
                <a className="bg-amber-100 inline-block w-full" href="">
                  <Image className="w-full h-auto" width={269} height={269} src={'/favicon.ico'} alt=""></Image>
                  <div>
                    <span>필터링</span>
                    <h3>상품명</h3>
                    <p>가격</p>
                  </div>
                </a>
              </li>
            </ul>
          </section>
          <section className="my-10">
            <h2 className="flex items-center justify-between py-4">
              <p className="title-p">시즌제품</p>
              <span>더보기</span>
            </h2>
            <ul className="w-full grid grid-cols-[repeat(4,1fr)] gap-10">
              <li>
                <a className="bg-amber-100 inline-block w-full" href="">
                  <Image className="w-full h-auto" width={269} height={269} src={'/favicon.ico'} alt=""></Image>
                  <div>
                    <span>필터링</span>
                    <h3>상품명</h3>
                    <p>가격</p>
                  </div>
                </a>
              </li>
              <li>
                <a className="bg-amber-100 inline-block w-full" href="">
                  <Image className="w-full h-auto" width={269} height={269} src={'/favicon.ico'} alt=""></Image>
                  <div>
                    <span>필터링</span>
                    <h3>상품명</h3>
                    <p>가격</p>
                  </div>
                </a>
              </li>
              <li>
                <a className="bg-amber-100 inline-block w-full" href="">
                  <Image className="w-full h-auto" width={269} height={269} src={'/favicon.ico'} alt=""></Image>
                  <div>
                    <span>필터링</span>
                    <h3>상품명</h3>
                    <p>가격</p>
                  </div>
                </a>
              </li>
              <li>
                <a className="bg-amber-100 inline-block w-full" href="">
                  <Image className="w-full h-auto" width={269} height={269} src={'/favicon.ico'} alt=""></Image>
                  <div>
                    <span>필터링</span>
                    <h3>상품명</h3>
                    <p>가격</p>
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
