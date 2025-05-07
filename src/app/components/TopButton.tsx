'use client';
import { useEffect, useState } from 'react';

function TopButton() {
  const [visible, setVisible] = useState(false);

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

  return (
    <>
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
}

export default TopButton;
