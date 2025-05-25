import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Cairo } from 'next/font/google'; // This is already included in Next.js - no installation needed
import { cookies } from 'next/headers';

const cairo = Cairo({ 
    subsets: ['arabic', 'latin'],
    display: 'swap',
    variable: '--font-cairo',
    preload: true,
    weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const cookieStore = await cookies();
    const mode = cookieStore.get('mode')?.value || 'light';

    return (
        <html lang={locale} dir={locale == "ar" ? "rtl" : "ltr"} className={`${mode} ${cairo.variable}`}>
            <body className={`bg-background dark:bg-dark-background text-on-background dark:text-dark-on-background ${cairo.className}`}>
                <NextIntlClientProvider>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}