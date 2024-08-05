import React from 'react'
import HomePageSectionHeader2 from '../../../../components/HomePageSectionHeader2'
import Orderflow2 from '../../../../public/Images/Home/Orderflow2.png'
import Orderflow3 from '../../../../public/Images/Home/Orderflow3.png'
import Orderflow4 from '../../../../public/Images/Home/Orderflow4.png'
import Orderflow5 from '../../../../public/Images/Home/Orderflow5.png'
import Orderflow6 from '../../../../public/Images/Home/Orderflow6.png'
import Orderflow7 from '../../../../public/Images/Home/Orderflow7.png'
import Orderflow8 from '../../../../public/Images/Home/Orderflow8.png'
import Orderflow9 from '../../../../public/Images/Home/Orderflow9.png'
import Orderflow10 from '../../../../public/Images/Home/Orderflow10.png'
import Orderflow11 from '../../../../public/Images/Home/Orderflow11.png'
import Orderflow12 from '../../../../public/Images/Home/Orderflow12.png'
import Orderflow13 from '../../../../public/Images/Home/Orderflow13.png'
import Orderflow1 from '../../../../public/Images/Home/Orderflow1.png'
import Image from 'next/image'
import Link from 'next/link'
import SnackBar from '../../../../components/SnackBar'

const page = () => {
    return (
        <section className='pl-[38px] pr-[24px] md:pl-[156px] md:pr-[95px] w-full flex flex-col justify-center items-center'>
            <div className='max-w-[1056px] w-full flex flex-col items-start'>
                <div className='text-[#333333] pt-[24px] md:pt-[60px]'>
                    <div className='font-DM-Sans font-medium text-[14px] md:text-[18px] leading-[24px]'>
                        steps
                    </div>
                </div>

                <div className='relative text-[#333333] pt-[10px] md:pt-[40px]'>
                    <div  className="absolute top-[-18px] left-[-29px] md:top-[-18px] md:left-[-44px]">
                        <SnackBar text={"Order Flow"}/>
                    </div>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2 title={"1"} subTitle={"Registration"} />
                    </div>
                    <div className='max-w-[996.45px] w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                        Please register as a member when you decide to place an order. <br />
                        You can view your order history on My Page.
                        <Link href="/Signup" className="h-[40px] w-[117px] rounded-[6px] flex items-center justify-center gradient-primary text-white">Sign Up</Link>
                    </div>
                    <br />
                    <div className='pt-[40px]'>
                        <Image src={Orderflow1} />
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2 title={"2"} subTitle={"Enter your information in My Page"} />
                    </div>
                    <div className='max-w-[996.45px] w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                        Please click the “Setup” button on “My page” and enter detailed information about your
                        research institute.
                    </div>
                    <br />
                    <div>
                        <Image src={Orderflow2} />
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2 title={"3"} subTitle={"Create a new order page"} />
                    </div>
                    <div className='max-w-[996.45px] w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                        Click the New Order button on My page to create a new order page and follow the steps to
                        place an order.
                    </div>
                    <br />
                    <div className='pt-[40px]'>
                        <Image src={Orderflow3} />
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2 title={"4"} subTitle={"Create a request sheet"} />
                    </div>
                    <div className='max-w-[996.45px] w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                        Download the request sheet from the New Order page, create and upload the request sheet.
                    </div>
                    <br />
                    <div className=' pt-[40px]'>
                        <Image src={Orderflow4} />
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2 title={"5"} subTitle={"Confirmation of Quotation"} />
                    </div>
                    <div className='max-w-[996.45px] w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                        Once the request sheet has been received without any problems, you will receive a
                        quotation. Please check the quotation.
                    </div>
                    <br />
                    <div className=' pt-[40px]'>
                        <Image src={Orderflow5} />
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2 title={"6"} subTitle={"Place a formal order"} />
                    </div>
                    <div className='max-w-[996.45px] w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                        After confirming the quotation, please place a formal order by clicking the “Place a formal
                        order” button on the “New Order” page. After placing a formal order, the formal order will be
                        automatically accepted by Medbank.
                    </div>
                    <br />
                    <div className=' pt-[40px]'>
                        <Image src={Orderflow6} />
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2 title={"7"} subTitle={"Sending samples"} />
                    </div>
                    <div className='max-w-[996.45px] w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                        When you are ready to send samples, please prepare samples and request sheets (our
                        form) and send them to the address below. Please refer to the page of each analysis service
                        you request for the required sample volume. For packing instructions, please refer to this page. <br /> <br />
                        <Link href='' >Sending Samples</Link>
                        <br /><br />
                        Sample delivery address <br />
                        Medbank Japan Laboratory <br />
                        3-7-12 Shoji, Ikuno-ku, Osaka, 544-0002, Japan <br />
                    </div>
                    <br />
                    <div className=' pt-[40px]'>
                        <Image src={Orderflow7} />
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2 title={"8"} subTitle={"Quality Check"} />
                    </div>
                    <div className='max-w-[996.45px] w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                        Medbank will perform a quality check. The results of the quality check will be sent to you via Mypage. <br />
                        If there is no problem, please proceed to the next step. If there is a problem and you wish to <br />
                        resend or dispose of the sample, please contact us via chat.
                    </div>
                    <br />
                    <div className=' pt-[40px]'>
                        <Image src={Orderflow8} />
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2 title={"9"} subTitle={"Library Adjustment"} />
                    </div>
                    <div className='max-w-[996.45px] w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                        Library adjustment will be performed by Medbank. <br />
                        If there is no problem, please proceed to the next step. If there is a problem and you wish to <br />
                        resend or dispose of the sample, please contact us via chat.
                    </div>
                    <br />
                    <div className=' pt-[40px]'>
                        <Image src={Orderflow9} />
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2 title={"10"} subTitle={"Inspection and Analysis"} />
                    </div>
                    <div className='max-w-[996.45px] w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                        After the quality check and library adjustment are completed, Medbank will perform the
                        analysis. Mypage will be notified of the start and end of the analysis.
                    </div>
                    <br />
                    <div className=' pt-[40px]'>
                        <Image src={Orderflow10} />
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2 title={"11"} subTitle={"Sending of original data and analysis specifications"} />
                    </div>
                    <div className='max-w-[996.45px] w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                        After the analysis is completed, the original data and analysis specifications will be available
                        for download from Mypage. <br />
                        The original data will be shared in the cloud and will be stored for 3 months.
                    </div>
                    <br />
                    <div className=' pt-[40px]'>
                        <Image src={Orderflow11} />
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2 title={"12"} subTitle={"Sending of invoice"} />
                    </div>
                    <div className='max-w-[996.45px] w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                        After the original data and analysis specifications have been sent, an invoice will be
                        available for download from Mypage. Please make a bank transfer after confirming the
                        invoice.
                    </div>
                    <br />
                    <div className=' pt-[40px]'>
                        <Image src={Orderflow12} />
                    </div>
                </div>

                <div className='text-[#333333] pt-[40px]'>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2 title={"13"} subTitle={"Sending of Receipt"} />
                    </div>
                    <div className='max-w-[996.45px] w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                        You will be able to download the receipt after confirming the transfer of funds. <br />
                        Please note that it may take some time to confirm the transfer of funds.
                    </div>
                    <br />
                    <div className=' pt-[40px]'>
                        <Image src={Orderflow13} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
