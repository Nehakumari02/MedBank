import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import './globals.css';
import { cn } from '../../lib/utils';
import { DMSans } from '../../lib/fonts';
import { SidebarContextProvider } from '@/contexts/SidebarContext';
import {AuthProvider} from "../Providers"
import { Toaster } from '@/components/ui/toaster';

type Props ={
  children:ReactNode,
  params:{locale:string}
}

const locales = ['en', 'jn'];

export function generateStaticParams(){
  return locales.map((locale)=>({locale}));
}

// export async function generateMetaData({
//   params:{locale}
// }:Omit<Props,'children'>) {
//   const t = await getTranslations({locale,namespace:"LocaleLayout"})
// }

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages(locale as any);

  return (
    <html lang={locale}>
      <body className={cn(DMSans.variable, "text-black")}>
        <AuthProvider>
        <NextIntlClientProvider messages={messages}>
          <SidebarContextProvider>
          <main>{children}</main>
          <Toaster />
          </SidebarContextProvider>
        </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
