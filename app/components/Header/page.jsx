import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/Images/Home/logo.png'


const Header = () => (
  <header className="h-[146px] bg-white shadow-md p-[32px] flex justify-between items-center border-b-[0.5px]">
    <div className="flex items-center justify-center gap-[36px]"><Image src={Logo} alt='MedBankLogo' className='h-[78px] w-[82px]'>
    </Image>
    <nav>
      <ul className="flex items-center justify-center gap-[38px]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/sample-shipping">Sample Shipping</Link>
        </li>
        <li>
          <Link href="/strength">Strength</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
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
      <button className="h-[40px] px-[32px] py-[12px] border-[1px] rounded-[6px] flex items-center justify-center gradient-text border-[#60B7CF]">Sign In</button>
      <button className="h-[40px] px-[32px] py-[12px] border-[1px] rounded-[6px] flex items-center justify-center gradient-background text-white">Sign Up</button>
    </div>
  </header>
);

export default Header;

