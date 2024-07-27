'use client'

import React from 'react'
import Image from 'next/image'
import Announcement1 from '../../public/Images/Home/Announcement1.png'
import Announcement2 from '../../public/Images/Home/Announcement2.png'
import Announcement3 from '../../public/Images/Home/Announcement3.png'
//import Footer from '../components/Footer/page'
import article1 from '../../public/Images/Home/article1.png'
import article2 from '../../public/Images/Home/article2.png'
import article3 from '../../public/Images/Home/article3.png'
import ArticleCard from '../components/ArticleCard/page'



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


const page = () => {
  return (
    <>
      <section className='w-100vw text-#333333 font-sans flex flex-col items-center justify-center py-[60px]'>
        <div className='w-[1028px] flex flex-col items-start  gap-[39px] '>
          <div className='font-bold text-[32px] leading-[24px]'>
            Article or post title
          </div >

          <div className='font-normal text-[24px] leading-[36px]'>
            Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading
            <br></br>
            <br></br>

            <Image src={Announcement1} alt='Announcement1'></Image>
          </div>
          <div className='font-normal text-[20px] leading-[30px]'>
            Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look: <br></br> <br></br>

            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud
            nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod
            irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui
            wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur. <br></br> <br></br>

            Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic
            the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop
            excepteur classic esse Asia-Pacific laboris. <br></br> <br></br>
          </div>
          <div className='flex '>
            <div className='pr-[40px]'>
              <Image src={Announcement2} alt='Announcement2'></Image>
            </div>
            <div>

              <Image src={Announcement3} alt='Announcement3'></Image>
            </div>

          </div>
          <div className='font-normal text-[20px] leading-[30px]'>
            Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:<br></br><br></br>

            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect
            nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual
            adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality
            of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia
            Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur. <br></br><br></br>

            Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp
            classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate
            airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
          </div>
          <div className='font-bold text-[32px] leading-[35.2px]'>
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

      {/* <Footer></Footer> */}
    </>
  )
}

export default page
