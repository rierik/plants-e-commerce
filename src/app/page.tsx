'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Header from './Header';

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
      <footer className="bg-gray-100 text-gray-700 text-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-2">회사 정보</h4>
            <p>상호명: plantshop</p>
            <p>대표: 김식물</p>
            <p>사업자등록번호: 987-65-43210</p>
            <p>주소: 서울특별시 성동구 식물로 12길 34</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">고객센터</h4>
            <p>전화: 1644-5678</p>
            <p>이메일: support@plantshop.co.kr</p>
            <p>운영시간: 평일 09:00 ~ 18:00</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="space-x-4">
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 text-center py-4 text-gray-500">© 2025 plantshop. All rights reserved.</div>
      </footer>
    </div>
  );
}
