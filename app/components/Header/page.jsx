"use client"

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/Images/Home/logo.png'
import { usePathname } from 'next/navigation'


const Header = () => {
  const path = usePathname().split("/")[1];
  return(
  <header className="h-[146px] bg-white shadow-md p-[32px] flex justify-between items-center border-b-[0.5px]">
    <div className="flex items-center justify-center gap-[36px]">
    <Image src={Logo} alt='MedBankLogo' className='h-[78px] w-[82px]'>
    </Image>
    <nav>
      <ul className="flex items-center justify-center gap-[38px]">
        <li>
          <Link href="/" className={`${path===""?"border-b-[2px] border-[#003E5C99] font-medium":""} px-[2px] leading-[24px] pb-[2px]`}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={`${path==="about"?"border-b-[2px] border-[#003E5C99] font-medium":""} px-[2px] leading-[24px] pb-[2px]`}>About Us</Link>
        </li>
        <li>
          <Link href="/services" className={`${path==="services"?"border-b-[2px] border-[#003E5C99] font-medium":""} px-[2px] leading-[24px] pb-[2px]`}>Services</Link>
        </li>
        <li>
          <Link href="/sample-shipping" className={`${path==="sample-shipping"?"border-b-[2px] border-[#003E5C99] font-medium":""} px-[2px] leading-[24px] pb-[2px]`}>Sample Shipping</Link>
        </li>
        <li>
          <Link href="/strength" className={`${path==="strength"?"border-b-[2px] border-[#003E5C99] font-medium":""} px-[2px] leading-[24px] pb-[2px]`}>Strength</Link>
        </li>
        <li>
          <Link href="/contact" className={`${path==="contact"?"border-b-[2px] border-[#003E5C99] font-medium":""} px-[2px] leading-[24px] pb-[2px]`}>Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
    <div className='flex items-center justify-center gap-[16px]'>
      <div className='flex items-center justify-center gap-[10px]'>
        <button>JN</button>
        <div className='border-r-[2px] h-[20px] border-black'></div>
        <button>EN</button>
        </div>
      <button className="h-[40px] p-[1px] rounded-[6px] flex items-center justify-center gradient-primary border-[#60B7CF]"><div className='bg-white w-full h-full px-[32px] py-[12px] rounded-[5px] flex items-center justify-center'><span className='gradient-primary bg-clip-text text-transparent'>Sign In</span></div></button>
      <button className="h-[40px] px-[32px] py-[12px] rounded-[6px] flex items-center justify-center gradient-primary text-white">Sign Up</button>
    </div>
  </header>
);
}
export default Header;