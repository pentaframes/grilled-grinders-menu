import { fetchMenu } from '@/lib/fetchMenu';
import PremiumHeader from '@/components/PremiumHeader';
import PremiumHero from '@/components/PremiumHero';
import PremiumCategoryRow from '@/components/PremiumCategoryRow';
import PremiumMenuList from '@/components/PremiumMenuList';
import PremiumContent from '@/components/PremiumContent';
import PremiumFooter from '@/components/PremiumFooter';

export const revalidate = 60;

export default async function HomePage() {
  const menuByCategory = await fetchMenu();
  const categories = Object.keys(menuByCategory);
  const hasData = categories.length > 0;

  return (
    <>
      <PremiumHeader />
      <div id="home" style={{ scrollMarginTop: '100px' }}>
        <PremiumHero />
      </div>

      {hasData && (
        <div id="gallery" style={{ scrollMarginTop: '100px' }}>
          <PremiumCategoryRow categories={categories} />
        </div>
      )}

      {hasData ? (
        <PremiumMenuList menuByCategory={menuByCategory} />
      ) : (
        <p className="text-muted" style={{ padding: '40px 0', textAlign: 'center' }}>
          Unable to load recent menu items.
        </p>
      )}

      <div id="about" style={{ scrollMarginTop: '100px' }}>
        <PremiumContent />
      </div>
      
      <PremiumFooter />
    </>
  );
}
