import PremiumHeader from '@/components/PremiumHeader';
import PremiumContent from '@/components/PremiumContent';
import PremiumFooter from '@/components/PremiumFooter';

export default function AboutPage() {
  return (
    <>
      <PremiumHeader />
      <div style={{ paddingTop: '100px' }}>
        <PremiumContent />
      </div>
      <PremiumFooter />
    </>
  );
}
