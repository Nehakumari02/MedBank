import './globals.css';
import { ReactNode } from 'react';
import {cn} from '../lib/utils';
import {DMSans} from '../lib/fonts'
import Header from '../components/Header'
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(
        DMSans.variable,
        "text-black"
      )}>
        <Header />
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
