import Image from "next/image";
import HomePageSectionHeader from "./HomePageSectionHeader";
import OfferingsImage from '../public/Images/Home/servicesImage.png'

const Offerings = () => (
    <section className="md:flex items-center justify-center w-full h-[672px]">
    <div className='md:w-[70%] h-full flex items-center justify-start text-[#333333]'>
      <div className='w-full md:pl-[42px] lg:pl-[62px] pr-[20px] flex flex-col gap-[32px]'>
        <HomePageSectionHeader title={"Our services"} subTitle={"Our Services"}></HomePageSectionHeader>
        <div className='md:pl-[50px] lg:pl-[110px] flex flex-col items-start justify-start gap-[24px]'>
        <span className="flex items-center justify-center gap-[12px] font-sans text-[36px] font-medium leading-[42px] gradient-primary bg-clip-text text-transparent">OFFERINGS {ArrowRightIcon}</span>
        <span className="font-sans font-normal text-[20px] leading-[34px]">
        "At Medbank, we offer a comprehensive range of genetic analysis services tailored to meet your research needs. Our state-of-the-art laboratory facilities and experienced team ensure accurate and reliable results. Explore our service offerings below to discover how we can support your genetic analysis projects."
        </span>
        <div className="flex items-center justify-between gap-[10px]">
          <span className="felx items-center justify-center">DNA Sequencing</span>
          <div className='h-[42px] border-l-[1px] border-[#717171] border-opacity-[50%]'></div>
          <span className="felx items-center justify-center">RNA Sequencing</span>
          <div className='h-[42px] border-l-[1px] border-[#717171] border-opacity-[50%]'></div>
          <span className="felx items-center justify-center">Amplicon Sequencing</span>
        </div>
      </div>
      </div>
    </div>
    <div className='md:w-[30%] h-full'>
        <Image src={OfferingsImage} alt='OfferingsImage' className='h-full w-full'></Image>
    </div>
  </section>
  );
  
  export default Offerings;

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