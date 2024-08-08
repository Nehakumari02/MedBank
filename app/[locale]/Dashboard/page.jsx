import Customer from "../../../components/customer";
import FrameComponent3 from "../../../components/frame-component3";

const Dashboard = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start  leading-[normal] tracking-[normal] ">
      <main className="self-stretch flex flex-row items-start justify-start  max-w-full mq1000:pl-5 mq1000:pr-5 mq1000:box-border">
        <Customer />
        <section className="flex-1 flex flex-col items-start justify-start gap-[13px] max-w-[calc(100%_-_130px)] text-left text-xl text-darkslategray-100 font-dm-sans mq1000:max-w-full">
          <FrameComponent3 />
          <div className="flex flex-row items-start justify-start py-0 px-[19px]">
            <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-[inherit] mq450:text-base mq450:leading-[22px]">
              Order Overview
            </h3>
          </div>
          <div className="w-[1190px] flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full text-base">
            <div className="flex-1 flex flex-row items-start justify-start gap-[49px] max-w-full mq1000:flex-wrap mq725:gap-6">
              <div className="flex-1 shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-3xs bg-white border-stroke border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[29px] px-[30px] pb-7 gap-[17px] min-w-[262px] max-w-full">
                <div className="w-[350px] h-44 relative shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-3xs bg-white border-stroke border-[1px] border-solid box-border hidden max-w-full" />
                <img
                  className="w-9 h-9 relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/dashboard/vector.svg"
                />
                <div className="flex flex-col items-start justify-start gap-2">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[117px] z-[1]">
                    Pending Orders
                  </div>
                  <b className="relative text-13xl leading-[30px] inline-block min-w-[20px] z-[1] mq450:text-lgi mq450:leading-[18px] mq1000:text-7xl mq1000:leading-[24px]">
                    3
                  </b>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-3xs bg-white border-stroke border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[29px] px-[30px] pb-7 gap-[17px] min-w-[262px] max-w-full">
                <div className="w-[350px] h-44 relative shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-3xs bg-white border-stroke border-[1px] border-solid box-border hidden max-w-full" />
                <img
                  className="w-9 h-9 relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/dashboard/carboninprogress.svg"
                />
                <div className="flex flex-col items-start justify-start gap-2">
                  <div className="relative leading-[24px] font-medium z-[1]">
                    Orders In-Progress
                  </div>
                  <b className="relative text-13xl leading-[30px] inline-block font-roboto min-w-[19px] z-[1] mq450:text-lgi mq450:leading-[18px] mq1000:text-7xl mq1000:leading-[24px]">
                    2
                  </b>
                </div>
              </div>
              <div className="flex-[0.9722] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-3xs bg-white border-stroke border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[29px] px-[34px] pb-7 gap-[17px] min-w-[262px] max-w-full mq450:flex-1">
                <div className="w-[350px] h-44 relative shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-3xs bg-white border-stroke border-[1px] border-solid box-border hidden max-w-full" />
                <img
                  className="w-9 h-9 relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/dashboard/fluentmdl2completed.svg"
                />
                <div className="w-[151px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <div className="flex-1 flex flex-col items-start justify-start gap-2">
                    <div className="self-stretch relative leading-[24px] font-medium z-[1]">
                      Completed
                    </div>
                    <b className="relative text-13xl leading-[30px] inline-block font-roboto min-w-[19px] z-[1] mq450:text-lgi mq450:leading-[18px] mq1000:text-7xl mq1000:leading-[24px]">
                      5
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[21px] pr-3 box-border max-w-full text-3xl">
            <div className="flex-1 shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-3xs bg-white border-darkslategray-400 border-[0px] border-solid box-border flex flex-col items-start justify-start pt-[23px] px-0 pb-0 min-h-[575px] max-w-full">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden max-h-full hidden z-[1]"
                alt=""
                src="/dashboard/rectangle-49751.svg"
              />
              <div className="self-stretch flex flex-col items-end justify-start pt-0 pb-[432px] pl-0 pr-[9px] box-border gap-5 max-w-full mq725:pb-[281px] mq725:box-border">
                <div className="w-[1239px] flex flex-row items-start justify-end py-0 px-5 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq725:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                      <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-[inherit] inline-block min-w-[112px] z-[1] mq450:text-lg mq450:leading-[22px]">
                        Order List
                      </h3>
                    </div>
                    <div className="h-10 w-[406px] flex flex-row items-start justify-start gap-3 max-w-full">
                      <div className="h-[41px] flex-1 rounded-md bg-white border-darkslategray-200 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start max-w-[calc(100%_-_46px)] z-[1]">
                        <div className="h-10 flex-1 flex flex-row items-center justify-start py-0 pl-[18px] pr-[5px] box-border gap-1 max-w-full">
                          <input
                            className="w-[calc(100%_-_41px)] [border:none] [outline:none] bg-[transparent] h-8 flex-1 flex flex-row items-center justify-start py-1 px-0 box-border font-dm-sans text-sm text-darkslategray-100 min-w-[172px]"
                            placeholder="Search"
                            type="text"
                          />
                          <div className="flex flex-row items-center justify-end">
                            <div className="flex flex-col items-center justify-center p-[7px]">
                              <div className="w-[34px] h-[34px] rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                                <div className="flex flex-row items-center justify-center p-2">
                                  <img
                                    className="h-[18px] w-[18px] relative"
                                    alt=""
                                    src="/dashboard/icon-1.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="h-12 hidden flex-col items-center justify-center">
                              <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1">
                                <div className="flex flex-row items-center justify-center p-2">
                                  <img
                                    className="h-6 w-6 relative"
                                    alt=""
                                    src="/dashboard/icon-2.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <div className="flex flex-row items-center justify-center relative gap-2.5 z-[1]">
                          <div className="h-[34px] w-[34px] relative rounded-[50%] bg-aliceblue-200 border-darkslategray-200 border-[0px] border-solid box-border" />
                          <img
                            className="h-[18px] w-[18px] absolute !m-[0] top-[9px] left-[8px] rounded-3xs overflow-hidden shrink-0 z-[1]"
                            loading="lazy"
                            alt=""
                            src="/dashboard/iconoirfilter.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-1px] z-[1]"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="self-stretch h-[480px] relative max-w-full mt-[-422px] text-center text-sm mq1050:h-auto mq1050:min-h-[480]">
                <div className="absolute top-[56px] left-[0px] border-darkslategray-300 border-r-[0.5px] border-solid box-border w-[0.5px] h-[408.5px] z-[2]" />
                <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-end justify-start gap-2 max-w-full h-full">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-2 box-border max-w-full">
                    <div className="flex-1 flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
                      <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[89px] max-w-[91px]">
                        <div className="self-stretch relative leading-[24px] font-medium z-[1]">
                          Order ID
                        </div>
                      </div>
                      <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[90px] z-[1]">
                        <p className="m-0">{`Order `}</p>
                        <p className="m-0">Title</p>
                      </div>
                      <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[91px] z-[1]">
                        <p className="m-0">Request</p>
                        <p className="m-0">sheet</p>
                      </div>
                      <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[90px] z-[1]">
                        <p className="m-0">Cost</p>
                        <p className="m-0">Estimate</p>
                      </div>
                      <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[91px] z-[1]">
                        <p className="m-0">Formal</p>
                        <p className="m-0">Request</p>
                      </div>
                      <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[90px] z-[1]">
                        <p className="m-0">Sample</p>
                        <p className="m-0">Shipping</p>
                      </div>
                      <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[91px] z-[1]">
                        <p className="m-0">Quality</p>
                        <p className="m-0">Check</p>
                      </div>
                      <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[91px] z-[1]">
                        <p className="m-0">Library</p>
                        <p className="m-0">Prep.</p>
                      </div>
                      <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[90px] z-[1]">
                        <p className="m-0">Analysis</p>
                        <p className="m-0">Progress</p>
                      </div>
                      <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[91px] z-[2]">
                        <p className="m-0">Analysis</p>
                        <p className="m-0">Done</p>
                      </div>
                      <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[90px] z-[3]">
                        <p className="m-0">{`Raw `}</p>
                        <p className="m-0">Data</p>
                      </div>
                      <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[91px] z-[4]">
                        <p className="m-0">Analysis</p>
                        <p className="m-0">Specification</p>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[89px] max-w-[90px]">
                        <div className="self-stretch relative leading-[24px] font-medium z-[5]">
                          Invoice
                        </div>
                      </div>
                      <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[91px] z-[6]">
                        <p className="m-0">Payment</p>
                        <p className="m-0">{`& Recepit`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[1256px] flex flex-row items-start justify-start py-0 pl-0 pr-[3px] box-border gap-[6.5px] max-w-full text-3xs text-white mq1050:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-6 pb-0 pl-0 pr-4 shrink-0 text-left text-sm text-darkslategray-100">
                      <div className="flex flex-col items-start justify-start gap-[51px]">
                        <div className="flex flex-row items-start justify-start py-0 pl-1 pr-0.5">
                          <div className="relative [text-decoration:underline] inline-block min-w-[42px] z-[1]">
                            100101
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-px">
                          <div className="relative [text-decoration:underline] inline-block min-w-[46px] z-[1]">
                            100102
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                          <div className="relative [text-decoration:underline] inline-block min-w-[46px] z-[1]">
                            100102
                          </div>
                        </div>
                        <div className="relative [text-decoration:underline] inline-block min-w-[46px] z-[1]">
                          100102
                        </div>
                        <div className="relative [text-decoration:underline] inline-block min-w-[46px] z-[1]">
                          100102
                        </div>
                        <div className="relative [text-decoration:underline] inline-block min-w-[46px] z-[1]">
                          100102
                        </div>
                      </div>
                    </div>
                    <div className="h-[424px] flex flex-col items-start justify-start py-0 pl-0 pr-[5px] box-border">
                      <div className="w-[0.5px] flex-1 relative border-darkslategray-300 border-r-[0.5px] border-solid box-border z-[2]" />
                    </div>
                    <div className="w-[71.5px] flex flex-col items-start justify-start pt-[21px] pb-0 pl-0 pr-[9px] box-border shrink-0 text-sm text-darkslategray-100">
                      <div className="self-stretch flex flex-col items-end justify-start gap-[45px]">
                        <div className="relative leading-[24px] inline-block min-w-[58px] z-[1]">
                          KAGAWA
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-0.5">
                          <div className="flex-1 flex flex-col items-end justify-start gap-12">
                            <div className="relative leading-[24px] inline-block min-w-[58px] z-[1]">
                              KAGAWA
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-11">
                              <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                                <div className="relative leading-[24px] inline-block min-w-[58px] z-[1]">
                                  KAGAWA
                                </div>
                              </div>
                              <div className="relative leading-[24px] inline-block min-w-[58px] z-[1]">
                                KAGAWA
                              </div>
                              <div className="relative leading-[24px] inline-block min-w-[58px] z-[1]">
                                KAGAWA
                              </div>
                              <div className="relative leading-[24px] inline-block min-w-[58px] z-[1]">
                                KAGAWA
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[424.5px] w-[0.5px] relative border-darkslategray-300 border-r-[0.5px] border-solid box-border z-[2] mq1050:w-full mq1050:h-[0.5px]" />
                    <div className="w-[76px] flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border shrink-0">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[31px]">
                        <div className="self-stretch rounded-sm bg-mediumturquoise flex flex-row items-start justify-start py-[3px] px-0.5 z-[1]">
                          <div className="flex-1 relative leading-[15px] font-medium">
                            <p className="m-0">Request</p>
                            <p className="m-0">Sheet Sent</p>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
                          <div className="rounded-sm bg-mediumturquoise flex flex-row items-start justify-start py-[3px] px-[18px] z-[1]">
                            <div className="relative leading-[15px] font-medium">
                              <p className="m-0">Request</p>
                              <p className="m-0">sheet</p>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7px] gap-[33px]">
                          <div className="self-stretch rounded-sm bg-mediumturquoise flex flex-row items-start justify-start py-[3px] px-0.5 z-[7]">
                            <div className="flex-1 relative leading-[15px] font-medium">
                              <p className="m-0">Request</p>
                              <p className="m-0">Sheet Sent</p>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-7">
                            <div className="self-stretch rounded-sm bg-mediumturquoise flex flex-row items-start justify-start py-[3px] px-0.5 z-[7]">
                              <div className="flex-1 relative leading-[15px] font-medium">
                                <p className="m-0">Request</p>
                                <p className="m-0">Sheet Sent</p>
                              </div>
                            </div>
                            <div className="self-stretch rounded-sm bg-mediumturquoise flex flex-row items-start justify-start py-[3px] px-0.5 z-[7]">
                              <div className="flex-1 relative leading-[15px] font-medium">
                                <p className="m-0">Request</p>
                                <p className="m-0">Sheet Sent</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch rounded-sm bg-mediumturquoise flex flex-row items-start justify-start py-[3px] px-0.5 z-[7]">
                          <div className="flex-1 relative leading-[15px] font-medium">
                            <p className="m-0">Request</p>
                            <p className="m-0">Sheet Sent</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[424.5px] w-[0.5px] relative border-darkslategray-300 border-r-[0.5px] border-solid box-border z-[2] mq1050:w-full mq1050:h-[0.5px]" />
                    <div className="w-[76px] flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border shrink-0 text-left">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[31px]">
                        <div className="rounded-sm bg-mediumturquoise flex flex-row items-start justify-start py-2 px-1 whitespace-nowrap z-[7]">
                          <div className="relative leading-[20px] font-medium inline-block min-w-[67px]">
                            Cost estimate
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
                          <div className="rounded-sm bg-mediumturquoise flex flex-row items-start justify-start py-2 px-1 whitespace-nowrap z-[7]">
                            <div className="relative leading-[20px] font-medium inline-block min-w-[67px]">
                              Cost estimate
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7px] gap-[33px]">
                          <div className="rounded-sm bg-mediumturquoise flex flex-row items-start justify-start py-2 px-1 whitespace-nowrap z-[7]">
                            <div className="relative leading-[20px] font-medium inline-block min-w-[67px]">
                              Cost estimate
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-7">
                            <div className="rounded-sm bg-mediumturquoise flex flex-row items-start justify-start py-2 px-1 whitespace-nowrap z-[7]">
                              <div className="relative leading-[20px] font-medium inline-block min-w-[67px]">
                                Cost estimate
                              </div>
                            </div>
                            <button className="cursor-pointer [border:none] py-2 px-1 bg-coral rounded-sm flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-chocolate">
                              <div className="relative text-3xs leading-[20px] font-medium font-dm-sans text-white text-left inline-block min-w-[67px]">
                                Cost estimate
                              </div>
                            </button>
                          </div>
                        </div>
                        <button className="cursor-pointer [border:none] py-2 px-1 bg-coral rounded-sm flex flex-row items-start justify-start whitespace-nowrap z-[7] hover:bg-chocolate">
                          <div className="relative text-3xs leading-[20px] font-medium font-dm-sans text-white text-left inline-block min-w-[67px]">
                            Cost estimate
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="h-[424.5px] w-[0.5px] relative border-darkslategray-300 border-r-[0.5px] border-solid box-border z-[2] mq1050:w-full mq1050:h-[0.5px]" />
                    <div className="w-[76px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border shrink-0">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
                        <div className="self-stretch rounded-sm bg-coral flex flex-row items-start justify-start py-[3px] px-1 z-[7]">
                          <div className="flex-1 relative leading-[15px] font-medium">
                            Formal request
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-9">
                          <div className="self-stretch rounded-sm bg-coral flex flex-row items-start justify-start py-[3px] px-1 z-[7]">
                            <div className="flex-1 relative leading-[15px] font-medium">
                              Formal request
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[33px]">
                            <div className="self-stretch rounded-sm bg-coral flex flex-row items-start justify-start py-[3px] px-1 z-[7]">
                              <div className="flex-1 relative leading-[15px] font-medium">
                                Formal request
                              </div>
                            </div>
                            <div className="self-stretch rounded-sm bg-coral flex flex-row items-start justify-start py-[3px] px-1 z-[7]">
                              <div className="flex-1 relative leading-[15px] font-medium">
                                Formal request
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[56px] shrink-0">
                      <div className="w-[0.5px] h-[424.5px] relative border-darkslategray-300 border-r-[0.5px] border-solid box-border z-[2]" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[56px] shrink-0">
                      <div className="w-[0.5px] h-[424.5px] relative border-darkslategray-300 border-r-[0.5px] border-solid box-border z-[2]" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[56px] shrink-0">
                      <div className="w-[0.5px] h-[424.5px] relative border-darkslategray-300 border-r-[0.5px] border-solid box-border z-[2]" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[56px] shrink-0">
                      <div className="w-[0.5px] h-[424.5px] relative border-darkslategray-300 border-r-[0.5px] border-solid box-border z-[2]" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[56px] shrink-0">
                      <div className="w-[0.5px] h-[424.5px] relative border-darkslategray-300 border-r-[0.5px] border-solid box-border z-[2]" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[56px] shrink-0">
                      <div className="w-[0.5px] h-[424.5px] relative border-darkslategray-300 border-r-[0.5px] border-solid box-border z-[2]" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[56px] shrink-0">
                      <div className="w-[0.5px] h-[424.5px] relative border-darkslategray-300 border-r-[0.5px] border-solid box-border z-[2]" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[56px] shrink-0">
                      <div className="w-[0.5px] h-[424.5px] relative border-darkslategray-300 border-r-[0.5px] border-solid box-border z-[2]" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[56px] shrink-0">
                      <div className="w-[0.5px] h-[424.5px] relative border-darkslategray-300 border-r-[0.5px] border-solid box-border z-[2]" />
                    </div>
                    <div className="h-[417px] w-1.5 relative rounded-tl-81xl rounded-tr-none rounded-br-none rounded-bl-81xl bg-dimgray border-darkslategray-200 border-[0.3px] border-solid box-border z-[7] mq1050:w-full mq1050:h-1.5">
                      <div className="absolute top-[0px] left-[1px] rounded-tl-81xl rounded-tr-none rounded-br-none rounded-bl-81xl bg-dimgray border-darkslategray-200 border-[0.3px] border-solid box-border w-1 h-[417px] hidden" />
                      <div className="absolute top-[10px] left-[0px] shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] rounded-81xl bg-cadetblue border-skyblue border-[0.3px] border-solid box-border w-1.5 h-[168px] z-[1]" />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain z-[1] mt-[-422px]"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
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

export default Dashboard;
