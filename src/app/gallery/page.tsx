import { fetchGallery } from '@/lib/fetchGallery';
import PremiumHeader from '@/components/PremiumHeader';
import GalleryClientView from '@/components/GalleryClientView';
import PremiumFooter from '@/components/PremiumFooter';

export const dynamic = 'force-dynamic';

export default async function GalleryPage() {
  const { resources, isMock } = await fetchGallery();
  console.log("GALLERY PAGE - Resources count:", resources.length);
  console.log("GALLERY PAGE - Resources:", resources.map(r => r.public_id));

  return (
    <>
      <PremiumHeader />
      <div style={{ padding: '100px 24px 0', textAlign: 'center' }}>
        <h1 className="font-heading" style={{ marginBottom: '16px' }}>Gallery</h1>
        <p className="text-muted" style={{ marginBottom: '48px' }}>Explore our café and premium culinary creations.</p>

        <GalleryClientView resources={resources} isMock={isMock} />
      </div>
      <PremiumFooter />
    </>
  );
}
