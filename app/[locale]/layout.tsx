import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';
import { cn } from '../../lib/utils';
import { DMSans } from '../../lib/fonts';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(locale as any);

  return (
    <html lang={locale}>
      <body className={cn(DMSans.variable, "text-black")}>
        <NextIntlClientProvider messages={messages}>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
