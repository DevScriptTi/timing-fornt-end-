import { Link } from '@/i18n/navigation';
import { isAuth, isStudent, isTeacher } from '@/lib/server/tools/auth';
import { Landing } from '@/lib/ui/components/local/Welcom page/landing/landing';
import { getTranslations } from 'next-intl/server';
import Student from './(timing)/student/student';
import Teacher from './(timing)/teacher/teacher';

export default async function HomePage() {
  const t = await getTranslations('HomePage');
  return (
    <>
      {!(await isAuth()) && (<Landing />)} 
      { (await isAuth())&&((await isStudent()) && (<Student />))}
      { (await isAuth())&&((await isTeacher()) && (<Teacher />))}
    </>
  );
}