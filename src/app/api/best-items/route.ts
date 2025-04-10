// app/api/items/route.ts
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

type Category = 'succulent' | 'foliage' | 'hydroponic' | 'air_purifying' | 'lucky' | 'etc';
// 다육식물, 관엽식물, 수경재배식물, 공기정화식물, 행운식물, 기타

export async function GET(req: Request) {
  const filePath = path.join(process.cwd(), 'data', 'items.json');
  const jsonData = await readFile(filePath, 'utf-8');
  const items = JSON.parse(jsonData);

  console.log('파일 경로:', items);

  const { searchParams } = new URL(req.url);
  const isBest = searchParams.get('isBest') === 'true';
  const category = searchParams.get('category');

  const result = isBest ? items.filter((item: any) => item.isBest) : items;

  console.log('result', result);

  return NextResponse.json(result);
}
