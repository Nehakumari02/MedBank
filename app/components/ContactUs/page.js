"use client"
import { useState } from "react";
import HomePageSectionHeader from "../HomePageSectionHeader/page";
import contactUsBg from '../../../public/Images/Home/contactUsBg.png'
import Image from "next/image";

const ContactUs = () => {
  const formData = useState({
    name:"",
    phoneNumber:Number,
    email:"",
    inquiryDetails:""
  })
  return(
  <section className="px-[62px] py-[100px] w-full text-[#333333] bg-[#7171710D]">
  <HomePageSectionHeader title={"Contact Us"} subTitle={"Contact Us"}/>
  <div className='pl-[90px] pt-[20px] pb-[80px] w-full flex gap-[32px]'>
    <div className="relative w-full">
      <div className="lg:w-[441px] flex flex-col gap-[24px]">
      <span className="flex items-center justify-start gap-[12px] font-sans text-[36px] font-medium leading-[42px] gradient-primary bg-clip-text text-transparent">REACH OUT TO US</span>
      <p className="font-sans font-normal text-[20px] leading-[34px]">
      "Connect with Medbank's team for inquiries, support, and collaboration opportunities. We're here to assist you with your genetic analysis needs and provide personalized guidance every step of the way."
      </p>
      </div>
    <div className="absolute top-[50px] right-[20px] bg-white lg:w-[675px] shadow-lg p-[70px] flex flex-col gap-[24px] rounded-3xl">
        <div class="relative z-0">
            <input type="text" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full Name</label>
        </div>
        <div class="relative z-0">
            <input type="text" id="phoneNumber" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="phoneNumber" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone Number</label>
        </div>
        <div class="relative z-0">
            <input type="text" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email Address</label>
        </div>
        <div class="relative z-0">
            <input type="text" id="confirmEmail" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="confirmEmail" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm Email Address</label>
        </div>
        <div class="relative z-0">
            <input type="text" id="inquiry" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="inquiry" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Inquiry Details</label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" required />
            <span className="ml-2">By clicking checkbox, I authorize Medbank...</span>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Get Guide</button>
    </div>
    </div>
    
  </div>
  <Image src={contactUsBg} alt="bgImage" className="w-full"></Image>
  </section>
  );
}
  export default ContactUs;