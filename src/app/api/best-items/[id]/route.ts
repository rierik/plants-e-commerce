// app/api/best-items/[id]/route.ts
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), 'data', 'items.json');
  const jsonData = await readFile(filePath, 'utf-8');
  const items = JSON.parse(jsonData);

  const item = items.find((item: any) => String(item.id) === params.id);

  if (!item) {
    return NextResponse.json({ message: '아이템을 찾을 수 없음' }, { status: 404 });
  }

  return NextResponse.json(item);
}
