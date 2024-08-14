"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import {plusIcon} from './Icons'
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const TopNav = () => {
  const path = usePathname().split("/")[3];
  const pathToRedirect = usePathname().split("/").slice(2).join("/");
  const language = usePathname().split("/")[1];
  const router = useRouter();
  const [userId, setUserId] = useState(1234);

  const t = useTranslations("TopNavBar");

  const updateLanguage = (newLanguage) => {
    // Create new URL with updated language
    const newPath = `/${newLanguage}/${pathToRedirect}`;
    
    // Redirect to the new URL
    router.push(newPath);
  };

  return (
    <div className='w-full md:h-[104px] bg-white p-[32px] text-[#333333] flex items-center justify-between border-b-[1px] border-[#3333331A]'>
      <div>
        {path=="Dashboard"?<span className='font-DM-Sans font-bold text-[28px] leading-[24px] '>{t("welcomeMsg")}</span>:<></>}
      </div>
      <div className='flex items-center gap-[24px]'>
      <div className='flex items-center justify-center gap-[10px] w-[67px]'>
          <button onClick={() => updateLanguage("jn")} >
            <span className={`${language == "jn" ? "border-b-[2px] border-[#003E5C99] text-black" : "text-[#333333]"} font-sans font-normal pb-[4px]`}>JN</span>
          </button>
          <div className='border-r-[2px] h-[20px] border-black'></div>
          <button onClick={() => updateLanguage("en")} >
            <span className={`${language == "en" ? "border-b-[2px] border-[#003E5C99] text-black" : "text-[#333333]"} font-sans font-normal pb-[4px]`}>EN</span>
          </button>
        </div>
        <Link href={`/${language}/${userId}/NewOrder`} className='h-[40px] w-[133px] rounded-[6px] flex items-center justify-center gap-[10px] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[14px] leading-[20px] '>{plusIcon}{t("newOrder")}</Link>
      </div>
    </div>
  )
}

export default TopNav