'use client';
import { useState } from 'react';
import HomePageSectionHeader from './HomePageSectionHeader';
import Media from '../public/Images/Home/Media.png'
import Media1 from '../public/Images/Home/Media2.png'
import Media2 from '../public/Images/Home/Media3.png'
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const articles = [
  {
    image: Media,
    title: 'Title',
    date: '24-july-2024 12:45',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum recusandae dignissimos quis.',
  },
  {
    image: Media1,
    title: 'Title',
    date: '24-july-2024 12:45',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum recusandae dignissimos quis.',
  },
  {
    image: Media2,
    title: 'Title',
    date: '24-july-2024 12:45',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum recusandae dignissimos quis.',
  }
];

const RecentAnnouncement = () => {

  return (
    <section className="md:px-[42px] lg:px-[62px] py-[20px] md:py-[100px] w-full text-[#333333] bg-[#7171710D]">
        <HomePageSectionHeader title={"Recent Articles"} subTitle={"Recent Articles"}/>
        <div className='px-[31px] md:pl-[50px] lg:pl-[90px] pt-[20px] w-full flex flex-col items-start gap-[6px] md:gap-[32px]'>
        <span className="flex items-center font-DM-Sans text-[18px] md:text-[36px] font-medium leading-[24px] md:leading-[42px] gradient-primary bg-clip-text text-transparent">Recent Anouncements</span>
        <p className="font-DM-Sans font-normal text-[12px] md:text-[20px] leading-[20px] md:leading-[34px]">
        "Stay updated with the latest announcements and news from Medbank. Explore our recent articles and media coverage to learn more about our company's activities, achievements, and advancements in genetic analysis."
        </p>

        <Carousel className="hidden">
          <CarouselContent className="-ml-1">
            {articles.map((article, index) => (
              <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/2">
              <div className='flex-shrink-0 h-[374px] md:h-[480px] w-[228px] md:w-[360px] border-[1px] rounded-lg border-[#71717133]'>
                <Image src={article.image} alt='Media' className='w-full h-[174px] md:h-[276px] rounded-tl-lg rounded-tr-lg'></Image>
                <div className='flex flex-col items-start gap-[24px] p-[16px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-sans font-normal text-[16px] leading-[24px] text-[#333333]'>{article.title}</span>
                    <span className='font-sans font-normal text-[14px] leading-[20px] text-[#717171]'>{article.date}</span>
                  </div>
                  <span className='font-sans font-normal text-[14px] leading-[20px] text-[#333333]'>{article.description}</span>
                  <div className='w-full flex items-center justify-end'>
                    <button className='border-[1px] rounded-full border-[#79747E] w-[131px] h-[40px] py-[10px] px-[24px] flex items-center justify-center'><span className='font-sans font-normal text-[16px] leading-[24px] gradient-primary bg-clip-text text-transparent'>Read More</span></button>
                  </div>
                </div>
              </div>
            </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    </div>
    </section>
  );
};

export default RecentAnnouncement;