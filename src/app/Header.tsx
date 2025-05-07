'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: '베스트', path: '/best' },
  { name: '신상품', path: '/new' },
  {
    name: '카테고리',
    path: '/category',
    sub: [
      { name: '다육이', path: '/category/succulent' },
      { name: '관엽식물', path: '/category/foliage' },
      { name: '수경재배식물', path: '/category/hydroponic' },
      { name: '공기정화식물', path: '/category/air_purifying' },
      { name: '행운상징 식물', path: '/category/lucky' },
      { name: '기타', path: '/category/etc' },
    ],
  },
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
    <header className="grid grid-cols-[160px_auto_120px] items-center w-full h-16 ">
      <Link
        href={{
          pathname: '/',
        }}
      >
        <Image src="/logo/logohorizontal.png" alt="로고이미지" width={160} height={40}></Image>
      </Link>

      <ul className="flex gap-8 items-center justify-center w-full h-[full-1.5] leading-16">
        {navItems.map((item) => {
          const isActive = item.path === '/' ? pathname === '/' : pathname === item.path || pathname.startsWith(`${item.path}/`);

          return (
            <li key={item.path} className="relative group h-full ">
              <div className="cursor-pointer">
                <Link href={item.path}>
                  <p className={isActive ? 'text-green-600 font-bold' : ''}>{item.name}</p>
                </Link>
              </div>

              {item.sub && (
                <ul className="absolute top-14 left-0 mt-2 w-48 bg-white border rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-10">
                  {item.sub.map((subItem) => (
                    <li key={subItem.path} className="px-4 py-2 hover:bg-gray-100">
                      <Link href={subItem.path}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
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
