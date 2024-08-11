import { useTranslations } from 'next-intl'
import React from 'react'
import {pendingIcon,progressIcon,completedIcon} from '../Icons'

const OrderOverView = ({orderOverview}) => {
  const t = useTranslations("DashBoard.orderOverView")
  return (
    <div className='text-[#333333]'>
        <span className='h-[40px] font-DM-Sans font-bold text-[20px] leading-[28px]'>{t("orderOverView")}</span>
        <div>
          <div className='w-[350px] h-[176px] border-[1px] border-[#E2E8F0] '></div>
          <div className='w-[350px] h-[176px] border-[1px] border-[#E2E8F0] '></div>
          <div className='w-[350px] h-[176px] border-[1px] border-[#E2E8F0] '></div>
        </div>
    </div>
  )
}

export default OrderOverView