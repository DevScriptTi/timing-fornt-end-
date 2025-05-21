import {Link} from '@/i18n/navigation';
import { Landing } from '@/lib/ui/components/local/Welcom page/landing/landing';
import { getTranslations } from 'next-intl/server';
 
export default async function HomePage() {
  const t = await getTranslations('HomePage');
  return (
    <Landing/>
  );
}