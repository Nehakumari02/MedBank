"use client"

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/Images/Home/logo.png'
import { usePathname } from 'next/navigation'
import { useState } from 'react';

const Header = () => {
  const path = usePathname().split("/")[1];
  const [language, setLanguage] = useState("EN");
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <header className="h-[146px] bg-white shadow-md p-[32px] flex justify-between items-center gap-[10px] border-b-[0.5px]">
      <div className="flex items-center justify-center md:gap-[10px] lg:gap-[36px]">
        <Image src={Logo} alt='MedBankLogo' className='h-[78px] w-[82px]' />
        <nav className='hidden md:block'>
          <ul className="flex flex-wrap items-center justify-start gap-[12px] lg:gap-[38px] leading-[24px] pb-[2px] font-DM-Sans tracking-tracking-0.5 font-normal md:text-[14px] lg:text-[18px]">
            <li>
              <Link href="/" className={`${path === "" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""}`}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={`${path === "about" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""}`}>About Us</Link>
            </li>
            <li>
              <Link href="/Services" className={`${path === "Services" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""}`}>Services</Link>
            </li>
            <li>
              <Link href="/SampleShipping" className={`${path === "SampleShipping" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""}`}>Sample Shipping</Link>
            </li>
            <li>
              <Link href="/strength" className={`${path === "strength" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""}`}>Strength</Link>
            </li>
            <li>
              <Link href="/contact" className={`${path === "contact" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""}`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='font-DM-Sans relative flex items-center justify-center gap-[16px] text-[14px] lg:text-[18px] tracking-tracking-0.5'>
        <div className='flex items-center justify-center gap-[10px] w-[67px]'>
          <button onClick={() => setLanguage("JN")} >
            <span className={`${language == "JN" ? "border-b-[2px] border-[#003E5C99] text-black" : "text-[#333333]"} font-sans font-normal pb-[4px]`}>JN</span>
          </button>
          <div className='border-r-[2px] h-[20px] border-black'></div>
          <button onClick={() => setLanguage("EN")} >
            <span className={`${language == "EN" ? "border-b-[2px] border-[#003E5C99] text-black" : "text-[#333333]"} font-sans font-normal pb-[4px]`}>EN</span>
          </button>
        </div>
        <Link href="/login" className="hidden h-[40px] w-[108px] p-[1px] rounded-[6px] md:flex items-center justify-center gradient-primary border-[#60B7CF]">
          <div className='bg-white w-full h-full rounded-[5px] flex items-center justify-center'>
            <span className='gradient-primary bg-clip-text text-transparent'>Sign In</span>
          </div>
        </Link>
        <Link href="/Signup" className="hidden h-[40px] w-[117px] rounded-[6px] md:flex items-center justify-center gradient-primary text-white">Sign Up</Link>
        <button onClick={() => handleMenu()} className='flex items-center justify-center md:hidden'>{hamBurgerIcon}</button>
        {menu && <div className='absolute right-0 top-[40px] w-[138px] bg-white p-[12px] shadow-md'>
          <ul className="flex flex-col items-start gap-[12px]">
            <li>
              <Link onClick={() => setMenu(false)} href="/" className={`${path === "" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""} px-[2px] leading-[24px] pb-[2px] font-sans font-normal text-[14px]`}>Home</Link>
            </li>
            <li>
              <Link onClick={() => setMenu(false)} href="/about" className={`${path === "about" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""} px-[2px] leading-[24px] pb-[2px] font-sans font-normal text-[14px]`}>About Us</Link>
            </li>
            <li>
              <Link onClick={() => setMenu(false)} href="/services" className={`${path === "services" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""} px-[2px] leading-[24px] pb-[2px] font-sans font-normal text-[14px]`}>Services</Link>
            </li>
            <li>
              <Link onClick={() => setMenu(false)} href="/sample-shipping" className={`${path === "sample-shipping" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""} px-[2px] leading-[24px] pb-[2px] font-sans font-normal text-[14px]`}>Sample Shipping</Link>
            </li>
            <li>
              <Link onClick={() => setMenu(false)} href="/strength" className={`${path === "strength" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""} px-[2px] leading-[24px] pb-[2px] font-sans font-normal text-[14px]`}>Strength</Link>
            </li>
            <li>
              <Link onClick={() => setMenu(false)} href="/contact" className={`${path === "contact" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""} px-[2px] leading-[24px] pb-[2px] font-sans font-normal text-[14px]`}>Contact</Link>
            </li>
            <li>
              <Link onClick={() => setMenu(false)} href="/signup" className={`${path === "signup" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""} px-[2px] leading-[24px] pb-[2px] font-sans font-normal text-[14px]`}>Sign Up</Link>
            </li>
            <li>
              <Link onClick={() => setMenu(false)} href="/login" className={`${path === "login" ? "border-b-[2px] border-[#003E5C99] font-medium" : ""} px-[2px] leading-[24px] pb-[2px] font-sans font-normal text-[14px]`}>Sign In</Link>
            </li>
          </ul>
        </div>}
      </div>
    </header>
  );
}

export default Header;

const hamBurgerIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75 6H20.25M3.75 12H20.25M3.75 18H20.25" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);
