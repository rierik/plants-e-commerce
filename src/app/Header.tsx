import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: '베스트', path: '/best' },
  { name: '신상품', path: '/new' },
  { name: '카테고리', path: '/category' },
];

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
    setActivePath(pathname);
  }, [pathname]);

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
        {navItems.map((item) => {
          const isActive = item.path === '/' ? pathname === '/' : pathname === item.path || pathname.startsWith(`${item.path}/`);

          return (
            <li key={item.path}>
              <Link href={item.path}>
                <p className={isActive ? 'text-green-600 font-bold' : ''}>{item.name}</p>
              </Link>
            </li>
          );
        })}
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
