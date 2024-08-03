'use client'

import React from 'react'
import Image from 'next/image'
import Announcement1 from '../../../public/Images/Home/Announcement1.png'
import Announcement2 from '../../../public/Images/Home/Announcement2.png'
import Announcement3 from '../../../public/Images/Home/Announcement3.png'
import article1 from '../../../public/Images/Home/article1.png'
import article2 from '../../../public/Images/Home/article2.png'
import article3 from '../../../public/Images/Home/article3.png'
import ArticleCard from '../../../components/ArticleCard'
import SnackBar from '@/components/SnackBar'

const articles = [
  {
    image: article1.src,
    title: 'Title',
    date: '24-july-2024 12:45',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    image: article2.src,
    title: 'Title',
    date: '24-july-2024 12:45',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    image: article3.src,
    title: 'Title',
    date: '24-july-2024 12:45',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
];

const Page = () => {
  return (
    <>
      <section className='pl-[38px] pr-[24px] md:pl-[156px]  md:pr-[95px]  w-full text-[#333333] font-DM-Sans flex flex-col items-center justify-center '>

        <div className='relative max-w-screen-lg w-full flex flex-col items-start pt-[20px] md:pt-[40px] lg:pt-[60px]'>
          <div className="absolute top-[28px] left-[-29px] md:top-[45px] lg:top-[68px]  md:left-[-54px]">
            <SnackBar text={"Recent Announcement"} />
          </div>
          <div className='text-[12px] md:text-[18px]'>Date : 12 JUNE 2024</div>
          <div className='font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px] pt-[6px] md:pt-[20px]'>
            Article or post title
          </div >

          <div className='font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[36px] pt-[8px] md:pt-[39px]'>
            Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading
            <br /><br />

            <Image src={Announcement1} alt='Announcement1' />
          </div>
          <div className='font-normal text-[12px] md:text-[18px] lg:text-[20px] leading-[30px] pt-[24px] md:pt-[60px]'>
            Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look: <br /><br />

            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur. <br /><br />

            Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris. <br /><br />
          </div>
          <div className='flex flex-col md:flex-row pt-[21px] md:pt-[68px]'>
            <div className='md:pr-[40px] '>
              <Image src={Announcement2} alt='Announcement2 ' />
            </div>
            <div className='mt-[21px] md:mt-0 '>
              <Image src={Announcement3} alt='Announcement3' />
            </div>
          </div>

          <div className='font-normal text-[12px] md:text-[18px] lg:text-[20px] leading-[30px] pt-[21px] md:pt-[68px]'>
            Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:<br /><br />

            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur. <br /><br />

            Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
          </div>
          <div className='font-bold text-[16px] md:text-[32px] leading-[35.2px] pt-[6px] md:pt-[33px]'>
            Related article or posts
          </div>
        </div>
      </section>
      <div className="container mx-auto p-4 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              image={article.image}
              title={article.title}
              date={article.date}
              description={article.description}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Page;

