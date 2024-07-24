import Offerings from './components/Offerings/page'
import PriceTable from './components/PriceTable/page'
import Process from './components/Process/page'
import RecentAnnouncement from './components/RecentAnnouncement/page'
import FAQ from './components/Faq/page'
import ContactUs from './components/ContactUs/page'
import HomePageSectionHeader from './components/HomePageSectionHeader/page'
import Footer from './components/Footer/page'
import Image from 'next/image'
import HeroImage from '../public/Images/Home/heroImage1.png'
import AboutUsImage from '../public/Images/Home/aboutUsHome.png'

export default function HomePage() {
  return (
    <div className="">
      <section className="flex items-center justify-center w-full h-[651px]">
        <div className='w-[30%] h-full'>
          <Image src={HeroImage} alt='HeroImage' className='h-full w-full object-cover'></Image>
        </div>
        <div className='w-[70%] px-[110px] h-full flex items-center justify-start'>
          <div className=' w-full flex flex-col gap-[32px]'>
            <div className='flex flex-col items-start gap-[14px] text-[#333333]'>
              <span className='font-serif font-normal text-[57px] leading-[80px]'>Unlock the Power of Next- </span>
              <span className='font-serif font-normal text-[57px] leading-[80px]'>Generation Sequencing </span>
              <span className='font-serif font-normal text-[57px] leading-[80px]'>with Medbank</span>
              <p className="font-sans font-normal text-[28px] leading-[42px]">Gain deeper insights into genes, RNA, and <br /> genomes for breakthrough discoveries</p>
            </div>
            <button className="h-[40px] w-[237px] py-[10px] pl-[16px] pr-[24px] flex items-center justify-center gap-[8px] bg-[#FFAA00] rounded-full text-[#003E5C]">{DmIcon} Discover Our Services</button>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center w-full h-[518px]">
        <div className='w-[30%] h-full'>
            <Image src={AboutUsImage} alt='AboutUsImage' className='h-full w-full object-cover'></Image>
        </div>
        <div className='w-[70%] h-full flex items-center justify-start text-[#333333]'>
          <div className='h-[310px] w-full flex flex-col gap-[32px]'>
            <HomePageSectionHeader title={"About Us"} subTitle={"About Us"}></HomePageSectionHeader>
            <div className='px-[110px]'>
            <span className="font-sans text-[36px] font-medium leading-[42px] gradient-primary bg-clip-text text-transparent">MEDBANK</span>
            <p className="font-sans font-normal text-[20px] leading-[34px]">
              Welcome to Medbank, your trusted partner in genetic analysis. Learn more about our company’s mission, values, and commitment to excellence.
            </p>
            <button className="flex items-center justify-center gap-[12px] border-none font-sans font-bold text-[18px] leading-[42px] gradient-primary bg-clip-text text-transparent">Read More {ArrowRightSmallIcon}</button>
          </div>
          </div>
        </div>
      </section>
      <section className="px-[62px] py-[100px] w-full text-[#333333]">
        <HomePageSectionHeader title={"Our Strength"} subTitle={"Our Strength"}/>
        <div className='pl-[90px] pt-[20px] w-full flex flex-col items-start gap-[32px]'>
        <span className="flex items-center justify-center gap-[12px] font-sans text-[36px] font-medium leading-[42px] gradient-primary bg-clip-text text-transparent">EXPERTIZE {ArrowRightIcon}</span>
        <p className="font-sans font-normal text-[20px] leading-[34px]">
          At Medbank, we take pride in our strengths and capabilities that set us apart as a leader in genetic analysis. Discover how our expertise and specialized services can benefit your research projects.
        </p>
        <div className="flex flex-col gap-[42px] items-center justify-center w-full">
          <div className="flex items-end justify-between w-full h-[100px] gap-[10px]">
            <span className='w-[50%] mr-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>Comprehensive Next Generation Sequencing Processes</span>
            <div className='h-[100px] border-l-[1px] border-[#717171] border-opacity-[50%]'> </div>
            <span className='w-[50%] ml-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>Specialized Environment for DNA/RNA Analysis</span>
          </div>
          <div className="flex items-end justify-between w-full h-[100px] gap-[10px]">
              <span className='w-[50%] mr-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>Customer-Centric Approach to Analysis Results</span>
              <div className='h-[100px] border-l-[1px] border-[#717171] border-opacity-[50%]'></div>
              <span className='w-[50%] ml-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>Automation of Processes</span>
            </div>
          <div className="flex items-center w-[552px] justify-center h-[100px]">
              <span className="h-[64px] w-full flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%] px-[20px]">State-of-the-Art NGS Platform</span>
            </div>
      </div>

    </div>
  
      </section>
      <Offerings></Offerings>
      <PriceTable/>
      <Process></Process>
      <RecentAnnouncement></RecentAnnouncement>
      <FAQ></FAQ>
      <ContactUs></ContactUs>
      <Footer></Footer>
      
    </div>
  );
}

