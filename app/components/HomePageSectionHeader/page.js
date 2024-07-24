const HomePageSectionHeader = ({title,subTitle}) => {
  return(
  <div className='relative pl-[16px]'>
    <span className='gradient-border-text font-extrabold font-inter text-[100px] leading-[78px] '>{title}</span>
    <span className='absolute top-[40px] left-[110px]'>{subTitle} -</span>
  </div>
    );
}
  export default HomePageSectionHeader;