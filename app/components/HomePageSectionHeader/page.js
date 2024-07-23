const HomePageSectionHeader = ({title}) => (
  <div className='relative pl-[16px]'>
    <span className='gradient-border-text font-extrabold font-inter text-[100px] leading-[78px] '>{title}</span>
    <span className='absolute top-[40px] left-[110px]'>{title} -</span>
  </div>
    );
  
  export default HomePageSectionHeader;