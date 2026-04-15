import { fetchMenu } from '@/lib/fetchMenu';
import PremiumHeader from '@/components/PremiumHeader';
import MenuClientView from '@/components/MenuClientView';
import PremiumFooter from '@/components/PremiumFooter';

export const revalidate = 60;

export default async function MenuPage() {
  const menuByCategory = await fetchMenu();
  const hasData = Object.keys(menuByCategory).length > 0;

  return (
    <>
      <PremiumHeader />
      <div style={{ paddingTop: '100px' }}>
        <h1 className="font-heading" style={{ textAlign: 'center', marginBottom: '24px' }}>Our Menu</h1>
        
        {hasData ? (
          <MenuClientView menuByCategory={menuByCategory} />
        ) : (
          <p className="text-muted" style={{ padding: '40px 0', textAlign: 'center' }}>
            Unable to load recent menu items.
          </p>
        )}
      </div>
      <PremiumFooter />
    </>
  );
}
