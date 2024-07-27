import React from 'react'
import HomePageSectionHeader2 from '../components/HomePageSectionHeader2/page'
import Orderflow2 from '../../public/Images/Home/Orderflow2.png'
import Orderflow3 from '../../public/Images/Home/Orderflow3.png'
import Orderflow4 from '../../public/Images/Home/Orderflow4.png'
import Orderflow5 from '../../public/Images/Home/Orderflow5.png'
import Orderflow6 from '../../public/Images/Home/Orderflow6.png'
import Orderflow7 from '../../public/Images/Home/Orderflow7.png'
import Orderflow8 from '../../public/Images/Home/Orderflow8.png'
import Orderflow9 from '../../public/Images/Home/Orderflow9.png'
import Orderflow10 from '../../public/Images/Home/Orderflow10.png'
import Orderflow11 from '../../public/Images/Home/Orderflow11.png'
import Orderflow12 from '../../public/Images/Home/Orderflow12.png'
import Orderflow13 from '../../public/Images/Home/Orderflow13.png'
import Orderflow1 from '../../public/Images/Home/Orderflow1.png'
import Image from 'next/image'
import Link from 'next/link'



const page = () => {
    return (
        <section className='w-100vw flex flex-col justify center items-center'>
            <div className='w-[1056px]  flex flex-col items-start'>
                <div className='text-#333333 pt-[60px] pl-[25px]'>

                    <div className='w-50px font-sans font-medium text-[18px] leading-[24px] pb-[14px]'>
                        steps

                    </div>

                </div>
                <div className='text-[#333333] pt-[20px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"1"} subTitle={"Registration"}></HomePageSectionHeader2>
                    </div>

                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        Please register as a member when you decide to place an order. <br></br>
                        You can view your order history on My Page.
                        <button className="w-[50px] h-[20px] px-[32px] py-[12px] rounded-[6px] flex items-center justify-center gradient-primary text-[14px] text-white">Sign Up</button> 
                    </div>
                    <br></br>
                    <div>
                        <Image src={Orderflow1}></Image>

                    </div>

                </div>


                <div className='text-[#333333] pt-[20px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"2"} subTitle={"Enter your information in My Page"}></HomePageSectionHeader2>
                    </div>

                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        Please click the “Setup” button on “My page” and enter detailed information about your
                        research institute.

                    </div>
                    <br></br>
                    <div>
                        <Image src={Orderflow2}></Image>

                    </div>

                </div>


                <div className='text-[#333333] pt-[20px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"3"} subTitle={"Create a new order page"}></HomePageSectionHeader2>
                    </div>

                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        Click the New Order button on My page to create a new order page and follow the steps to
                        place an order.

                    </div>
                    <br></br>
                    <div>
                        <Image src={Orderflow3}></Image>

                    </div>

                </div>


                <div className='text-[#333333] pt-[20px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"4"} subTitle={"Create a request sheet"}></HomePageSectionHeader2>
                    </div>

                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        Download the request sheet from the New Order page, create and upload the request sheet.

                    </div>
                    <br></br>
                    <div>
                        <Image src={Orderflow4}></Image>

                    </div>

                </div>


                <div className='text-[#333333] pt-[20px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"5"} subTitle={"Confirmation of Quotation"}></HomePageSectionHeader2>
                    </div>

                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        Once the request sheet has been received without any problems, you will receive a
                        quotation.
                        Please check the quotation.
                    </div>
                    <br></br>
                    <div>
                        <Image src={Orderflow5}></Image>

                    </div>

                </div>



                <div className='text-[#333333] pt-[20px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"6"} subTitle={"Place a formal order"}></HomePageSectionHeader2>
                    </div>

                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        After confirming the quotation, please place a formal order by clicking the “Place a formal
                        order” button on the “New Order” page.
                        After placing a formal order, the formal order will be automatically accepted by Medbank.

                    </div>
                    <br></br>
                    <div>
                        <Image src={Orderflow6}></Image>

                    </div>

                </div>


                <div className='text-[#333333] pt-[20px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"7"} subTitle={"Sending samples"}></HomePageSectionHeader2>
                    </div>

                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        When you are ready to send samples, please prepare samples and request sheets (our
                        form) and send them to the address below.
                        Please refer to the page of each analysis service you request for the required sample
                        volume.
                        For packing instructions, please refer to this page. <br></br> <br></br>
                        <Link href='' >Sending Samples</Link>
                        <br>
                        </br>
                        <br></br>
                        Sample delivery address <br></br>
                        Medbank Japan Laboratory <br></br>
                        3-7-12 Shoji, Ikuno-ku, Osaka, 544-0002, Japan <br></br>

                    </div>
                    <br></br>
                    <div>
                        <Image src={Orderflow7}></Image>

                    </div>

                </div>


                <div className='text-[#333333] pt-[20px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"8"} subTitle={"Quality Check"}></HomePageSectionHeader2>
                    </div>

                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        Medbank will perform a quality check.
                        The results of the quality check will be sent to you via Mypage. <br></br>
                        If there is no problem, please proceed to the next step. If there is a problem and you wish to <br></br>
                        resend or dispose of the sample, please contact us via chat.
                    </div>
                    <br></br>
                    <div>
                        <Image src={Orderflow8}></Image>

                    </div>

                </div>


                <div className='text-[#333333] pt-[20px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"9"} subTitle={"Library Adjustment"}></HomePageSectionHeader2>
                    </div>

                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        Library adjustment will be performed by Medbank. <br></br>
                        If there is no problem, please proceed to the next step. If there is a problem and you wish to <br></br>
                        resend or dispose of the sample, please contact us via chat.

                    </div>
                    <br></br>
                    <div>
                        <Image src={Orderflow9}></Image>

                    </div>

                </div>


                <div className='text-[#333333] pt-[20px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"10"} subTitle={"Inspection and Analysis"}></HomePageSectionHeader2>
                    </div>

                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        After the quality check and library adjustment are completed, Medbank will perform the
                        analysis. Mypage will be notified of the start and end of the analysis.

                    </div>
                    <br></br>
                    <div>
                        <Image src={Orderflow10}></Image>

                    </div>

                </div>



                <div className='text-[#333333] pt-[20px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"11"} subTitle={"Sending of original data and analysis specifications"}></HomePageSectionHeader2>
                    </div>

                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        After the analysis is completed, the original data and analysis specifications will be available
                        for download from Mypage. <br></br>
                        The original data will be shared in the cloud and will be stored for 3 months.

                    </div>
                    <br></br>
                    <div>
                        <Image src={Orderflow11}></Image>

                    </div>

                </div>


                <div className='text-[#333333] pt-[20px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"12"} subTitle={"Sending of invoice"}></HomePageSectionHeader2>
                    </div>

                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                        After the original data and analysis specifications have been sent, an invoice will be
                        available for download from Mypage. Please make a bank transfer after confirming the
                        invoice.

                    </div>
                    <br></br>
                    <div>
                        <Image src={Orderflow12}></Image>

                    </div>

                </div>


                <div className='text-[#333333] pt-[20px]'>
                    <div className='flex flex-col pb-[6px]'>
                        <HomePageSectionHeader2 title={"13"} subTitle={"Sending of Receipt"}></HomePageSectionHeader2>
                    </div>

                    <div className='w-[996.45px] font-sans font-normal text-[24px] leading-[34px] pl-[60px]'>
                    You will be able to download the receipt after confirming the transfer of funds. <br></br>
                    Please note that it may take some time to confirm the transfer of funds.

                    </div>
                    <br></br>
                    <div>
                        <Image src={Orderflow13}></Image>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default page
