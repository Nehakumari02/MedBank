export default function AboutPage() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center text-[#333333] gap-12 px-4 lg:px-0">
        <div className="w-full lg:w-[1057px] py-10 lg:py-20 flex flex-col items-start gap-6 lg:gap-8">
          <h2 className="w-full lg:w-[110px] leading-6 font-DM-Sans text-[14px] sm:text-[18px] font-medium">About Us</h2>
          <div className="w-full lg:w-[864px] text-[16px] sm:text-[28px] md:text-[32px] font-bold leading-8 lg:leading-10">
            Company Philosophy
          </div>
          <div className="font-DM-Sans font-normal text-[12px] sm:text-[18px] md:text-[24px]">
            "At Medbank, our philosophy is centered around delivering accurate, reliable, and innovative genetic analysis solutions to researchers worldwide. We are dedicated to advancing scientific knowledge and empowering our clients with valuable insights to drive discoveries and advancements in various fields."
          </div>
          <span className='font-DM-Sans font-medium text-[16px] sm:text-[28px]'>
            Key Principles
          </span>
          <div>
            <div className='font-DM-Sans font-medium text-[12px] sm:text-[18px] md:text-[24px] leading-8'>
              1. Quality: <span className="font-normal">"We uphold the highest standards of quality and precision in all our services and processes, ensuring reproducible and trustworthy results."</span> <br></br>
              2. Innovation: <span className="font-normal">"We continuously strive to innovate and adopt cutting-edge technologies and methodologies to stay at the forefront of genetic analysis."</span> <br></br>
              3. Collaboration: <span className="font-normal"> "We believe in fostering strong partnerships and collaborations with researchers, institutions, and industry partners to achieve common goals and mutual success."</span> <br></br>
              5. Ethics: <span className="font-normal">"We conduct our business with integrity, honesty, and transparency, adhering to ethical standards and regulatory requirements at all times." </span><br></br>
              5. Customer Focus:<span className="font-normal"> "We prioritize customer satisfaction and strive to exceed expectations by providing personalized solutions, exceptional service, and timely support."</span> <br></br>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-[1057px] flex items-start justify-start'>
          {/* <Image src={strength1} alt='strength1' className='w-full' /> */}
        </div>
      </section>
    </>
  );
}

