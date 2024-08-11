'use client'
import React, { useEffect, useState } from 'react'
import CountryDropDown from "../../../../components/CountryDropdown"
import { useTranslations } from 'next-intl'
import { useModal } from '@/contexts/ModalContext'

const Settings = () => {
  const [Username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [faculty, setFaculty] = useState("");
  const [field, setField] = useState("");
  const [others, setOthers] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [Perfecture, setPerfecture] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const t = useTranslations("Settings");


  return (
    <>
      <div className='text-[#333333] pl-[32px] w-full text-[22px] font-DM-Sans leading-[28px] text-#333333 font-bold pt-[17px]'>
      {t("settings")}
      </div>
      <div className='text-[#333333] mx-[9px] my-[24px] md:border-[1px] rounded-[10px] flex flex-col md:flex-row'>
        <div className='flex flex-col md:w-1/2 md:border-r-[1px]'>
          <div className='px-[24px] md:py-[15px] w-full md:border-b-[1px] font-DM-Sans text-[14px] md:text-base font-normal leading-6'>
          {t("personalInfo.personalInfo")}
          </div>
          <div className='px-[24px] py-[12px] md:py-[29px] w-full flex flex-col gap-[6px] md:gap-[16px]'>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
              {t("personalInfo.userName")}
              </label>
              <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                  <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                    placeholder=""
                    value={Username}
                    onChange={(e) => setUserName(e.target.value)}
                    style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                    type="text"
                    name="name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
              {t("personalInfo.name")}
              </label>
              <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                  <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                    placeholder=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                    type="text"
                    name="name"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
              {t("personalInfo.school")}
              </label>
              <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                  <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                    placeholder=""
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                    type="text"
                    name="name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
              {t("personalInfo.faculty")}
              </label>
              <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                  <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                    placeholder=""
                    value={faculty}
                    onChange={(e) => setFaculty(e.target.value)}
                    style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                    type="text"
                    name="name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
              {t("personalInfo.field")}
              </label>
              <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                  <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                    placeholder=""
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                    type="text"
                    name="name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
              {t("personalInfo.others")}
              </label>
              <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                  <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                    placeholder=""
                    value={others}
                    onChange={(e) => setOthers(e.target.value)}
                    style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                    type="text"
                    name="name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
              {t("personalInfo.invoice")}
              </label>
              <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                  <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                    placeholder=""
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                    type="text"
                    name="name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:w-1/2'>
          <div className='px-[24px] md:py-[15px] w-full md:border-b-[1px] font-DM-Sans text-[14px] md:text-base font-normal leading-[28px] md:leading-6'>
          {t("contactInfo.contactInfo")}
          </div>
          <div className='px-[24px] py-[12px] md:py-[29px] w-full flex flex-col gap-[6px] md:gap-[16px]'>
            <div className='flex gap-[21px]'>
              <div className="flex flex-col w-[82px] h-[46px]">
                <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
                {t("contactInfo.country")}
                </label>
                <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                  <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                    
                    <CountryDropDown></CountryDropDown>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
                {t("contactInfo.phone")}
                </label>
                <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                  <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                    <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                      placeholder=""
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                      type="text"
                      name="name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
              {t("contactInfo.email")}
              </label>
              <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                  <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                    type="text"
                    name="name"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
              {t("contactInfo.confirmEmail")}
              </label>
              <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                  <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                    placeholder=""
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                    type="text"
                    name="name"
                  />
                </div>
              </div>
            </div>
            <div className='flex gap-[21px]'>
              <div className="flex flex-col w-[82px] h-[46px]">
                <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
                {t("contactInfo.country")}
                </label>
                <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                  <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                    
                    <CountryDropDown></CountryDropDown>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
                {t("contactInfo.postalCode")}
                </label>
                <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                  <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                    <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                      placeholder=""
                      value={postalCode}
                      onChange={(e) => setpostalCode(e.target.value)}
                      style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                      type="text"
                      name="name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
              {t("contactInfo.perfecture")}
              </label>
              <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                  <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                    placeholder=""
                    value={Perfecture}
                    onChange={(e) => setPerfecture(e.target.value)}
                    style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                    type="text"
                    name="name"
                  />
                </div>
              </div>
            </div>
           
            <div className="flex flex-col">
              <label htmlFor="name" className="font-DM-Sans font-medium text-[10px] md:text-sm mb-[6px] md:mb-4">
              {t("contactInfo.city")}
              </label>
              <div className='group w-full h-[35px] md:h-[46px] flex items-center justify-center flex-col'>
                <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`} >
                  <input className="w-full p-[10px] text-black md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
                    placeholder=""
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
                    type="text"
                    name="name"
                  />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-end gap-[10px] md:gap-[12px]'>
              <button  className='h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] '>{t("contactInfo.cancel")}</button>
              <button  className='h-[40px] md:h-[48px] w-[96px] md:w-[126px] rounded-[6px] flex items-center justify-center gap-[10px] border-[2px] border-[#E2E8F0] [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-medium text-[12px] md:text-[16px] text-center leading-[24px] '>{t("contactInfo.confirm")}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings

export const plusIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z" fill="white"/>
</svg>