import React from 'react'
import HomePageSectionHeader2 from '../../../components/HomePageSectionHeader2'
import SampleShipping1 from '../../../public/Images/Home/SampleShipping1.png'
import SampleShipping2 from '../../../public/Images/Home/SampleShipping2.png'
import SampleShipping3 from '../../../public/Images/Home/SampleShipping3.png'
import Image from 'next/image'

const page = () => {
    return (
        <section className='w-100vw flex flex-col justify center items-center'>
            <div className='w-[1056px]  flex flex-col items-start'>
                <div className='text-#333333 pt-[60px] pl-[25px]'>

                    <div className='w-50px font-sans font-medium text-[18px] leading-[24px] pb-[14px]'>
                        step 1

                    </div>
                    <div className=' font-sans font-bold text-[32px] leading-[24px]'>
                        Sample Preparation
                    </div>

                </div>
                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"1"} subTitle={"Sample Tubes"}></HomePageSectionHeader2>
                    </div>
                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        Customers are instructed to place their <span className='font-medium'>pre-adjusted DNA/RNA/PCR </span> samples in individual tubes. <br></br>
                        For larger sample quantities (approximately 16 samples or more), 8-strip tubes or similar containers are recommended.
                    </div>
                </div>


                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"2"} subTitle={"Labeling"}></HomePageSectionHeader2>
                    </div>
                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        Each sample tube should be <span className='font-medium'>clearly labeled</span> with the sample name using a permanent marker directly on the tube's surface.
                        If the tube has a detachable cap, the label should be placed on both the cap and the tube side to ensure proper identification.
                    </div>
                </div>


                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"3"} subTitle={"Secure Closure"}></HomePageSectionHeader2>
                    </div>
                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        Customers are reminded to securely close the tube caps to prevent sample leakage or contamination during transportation
                    </div>
                </div>
                <br></br>
                <div>
                    <Image src={SampleShipping1}></Image>

                </div>



                <div className='text-#333333 pt-[60px] pl-[25px]'>

                    <div className='w-50px font-sans font-medium text-[18px] leading-[24px] pb-[14px]'>
                        step 2

                    </div>
                    <div className=' font-sans font-bold text-[32px] leading-[24px]'>
                        Tube Packaging
                    </div>

                </div>
                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"1"} subTitle={"Method 1 : Tube Box or Container"}></HomePageSectionHeader2>
                    </div>
                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        Samples should be placed in a tube box or similar container to prevent spillage. The box should be securely taped or sealed to prevent the lid from coming off during transit.
                    </div>
                </div>


                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"2"} subTitle={"Method 2 : Falcon Tubes or Similar"}></HomePageSectionHeader2>
                    </div>
                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        If using Falcon tubes, customers should insert cushioning material or paper to secure the tubes and prevent movement.
                        Tubes should be adequately secured to prevent damage during shipping.
                    </div>
                </div>


                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"3"} subTitle={"Freezing Samples"}></HomePageSectionHeader2>
                    </div>
                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        If samples require freezing, customers are advised to freeze the tubes vertically to prevent accidental cap opening.
                    </div>
                </div>
                <br></br>
                <div>
                    <Image src={SampleShipping2}></Image>

                </div>



                <div className='text-#333333 pt-[60px] pl-[25px]'>

                    <div className='w-50px font-sans font-medium text-[18px] leading-[24px] pb-[14px]'>
                        step 3

                    </div>
                    <div className=' font-sans font-bold text-[32px] leading-[24px]'>
                        Packaging
                    </div>

                </div>
                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"1"} subTitle={"Recommended Conditions"}></HomePageSectionHeader2>
                    </div>
                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        Customers should use a shipping box with cushioning material (e.g., Styrofoam cooler box) and include ice packs for temperature-sensitive samples.

                        The packaged tubes should be wrapped in additional cushioning material to prevent movement and maintain temperature control.
                    </div>
                </div>


                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"2"} subTitle={"Request Sheet"}></HomePageSectionHeader2>
                    </div>
                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        Customers are instructed to print and include a request sheet with the packaged samples, specifying the expected arrival date declared at the time of ordering.
                    </div>
                </div>


                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"3"} subTitle={"Scaling"}></HomePageSectionHeader2>
                    </div>
                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        The shipping box should be securely sealed with tape or similar material to prevent tampering and ensure sample integrity during transit.
                    </div>
                </div>
                <br></br>
                <div>
                    <Image src={SampleShipping3}></Image>

                </div>

                <div >
                    <div className='pt-[40px] pl-[25px]'>
                        <div className='font-bold text-[32px] leading-[24px]'>
                            Shipping Address

                        </div>
                        <div className='font-sans font-normal text-[24px] leading-[34px] pt-[30px]'>
                            Medbank Osaka Labo <br></br>
                            shoji, Ikuno-ku, Osaka-shi, Osaka 544-0002, Japan

                        </div>




                    </div>
                    <div className='pt-[40px] pl-[25px]'>
                        <div className='font-bold text-[32px] leading-[24px]'>
                            Transportation Temperature Range

                        </div>
                        <div className='font-sans font-normal text-[24px] leading-[34px] pt-[30px]'>
                            Customers are reminded to ship samples under refrigerated or frozen conditions

                        </div>




                    </div>


                    <div className='pt-[40px] pl-[25px]'>
                        <div className='font-bold text-[32px] leading-[24px]'>
                            Shipping Costs

                        </div>
                        <div className='font-sans font-normal text-[24px] leading-[34px] pt-[30px]'>
                            Shipping charges are prepaid by the customer (payment upon shipping) and may vary depending on the shipping method and destination.

                        </div>




                    </div>

                    <div className='pt-[40px] pl-[25px]'>
                        <div className='font-bold text-[32px] leading-[24px]'>
                            Contact Information

                        </div>
                        <div className='font-sans font-normal text-[24px] leading-[34px] pt-[30px]'>
                            Customers are encouraged to contact Setolabo's customer support team for any questions or concerns related to sample shipping.

                        </div>




                    </div>

                </div>

            </div>

        </section>

    )
}

export default page
