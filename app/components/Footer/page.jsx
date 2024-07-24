import React from 'react';
import HomePageSectionHeader from '../HomePageSectionHeader/page';
import Image from 'next/image';
import logo from '../../../public/Images/Home/logo.png'
import { log } from 'console';
import Link from 'next/link';

const Footer = () => {
    
    return (
        <footer className="px-[62px] py-[100px] ">
            <section className="w-full text-[#333333]">
            <HomePageSectionHeader title={"Create Account"} subTitle={"Create Account"}/>
            <div className='pl-[90px] pt-[20px] w-full flex flex-col items-start gap-[32px]'>
            <span className="flex items-center justify-center gap-[12px] font-sans text-[36px] font-medium leading-[42px] gradient-primary bg-clip-text text-transparent">FOR GETTING YOUR SAMPLE SEQUENCED</span>
            <p className="font-sans font-normal text-[20px] leading-[34px]">
            Signup or Login to your account for sending samples and getting your sample sequenced.
            </p>
            <div className='flex gap-[12px]'>
            <button className="h-[40px] p-[1px] rounded-[6px] flex items-center justify-center gradient-primary border-[#60B7CF]"><div className='bg-white w-full h-full px-[32px] py-[12px] rounded-[5px] flex items-center justify-center'><span className='gradient-primary bg-clip-text text-transparent'>Sign In</span></div></button>
            <button className="h-[40px] px-[32px] py-[12px] rounded-[6px] flex items-center justify-center gradient-primary text-white">Sign Up</button>
            </div>

            <div className="w-full flex items-center justify-center">
                
            </div>
            </div>
            </section>
        {/* Map Section */}
        <div className="lg:pt-[80px]">
            <iframe 
            className='rounded-[12px]'
            id='map_canvas'
            width="100%" 
            height="300" 
            frameborder="0"
            marginheight="0" 
            marginwidth="0" 
            loading='lazy'
            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=nagano+(MedBank)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            
        </div>

        {/* Footer Section */}

        <div className='flex flex-col lg:flex-row gap-[23px] pt-[23px]'>
            <div className='gradient-primary rounded-[12px] p-[1px] lg:w-[25%] lg:h-[287px] '>
                <div className='bg-white rounded-[11px] w-full h-full flex flex-col gap-[48px] items-center justify-center'>
                <Image src={logo} alt='logo' className='h-[100px] w-[100px]'></Image>
                <button className="h-[40px] w-[237px] py-[10px] pl-[16px] pr-[24px] flex items-center justify-center gap-[8px] bg-[#FFAA00] rounded-full text-[#003E5C]">{DmIcon} Contact Us</button>
            </div>
            </div>
            <div className='gradient-primary rounded-[12px] p-[1px] lg:w-[75%] lg:h-[287px]'>
                <div className='bg-white rounded-[11px] w-full h-full flex items-center justify-around'>
                    <div className='flex flex-col items-start justify-start gap-[14px]'>
                        <Link href={"/about"}>About</Link>
                        <Link href={"/strength"}>Strength</Link>
                        <Link href={"/service"}>Service</Link>
                        <Link href={"/order-flow"}>Order Flow</Link>
                        <Link href={"/sample-shipping"}>Sample Shipping</Link>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-[14px]'>
                        <Link href={"/privacy-policy"}>Privacy Policy</Link>
                        <Link href={"/personal-information"}>Handling of Personal Information</Link>
                        <Link href={"/cancellation-policy"}>Cancellation Policy</Link>
                        <Link href={"/site-policy"}>Site Policy</Link>
                    </div>
                </div>
            </div>
        </div>
                
        </footer>
    );
};

export default Footer;

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