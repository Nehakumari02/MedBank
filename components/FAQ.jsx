import HomePageSectionHeader from "./HomePageSectionHeader";
import FAQItem from './FAQItem'

const FAQ = () => (
  <section className="md:px-[42px] lg:px-[62px] py-[20px] md:py-[100px] w-full text-[#333333]">
  <HomePageSectionHeader title={"FAQ"} subTitle={"Frequently Asked Question"}/>
  <div className='px-[31px] md:pl-[50px] lg:pl-[90px] pt-[6px] md:pt-[20px] w-full flex flex-col items-start gap-[6px] md:gap-[32px]'>
  <span className="flex items-center font-DM-Sans text-[18px] md:text-[36px] font-medium leading-[24px] md:leading-[42px] gradient-primary bg-clip-text text-transparent">FAQ</span>
  <p className="font-DM-Sans font-normal text-[12px] md:text-[20px] leading-[20px] md:leading-[34px]">
  "Have questions about Medbank's genetic analysis services? Explore our frequently asked questions to find answers to common queries. If you can't find what you're looking for, feel free to reach out to our team for personalized assistance."
  </p>
  <div className="w-full flex items-center justify-center">
    <div className="w-full md:w-[660px] flex flex-col gap-[16px]">
    {[
          "Do I need to register with Mypage?",
          "How long does it take to deliver the products?",
          "How long do you keep samples and analysis results?",
          "What sequencer do you use?"
        ].map((question, index) => (
          <FAQItem key={index} question={question} answer={"Answer to the question will be placed here."}></FAQItem>
        ))}
    </div>
  </div>
</div>
</section>
  );

  export default FAQ;
