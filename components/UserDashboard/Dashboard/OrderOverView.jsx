import React from 'react'

const OrderOverView = ({orderOverview}) => {
  return (
    <div className='text-[#333333]'>
        <span className='mb-[10px] h-[40px] pb-[10px] font-DM-Sans font-bold text-[20px] leading-[28px]'>Order Overview!</span>
        <div className="flex-1 flex flex-row items-start justify-start gap-[49px] max-w-full mq1000:flex-wrap mq725:gap-6">
              <div className="flex-1 shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-[10px] bg-white border-stroke border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[29px] px-[30px] pb-7 gap-[17px] min-w-[262px] max-w-full">
                <div className="w-[350px] h-44 relative shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-[10px] bg-white border-stroke border-[1px] border-solid box-border hidden max-w-full" />
                <img
                  className="w-9 h-9 relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/dashboard/vector.svg"
                />
                <div className="flex flex-col items-start justify-start gap-2">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[117px] z-[1]">
                    Pending Orders
                  </div>
                  <b className="relative text-13xl leading-[30px] inline-block min-w-[20px] z-[1] mq450:text-lgi mq450:leading-[18px] mq1000:text-7xl mq1000:leading-[24px]">
                    3
                  </b>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-3xs bg-white border-stroke border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[29px] px-[30px] pb-7 gap-[17px] min-w-[262px] max-w-full">
                <div className="w-[350px] h-44 relative shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-3xs bg-white border-stroke border-[1px] border-solid box-border hidden max-w-full" />
                <img
                  className="w-9 h-9 relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/dashboard/carboninprogress.svg"
                />
                <div className="flex flex-col items-start justify-start gap-2">
                  <div className="relative leading-[24px] font-medium z-[1]">
                    Orders In-Progress
                  </div>
                  <b className="relative text-13xl leading-[30px] inline-block font-roboto min-w-[19px] z-[1] mq450:text-lgi mq450:leading-[18px] mq1000:text-7xl mq1000:leading-[24px]">
                    2
                  </b>
                </div>
              </div>
              <div className="flex-[0.9722] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-3xs bg-white border-stroke border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[29px] px-[34px] pb-7 gap-[17px] min-w-[262px] max-w-full mq450:flex-1">
                <div className="w-[350px] h-44 relative shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-3xs bg-white border-stroke border-[1px] border-solid box-border hidden max-w-full" />
                <img
                  className="w-9 h-9 relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/dashboard/fluentmdl2completed.svg"
                />
                <div className="w-[151px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <div className="flex-1 flex flex-col items-start justify-start gap-2">
                    <div className="self-stretch relative leading-[24px] font-medium z-[1]">
                      Completed
                    </div>
                    <b className="relative text-13xl leading-[30px] inline-block font-roboto min-w-[19px] z-[1] mq450:text-lgi mq450:leading-[18px] mq1000:text-7xl mq1000:leading-[24px]">
                      5
                    </b>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default OrderOverView