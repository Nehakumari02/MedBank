import './globals.css';
import Header from './components/Header/page';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="text-black">
        <Header /> 
        
        <main>{children}</main>
      </body>
    </html>
  );
}
