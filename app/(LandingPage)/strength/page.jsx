import Image from 'next/image';
import strength1 from '../../../public/Images/Home/strength1.png'
import strength2 from '../../../public/Images/Home/strength2.png'
import strength3 from '../../../public/Images/Home/strength3.png'
import strength4 from '../../../public/Images/Home/strength4.png'
import strength5 from '../../../public/Images/Home/strength5.png'

export default function StrengthPage() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center text-[#333333] gap-[24px] sm:gap-[70px] lg:gap-[100px] px-4 lg:px-0 pt-[20px] sm:pt-[60px] ">
        <div className="w-full lg:w-[1057px] flex flex-col items-start gap-[6px] sm:gap-[10px] lg:gap-[24px]">
          <div className='flex flex-col gap-[6px] sm:gap-[20px]'>
            <h2 className="w-full lg:w-[110px] leading-6 font-DM-Sans text-[14px] sm:text-[18px] font-medium">Our Strength</h2>
            <div className="w-full lg:w-[864px] text-[16px] sm:text-[28px] lg:text-[32px] font-bold leading-8 lg:leading-10">
              Comprehensive Next Generation Sequencing Processes
            </div>
          </div>
          <div className="font-DM-Sans font-normal text-[12px] sm:text-[18px] lg:text-[24px]">
            At Medbank, we have the capability to conduct all Next Generation Sequencing
            (NGS) processes from sample preparation to data analysis in our
            state-of-the-art laboratory facilities. Our team of specialized staff is
            equipped to handle every step of the NGS workflow, including DNA extraction,
            library preparation, sequencing, and bio-informatics analysis.
          </div>
          <span className='font-DM-Sans font-medium text-[16px] sm:text-[28px]'>
            Benefits
          </span>
          <div>
            <ol className='font-DM-Sans font-normal text-[12px] sm:text-[18px] lg:text-[24px] leading-8'>
              <li>1. Streamlined and integrated NGS workflow for efficiency and consistency.</li>
              <li>2. Expert guidance and support throughout the entire sequencing process.</li>
              <li>3. Customized solutions tailored to meet the specific needs of each research project.</li>
            </ol>
          </div>
        </div>
        <div className='w-full lg:w-[1057px] flex items-start justify-start'>
          <Image src={strength1} alt='strength1' className='w-full' />
        </div>
        <div className="w-full lg:w-[1057px]   flex flex-col items-start gap-[6px] sm:gap-[10px] lg:gap-[24px]">
          <div className='flex flex-col gap-[20px] sm:gap-[6px]'>
            <h2 className="w-full lg:w-[110px] leading-6 font-DM-Sans text-[14px] sm:text-[18px] font-medium">Our Strength</h2>
            <div className="w-full lg:w-[864px] text-[16px] sm:text-[28px] lg:text-[32px] font-bold leading-8 lg:leading-10">
              Specialized Environment for DNA/RNA Analysis
            </div>
          </div>
          <div className="font-DM-Sans font-normal text-[12px] sm:text-[18px] lg:text-[24px]">
            To ensure the integrity and reliability of our genetic analysis, Medbank maintains a specialized environment for DNA and
            RNA analysis. Our laboratory facilities are equipped
            with advanced technologies and adhere to strict quality control measures to minimize contamination and ensure the accuracy of our results.
          </div>
          <span className='font-DM-Sans font-medium text-[16px] sm:text-[28px]'>
            Benefits
          </span>
          <div>
            <ol className='font-DM-Sans font-normal text-[12px] sm:text-[18px] lg:text-[24px] leading-8'>
              <li>1. Clean and controlled laboratory environment for sensitive molecular analysis.</li>
              <li>2. Minimized risk of contamination and sample degradation.</li>
              <li>3. Consistent and reliable results for high-quality genetic analysis.</li>
            </ol>
          </div>
        </div>
        <div className='w-full lg:w-[1057px] flex items-start justify-start'>
          <Image src={strength2} alt='strength2' className='w-full' />
        </div>

        <div className="w-full lg:w-[1057px]   flex flex-col items-start gap-[6px] sm:gap-[10px] lg:gap-[24px]">
          <div className='flex flex-col gap-[20px] sm:gap-[6px]'>
            <h2 className="w-full lg:w-[110px] leading-6 font-DM-Sans text-[14px] sm:text-[18px] font-medium">Our Strength</h2>
            <div className="w-full lg:w-[864px] text-[16px] sm:text-[28px] lg:text-[32px] font-bold leading-8 lg:leading-10">
              Customer-Centric Approach to Analysis Results
            </div>
          </div>
          <div className="font-DM-Sans font-normal text-[12px] sm:text-[18px] lg:text-[24px]">
            At Medbank, we prioritize the needs and preferences of our clients when delivering analysis results. We provide comprehensive
            support and guidance on data handling and analysis
            methods, ensuring that results are presented in an easy-to-understand format tailored to the specific requirements of each client.
          </div>
          <span className='font-DM-Sans font-medium text-[16px] sm:text-[28px]'>
            Benefits
          </span>
          <div>
            <ol className='font-DM-Sans font-normal text-[12px] sm:text-[18px] lg:text-[24px] leading-8'>
              <li>1. Personalized support and guidance throughout the analysis process.</li>
              <li>2. Clear and concise presentation of analysis results for enhanced understanding.</li>
              <li>3. Empowerment of clients with actionable insights for their research projects</li>
            </ol>
          </div>
        </div>
        <div className='w-full lg:w-[1057px] flex items-start justify-start'>
          <Image src={strength3} alt='strength3' className='w-full' />
        </div>

        <div className="w-full lg:w-[1057px]   flex flex-col items-start gap-[6px] sm:gap-[10px] lg:gap-[24px]">
          <div className='flex flex-col gap-[20px] sm:gap-[6px]'>
            <h2 className="w-full lg:w-[110px] leading-6 font-DM-Sans text-[14px] sm:text-[18px] font-medium">Our Strength</h2>
            <div className="w-full lg:w-[864px] text-[16px] sm:text-[28px] lg:text-[32px] font-bold leading-8 lg:leading-10">
              Automation of Processes
            </div>
          </div>
          <div className="font-DM-Sans font-normal text-[12px] sm:text-[18px] lg:text-[24px]">
            We have implemented automation technologies for DNA and RNA extraction, purification, and library preparation, streamlining and
            standardizing these critical processes.
            By automating repetitive tasks, we ensure accuracy, reproducibility, and scalability, enabling us to deliver high-quality results efficiently.
          </div>
          <span className='font-DM-Sans font-medium text-[16px] sm:text-[28px]'>
            Benefits
          </span>
          <div>
            <ol className='font-DM-Sans font-normal text-[12px] sm:text-[18px] lg:text-[24px] leading-8'>
              <li>1. Reduced risk of human error and variability.</li>
              <li>2. Increased throughput and faster turnaround times.</li>
              <li>3. Consistent and reliable results across experiments.</li>
            </ol>
          </div>
        </div>
        <div className='w-full lg:w-[1057px] flex items-start justify-start'>
          <Image src={strength4} alt='strength4' className='w-full' />
        </div>

        <div className="w-full lg:w-[1057px]   flex flex-col items-start gap-[6px] sm:gap-[10px] lg:gap-[24px]">
          <div className='flex flex-col gap-[20px] sm:gap-[6px]'>
            <h2 className="w-full lg:w-[110px] leading-6 font-DM-Sans text-[14px] sm:text-[18px] font-medium">Our Strength</h2>
            <div className="w-full lg:w-[864px] text-[16px] sm:text-[28px] lg:text-[32px] font-bold leading-8 lg:leading-10">
              State-of-the-Art NGS Platform
            </div>
          </div>
          <div className="font-DM-Sans font-normal text-[12px] sm:text-[18px] lg:text-[24px]">
            Medbank utilizes the latest Next Generation Sequencing (NGS) platforms, including the AVITI system from Element Biosciences.
            This advanced platform offers high precision, rapid sequencing, and cost-effectiveness, allowing us to deliver accurate and timely results to our clients.
          </div>
          <span className='font-DM-Sans font-medium text-[16px] sm:text-[28px]'>
            Benefits
          </span>
          <div>
            <ol className='font-DM-Sans font-normal text-[12px] sm:text-[18px] lg:text-[24px] leading-8'>
              <li>1. High-quality sequencing data with improved accuracy and coverage.</li>
              <li>2. Reduced sequencing costs and shorter project timelines.</li>
              <li>3. Access to cutting-edge technologies for innovative research applications.</li>
            </ol>
          </div>
        </div>
        <div className='w-full lg:w-[1057px] flex items-start justify-start'>
          <Image src={strength5} alt='strength5' className='w-full' />
        </div>
      </section>
    </>
  );
}
