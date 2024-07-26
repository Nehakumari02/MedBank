import HomePageSectionHeader from "../HomePageSectionHeader/page";

const PriceTable = () => (
  <>
    <section className="md:px-[42px] lg:px-[62px] py-[100px] w-full text-[#333333]">
        <HomePageSectionHeader title={"Reference Price"} subTitle={"Reference Price"}/>
        <div className='md:pl-[50px] lg:pl-[90px] pt-[20px] w-full flex flex-col items-start gap-[32px]'>
        <span className="flex items-center justify-center gap-[12px] font-sans text-[36px] font-medium leading-[42px] gradient-primary bg-clip-text text-transparent">PRICE TABLE {ArrowRightIcon}</span>
        <p className="font-sans font-normal text-[20px] leading-[34px]">
        "Explore our reference prices to gain insight into the cost structure of our genetic analysis services. While actual prices may vary depending on specific project requirements, our reference prices provide an estimate of the costs involved."
        </p>
        <div className="w-full">
        <table className="w-full">
        <thead className="">
          <tr className="gradient-table-head rounded-tl-[10px] rounded-tr-[10px] h-[80px] flex items-center justify-between px-[20px]">
            <th className="font-sans font-normal text-[24px] leading-[40px]">Read Length</th>
            <th className="font-sans font-normal text-[24px] leading-[40px]">Plan</th>
            <th className="font-sans font-normal text-[24px] leading-[40px]">Data Volume</th>
            <th className="font-sans font-normal text-[24px] leading-[40px]">Reference Price</th>
            <th className="font-sans font-normal text-[24px] leading-[40px]">Delivery Time</th>
          </tr>
        </thead>
        <tbody className="w-full">
          <tr className="h-[80px] font-sans font-medium text-[20px] text-[#333333]">
            <td className="">DNA <br />Sequencing</td>
            <td className=""></td>
            <td className=""></td>
            <td className=""></td>
            <td className=""></td>
          </tr>
          <tr className="h-[80px] font-sans font-medium text-[20px] text-[#333333]">
            <td className="">RNA <br />Sequencing</td>
            <td className=""></td>
            <td className=""></td>
            <td className=""></td>
            <td className=""></td>
          </tr>
          <tr className="h-[80px] font-sans font-medium text-[20px] text-[#333333]">
            <td className="">Amplicon <br />Sequencing</td>
            <td className=""></td>
            <td className=""></td>
            <td className=""></td>
            <td className=""></td>
          </tr>
          <tr className="h-[80px] font-sans font-medium text-[20px] text-[#333333]">
            <td className="">Human Genome <br />Sequencing</td>
            <td className=""></td>
            <td className=""></td>
            <td className=""></td>
            <td className=""></td>
          </tr>
        </tbody>
      </table>
        </div>
    </div>
    </section>
  </>
    
  );
  
  export default PriceTable;

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