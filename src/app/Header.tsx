import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="grid grid-cols-[160px_auto_120px] items-center w-full h-16 p-1.5  ">
      <Link
        href={{
          pathname: '/',
        }}
      >
        <Image src="/logo/logohorizontal.png" alt="로고이미지" width={160} height={40}></Image>
      </Link>

      <ul className="flex gap-8 items-center justify-center">
        <li>
          <Link href={{ pathname: '/' }}>HOME</Link>
        </li>
        <li>
          <Link href={{ pathname: '/best' }}>베스트</Link>
        </li>
        <li>
          <Link href={{ pathname: '/new' }}>신상품</Link>
        </li>
        <li>
          <Link href={{ pathname: '/category' }}>카테고리</Link>
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
  );
};

export default Header;
