import React from 'react'
import HomePageSectionHeader2 from '../components/HomePageSectionHeader2/page'
import SampleShipping1 from '../../public/Images/Home/SampleShipping1.png'
import SampleShipping2 from '../../public/Images/Home/SampleShipping2.png'
import SampleShipping3 from '../../public/Images/Home/SampleShipping3.png'
import Image from 'next/image'

const page = () => {
    return (
        <section className='w-full flex flex-col items-center'>
            <div className='w-full md:w-[1056px] flex flex-col items-start px-4 md:px-0'>
                <div className='text-[#333333] pt-[60px]'>

                    <div className='font-sans font-medium text-[18px] leading-[24px] pb-[14px]'>
                        Step 1
                    </div>
                    <div className='font-sans font-bold text-[32px] leading-[40px]'>
                        Sample Preparation
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"1"} subTitle={"Sample Tubes"}></HomePageSectionHeader2>
                    </div>
                    <div className='font-sans font-normal text-[24px] leading-[34px]'>
                        Customers are instructed to place their <span className='font-medium'>pre-adjusted DNA/RNA/PCR</span> samples in individual tubes.
                        For larger sample quantities (approximately 16 samples or more), 8-strip tubes or similar containers are recommended.
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"2"} subTitle={"Labeling"}></HomePageSectionHeader2>
                    </div>
                    <div className='font-sans font-normal text-[24px] leading-[34px]'>
                        Each sample tube should be <span className='font-medium'>clearly labeled</span> with the sample name using a permanent marker directly on the tube's surface.
                        If the tube has a detachable cap, the label should be placed on both the cap and the tube side to ensure proper identification.
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"3"} subTitle={"Secure Closure"}></HomePageSectionHeader2>
                    </div>
                    <div className='font-sans font-normal text-[24px] leading-[34px]'>
                        Customers are reminded to securely close the tube caps to prevent sample leakage or contamination during transportation.
                    </div>
                </div>
                <div className='pt-[40px]'>
                    <Image src={SampleShipping1} alt="Sample Shipping 1" />
                </div>

                <div className='text-[#333333] pt-[60px]'>
                    <div className='font-sans font-medium text-[18px] leading-[24px] pb-[14px]'>
                        Step 2
                    </div>
                    <div className='font-sans font-bold text-[32px] leading-[40px]'>
                        Tube Packaging
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"1"} subTitle={"Method 1 : Tube Box or Container"}></HomePageSectionHeader2>
                    </div>
                    <div className='font-sans font-normal text-[24px] leading-[34px]  sm:pt-[600px]'>
                        Samples should be placed in a tube box or similar container to prevent spillage. The box should be securely taped or sealed to prevent the lid from coming off during transit.
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"2"} subTitle={"Method 2 : Falcon Tubes or Similar"}></HomePageSectionHeader2>
                    </div>
                    <div className='font-sans font-normal text-[24px] leading-[34px]'>
                        If using Falcon tubes, customers should insert cushioning material or paper to secure the tubes and prevent movement.
                        Tubes should be adequately secured to prevent damage during shipping.
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"3"} subTitle={"Freezing Samples"}></HomePageSectionHeader2>
                    </div>
                    <div className='font-sans font-normal text-[24px] leading-[34px]'>
                        If samples require freezing, customers are advised to freeze the tubes vertically to prevent accidental cap opening.
                    </div>
                </div>
                <div className='pt-[40px]'>
                    <Image src={SampleShipping2} alt="Sample Shipping 2" />
                </div>

                <div className='text-[#333333] pt-[60px]'>
                    <div className='font-sans font-medium text-[18px] leading-[24px] pb-[14px]'>
                        Step 3
                    </div>
                    <div className='font-sans font-bold text-[32px] leading-[40px]'>
                        Packaging
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"1"} subTitle={"Recommended Conditions"}></HomePageSectionHeader2>
                    </div>
                    <div className='font-sans font-normal text-[24px] leading-[34px]'>
                        Customers should use a shipping box with cushioning material (e.g., Styrofoam cooler box) and include ice packs for temperature-sensitive samples.
                        The packaged tubes should be wrapped in additional cushioning material to prevent movement and maintain temperature control.
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"2"} subTitle={"Request Sheet"}></HomePageSectionHeader2>
                    </div>
                    <div className='font-sans font-normal text-[24px] leading-[34px]'>
                        Customers are instructed to print and include a request sheet with the packaged samples, specifying the expected arrival date declared at the time of ordering.
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"3"} subTitle={"Scaling"}></HomePageSectionHeader2>
                    </div>
                    <div className='font-sans font-normal text-[24px] leading-[34px]'>
                        The shipping box should be securely sealed with tape or similar material to prevent tampering and ensure sample integrity during transit.
                    </div>
                </div>
                <div className='pt-[40px]'>
                    <Image src={SampleShipping3} alt="Sample Shipping 3" />
                </div>

                <div className='pt-[40px]'>
                    <div className='font-bold text-[32px] leading-[40px]'>
                        Shipping Address
                    </div>
                    <div className='font-sans font-normal text-[24px] leading-[34px] pt-[30px]'>
                        Medbank Osaka Labo <br />
                        Shoji, Ikuno-ku, Osaka-shi, Osaka 544-0002, Japan
                    </div>
                </div>

                <div className='pt-[40px]'>
                    <div className='font-bold text-[32px] leading-[40px]'>
                        Transportation Temperature Range
                    </div>
                    <div className='font-sans font-normal text-[24px] leading-[34px] pt-[30px]'>
                        Customers are reminded to ship samples under refrigerated or frozen conditions.
                    </div>
                </div>

                <div className='pt-[40px]'>
                    <div className='font-bold text-[32px] leading-[40px]'>
                        Shipping Costs
                    </div>
                    <div className='font-sans font-normal text-[24px] leading-[34px] pt-[30px]'>
                        Shipping charges are prepaid by the customer (payment upon shipping) and may vary depending on the shipping method and destination.
                    </div>
                </div>

                <div className='pt-[40px]'>
                    <div className='font-bold text-[32px] leading-[40px]'>
                        Contact Information
                    </div>
                    <div className='font-sans font-normal text-[24px] leading-[34px] pt-[30px]'>
                        Customers are encouraged to contact Setolabo's customer support team for any questions or concerns related to sample shipping.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page

