'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BestItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

const BestItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState<BestItem | null>(null);

  const fetchBestItems = async () => {
    const res = await fetch(`/api/best-items/${id}`);
    const data = await res.json();
    setItem(data);
  };

  useEffect(() => {
    if (id) {
      fetchBestItems();
    }
  }, [id]);

  if (!item) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>베스트 아이템 상세</h1>
      <p>아이템 ID: {item.id}</p>
      <p>아이템 이름: {item.name}</p>
      <p>아이템 가격: {item.price}</p>
      <p>아이템 설명: {item.description}</p>
    </div>
  );
};

export default BestItemDetails;
