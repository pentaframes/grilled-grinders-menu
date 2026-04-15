export interface MenuItem {
  category: string;
  name: string;
  price: string;
  image: string;
  description: string;
  available: boolean;
  order: number;
  tags: string;
}

export type MenuByCategory = Record<string, MenuItem[]>;
