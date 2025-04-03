import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-custom font-[family-name:var(--font-geist-sans)] w-">
      <header className="grid grid-cols-[160px_auto_120px] items-center w-full h-16 p-1.5  ">
        <a className="w-40 h-10" href="">
          <Image src="/logo/logohorizontal.png" alt="로고이미지" width={160} height={40}></Image>
        </a>

        <ul className="flex gap-8 items-center justify-center">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">베스트</a>
          </li>
          <li>
            <a href="">신상품</a>
          </li>
          <li>
            <a href="">카테고리</a>
          </li>
        </ul>

        <ul className="flex items-center gap-4 justify-end">
          <li>
            <a className="inline-block w-8 h-8  rounded-full bg-black" href=""></a>
          </li>
          <li>
            <a href="">장바구니</a>
          </li>
        </ul>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full h-140 bg-blue-200">배너</div>
        <div className="w-full">
          <section className="my-10">
            <h2 className="flex items-center justify-between py-4">
              <p className="title-p">베스트</p>
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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
