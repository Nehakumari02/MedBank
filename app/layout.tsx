import './globals.css';
// import Header from './components/Header/page';
import { ReactNode } from 'react';
import Header from './components/Header'
import Footer from './components/Footer/page';

export default function RootLayout({ children }: { children: ReactNode }) {
  console.log("hello")
  return (
    <html lang="en">
      <body className="text-black">
        <Header /> 
        
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
