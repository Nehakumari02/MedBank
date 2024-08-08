import type { NextPage } from "next";
import Customer from "../../../components/customer";
import UserHeader from "../../../components/user-header";
import OrderStatus from "../../../components/order-status";
import OrderListContainer from "../../../components/order-list-container";

const Dashboard1: NextPage = () => {
  return (
    <div className="w-full h-[1024px] relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start gap-[7448px] leading-[normal] tracking-[normal] mq450:gap-[1862px] mq1000:gap-[3724px] mq1050:h-auto">
      <main className="self-stretch flex flex-row items-start justify-start shrink-0 max-w-full mq1000:pl-5 mq1000:pr-5 mq1000:box-border">
        <Customer />
        <section className="flex-1 flex flex-col items-start justify-start gap-3.5 max-w-[calc(100%_-_130px)] text-left text-xl text-darkslategray-100 font-dm-sans mq1000:max-w-full">
          <UserHeader />
          <div className="flex flex-row items-start justify-start py-0 px-[18px]">
            <a className="[text-decoration:none] relative leading-[28px] font-bold text-[inherit] mq450:text-base mq450:leading-[22px]">
              Order Overview
            </a>
          </div>
          <OrderStatus />
          <OrderListContainer />
        </section>
      </main>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
        alt=""
        src="/line-24.svg"
      />
    </div>
  );
};

export default Dashboard1;
