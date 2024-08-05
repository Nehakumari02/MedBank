import Image from 'next/image';
import About1 from '../../../public/Images/Home/About1.png'
import About2 from '../../../public/Images/Home/About2.png'
import About3 from '../../../public/Images/Home/About3.png'
import About4 from '../../../public/Images/Home/About4.png'
import About5 from '../../../public/Images/Home/About5.png'
import SnackBar from '@/components/SnackBar';

import HomePageSectionHeader from '@/components/HomePageSectionHeader';

export default function AboutPage() {
  return (
    <>
      <section className="pl-[38px] pr-[24px] md:pl-[156px]  lg:pl-[236px]   md:pr-[95px] w-full flex flex-col items-center justify-center text-[#333333] gap-[24px] md:gap-[70px]  lg:gap-[100px] ">
        <div className="relative max-w-screen-lg w-full lg:w-[1057px] flex flex-col items-start gap-[6px] md:gap-[10px] lg:gap-[24px] pt-[20px] md:pt-[40px] lg:pt-[60px] ">
          <div className="absolute top-[28px] left-[-29px] md:top-[45px] lg:top-[68px]  md:left-[-54px]">
            <SnackBar text={"About Us"} />
          </div>
          <div className=' flex flex-col gap-[6px] md:gap-[20px]'>

            <h2 className="w-full lg:w-[110px] leading-6 font-DM-Sans text-[14px] md:text-[18px] font-medium">About Us</h2>
            <div className="w-full lg:w-[864px] text-[16px] md:text-[28px] lg:text-[32px] font-bold leading-8 lg:leading-10">
              Company Philosophy
            </div>
          </div>
          <div className="font-DM-Sans font-normal text-[12px] md:text-[18px] lg:text-[24px] ">
            &quot;At Medbank, our philosophy is centered around delivering accurate, reliable, and innovative genetic analysis solutions to researchers worldwide. We are dedicated to advancing scientific knowledge and empowering our clients with valuable insights to drive discoveries and advancements in various fields.&quot&quot;
          </div>
          <span className='font-DM-Sans font-medium text-[16px] md:text-[28px] '>
            Key Principles
          </span>
          <div>
            <ol className='font-DM-Sans font-medium text-[12px] md:text-[18px] lg:text-[24px] leading-8 '>
              <li>1. Quality <span className='font-normal' >&quot;We uphold the highest standards of quality and precision in all our services and processes, ensuring reproducible and trustworthy results.&quot;</span></li>
              <li>2. Innovation <span className='font-normal'>&quot;We continuously strive to innovate and adopt cutting-edge technologies and methodologies to stay at the forefront of genetic analysis.&quot;</span></li>
              <li>3. Collaboration <span className='font-normal'> &quot;We believe in fostering strong partnerships and collaborations with researchers, institutions, and industry partners to achieve common goals and mutual success.&quot;</span></li>
              <li>4. Ethics<span className='font-normal'> &quot;We conduct our business with integrity, honesty, and transparency, adhering to ethical standards and regulatory requirements at all times.&quot;</span></li>
              <li>5. Customer Focus <span className='font-normal'></span></li>
            </ol>
          </div>
        </div>




        <div className='flex flex-col md:flex-row  w-full h-full '>
          <div className='w-full h-full pb-[12px] md:pr-[23px]  '>
            <Image src={About1} alt='About1' layout='responsive' objectFit='cover' width={100} height={100} className='w-full h-full' />
          </div>
          <div className='w-full h-full'>
            <Image src={About2} alt='About2' layout='responsive' objectFit='cover' width={100} height={100} className='w-full h-full' />
          </div>
        </div>


        <div className="w-full lg:w-[1057px]   flex flex-col items-start gap-[6px] md:gap-[10px] lg:gap-[24px]">
          <div className='flex flex-col gap-[20px] md:gap-[6px]'>
            <h2 className="w-full lg:w-[110px] leading-6 font-DM-Sans text-[14px] md:text-[18px] font-medium">Our Strength</h2>
            <div className="w-full lg:w-[864px] text-[16px] md:text-[28px] lg:text-[32px] font-bold leading-8 lg:leading-10">
              GOAL in genetic analysis of Medbank
            </div>
          </div>
          <div className="font-DM-Sans font-normal text-[12px] md:text-[18px] lg:text-[24px]">
            At Medbank, our overarching goal in genetic analysis is to become a world-leading hub for genetic research and analysis. We aim to contribute significantly to scientific advancements and discoveries by providing state-of-the-art genetic analysis services, driving innovation, and fostering collaborations.
          </div>

        </div>
      </section>

    <section className='flex flex-row'>
      <div>
        <div>
          <Image src={About3}></Image>

        </div>
        <div>
          <Image src={About4}></Image>

        </div>

      </div>
      <div className='flex flex-col'>
      <HomePageSectionHeader title={"About Us"} subTitle={"About Us"}></HomePageSectionHeader>


      </div>



    </section>
    </>
  );
}