const DmIcon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1803_1757)">
<path d="M15.3209 0.0478115L0.264889 7.61581C0.190222 7.65848 0.128889 7.71448 0.0808889 7.78381C0.0328889 7.85315 0.00622222 7.93048 0.000888889 8.01581C-0.00444444 8.10115 0.0142222 8.18115 0.0568889 8.25581C0.0995556 8.33048 0.158222 8.38915 0.232889 8.43181L3.75289 10.6078V15.5358C3.75289 15.6425 3.78222 15.7358 3.84089 15.8158C3.89956 15.8958 3.97689 15.9518 4.07289 15.9838C4.16889 16.0158 4.26756 16.0158 4.36889 15.9838C4.47022 15.9518 4.54756 15.8931 4.60089 15.8078L7.01689 12.6078L12.4249 15.9358C12.5636 16.0211 12.7102 16.0291 12.8649 15.9598C13.0196 15.8905 13.1076 15.7758 13.1289 15.6158L15.9929 0.543812C16.0142 0.458478 16.0062 0.373145 15.9689 0.287811C15.9316 0.202478 15.8782 0.133145 15.8089 0.079812C15.7396 0.0264788 15.6596 -0.0028553 15.5689 -0.00818825C15.4782 -0.0135212 15.3956 0.00514412 15.3209 0.0478115ZM4.20089 9.77581L1.43289 8.07981L12.4729 2.52781L4.20089 9.77581ZM4.69689 14.1278V10.5918L12.4569 3.79181L4.69689 14.1278ZM12.3289 14.7838L7.57689 11.8558L14.6969 2.36781L12.3289 14.7838Z" fill="#003E5C"/>
</g>
<defs>
<clipPath id="clip0_1803_1757">
<rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)"/>
</clipPath>
</defs>
</svg>

const ArrowRightIcon = <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.33 18.794C12.541 19.0047 12.8269 19.123 13.125 19.123C13.4231 19.123 13.7091 19.0047 13.92 18.794L20.295 12.419C20.5057 12.2081 20.624 11.9222 20.624 11.624C20.624 11.3259 20.5057 11.04 20.295 10.829L13.92 4.45404C13.7068 4.25507 13.4246 4.14668 13.1331 4.15172C12.8415 4.15676 12.5632 4.27483 12.357 4.48104C12.1508 4.68726 12.0327 4.96549 12.0277 5.25708C12.0227 5.54867 12.131 5.83082 12.33 6.04404L16.785 10.499H5.62501C5.32664 10.499 5.0405 10.6176 4.82952 10.8285C4.61854 11.0395 4.50001 11.3257 4.50001 11.624C4.50001 11.9224 4.61854 12.2086 4.82952 12.4195C5.0405 12.6305 5.32664 12.749 5.62501 12.749H16.785L12.33 17.204C12.1193 17.415 12.001 17.7009 12.001 17.999C12.001 18.2972 12.1193 18.5831 12.33 18.794Z" fill="url(#paint0_linear_277_1151)"/>
<defs>
<linearGradient id="paint0_linear_277_1151" x1="20.624" y1="11.6373" x2="4.50001" y2="11.6373" gradientUnits="userSpaceOnUse">
<stop offset="0.1" stopColor="#60B7CF"/>
<stop offset="0.745" stopColor="#3E8DA7"/>
<stop offset="1" stopColor="#003E5C" stopOpacity="0.6"/>
</linearGradient>
</defs>
</svg>

const ArrowRightSmallIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.33 18.794C12.541 19.0047 12.8269 19.123 13.125 19.123C13.4231 19.123 13.7091 19.0047 13.92 18.794L20.295 12.419C20.5057 12.2081 20.624 11.9222 20.624 11.624C20.624 11.3259 20.5057 11.04 20.295 10.829L13.92 4.45404C13.7068 4.25507 13.4246 4.14668 13.1331 4.15172C12.8415 4.15676 12.5632 4.27483 12.357 4.48104C12.1508 4.68726 12.0327 4.96549 12.0277 5.25708C12.0227 5.54867 12.131 5.83082 12.33 6.04404L16.785 10.499H5.62501C5.32664 10.499 5.0405 10.6176 4.82952 10.8285C4.61854 11.0395 4.50001 11.3257 4.50001 11.624C4.50001 11.9224 4.61854 12.2086 4.82952 12.4195C5.0405 12.6305 5.32664 12.749 5.62501 12.749H16.785L12.33 17.204C12.1193 17.415 12.001 17.7009 12.001 17.999C12.001 18.2972 12.1193 18.5831 12.33 18.794Z" fill="url(#paint0_linear_277_1151)"/>
<defs>
<linearGradient id="paint0_linear_277_1151" x1="20.624" y1="11.6373" x2="4.50001" y2="11.6373" gradientUnits="userSpaceOnUse">
<stop offset="0.1" stopColor="#60B7CF"/>
<stop offset="0.745" stopColor="#3E8DA7"/>
<stop offset="1" stopColor="#003E5C" stopOpacity="0.6"/>
</linearGradient>
</defs>
</svg>

