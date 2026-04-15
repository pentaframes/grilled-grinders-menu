import { MenuItem, MenuByCategory } from './types';

const API_URL =
  'https://opensheet.elk.sh/117nmpQDENXk_gkXDKvpNB2vEi9CBFROBPdyKtvQdxwE/Sheet1';

function parseOrder(value: string): number {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : Number.MAX_SAFE_INTEGER;
}

export async function fetchMenu(): Promise<MenuByCategory> {
  try {
    const res = await fetch(API_URL, {
      next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const rows = await res.json();

    const items: MenuItem[] = rows
      .map((row: Record<string, string>) => ({
        category: (row['Category'] || row['category'] || '').trim(),
        name: (row['Name'] || row['name'] || '').trim(),
        price: (row['Price'] || row['price'] || '').trim(),
        image: (row['Image'] || row['image'] || '').trim(),
        description: (row['Description'] || row['description'] || '').trim(),
        available:
          (row['Available'] || row['available'] || '')
            .trim()
            .toUpperCase() === 'TRUE',
        order: parseOrder((row['Order'] || row['order'] || '').trim()),
        tags: (row['Tags'] || row['tags'] || '').trim(),
      }))
      .filter((item: MenuItem) => item.available && item.name && item.category);

    return groupByCategory(items);
  } catch (error) {
    console.error('Menu fetch error:', error);
    return {};
  }
}

function groupByCategory(items: MenuItem[]): MenuByCategory {
  const map: MenuByCategory = {};
  for (const item of items) {
    if (!map[item.category]) {
      map[item.category] = [];
    }
    map[item.category].push(item);
  }

  for (const category of Object.keys(map)) {
    map[category].sort((a, b) => a.order - b.order);
  }

  return map;
}
