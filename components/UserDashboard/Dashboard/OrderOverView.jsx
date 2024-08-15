import { useTranslations } from 'next-intl'
import {DashboardDataTable} from './DashboardDataTable'

import React, { useEffect, useState } from "react";
import {pendingIcon,progressIcon,completedIcon} from '../Icons'
import Tutorial from  '@/components/Tutorial'

const OrderOverView = ({orderOverview,data}) => {
  const [showTutorial, setShowTutorial] = useState(true);
  
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowTutorial(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleCloseTutorial = () => {
    setShowTutorial(false);
  };

  const t = useTranslations("DashBoard.orderOverView")
  return (
    <div className='relative'>
    {showTutorial && <Tutorial onClose={handleCloseTutorial} />}
    <div className='text-[#333333] mb-[14px]'>
        <div className='h-[40px] '>
          <span className='font-DM-Sans font-bold text-[14px] md:text-[20px] leading-[28px]'>{t("orderOverView")}</span>
        </div>
        <div className='flex items-center justify-start gap-[5px] md:gap-[49px] flex-wrap'>
          <div id="highlight-step-1" className='w-[114px] md:w-[350px] h-[106px] md:h-[176px] flex flex-col gap-[16px] md:gap-[18px] border-[1px] border-[#E2E8F0] rounded-[10px] pl-[10px] p-[6px] md:p-[30px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
            <div className='h-[18px] w-[18px] md:h-[36px] md:w-[36px]'>
              {pendingIcon}
            </div>
            <div className='flex flex-col items-start justify-start gap-[6px] md:gap-[8px]'>
              <span className='font-DM-Sans font-medium text-[#333333] text-[10px] md:text-[16px] leading-[24px] '>{t("pending")}</span>
              <span className='font-DM-Sans font-bold text-[#333333] text-[14px] md:text-[32px] leading-[30px] '>{orderOverview.pending}</span>
            </div>
          </div>
          <div id="highlight-step-2" className='w-[114px] md:w-[350px] h-[106px] md:h-[176px] flex flex-col gap-[16px] md:gap-[18px] border-[1px] border-[#E2E8F0] rounded-[10px] pl-[10px] p-[6px] md:p-[30px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
            <div className='h-[18px] w-[18px] md:h-[36px] md:w-[36px]'>
              {progressIcon}
            </div>
            <div className='flex flex-col items-start justify-start gap-[6px] md:gap-[8px]'>
              <span className='font-DM-Sans font-medium text-[#333333] text-[10px] md:text-[16px] leading-[24px] '>{t("progress")}</span>
              <span className='font-DM-Sans font-bold text-[#333333] text-[14px] md:text-[32px] leading-[30px] '>{orderOverview.progress}</span>
            </div>
          </div>
          <div id="highlight-step-3" className='w-[114px] md:w-[350px] h-[106px] md:h-[176px] flex flex-col gap-[16px] md:gap-[18px] border-[1px] border-[#E2E8F0] rounded-[10px] pl-[10px] p-[6px] md:p-[30px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]'>
            <div className='h-[18px] w-[18px] md:h-[36px] md:w-[36px]'>
              {completedIcon}
            </div>
            <div className='flex flex-col items-start justify-start gap-[6px] md:gap-[8px]'>
              <span className='font-DM-Sans font-medium text-[#333333] text-[10px] md:text-[16px] leading-[24px] '>{t("completed")}</span>
              <span className='font-DM-Sans font-bold text-[#333333] text-[14px] md:text-[32px] leading-[30px] '>{orderOverview.completed}</span>
            </div>
          </div>
        </div>
    </div>
    <DashboardDataTable data={data}/>
    </div>
  )
}

export default OrderOverView