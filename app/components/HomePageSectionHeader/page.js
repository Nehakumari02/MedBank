const HomePageSectionHeader = ({title,subTitle}) => {
  return(
  <div className='relative pl-[16px]'>
    <span className='gradient-border-text font-extrabold font-inter md:text-[70px] lg:text-[100px] leading-[78px] '>{title}</span>
    <span className='absolute md:top-[30px] md:left-[60px] lg:top-[40px] lg:left-[110px] md:text-[20px]'>{subTitle} -</span>
  </div>
    );
}
  export default HomePageSectionHeader;