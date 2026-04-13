export interface MenuItem {
  category: string;
  name: string;
  price: string;
  image: string;
  description: string;
  available: boolean;
}

export type MenuByCategory = Record<string, MenuItem[]>;
