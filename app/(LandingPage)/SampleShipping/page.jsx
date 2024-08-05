import React from 'react'
import HomePageSectionHeader2 from '../../../components/HomePageSectionHeader2'
import SampleShipping1 from '../../../public/Images/Home/SampleShipping1.png'
import SampleShipping2 from '../../../public/Images/Home/SampleShipping2.png'
import SampleShipping3 from '../../../public/Images/Home/SampleShipping3.png'
import Image from 'next/image'
import SnackBar from '@/components/SnackBar'

const page = () => {
    return (
        <section className='pl-[38px] pr-[24px] md:pl-[156px] md:pr-[95px] w-full flex flex-col justify-center items-center '>
            <div className='w-full max-w-[1056px] flex flex-col items-start gap:[32px] md:gap-[100px] '>
                <div>
                    <div className='relative text-[#333333] pt-[15px] md:pt-[40p] lg:pt-[60px] px-4 md:px-6 lg:px-8 flex flex-col gap-[6px] md:gap-[20px]'>
                        <div className="absolute top-[24px] left-[-29px] md:top-[28px] lg:top-[60px] md:left-[-44px]">
                            <SnackBar text={"Sample Shipping"} />
                        </div>
                        <div className='w-50px font-DM-Sans font-medium text-[14px] md:text-[18px] leading-[24px] pb-[14px]'>
                            step 1
                        </div>
                        <div className='font-DM-Sans font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px]'>
                            Sample Preparation
                        </div>
                    </div>
                    <div className='text-[#333333] pt-[12px] md:pt-[24px] lg:pt-[30px] px-4 md:px-6 lg:px-8'>
                        <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px] '>
                            <HomePageSectionHeader2 title={"1"} subTitle={"Sample Tubes"}></HomePageSectionHeader2>
                        </div>
                        <div className='w-full font-DM-Sans font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[34px]'>
                            Customers are instructed to place their <span className='font-medium'>pre-adjusted DNA/RNA/PCR</span> samples in individual tubes. <br />
                            For larger sample quantities (approximately 16 samples or more), 8-strip tubes or similar containers are recommended.
                        </div>
                    </div>




                    <div className='text-[#333333] pt-[12px] md:pt-[24px] lg:pt-[30px] px-4 md:px-6 lg:px-8'>
                        <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                            <HomePageSectionHeader2 title={"2"} subTitle={"Labeling"}></HomePageSectionHeader2>
                        </div>
                        <div className='w-full font-DM-Sans font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[34px]'>
                            Each sample tube should be <span className='font-medium'>clearly labeled</span> with the sample name using a permanent marker directly on the tube&apos;s surface.
                            If the tube has a detachable cap, the label should be placed on both the cap and the tube side to ensure proper identification.
                        </div>
                    </div>

                    <div className='text-[#333333] pt-[12px] md:pt-[24px] lg:pt-[30px] px-4 md:px-6 lg:px-8'>
                        <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px] '>
                            <HomePageSectionHeader2 title={"3"} subTitle={"Secure Closure"}></HomePageSectionHeader2>
                        </div>
                        <div className='w-full font-DM-Sans font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[34px]'>
                            Customers are reminded to securely close the tube caps to prevent sample leakage or contamination during transportation.
                        </div>
                    </div>
                    <br />
                    <div className='w-full px-4 md:px-6 lg:px-8'>
                        <Image src={SampleShipping1} layout="responsive" alt="Sample Shipping 1" />
                    </div>
                </div>
                <div>

                    <div className='text-[#333333]  px-4 md:px-6 lg:px-8 flex flex-col gap-[6px] md:gap-[20px]'>
                        <div className='w-50px font-DM-Sans font-medium text-[14px] md:text-[18px] leading-[24px] pb-[14px]'>
                            step 2
                        </div>
                        <div className='font-DM-Sans font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px]'>
                            Tube Packaging
                        </div>
                    </div>
                    <div className='text-[#333333] pt-[12px] md:pt-[24px] lg:pt-[30px] px-4 md:px-6 lg:px-8'>
                        <div className='flex flex-col pb-[40px] md:pb-[6px] text-[18px] md:text-[28px] '>
                            <HomePageSectionHeader2 title={"1"} subTitle={"Method 1 : Tube Box or Container"}></HomePageSectionHeader2>
                        </div>
                        <div className='w-full font-DM-Sans font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[34px]'>
                            Samples should be placed in a tube box or similar container to prevent spillage. The box should be securely taped or sealed to prevent the lid from coming off during transit.
                        </div>
                    </div>

                    <div className='text-[#333333] pt-[12px] md:pt-[24px] lg:pt-[30px] px-4 md:px-6 lg:px-8'>
                        <div className='flex flex-col pb-[40px] md:pb-[6px] text-[18px] md:text-[28px]'>
                            <HomePageSectionHeader2 title={"2"} subTitle={"Method 2 : Falcon Tubes or Similar"}></HomePageSectionHeader2>
                        </div>
                        <div className='w-full font-DM-Sans font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[34px]'>
                            If using Falcon tubes, customers should insert cushioning material or paper to secure the tubes and prevent movement.
                            Tubes should be adequately secured to prevent damage during shipping.
                        </div>
                    </div>

                    <div className='text-[#333333] pt-[12px] md:pt-[24px] lg:pt-[30px] px-4 md:px-6 lg:px-8'>
                        <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                            <HomePageSectionHeader2 title={"3"} subTitle={"Freezing Samples"}></HomePageSectionHeader2>
                        </div>
                        <div className='w-full font-DM-Sans font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[34px]'>
                            If samples require freezing, customers are advised to freeze the tubes vertically to prevent accidental cap opening.
                        </div>
                    </div>
                    <br />
                    <div className='w-full px-4 md:px-6 lg:px-8'>
                        <Image src={SampleShipping2} layout="responsive" alt="Sample Shipping 2" />
                    </div>
                </div>

                <div>

                    <div className='text-[#333333]  px-4 md:px-6 lg:px-8 flex flex-col gap-[6px] md:gap-[20px]'>
                        <div className='w-50px font-DM-Sans font-medium text-[14px] md:text-[18px] leading-[24px] pb-[14px]'>
                            step 3
                        </div>
                        <div className='font-DM-Sans font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px]'>
                            Packaging
                        </div>
                    </div>
                    <div className='text-[#333333] pt-[12px] md:pt-[24px] lg:pt-[30px] px-4 md:px-6 lg:px-8'>
                        <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                            <HomePageSectionHeader2 title={"1"} subTitle={"Recommended Conditions"}></HomePageSectionHeader2>
                        </div>
                        <div className='w-full font-DM-Sans font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[34px]'>
                            Customers should use a shipping box with cushioning material (e.g., Styrofoam cooler box) and include ice packs for temperature-sensitive samples.
                            The packaged tubes should be wrapped in additional cushioning material to prevent movement and maintain temperature control.
                        </div>
                    </div>

                    <div className='text-[#333333] pt-[12px] md:pt-[24px] lg:pt-[30px] px-4 md:px-6 lg:px-8'>
                        <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px] '>
                            <HomePageSectionHeader2 title={"2"} subTitle={"Request Sheet"}></HomePageSectionHeader2>
                        </div>
                        <div className='w-full font-DM-Sans font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[34px]'>
                            Customers are instructed to print and include a request sheet with the packaged samples, specifying the expected arrival date declared at the time of ordering.
                        </div>
                    </div>

                    <div className='text-[#333333] pt-[12px] md:pt-[24px] lg:pt-[30px] px-4 md:px-6 lg:px-8'>
                        <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px] '>
                            <HomePageSectionHeader2 title={"3"} subTitle={"Scaling"}></HomePageSectionHeader2>
                        </div>
                        <div className='w-full font-DM-Sans font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[34px]'>
                            The shipping box should be securely sealed with tape or similar material to prevent tampering and ensure sample integrity during transit.
                        </div>
                    </div>
                    <br />
                    <div className='w-full px-4 md:px-6 lg:px-8'>
                        <Image src={SampleShipping3} layout="responsive" alt="Sample Shipping 3" />
                    </div>

                </div>

                <div>

                    <div className='w-full px-4 md:px-6 lg:px-8 flex flex-col gap-[12px] md:gap-[30px] lg:gap-[100px] '>
                        <div className='flex flex-col gap-[6px] md:gap-[24px] lg:gap-[30px]'>
                            <div className='font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px]'>
                                Shipping Address
                            </div>
                            <div className='font-DM-Sans font-normal text-[12px] md:text-[24px]  leading-[34px] '>
                                Medbank Osaka Labo <br />
                                shoji, Ikuno-ku, Osaka-shi, Osaka 544-0002, Japan
                            </div>
                        </div>
                        <div className='flex flex-col gap-[6px] md:gap-[24px] lg:gap-[30px]'>
                            <div className='font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px]'>
                                Transportation Temperature Range
                            </div>
                            <div className='font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] '>
                                Customers are reminded to ship samples under refrigerated or frozen conditions
                            </div>
                        </div>
                        <div className='flex flex-col gap-[6px] md:gap-[24px] lg:gap-[30px]'>
                            <div className='font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px]'>
                                Shipping Costs
                            </div>
                            <div className='font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] '>
                                Shipping charges are prepaid by the customer (payment upon shipping) and may vary depending on the shipping method and destination.
                            </div>
                        </div>

                        <div className='flex flex-col gap-[6px] md:gap-[24px] lg:gap-[30px]'>
                            <div className='font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px]'>
                                Contact Information
                            </div>
                            <div className='font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] '>
                                Customers are encouraged to contact Setolabo&apos;s customer support team for any questions or concerns related to sample shipping.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page



