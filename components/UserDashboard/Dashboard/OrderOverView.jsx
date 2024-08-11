import { useTranslations } from 'next-intl'
import React from 'react'
import {pendingIcon,progressIcon,completedIcon} from '../Icons'

const OrderOverView = ({orderOverview}) => {
  const t = useTranslations("DashBoard.orderOverView")
  return (
    <div className='text-[#333333]'>
        <div className='h-[40px] '>
          <span className='font-DM-Sans font-bold text-[20px] leading-[28px]'>{t("orderOverView")}</span>
        </div>
        <div className='flex items-center justify-start gap-[49px] flex-wrap'>
          <div className='w-[350px] h-[176px] flex flex-col gap-[18px] border-[1px] border-[#E2E8F0] rounded-[10px] p-[30px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
            <div className=''>
              {pendingIcon}
            </div>
            <div className='flex flex-col items-start justify-start gap-[8px]'>
              <span className='font-DM-Sans font-medium text-[#333333] text-[16px] leading-[24px] '>{t("pending")}</span>
              <span className='font-DM-Sans font-bold text-[#333333] text-[32px] leading-[30px] '>{orderOverview.pending}</span>
            </div>
          </div>
          <div className='w-[350px] h-[176px] flex flex-col gap-[18px] border-[1px] border-[#E2E8F0] rounded-[10px] p-[30px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
            <div className=''>
              {progressIcon}
            </div>
            <div className='flex flex-col items-start justify-start gap-[8px]'>
              <span className='font-DM-Sans font-medium text-[#333333] text-[16px] leading-[24px] '>{t("progress")}</span>
              <span className='font-DM-Sans font-bold text-[#333333] text-[32px] leading-[30px] '>{orderOverview.progress}</span>
            </div>
          </div>
          <div className='w-[350px] h-[176px] flex flex-col gap-[18px] border-[1px] border-[#E2E8F0] rounded-[10px] p-[30px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
            <div className=''>
              {completedIcon}
            </div>
            <div className='flex flex-col items-start justify-start gap-[8px]'>
              <span className='font-DM-Sans font-medium text-[#333333] text-[16px] leading-[24px] '>{t("completed")}</span>
              <span className='font-DM-Sans font-bold text-[#333333] text-[32px] leading-[30px] '>{orderOverview.completed}</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OrderOverView