import HomePageSectionHeader from "./HomePageSectionHeader";

const Process = () => (
  <section className="md:px-[42px] lg:px-[62px] py-[100px] w-full text-[#333333]">
        <HomePageSectionHeader title={"Order Flow"} subTitle={"Order Flow"}/>
        <div className='md:pl-[50px] lg:pl-[90px] pt-[20px] w-full flex flex-col items-start gap-[32px]'>
        <span className="flex items-center justify-center gap-[12px] font-sans text-[36px] font-medium leading-[42px] gradient-primary bg-clip-text text-transparent">PROCESS {ArrowRightIcon}</span>
        <p className="font-sans font-normal text-[20px] leading-[34px]">
        "At Medbank, we strive to make the process of ordering testing services as seamless and straightforward as possible. From initial inquiry to result delivery, our order flow is designed to ensure clarity, efficiency, and satisfaction at every step. Whether you're a seasoned researcher or new to genetic analysis, our team is here to guide you through the process and provide personalized support tailored to your specific project needs. Explore the following steps to learn more about how to place an order with Medbank and experience the benefits of our comprehensive genetic analysis services."
        </p>
        <div className="flex flex-col gap-[42px] items-center justify-center w-full">
          <div className="flex items-end justify-between w-full h-[100px] gap-[10px]">
            <span className='w-[50%] mr-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>1. Registration</span>
            <div className='h-[100px] border-l-[1px] border-[#717171] border-opacity-[50%]'> </div>
            <span className='w-[50%] ml-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>2. Complete Profile on My Page</span>
          </div>
          <div className="flex items-end justify-between w-full h-[100px] gap-[10px]">
            <span className='w-[50%] mr-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>3. Create New Order</span>
            <div className='h-[100px] border-l-[1px] border-[#717171] border-opacity-[50%]'></div>
            <span className='w-[50%] ml-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>4. Create Request Sheet</span>
          </div>
          <div className="flex items-end justify-between w-full h-[100px] gap-[10px]">
            <span className='w-[50%] mr-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>5. Confirmation of Quotation</span>
            <div className='h-[100px] border-l-[1px] border-[#717171] border-opacity-[50%]'></div>
            <span className='w-[50%] ml-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>6. Place a Formal Order</span>
          </div>
          <div className="flex items-end justify-between w-full h-[100px] gap-[10px]">
            <span className='w-[50%] mr-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>7. Sending Samples</span>
            <div className='h-[100px] border-l-[1px] border-[#717171] border-opacity-[50%]'></div>
            <span className='w-[50%] ml-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>8. Quality Check</span>
          </div>
          <div className="flex items-end justify-between w-full h-[100px] gap-[10px]">
            <span className='w-[50%] mr-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>9. Library Adjustment</span>
            <div className='h-[100px] border-l-[1px] border-[#717171] border-opacity-[50%]'></div>
            <span className='w-[50%] ml-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>10. Inspection and Analysis</span>
          </div>
          <div className="flex items-end justify-between w-full h-[100px] gap-[10px]">
            <span className='w-[50%] mr-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>11. Sending of Original Data and Analysis</span>
            <div className='h-[100px] border-l-[1px] border-[#717171] border-opacity-[50%]'></div>
            <span className='w-[50%] ml-[4px] h-[64px] flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%]'>12. Sending of Invoice</span>
          </div>
          <div className="flex items-center w-[552px] justify-center h-[100px]">
            <span className="h-[64px] w-full flex items-center justify-center border-b-[1px] border-[#717171] border-opacity-[50%] px-[20px]">13. Sending of Receipt</span>
          </div>
      </div>

    </div>
  
      </section>
    
  );
  
  export default Process;

  const ArrowRightIcon = <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.33 18.794C12.541 19.0047 12.8269 19.123 13.125 19.123C13.4231 19.123 13.7091 19.0047 13.92 18.794L20.295 12.419C20.5057 12.2081 20.624 11.9222 20.624 11.624C20.624 11.3259 20.5057 11.04 20.295 10.829L13.92 4.45404C13.7068 4.25507 13.4246 4.14668 13.1331 4.15172C12.8415 4.15676 12.5632 4.27483 12.357 4.48104C12.1508 4.68726 12.0327 4.96549 12.0277 5.25708C12.0227 5.54867 12.131 5.83082 12.33 6.04404L16.785 10.499H5.62501C5.32664 10.499 5.0405 10.6176 4.82952 10.8285C4.61854 11.0395 4.50001 11.3257 4.50001 11.624C4.50001 11.9224 4.61854 12.2086 4.82952 12.4195C5.0405 12.6305 5.32664 12.749 5.62501 12.749H16.785L12.33 17.204C12.1193 17.415 12.001 17.7009 12.001 17.999C12.001 18.2972 12.1193 18.5831 12.33 18.794Z" fill="url(#paint0_linear_277_1151)"/>
<defs>
<linearGradient id="paint0_linear_277_1151" x1="20.624" y1="11.6373" x2="4.50001" y2="11.6373" gradientUnits="userSpaceOnUse">
<stop offset="0.1" stopColor="#60B7CF"/>
<stop offset="0.745" stopColor="#3E8DA7"/>
<stop offset="1" stopColor="#003E5C" stopOpacity="0.6"/>
</linearGradient>
</defs>
</svg>