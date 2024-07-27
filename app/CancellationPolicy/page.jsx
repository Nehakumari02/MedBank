import React from 'react'
import Footer from '../components/Footer/page'

const page = () => {
    return (
        <>
            <section className=" w-[100vw]  flex flex-col items-center justify-center text-[#333333]">
                <div className="w-[1032px]  py-[60px]  flex flex-col items-start gap-[24px]">
                    <h2 className="w-[297px] leading-[24px] font-sans text-[32px] font-medium">Cancellation Policy</h2>
                    <div>
                        <div className="font-sans font-medium text-[24px] leading-36px">
                            ・About Cancellation

                        </div>
                        <span className='font-normal font-sans text-[24px] leading-36px'>
                            Cancellation will be accepted if the cancellation request is received before the fee is
                            incurred.<br></br>
                            Cancellation requests made after the analysis has started will be charged up to the
                            experiment that has progressed. Basically, the quality check of the sample and the quality
                            check after library adjustment is the timing of the midway settlement.<br></br>
                            If the quality check of the sample and the library-adjusted sample does not provide the level
                            of evaluation required for NGS analysis, and if there is no reaction from the client within 3
                            months of notification of the results, the request will be cancelled and the client will be billed
                            for the costs up to the experiment that has already progressed.<br></br>
                            If you request us to proceed with an experiment on a sample for which sufficient quality
                            cannot be guaranteed by the sample quality check and library adjustment, we will charge
                            you the costs up to the experiment that has already proceeded, regardless of the results.
                        </span>
                    </div>

                    <div>

                        <div className="font-sans font-medium text-[24px] leading-36px">
                            ・Loss of samples

                        </div>

                        <span className='font-normal font-sans text-[24px] leading-36px'>

                            If a sample is lost during transportation or due to unforeseen problems at the experimental
                            site, we may ask you to resend the sample.
                            Please note that we will not compensate for any loss of samples.
                        </span>
                    </div>

                    <div>

                        <div className="font-sans font-medium text-[24px] leading-36px">
                            ・Cancellation

                        </div>
                        <span className='font-normal font-sans text-[24px] leading-36px'>

                            Please contact us via chat on mypage if you wish to cancel your order.
                        </span>
                    </div>
                </div>

            </section>
            
        </>

    )
}

export default page
