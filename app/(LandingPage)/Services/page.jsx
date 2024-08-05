import React from 'react'
import PriceTable from '@/components/PriceTable'
import SnackBar from '@/components/SnackBar'

const page = () => {
  return (
    <>
      <section className='pl-[38px] pr-[24px] md:pl-[156px]  md:pr-[95px]   w-full text-[#333333] font-DM-Sans flex flex-col items-center justify-center '>

        <div className=' relative  max-w-screen-lg w-full flex flex-col items-start pt-[24px] md:pt-[40px] lg:pt-[60px] '>
        <div className="absolute top-[28px] left-[-29px] md:top-[45px] lg:top-[68px]  md:left-[-54px]">
                <SnackBar text={"Services"} />
              </div>
          <div className='text-[14px] md:text-[18px]'>Our Services</div>
          <div className='flex flex-col gap-[27px] md:gap-[65px] lg:gap-[76px] pt-[6px] md:pt-[20px]'>
            <div className=' flex flex-col gap-[6px] md:gap-[20px]'>
              
              <div className='font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px]'>
                DNA Sequencing
              </div >

              <div className='font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[36px]'>
                Analyze DNA samples using next-generation sequencing technologies to uncover genetic information crucial for various research applications.
                <br></br> <br></br>
                DNA sequencing is a service that analyzes the provided DNA samples using a next-generation sequencer such as Novaseq X plus. The obtained fastq format sequence data can be used as sources for re-seq, genome assembly, etc. In addition, we have introduced Element Biosciences' new NGS platform, AVITI (this service is scheduled to start in the fall, 2024). If you choose this service, you will be able to achieve higher precision, lower cost, and shorter delivery times than conventional service plans.
              </div>
            </div>
            <div className='flex flex-col gap-[6px] md:gap-[20px]'>
              <div className='font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px]'>
                RNA Sequencing
              </div >

              <div className='font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[36px]'>
                Comprehensive analysis of transcriptomes to study gene expression patterns, identify regulatory elements, and elucidate biological pathways.
                <br></br> <br></br>
                This is a service that comprehensively obtains transcript information by analyzing cDNA fragmented into short read lengths using a next-generation sequencer (RNA-seq). The obtained fastq format sequence data can be used as a source for quantifying gene expression levels, etc
              </div>
            </div>

            <div className='flex flex-col gap-[6px] md:gap-[20px]'>

              <div className='font-bold text-[16px] md:text-[28px] lg:text-[32px] leading-[24px]'>
                Amplicon Sequencing
              </div >

              <div className='font-normal text-[12px] md:text-[18px] lg:text-[24px] leading-[36px]'>
                Targeted sequencing of specific DNA regions (e.g., microbial barcode regions) for metagenomic analysis, environmental DNA analysis, and more.
                <br></br> <br></br>
                This service amplifies barcode regions such as the 16S rRNA gene of microbes by PCR and analyzes them using a next-generation sequencer. This makes it possible to evaluate the types and composition of biological species contained in samples and the environment (so-called metagenomic analysis and environmental DNA analysis).
              </div>
            </div>
          </div>

        </div>

      </section>
      <div className="px-[10px] md:px-[50px] lg:px-[134px] pt-[100px] w-full text-[#333333]">
        <table className="w-full">
          <thead className="">
            <tr className="gradient-table-head rounded-tl-[10px] rounded-tr-[10px] h-[80px] text-[10px] px-[20px] md:text-[20px] md:-[24px] flex items-center justify-between  ">
              <th className="font-sans font-normal  leading-[40px]">Read Length</th>
              <th className="font-sans font-normal  leading-[40px]">Data Volume</th>
              <th className="font-sans font-normal  leading-[40px]">Reference Price</th>
              <th className="font-sans font-normal leading-[40px]">Delivery Time</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className=" h-[80px] font-sans font-medium text-[20px] text-[#333333] border-gradient-primary-light border-b-[4px] border-dashed ">
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr className="h-[80px] font-sans font-medium text-[20px] text-[#333333] border-b-[4px] border-dashed">
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr className="h-[80px] font-sans font-medium text-[20px] text-[#333333] border-b-[4px] border-dashed ">
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default page
