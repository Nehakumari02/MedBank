import FrameComponent4 from "@/components/frame-component4";
import type { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <div className="w-full h-[1024px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[223.5px] px-0 pb-[222.5px] box-border gap-[7670.5px] leading-[normal] tracking-[normal] mq450:h-auto mq450:gap-[1918px] mq750:gap-[3835px]">
      <section className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full shrink-0">
        <FrameComponent4 />
      </section>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
        alt=""
        src="/line-242.svg"
      />
    </div>
  );
};

export default Login;
