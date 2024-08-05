import React from 'react'
import SnackBar from '@/components/SnackBar'

const page = () => {
    return (
        <>
            <section className="pl-[38px] pr-[24px] md:pl-[156px] md:pr-[95px] w-full flex flex-col items-center justify-center text-[#333333] px-4">
                <div className= "relative max-w-screen-lg w-full pt-[24px] md:pt-[60px] flex flex-col items-start gap-[24px]">
                    <div className="absolute top-[28px] left-[-29px] md:top-[60px]  md:left-[-54px]">
                        <SnackBar text={"Site Policy"} />
                    </div>
                    <h2 className="text-center leading-[24px] font-DM-Sans text-[16px] sm:text-[32px] font-bold">
                        Site Policy
                    </h2>
                    <span className='font-normal font-DM-Sans text-[12px] sm:text-[24px] leading-36px'>
                        Customers using the website (https://medbank.sg/) provided by Medbank (hereinafter
                        referred to as “we” or “us”) are requested to fully read the following.
                    </span>
                    <div>
                        <div className="font-DM-Sans font-medium text-[24px] leading-36px">
                            ・Disclaimer
                        </div>
                        <span className='font-normal font-DM-Sans text-[12px] sm:text-[24px] leading-36px'>
                            Although we take the utmost care in posting information on Medbank&apos;s website,
                            Medbank does not guarantee the accuracy or completeness of this information. <br />
                            Medbank reserves the right to change the information on its website at any time without
                            notice. <br />
                            Medbank and its affiliates shall not be liable for any direct or indirect loss incurred by you as
                            a result of your use of the information or content contained in the Medbank website.
                        </span>
                    </div>
                    <div>
                        <div className="font-DM-Sans font-medium text-[12px] sm:text-[24px] leading-36px">
                            ・Copyrights and Trademarks
                        </div>
                        <span className='font-normal font-DM-Sans text-[12px] sm:text-[24px] leading-36px'>
                            All text, illustrations, logos, photographs, videos, software, and all other information on this
                            website are the copyrighted property of Medbank or third parties. <br />
                            Except for personal use or other use permitted by copyright law, you may not use (including
                            copying, modifying, distributing, or publicly transmitting) any of this information without the
                            prior permission of the copyright holder. <br />
                            The names of our products and services appearing on our website are our trademarks.
                        </span>
                    </div>
                    <div>
                        <div className="font-DM-Sans font-medium text-[12px] sm:text-[24px] leading-36px">
                            ・Governing Law and Court of Jurisdiction
                        </div>
                        <span className='font-normal font-DM-Sans text-[12px] sm:text-[24px] leading-36px'>
                            Unless otherwise provided herein, the use of this website shall be governed by and
                            construed in accordance with the laws of Japan. <br />
                            Access to Medbank website is at the discretion of the user, and the user assumes all
                            responsibility for the use of Medbank website. <br />
                            Unless otherwise specified, the Hiroshima District Court shall be the court of first jurisdiction
                            for all disputes related to the use of this website. <br />
                        </span>
                    </div>
                    <span className='font-normal font-DM-Sans text-[12px] sm:text-[24px] leading-36px'>
                        【Links to our website】
                        In principle, you are free to link to our website, regardless of whether it is for profit or not.
                        However, please refrain from setting up links that fall under any of the following or may fall
                        under any of the following. <br />
                        Websites that include content that defames or slanders Medbank, other companies (or
                        persons), or other organizations, or that is intended to discredit them. <br />
                        Websites that infringe or may infringe intellectual property rights such as copyrights,
                        trademarks, property, privacy, portrait rights, or other rights of Medbank, other companies (or
                        persons), or other organizations.
                    </span>
                    <span className='font-normal font-DM-Sans text-[12px] sm:text-[24px] leading-36px'>
                        Websites that make it unclear that the contents are those of Medbank website and may
                        cause misunderstanding to third parties, such as when Medbank website is displayed within
                        a frame. <br />
                        (Please be sure to set the link in such a way that the screen completely switches to this
                        website or a new browser window opens to display our website). <br />
                        In addition to the above items, websites that may violate laws, ordinances, regulations
                        including rules and regulations, or public order and morals, or may interfere with the
                        operation of Medbank website services. <br />
                        It is not permitted to link to the Website by using registered trademarks such as logos and
                        marks owned by Medbank without permission. It is not permitted to create a link in such a
                        way as to misidentify the source of the information. <br />
                        Please note that the URL of Medbank website is subject to change without notice. <br />
                        【Others】 <br />
                        Please note that Medbank shall not be liable for any compensation, complaints, etc. related
                        to the link. <br />
                        ・Prohibited Matters <br />
                        The following actions are prohibited when using this website. <br />
                        ・Actions that cause or may cause annoyance, disadvantage, or damage to other users, third
                        parties, or Medbank. <br />
                        ・Actions that infringe or may infringe on the property or privacy of other users, third parties,
                        or Medbank. <br />
                        ・Actions that are or may be offensive to public order and morals. <br />
                        ・Actions that violate or may violate laws, regulations, or ordinances. <br />
                        ・Any other actions that the Company deems inappropriate. <br />
                    </span>
                </div>
            </section>
        </>
    )
}

export default page

