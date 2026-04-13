import { MenuItem, MenuByCategory } from './types';

const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const API_URL = `https://opensheet.elk.sh/${SHEET_ID}/Sheet1`;

// Sample data used when SHEET_ID is not configured yet
const SAMPLE_DATA: MenuItem[] = [
  {
    category: 'Signature Grinders',
    name: 'The Classic Griller',
    price: '₹349',
    image: '',
    description: 'Juicy beef patty with aged cheddar, crispy bacon, caramelised onions and our secret smoky sauce on a toasted brioche bun.',
    available: true,
  },
  {
    category: 'Signature Grinders',
    name: 'Spicy Jalapeño Melt',
    price: '₹379',
    image: '',
    description: 'Flame-grilled patty loaded with jalapeños, pepper jack cheese, and chipotle mayo. Not for the faint of heart.',
    available: true,
  },
  {
    category: 'Signature Grinders',
    name: 'BBQ Smokehouse',
    price: '₹399',
    image: '',
    description: 'Double smash patty drenched in house BBQ sauce, crispy onion rings, coleslaw, and smoked gouda.',
    available: true,
  },
  {
    category: 'Chicken Specials',
    name: 'Crispy Chicken Grinder',
    price: '₹299',
    image: '',
    description: 'Buttermilk fried chicken, pickled cucumbers, sriracha honey glaze, and creamy ranch on a sesame bun.',
    available: true,
  },
  {
    category: 'Chicken Specials',
    name: 'Grilled Peri-Peri Chicken',
    price: '₹319',
    image: '',
    description: 'Marinated peri-peri grilled chicken breast with avocado, lettuce, tomato, and lemon aioli.',
    available: true,
  },
  {
    category: 'Chicken Specials',
    name: 'Buffalo Ranch Wrap',
    price: '₹269',
    image: '',
    description: 'Shredded buffalo chicken, blue cheese crumbles, crunchy celery slaw wrapped in a charred tortilla.',
    available: false,
  },
  {
    category: 'Veggie & Vegan',
    name: 'Mushroom Swiss Melt',
    price: '₹279',
    image: '',
    description: 'Portobello mushroom patty with caramelised mushrooms, Swiss cheese, truffle mayo, and rocket.',
    available: true,
  },
  {
    category: 'Veggie & Vegan',
    name: 'Smashed Falafel Burger',
    price: '₹259',
    image: '',
    description: 'Crispy smashed falafel, hummus, tahini drizzle, pickled red onion, and fresh herbs.',
    available: true,
  },
  {
    category: 'Sides',
    name: 'Loaded Cheese Fries',
    price: '₹149',
    image: '',
    description: 'Crispy golden fries smothered in nacho cheese sauce, jalapeños, and spring onions.',
    available: true,
  },
  {
    category: 'Sides',
    name: 'Onion Rings',
    price: '₹129',
    image: '',
    description: 'Beer-battered thick-cut onion rings served with smoky dipping sauce.',
    available: true,
  },
  {
    category: 'Sides',
    name: 'Sweet Potato Fries',
    price: '₹139',
    image: '',
    description: 'Oven-baked sweet potato fries with cinnamon aioli dipping sauce.',
    available: true,
  },
  {
    category: 'Drinks',
    name: 'Classic Cold Brew',
    price: '₹179',
    image: '',
    description: 'Smooth 18-hour cold-brewed coffee over ice. Black or with oat milk.',
    available: true,
  },
  {
    category: 'Drinks',
    name: 'Mango Lemonade Slush',
    price: '₹159',
    image: '',
    description: 'Fresh mango blended with zesty lemonade and a hint of chilli salt rim.',
    available: true,
  },
  {
    category: 'Drinks',
    name: 'Chocolate Milkshake',
    price: '₹199',
    image: '',
    description: 'Thick, creamy dark chocolate shake topped with whipped cream and chocolate drizzle.',
    available: true,
  },
  {
    category: 'Desserts',
    name: 'Nutella Brownie',
    price: '₹129',
    image: '',
    description: 'Warm fudgy brownie swirled with Nutella, served with a scoop of vanilla ice cream.',
    available: true,
  },
  {
    category: 'Desserts',
    name: 'Cookie Dough Skillet',
    price: '₹169',
    image: '',
    description: 'Warm, gooey chocolate chip cookie dough baked in a cast iron skillet with vanilla gelato.',
    available: true,
  },
];

export async function fetchMenu(): Promise<MenuByCategory> {
  // If no Sheet ID configured, return sample data
  if (!SHEET_ID || SHEET_ID === 'YOUR_GOOGLE_SHEET_ID') {
    return groupByCategory(SAMPLE_DATA);
  }

  try {
    const res = await fetch(API_URL, {
      next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const rows = await res.json();

    // Map raw sheet rows to MenuItem objects
    const items: MenuItem[] = rows
      .map((row: Record<string, string>) => ({
        category: (row['Category'] || row['category'] || '').trim(),
        name: (row['Name'] || row['name'] || '').trim(),
        price: (row['Price'] || row['price'] || '').trim(),
        image: (row['Image'] || row['image'] || '').trim(),
        description: (row['Description'] || row['description'] || '').trim(),
        available:
          (row['Available'] || row['available'] || 'true')
            .trim()
            .toUpperCase() !== 'FALSE',
      }))
      .filter((item: MenuItem) => item.available && item.name);

    if (items.length === 0) {
      return groupByCategory(SAMPLE_DATA);
    }

    return groupByCategory(items);
  } catch (error) {
    console.error('Menu fetch error:', error);
    // Return sample data as graceful fallback
    return groupByCategory(SAMPLE_DATA);
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
  return map;
}
