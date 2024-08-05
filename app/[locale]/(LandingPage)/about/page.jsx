import Image from 'next/image';
import About1 from '../../../../public/Images/Home/About1.png'
import About2 from '../../../../public/Images/Home/About2.png'
import About3 from '../../../../public/Images/Home/About3.png'
import About4 from '../../../../public/Images/Home/About4.png'
import About5 from '../../../../public/Images/Home/About5.png'
import SnackBar from '@/components/SnackBar';
import HomePageSectionHeader2 from '@/components/HomePageSectionHeader2';

import HomePageSectionHeader from '@/components/HomePageSectionHeader';

export default function AboutPage() {
  return (
    <>
      <section className="pl-[38px] pr-[24px] md:pl-[156px]  lg:pl-[236px]   md:pr-[95px] w-full flex flex-col items-center justify-center text-[#333333] gap-[24px] md:gap-[70px]  lg:gap-[100px] ">
        <div className="relative max-w-screen-lg w-full lg:w-[1057px] flex flex-col items-start gap-[6px] md:gap-[10px] lg:gap-[24px] pt-[20px] md:pt-[40px] lg:pt-[60px] ">
          <div className="absolute top-[28px] left-[-29px] md:top-[45px] lg:top-[68px]  md:left-[-54px]">
            <SnackBar text={"About Us"} />
          </div>
          <div className=' flex flex-col gap-[6px] md:gap-[20px]'>

            <h2 className="w-full lg:w-[110px] leading-6 font-DM-Sans text-[14px] md:text-[18px] font-medium">About Us</h2>
            <div className="w-full lg:w-[864px] text-[16px] md:text-[28px] lg:text-[32px] font-bold leading-8 lg:leading-10">
              Company Philosophy
            </div>
          </div>
          <div className="font-DM-Sans font-normal text-[12px] md:text-[18px] lg:text-[24px] ">
            &quot;At Medbank, our philosophy is centered around delivering accurate, reliable, and innovative genetic analysis solutions to researchers worldwide. We are dedicated to advancing scientific knowledge and empowering our clients with valuable insights to drive discoveries and advancements in various fields.&quot&quot;
          </div>
          <span className='font-DM-Sans font-medium text-[16px] md:text-[28px] '>
            Key Principles
          </span>
          <div>
            <ol className='font-DM-Sans font-medium text-[12px] md:text-[18px] lg:text-[24px] leading-8 '>
              <li>1. Quality <span className='font-normal' >&quot;We uphold the highest standards of quality and precision in all our services and processes, ensuring reproducible and trustworthy results.&quot;</span></li>
              <li>2. Innovation <span className='font-normal'>&quot;We continuously strive to innovate and adopt cutting-edge technologies and methodologies to stay at the forefront of genetic analysis.&quot;</span></li>
              <li>3. Collaboration <span className='font-normal'> &quot;We believe in fostering span partnerships and collaborations with researchers, institutions, and industry partners to achieve common goals and mutual success.&quot;</span></li>
              <li>4. Ethics<span className='font-normal'> &quot;We conduct our business with integrity, honesty, and transparency, adhering to ethical standards and regulatory requirements at all times.&quot;</span></li>
              <li>5. Customer Focus <span className='font-normal'></span></li>
            </ol>
          </div>
        </div>




        <div className='flex flex-col md:flex-row  w-full h-full '>
          <div className='w-full h-full pb-[12px] md:pr-[23px]  '>
            <Image src={About1} alt='About1' layout='responsive' objectFit='cover' width={100} height={100} className='w-full h-full' />
          </div>
          <div className='w-full h-full'>
            <Image src={About2} alt='About2' layout='responsive' objectFit='cover' width={100} height={100} className='w-full h-full' />
          </div>
        </div>


        <div className="w-full lg:w-[1057px]   flex flex-col items-start gap-[6px] md:gap-[10px] lg:gap-[24px]">
          <div className='flex flex-col gap-[20px] md:gap-[6px]'>

            <div className="w-full lg:w-[864px] text-[16px] md:text-[28px] lg:text-[32px] font-bold leading-8 lg:leading-10">
              GOAL in genetic analysis of Medbank
            </div>
          </div>
          <div className="font-DM-Sans font-normal text-[12px] md:text-[18px] lg:text-[24px]">
            At Medbank, our overarching goal in genetic analysis is to become a world-leading hub for genetic research and analysis. We aim to contribute significantly to scientific advancements and discoveries by providing state-of-the-art genetic analysis services, driving innovation, and fostering collaborations.
          </div>

        </div>
      </section>




      <div className="flex pt-[100px]">

        <div className="grid grid-cols-1  gap-6 mb-8 pr-[68px] ">
          <Image src={About3} alt="Lab Image" className="rounded" />
          <Image src={About4} alt="Building Image" className="rounded" />
        </div>
        <div className=' pt-[60px]'>
          <HomePageSectionHeader title={"Details"} subTitle={"Details"} />
          <div className='pl-[62px] pt-[24px]'>
            <div className="text-4xl font-DM-Sans ">COMPANY DETAILS</div>
            <div className='text-2xl flex flex-col gap-[8px] pt-[24px]'>
              <p className='font-normal p-0 m-0'><span className='font-medium'>Name:</span> Medbank Pte. Ltd.</p>
              <p className='font-normal p-0 m-0'><span className='font-medium'>Establishment:</span> 15 OCT 2021</p>
              <p className='font-normal p-0 m-0'><span className='font-medium'>Representative employee:</span> Yuki Okada (Doctor)</p>
            </div>

            <div className='pt-[24px] flex flex-col gap-[48px]'>
              <div className="text-[32px] font-medium">Address</div>

              <div className="text-2xl font-normal">
                <p className='font-medium p-0 m-0'> Main Office:</p>
                <p className='p-0 m-0'>11 Mandalay Road #16-01</p>
                <p className='p-0 m-0'>Singapore 308232</p>
              </div>
              <hr></hr>
              <div className="">
                <p className='font-medium p-0 m-0'>Laboratory in Singapore:</p>
                <p className='p-0 m-0'>11 Mandalay Road #16-01</p>
                <p className='p-0 m-0'>Singapore 308232</p>
              </div>
              <hr/>
              <div className="">
                <p className='font-medium p-0 m-0'>Laboratory in Japan:</p>
                <p className='p-0 m-0'>〒540-0002</p>
                <p className='p-0 m-0'>3-7-12 Shoji, Ikuno-ku, Osaka-shi, Osaka Japan</p>
              </div>
              <hr/>


            </div>

          </div>
        </div>
      </div>

      <section className='pl-[38px] pr-[24px] md:pl-[156px]  lg:pl-[236px]   md:pr-[95px] w-full flex flex-col items-center justify-center text-[#333333]'>

        <div className="relative max-w-screen-lg w-full lg:w-[1057px] flex flex-col items-start gap-[6px] md:gap-[10px] lg:gap-[32px] pt-[20px] md:pt-[40px] lg:pt-[60px] ">
          <div className='font-DM-Sans text-[32px] font-bold'>
            Our Project
          </div>
          <div className='font-DM-Sans font-normal text-2xl'>
            Genetic analysis service <br></br>
            Genetic testing (tests related to evidence-based medicine, not DTC) <br></br>
            Ultra-early detection of cancer
          </div>
        </div>
      </section>
 
      <section className="md:flex items-center justify-center w-full md:h-[672px] pt-[100px]">
    <div className='md:w-[70%] h-full flex items-center justify-start text-[#333333]'>
      <div className='w-full md:pl-[42px] lg:pl-[62px] pr-[20px] flex flex-col gap-[6px] md:gap-[32px]'>
        <HomePageSectionHeader title={"Analysis"} subTitle={"Inspection and analysis"}></HomePageSectionHeader>
        <div className='px-[31px] md:pl-[50px] lg:pl-[110px] flex flex-col items-start justify-start gap-[6px] md:gap-[24px]'>
        <span className="flex items-center font-DM-Sans text-[18px] md:text-[36px] font-medium leading-[24px] md:leading-[42px] gradient-primary bg-clip-text text-transparent">Inspection And Analysis</span>
        <span className="font-DM-Sans font-normal text-[12px] md:text-[20px] leading-[20px] md:leading-[34px]">
        The Inspection and Analysis section provides customers with detailed insights into Medbank&apos;s testing and analysis procedures, highlighting the laboratory&apos;s capabilities, equipment, and strengths in genetic analysis.
        </span>
       
      </div>
      </div>
    </div>
    <div className='md:w-[30%] md:h-full px-[31px] md:px-[0px] flex items-center justify-center'>
        <Image src={About5} alt='About5' className='h-[188px] w-[307px] object-cover md:h-full md:w-full rounded-md md:rounded-none'></Image>
    </div>
  </section>


  <section className='pl-[38px] pr-[24px] md:pl-[156px] md:pr-[95px] pt-[100px] w-full flex flex-col justify-center items-center font-DM-Sans'>
            <div className='max-w-[1056px] w-full flex flex-col items-start'>
                <div className='text-[#333333] pt-[18px] ` pl-[9px] md:pl-[25px]'>
  
                    <div className='font-DM-Sans font-bold text-[16px] md:text-[32px] leading-[24px] md:leading-[40px]'>
                        Our Machines
                    </div>
                    <div className='font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pt-[6px] md:pt-[24px]'>
                    Medbank utilizes state-of-the-art machines and equipment for genetic analysis testing, ensuring accurate and reliable results.
                    </div>
                </div>

                <div className='text-[#333333] pt-[32px] '>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2
                            title="1"
                            subTitle="AVITI"
                        />
                    </div>
                    <div className='max-w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                    We have introduced a new next-generation sequencer &apos;AVITI&apos; from Element Biosciences, which is capable of developing highly accurate and efficient analyses. AVITI&apos; employs rolling circle amplification (RCA) to minimize amplification errors, and the use of the latest reagents enables high quality (Q50) sequence decoding. 
                    In addition, &apos;AVITI&apos; has better running costs than conventional products, enabling lower costs and shorter delivery times.
                    </div>
                </div>

                <div className='text-[#333333] pt-[24px] '>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2
                            title="2"
                            subTitle="2 Illumina MiSeq"
                        />
                    </div>
                    <div className='max-w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                    The Illumina MiSeq platform is employed for smaller-scale sequencing projects, providing accurate and reliable results with fast turnaround times.
                    </div>
                </div>

                <div className='text-[#333333] pt-[24px] '>
                    <div className='flex flex-col pb-[6px] text-[18px] md:text-[28px]'>
                        <HomePageSectionHeader2
                            title="3"
                            subTitle="Illumina NextSeq X Plus"
                        />
                    </div>
                    <div className='max-w-full font-DM-Sans font-normal text-[12px] md:text-[24px] leading-[34px] pl-[60px]'>
                    Medbank also plans to begin Novaseq X plus analysis on an outsourced basis in 2025. 
                    This platform offers scalability, flexibility, and exceptional data quality, making it suitable for a wide range of research projects.
                    </div>
                </div>
              </div>
              </section>


    </>
  );
}

