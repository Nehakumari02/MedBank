// const HomePageSectionHeader2 = ({title,subTitle}) => {
//     return(
//     <div className='relative '>
//       <span className='gradient-border-text font-extrabold font-inter text-[100px] leading-[90px] w-42.65 '>{title}</span>
//       <span className=' absolute top-[25px] font-medium text-#333333 text-[28px] w-[187.05px]'>{subTitle}</span>
//     </div>
//       );
//   }
//     export default HomePageSectionHeader2;

const HomePageSectionHeader2 = ({title,subTitle}) => {
    return(
    <div className='relative'>
      <span className='gradient-border-text font-extrabold font-inter text-[100px] leading-[78px] w-[42px]'>{title}</span>
      <span className='absolute top-[25px] left-[26px] font-medium  text-#333333   '>{subTitle}</span>
    </div>
      );
  }
    export default HomePageSectionHeader2;