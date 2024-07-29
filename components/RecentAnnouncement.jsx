'use client';
import { useState } from 'react';
import HomePageSectionHeader from './HomePageSectionHeader';
import Media from '../public/Images/Home/Media.png'
import Media1 from '../public/Images/Home/Media2.png'
import Media2 from '../public/Images/Home/Media3.png'
import Image from 'next/image';
const RecentAnnouncement = () => {

  return (
    <section className="md:px-[42px] lg:px-[62px] py-[100px] w-full text-[#333333] bg-[#7171710D]">
        <HomePageSectionHeader title={"Recent Articles"} subTitle={"Recent Articles"}/>
        <div className='md:pl-[50px] lg:pl-[90px] pt-[20px] w-full flex flex-col items-start gap-[32px]'>
        <span className="flex items-center justify-center gap-[12px] font-sans text-[36px] font-medium leading-[42px] gradient-primary bg-clip-text text-transparent">Recent Anouncements</span>
        <p className="font-sans font-normal text-[20px] leading-[34px]">
        "Stay updated with the latest announcements and news from Medbank. Explore our recent articles and media coverage to learn more about our company's activities, achievements, and advancements in genetic analysis."
        </p>
        <div className='flex flex-col lg:px-[70px] md:flex-row md:flex-wrap gap-[20px] items-center md:justify-between w-full'>
          <div className='h-[480px] w-[360px] border-[1px] rounded-lg border-[#71717133]'>
            <Image src={Media} alt='Media' className='w-full h-[276px] rounded-tl-lg rounded-tr-lg'></Image>
            <div className='flex flex-col items-start gap-[24px] p-[16px]'>
              <div className='flex flex-col items-start'>
                <span className='font-sans font-normal text-[16px] leading-[24px] text-[#333333]'>Title</span>
                <span className='font-sans font-normal text-[14px] leading-[20px] text-[#717171]'>24 Jan 2024 12:45PM</span>
              </div>
              <span className='font-sans font-normal text-[14px] leading-[20px] text-[#333333]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum recusandae dignissimos quis.</span>
              <div className='w-full flex items-center justify-end'>
                <button className='border-[1px] rounded-full border-[#79747E] w-[131px] h-[40px] py-[10px] px-[24px] flex items-center justify-center'><span className='font-sans font-normal text-[16px] leading-[24px] gradient-primary bg-clip-text text-transparent'>Read More</span></button>
              </div>
            </div>
          </div>
          <div className='h-[480px] w-[360px] border-[1px] rounded-lg border-[#71717133]'>
            <Image src={Media1} alt='Media' className='w-full h-[276px] rounded-tl-lg rounded-tr-lg'></Image>
            <div className='flex flex-col items-start gap-[24px] p-[16px]'>
              <div className='flex flex-col items-start'>
                <span className='font-sans font-normal text-[16px] leading-[24px] text-[#333333]'>Title</span>
                <span className='font-sans font-normal text-[14px] leading-[20px] text-[#717171]'>24 Jan 2024 12:45PM</span>
              </div>
              <span className='font-sans font-normal text-[14px] leading-[20px] text-[#333333]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum recusandae dignissimos quis.</span>
              <div className='w-full flex items-center justify-end'>
                <button className='border-[1px] rounded-full border-[#79747E] w-[131px] h-[40px] py-[10px] px-[24px] flex items-center justify-center'><span className='font-sans font-normal text-[16px] leading-[24px] gradient-primary bg-clip-text text-transparent'>Read More</span></button>
              </div>
            </div>
          </div>
          <div className='h-[480px] w-[360px] border-[1px] rounded-lg border-[#71717133]'>
            <Image src={Media2} alt='Media' className='w-full h-[276px] rounded-tl-lg rounded-tr-lg'></Image>
            <div className='flex flex-col items-start gap-[24px] p-[16px]'>
              <div className='flex flex-col items-start'>
                <span className='font-sans font-normal text-[16px] leading-[24px] text-[#333333]'>Title</span>
                <span className='font-sans font-normal text-[14px] leading-[20px] text-[#717171]'>24 Jan 2024 12:45PM</span>
              </div>
              <span className='font-sans font-normal text-[14px] leading-[20px] text-[#333333]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum recusandae dignissimos quis.</span>
              <div className='w-full flex items-center justify-end'>
                <button className='border-[1px] rounded-full border-[#79747E] w-[131px] h-[40px] py-[10px] px-[24px] flex items-center justify-center'><span className='font-sans font-normal text-[16px] leading-[24px] gradient-primary bg-clip-text text-transparent'>Read More</span></button>
              </div>
            </div>
          </div>
        </div>
    </div>
    </section>
  );
};

export default RecentAnnouncement;