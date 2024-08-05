// import './globals.css';
// import {cn} from '../../lib/utils';
// import {DMSans} from '../../lib/fonts'
// import { ReactNode } from 'react';
// import Header from './components/Header'
// import Footer from './components/Footer/page';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   console.log("hello")
//   return (
//     <html lang="en">
//       <body className={cn(
//         DMSans.variable,
//         "text-black"
//       )}>
//         <Header /> 
        
//         <main>{children}</main>
//         <Footer></Footer>
//       </body>
//     </html>
//   );
// }


import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

// Import any necessary styles and components
import './globals.css';
import { cn } from '../../lib/utils';
import { DMSans } from '../../lib/fonts';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // Fetch messages for the current locale
  const messages = await getMessages(locale as any);

  return (
    <html lang={locale}>
      <body className={cn(DMSans.variable, "text-black")}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
