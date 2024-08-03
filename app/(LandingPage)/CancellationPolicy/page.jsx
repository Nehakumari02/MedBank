import React from 'react'
import SnackBar from '@/components/SnackBar'

const page = () => {
    return (
        <>
            <section className="pl-[38px] pr-[24px] md:pl-[156px] md:pr-[95px] w-full flex flex-col items-center justify-center text-[#333333] px-4">
                <div className="relative max-w-screen-lg w-full pt-[30px] md:pt-[60px] flex flex-col items-start gap-[24px]">
                    <div className="absolute top-[34px] left-[-29px]  md:top-[60px] md:left-[-70px]">
                        <SnackBar text={"Cancellation Policy"} />
                    </div>
                    <h2 className="w-full leading-[24px] font-DM-Sans text-[16px] md:text-[32px] font-medium text-start">
                        Cancellation Policy
                    </h2>
                    <div>
                        <div className="font-DM-Sans font-medium text-[16px] md:text-[24px] leading-[36px]">
                            ・About Cancellation
                        </div>
                        <span className='font-normal font-DM-Sans text-[16px] md:text-[24px] leading-[36px]'>
                            Cancellation will be accepted if the cancellation request is received before the fee is
                            incurred.<br />
                            Cancellation requests made after the analysis has started will be charged up to the
                            experiment that has progressed. Basically, the quality check of the sample and the quality
                            check after library adjustment is the timing of the midway settlement.<br />
                            If the quality check of the sample and the library-adjusted sample does not provide the level
                            of evaluation required for NGS analysis, and if there is no reaction from the client within 3
                            months of notification of the results, the request will be cancelled and the client will be billed
                            for the costs up to the experiment that has already progressed.<br />
                            If you request us to proceed with an experiment on a sample for which sufficient quality
                            cannot be guaranteed by the sample quality check and library adjustment, we will charge
                            you the costs up to the experiment that has already proceeded, regardless of the results.
                        </span>
                    </div>

                    <div className='text-[16px] md:text-[24px]'>
                        <div className="font-DM-Sans font-medium leading-[36px]">
                            ・Loss of samples
                        </div>
                        <span className='font-normal font-DM-Sans leading-[36px]'>
                            If a sample is lost during transportation or due to unforeseen problems at the experimental
                            site, we may ask you to resend the sample.
                            Please note that we will not compensate for any loss of samples.
                        </span>
                    </div>

                    <div className='text-[16px] md:text-[24px]'>
                        <div className="font-DM-Sans font-medium leading-[36px]">
                            ・Cancellation
                        </div>
                        <span className='font-normal font-DM-Sans leading-[36px]'>
                            Please contact us via chat on mypage if you wish to cancel your order.
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page


