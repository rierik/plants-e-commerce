export type ItemMap = {
  data: Items[];
  total: number;
  page: number;
  limit: number;
};

export interface Items {
  id: number;
  name: string;
  price: number;
  category: string;
  isBest: boolean;
  rank?: number;
  image: string;
  originalPrice: number;
  discount: number;
  details: string[];
}

export const categoryMap: Record<string, string> = {
  succulent: '다육이',
  foliage: '관엽식물',
  hydroponic: '수경재배식물',
  air_purifying: '공기정화식물',
  lucky: '행운상징 식물',
  etc: '기타',
};
