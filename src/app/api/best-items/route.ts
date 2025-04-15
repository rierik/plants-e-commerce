// app/api/items/route.ts
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import { readFileSync } from 'fs';

type Category = 'succulent' | 'foliage' | 'hydroponic' | 'air_purifying' | 'lucky' | 'etc';
// 다육식물, 관엽식물, 수경재배식물, 공기정화식물, 행운식물, 기타

export async function GET(req: Request) {
  const filePath = path.join(process.cwd(), 'data', 'items.json');
  const jsonData = await readFile(filePath, 'utf-8');
  const items = JSON.parse(readFileSync('data/items.json', 'utf-8'));

  console.log('파일 경로:', items);

  const { searchParams } = new URL(req.url);
  const isBest = searchParams.get('isBest') === 'true';
  const category = searchParams.get('category');
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '20', 10);
  const newProduct = searchParams.get('new') === 'true';

  // 1. 필터링
  let filtered = isBest ? items.filter((item: any) => item.isBest) : items;
  if (category) {
    filtered = filtered.filter((item: any) => item.category === category);
  }
  if (newProduct) {
    filtered = filtered.filter((item: any) => item.new === true);
  }

  const total = filtered.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = filtered.slice(start, end);

  return NextResponse.json({
    data: paginated,
    total,
    page,
    limit,
    newProduct,
  });
}
