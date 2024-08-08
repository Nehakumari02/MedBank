import type { NextPage } from "next";
import FrameComponent from "../../../components/frame-component";
import FrameComponent1 from "../../../components/frame-component1";
import FrameComponent2 from "../../../components/frame-component2";

const Dashboard2: NextPage = () => {
  return (
    <div className="w-full h-[1516px] relative bg-whitesmoke overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[72px] box-border gap-[5.5px] leading-[normal] tracking-[normal] text-center text-sm text-darkslategray-100 font-dm-sans mq725:h-auto">
      <main className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[298px] w-[1258px] absolute !m-[0] right-[32px] bottom-[-283.5px] rounded-3xs"
          alt=""
          src="/rectangle-4979.svg"
        />
        <section className="flex-1 flex flex-col items-end justify-start pt-0 px-0 pb-[56.5px] box-border gap-[5.5px] max-w-full text-left text-3xl text-darkslategray-100 font-dm-sans lg:pb-[37px] lg:box-border mq725:pb-6 mq725:box-border">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <FrameComponent />
            <div className="flex-1 flex flex-col items-start justify-start gap-[60.5px] max-w-[calc(100%_-_130px)] mq450:max-w-full mq1000:gap-[15px] mq725:gap-[30px]">
              <header className="self-stretch bg-white border-darkslategray-400 border-b-[1px] border-solid flex flex-row items-center justify-between pt-8 pb-[30px] pl-5 pr-8 top-[0] z-[99] sticky gap-5 text-left text-9xl text-darkslategray-100 font-dm-sans">
                <h1 className="m-0 h-[30px] relative text-inherit leading-[24px] font-bold font-[inherit] inline-block whitespace-nowrap">{`Welcome, Admin! `}</h1>
                <div className="w-[66px] flex flex-row items-center justify-center text-lg">
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-row items-center justify-start gap-[9.5px]">
                        <a className="[text-decoration:none] h-[31px] flex-1 relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[23px]">
                          JN
                        </a>
                        <div className="h-[21px] w-px relative border-darkslategray-100 border-r-[1px] border-solid box-border" />
                        <div className="flex-1 border-darkslategray-100 border-b-[2px] border-solid flex flex-col items-center justify-start">
                          <a className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center shrink-0 min-w-[24px]">
                            EN
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="w-[1298px] flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[6.3px] max-w-full">
                  <div className="self-stretch flex flex-col items-end justify-start gap-5 max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[35px] pr-7 box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq725:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                          <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-[inherit] inline-block min-w-[108px] z-[1] mq1000:text-lg mq1000:leading-[22px]">
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
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[9.9px] max-w-full text-center text-sm">
                      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-2.5 shrink-0 max-w-full z-[1]">
                        <img
                          className="w-[1450px] h-0.5 relative object-contain max-w-[116%] shrink-0"
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-[1446px] flex flex-row flex-wrap items-start justify-start max-w-[116%] shrink-0 [row-gap:20px]">
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[822px] shrink-0 max-w-full [row-gap:20px] mq450:flex-wrap mq450:min-w-full">
                            <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[89px] max-w-[91px]">
                              <div className="self-stretch relative leading-[24px] font-medium shrink-0">
                                Order ID
                              </div>
                            </div>
                            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[90px] shrink-0 ml-[-0.3px]">
                              <p className="m-0">{`Order `}</p>
                              <p className="m-0">Title</p>
                            </div>
                            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[91px] shrink-0 ml-[-0.3px]">
                              <p className="m-0">Affiliation</p>
                              <p className="m-0">Institute</p>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[89px] max-w-[91px] ml-[-0.3px]">
                              <div className="self-stretch relative leading-[24px] font-medium shrink-0">
                                Username
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[89px] max-w-[91px] ml-[-0.3px]">
                              <div className="self-stretch relative leading-[24px] font-medium shrink-0">
                                Request
                              </div>
                            </div>
                            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[90px] shrink-0 ml-[-0.3px]">
                              <p className="m-0">Cost</p>
                              <p className="m-0">Estimate</p>
                            </div>
                            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[91px] shrink-0 ml-[-0.3px]">
                              <p className="m-0">Formal</p>
                              <p className="m-0">Request</p>
                            </div>
                            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[90px] shrink-0 ml-[-0.3px]">
                              <p className="m-0">Sample</p>
                              <p className="m-0">Shipping</p>
                            </div>
                            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[91px] shrink-0 ml-[-0.3px]">
                              <p className="m-0">Quality</p>
                              <p className="m-0">Check</p>
                            </div>
                            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[91px] shrink-0 ml-[-0.3px]">
                              <p className="m-0">Library</p>
                              <p className="m-0">Prep.</p>
                            </div>
                            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[90px] shrink-0 ml-[-0.3px]">
                              <p className="m-0">Analysis</p>
                              <p className="m-0">Progress</p>
                            </div>
                            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[91px] shrink-0 z-[1] ml-[-0.3px]">
                              <p className="m-0">Analysis</p>
                              <p className="m-0">Done</p>
                            </div>
                            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[90px] shrink-0 z-[2] ml-[-0.3px]">
                              <p className="m-0">{`Raw `}</p>
                              <p className="m-0">Data</p>
                            </div>
                            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[89px] max-w-[91px] shrink-0 z-[3] ml-[-0.3px]">
                              <p className="m-0">Analysis</p>
                              <p className="m-0">Specification</p>
                            </div>
                          </div>
                          <div className="w-[90px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border ml-[-0.1px]">
                            <div className="self-stretch relative leading-[24px] font-medium shrink-0 z-[4]">
                              Invoice
                            </div>
                          </div>
                          <div className="h-12 w-[90.7px] flex flex-col items-start justify-start py-0 px-0 box-border ml-[-0.1px]">
                            <div className="ml-[-0.3px] self-stretch flex-1 relative leading-[24px] font-medium shrink-0 z-[5]">
                              <p className="m-0">Payment</p>
                              <p className="m-0">{`& Recepit`}</p>
                            </div>
                          </div>
                        </div>
                        <img
                          className="w-[1450px] h-0.5 relative object-contain max-w-[116%] shrink-0"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className="w-[557px] flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[11px] shrink-0 max-w-full">
                          <div className="w-[425px] flex flex-row items-start justify-between gap-5 max-w-full mq1000:flex-wrap">
                            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2 text-left">
                              <div className="relative [text-decoration:underline] inline-block min-w-[42px] z-[1]">
                                100101
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
                              <div className="relative leading-[24px] inline-block min-w-[44px] z-[1]">
                                Mouse
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px] text-left">
                              <a className="[text-decoration:none] relative text-[inherit] z-[1]">
                                <p className="m-0">Tokyo</p>
                                <p className="m-0">University</p>
                              </a>
                            </div>
                            <div className="relative inline-block min-w-[43px] z-[1]">
                              Taruko
                            </div>
                            <div className="w-[76px] rounded-sm bg-coral flex flex-row items-start justify-start py-[3px] px-px box-border z-[1] text-4xs text-white">
                              <div className="flex-1 relative leading-[15px] font-medium">
                                <p className="m-0">Request</p>
                                <p className="m-0">{`Sheet `}</p>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq725:flex-wrap">
                            <div className="flex flex-col items-start justify-start pt-[5px] pb-0 pl-0 pr-5 text-left">
                              <div className="relative [text-decoration:underline] inline-block min-w-[46px] z-[1]">
                                100102
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[19px]">
                              <div className="relative leading-[24px] inline-block min-w-[25px] z-[1]">
                                Bee
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-3 pb-0 pl-0 pr-[9px] text-left">
                              <div className="relative leading-[24px] z-[1]">
                                <p className="m-0">Tokyo</p>
                                <p className="m-0">University</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                              <div className="relative inline-block min-w-[49px] z-[1]">
                                Hanoku
                              </div>
                            </div>
                            <div className="w-[166px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border text-4xs text-white">
                              <div className="self-stretch flex flex-row items-start justify-start gap-3.5">
                                <div className="flex-1 rounded-sm bg-mediumturquoise flex flex-row items-start justify-start py-[3px] px-px z-[1]">
                                  <div className="flex-1 relative leading-[15px] font-medium">
                                    <p className="m-0">Request</p>
                                    <p className="m-0">Sheet Confirmed</p>
                                  </div>
                                </div>
                                <div className="flex-1 rounded-sm bg-mediumturquoise flex flex-row items-start justify-start py-[3px] px-px z-[1]">
                                  <div className="flex-1 relative leading-[15px] font-medium">
                                    <p className="m-0">Cost Estimate</p>
                                    <p className="m-0">Sent</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[0.5px] relative border-darkslategray-300 border-t-[0.5px] border-solid box-border z-[3]" />
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-center text-xs text-cadetblue">
                    <div className="relative [text-decoration:underline] leading-[24px] inline-block min-w-[78px] z-[1]">
                      View full table
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1298px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[11.2px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-2.5 max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pl-9 pr-[29px] box-border max-w-full shrink-0">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq725:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                          <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-[inherit] z-[1] mq1000:text-lg mq1000:leading-[22px]">{`Customer List `}</h3>
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
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-1px] shrink-0 z-[1]"
                      alt=""
                    />
                    <div className="w-[1182px] flex flex-row items-start justify-start relative max-w-full shrink-0 text-center text-sm">
                      <img
                        className="h-[299px] w-[1258px] absolute !m-[0] right-[-76px] bottom-[-159.2px] rounded-3xs"
                        alt=""
                        src="/rectangle-4977.svg"
                      />
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 z-[1] mq725:flex-wrap">
                        <div className="w-[133px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                          <div className="self-stretch relative leading-[24px] font-medium">
                            Member ID
                          </div>
                        </div>
                        <div className="w-[89px] relative leading-[24px] font-medium inline-block shrink-0">
                          <p className="m-0">Affiliation of</p>
                          <p className="m-0">Customer</p>
                        </div>
                        <div className="w-[91px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                          <div className="self-stretch relative leading-[24px] font-medium">
                            Username
                          </div>
                        </div>
                        <div className="w-[91px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                          <div className="self-stretch relative leading-[24px] font-medium">
                            Country
                          </div>
                        </div>
                        <div className="w-[90px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                          <div className="self-stretch relative leading-[24px] font-medium">
                            Address
                          </div>
                        </div>
                        <div className="h-12 w-[91px] relative leading-[24px] font-medium inline-block shrink-0">
                          <p className="m-0">Payment</p>
                          <p className="m-0">{`& Recepit`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[5.5px] max-w-full text-center text-sm">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px box-border max-w-full">
                      <div className="h-[112.5px] flex-1 relative max-w-full">
                        <div className="absolute top-[1px] left-[162px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[111.5px] z-[1]" />
                        <div className="absolute top-[1px] left-[395px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[111.5px] z-[1]" />
                        <div className="absolute top-[0px] left-[628px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[111.5px] z-[2]" />
                        <div className="absolute top-[0px] left-[859px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[111.5px] z-[2]" />
                        <div className="absolute top-[22px] left-[48px] [text-decoration:underline] text-left inline-block min-w-[43px] z-[1]">
                          34458
                        </div>
                        <div className="absolute top-[74px] left-[48px] [text-decoration:underline] text-left inline-block min-w-[40px] z-[1]">
                          33744
                        </div>
                        <div className="absolute top-[19px] left-[229px] leading-[24px] inline-block min-w-[118px] z-[1]">
                          Kawang University
                        </div>
                        <div className="absolute top-[19px] left-[467px] leading-[24px] inline-block min-w-[77px] z-[1]">
                          Taro Tanaka
                        </div>
                        <div className="absolute top-[19px] left-[711px] leading-[24px] inline-block min-w-[40px] z-[1]">
                          Japan
                        </div>
                        <div className="absolute top-[19px] left-[874px] leading-[24px] whitespace-pre-wrap inline-block min-w-[129px] z-[1]">{`Kagawa Street No.1  `}</div>
                        <div className="absolute top-[71px] left-[874px] leading-[24px] z-[1]">{`Main Road, street 12 , New Delhi `}</div>
                        <div className="absolute top-[71px] left-[715px] leading-[24px] inline-block min-w-[32px] z-[1]">
                          India
                        </div>
                        <div className="absolute top-[71px] left-[457px] leading-[24px] inline-block min-w-[97px] z-[1]">
                          Kamlesh Yadav
                        </div>
                        <div className="absolute top-[71px] left-[240px] leading-[24px] inline-block min-w-[96px] z-[1]">
                          Thai University
                        </div>
                        <div className="absolute top-[112px] left-[0px] border-darkslategray-300 border-t-[0.5px] border-solid box-border w-[1257.5px] h-[0.5px] z-[2]" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[14.5px] pl-9 pr-[29px] box-border max-w-full text-xs text-cadetblue">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[62px] max-w-full lg:gap-[31px] mq725:gap-[15px]">
                        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[27px]">
                          <div className="relative [text-decoration:underline] leading-[24px] inline-block min-w-[78px] z-[1]">
                            View full table
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-left text-3xl text-darkslategray-100 mq725:flex-wrap mq725:justify-center">
                          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                            <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-[inherit] z-[1] mq1000:text-lg mq1000:leading-[22px]">
                              Payment Status
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
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-end justify-start gap-[0.4px] max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9.6px] box-border gap-2.5 max-w-full">
                        <img
                          className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain shrink-0 mt-[-1px] z-[1]"
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-[1182px] flex flex-row items-start justify-start relative max-w-full">
                          <img
                            className="h-[299px] w-[1257px] absolute !m-[0] right-[-74px] bottom-[-159.2px] rounded-3xs"
                            alt=""
                            src="/rectangle-4978.svg"
                          />
                          <div className="flex-1 flex flex-row items-start justify-between shrink-0 max-w-full gap-5 z-[1] mq725:flex-wrap">
                            <div className="w-[100px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                              <div className="self-stretch relative leading-[24px] font-medium">
                                Order ID
                              </div>
                            </div>
                            <div className="w-[89px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                              <div className="self-stretch relative leading-[24px] font-medium">
                                Title
                              </div>
                            </div>
                            <div className="w-[89px] relative leading-[24px] font-medium inline-block shrink-0">
                              <p className="m-0">Affiliation of</p>
                              <p className="m-0">Customer</p>
                            </div>
                            <div className="w-[91px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                              <div className="self-stretch relative leading-[24px] font-medium">
                                Username
                              </div>
                            </div>
                            <div className="w-[90px] relative leading-[24px] font-medium inline-block shrink-0">
                              Invoice Amount
                            </div>
                            <div className="w-[91px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                              <div className="self-stretch relative leading-[24px] font-medium">
                                Receipt
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
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                          <div className="h-[111.5px] w-[0.5px] absolute !m-[0] top-[-1px] right-[224.5px] border-darkslategray-400 border-r-[0.5px] border-solid box-border z-[2]" />
                          <div className="h-[111.5px] flex-1 relative max-w-full">
                            <div className="absolute top-[0px] left-[164px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[111.5px] z-[1]" />
                            <div className="absolute top-[0px] left-[371px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[111.5px] z-[1]" />
                            <div className="absolute top-[0px] left-[592px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[111.5px] z-[1]" />
                            <div className="absolute top-[0px] left-[808px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[111.5px] z-[1]" />
                            <div className="absolute top-[18px] left-[35px] [text-decoration:underline] text-left inline-block min-w-[40px] z-[1]">
                              10028
                            </div>
                            <div className="absolute top-[70px] left-[35px] [text-decoration:underline] text-left inline-block min-w-[38px] z-[1]">
                              12983
                            </div>
                            <div className="absolute top-[12px] left-[662px] leading-[24px] inline-block min-w-[77px] z-[1]">
                              Taro Tanaka
                            </div>
                            <div className="absolute top-[17px] left-[881px] leading-[24px] inline-block min-w-[72px] z-[1]">
                              10,000 JPY
                            </div>
                            <div className="absolute top-[66px] left-[883px] leading-[24px] inline-block min-w-[76px] z-[1]">
                              20,000 JPY
                            </div>
                            <div className="absolute top-[66px] left-[662px] leading-[24px] inline-block min-w-[76px] z-[1]">
                              Kevin Smith
                            </div>
                            <div className="absolute top-[14px] left-[250px] leading-[24px] inline-block min-w-[44px] z-[1]">
                              Mouse
                            </div>
                            <div className="absolute top-[66px] left-[250px] leading-[24px] inline-block min-w-[25px] z-[1]">
                              Bee
                            </div>
                            <div className="absolute top-[11px] left-[452px] z-[1]">
                              <p className="m-0">Tokyo</p>
                              <p className="m-0">University</p>
                            </div>
                            <div className="absolute top-[66px] left-[452px] leading-[24px] z-[1]">
                              <p className="m-0">Tokyo</p>
                              <p className="m-0">University</p>
                            </div>
                            <div className="absolute top-[111px] left-[0px] border-darkslategray-300 border-t-[0.5px] border-solid box-border w-[1257.5px] h-[0.5px] z-[2]" />
                            <div className="absolute top-[60px] left-[1103px] rounded-sm bg-coral w-[76px] flex flex-row items-start justify-start py-[10.5px] px-px box-border whitespace-nowrap z-[1] text-4xs text-white">
                              <div className="flex-1 relative leading-[15px] font-medium">
                                Send Receipt
                              </div>
                            </div>
                            <div className="absolute top-[11px] left-[1103px] rounded-sm bg-mediumturquoise w-[76px] flex flex-row items-start justify-start py-[3px] px-px box-border z-[1] text-4xs text-white">
                              <div className="flex-1 relative leading-[15px] font-medium">
                                <p className="m-0">{`Receipt Sent `}</p>
                                <p className="m-0">Completed</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1320px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-xs text-cadetblue">
            <div className="relative [text-decoration:underline] leading-[24px] inline-block min-w-[78px] z-[1]">
              View full table
            </div>
          </div>
        </section>
      </main>
      <div className="w-36 h-[29.6px] relative hidden z-[1] text-left text-tailgrids-text-color font-roboto">
        <img
          className="absolute h-full w-[13.89%] top-[0%] right-[86.11%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/search-21.svg"
        />
        <div className="absolute h-full w-[72.22%] top-[0%] left-[27.78%] leading-[20px] font-medium inline-block">
          Type to search...
        </div>
      </div>
      <div className="w-[76px] h-[68.1px] relative hidden z-[2] text-right text-tailgrids-black-color font-roboto">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <img
            className="absolute h-full w-[60.53%] top-[0%] right-[39.47%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-10000036721@2x.png"
          />
          <img
            className="absolute h-[43.47%] w-[26.32%] top-[28.34%] right-[0%] bottom-[28.19%] left-[73.68%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chevrondown-2-11.svg"
          />
        </div>
        <div className="absolute h-[calc(100%_-_16.3px)] w-[121.05%] top-[8.9px] right-[119.74%] bottom-[7.4px] left-[-140.79%] hidden">
          <div className="absolute h-[38.61%] w-full top-[0%] left-[0%] leading-[20px] font-medium inline-block">
            Thomas Anree
          </div>
          <div className="absolute h-[39.96%] w-[70.65%] top-[60.04%] left-[29.35%] text-xs leading-[14px] font-medium text-tailgrids-text-color inline-block">
            Ux Designer
          </div>
        </div>
      </div>
      <img
        className="w-[34px] h-[50.3px] relative hidden z-[3]"
        alt=""
        src="/group-1000004098.svg"
      />
      <div className="w-14 rounded-13xl bg-stroke overflow-hidden hidden flex-row items-center justify-start p-[3px] box-border z-[4]">
        <img
          className="h-6 w-6 relative rounded-3xl overflow-hidden shrink-0"
          alt=""
        />
      </div>
      <FrameComponent1 />
      <img
        className="w-[1257px] h-[1.8px] absolute !m-[0] top-[631.8px] right-[33px] object-contain z-[1]"
        loading="lazy"
        alt=""
      />
      <FrameComponent2 />
      <div className="w-[1323px] flex flex-row items-start justify-end pt-0 px-[33px] pb-[4.5px] box-border max-w-full">
        <img
          className="flex-1 relative max-w-full overflow-hidden max-h-full object-contain mt-[-1px] z-[1]"
          loading="lazy"
          alt=""
        />
      </div>
      <img
        className="w-[1257px] h-[1.8px] absolute !m-[0] right-[33px] bottom-[212.4px] object-contain z-[1]"
        loading="lazy"
        alt=""
      />
      <div className="w-[1408px] flex flex-row items-start justify-center pt-0 px-5 pb-[3.5px] box-border max-w-full">
        <div className="w-[1172px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
          <div className="w-[100px] relative leading-[24px] font-medium inline-block shrink-0 z-[1]">
            Sample Number
          </div>
          <div className="w-[89px] relative leading-[24px] font-medium inline-block shrink-0 z-[1]">
            <p className="m-0">{`Sample `}</p>
            <p className="m-0">Name</p>
          </div>
          <div className="w-[89px] relative leading-[24px] font-medium inline-block shrink-0 z-[1]">
            <p className="m-0">Affiliation of</p>
            <p className="m-0">Customer</p>
          </div>
          <div className="w-[91px] relative leading-[24px] font-medium inline-block shrink-0 z-[1]">
            Username
          </div>
          <div className="w-[149px] flex flex-col items-start justify-start">
            <div className="w-[91px] relative leading-[24px] font-medium inline-block z-[1]">
              <p className="m-0">Quality</p>
              <p className="m-0">Check</p>
            </div>
          </div>
          <div className="w-[110px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
            <div className="self-stretch relative leading-[24px] font-medium z-[1]">
              <p className="m-0">{`Library `}</p>
              <p className="m-0">Preparation</p>
            </div>
          </div>
          <div className="w-[106px] flex flex-col items-start justify-start pt-[12.2px] px-0 pb-0 box-border">
            <div className="self-stretch relative leading-[24px] font-medium inline-block min-w-[106px] z-[1]">
              Analysis Report
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1322px] flex flex-row items-start justify-end py-0 px-[33px] box-border max-w-full">
        <div className="h-[113.5px] flex-1 relative max-w-full">
          <div className="absolute top-[2px] left-[130px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[111.5px] z-[2]" />
          <div className="absolute top-[2px] left-[293px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[111.5px] z-[2]" />
          <div className="absolute top-[2px] left-[471px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[111.5px] z-[2]" />
          <div className="absolute top-[2px] left-[627px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[111.5px] z-[2]" />
          <div className="absolute top-[1px] left-[822px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[111.5px] z-[2]" />
          <div className="absolute top-[0px] left-[1031px] border-darkslategray-400 border-r-[0.5px] border-solid box-border w-[0.5px] h-[112.5px] z-[2]" />
          <div className="absolute top-[17px] left-[184px] leading-[24px] inline-block min-w-[56px] z-[1]">
            KU-1092
          </div>
          <div className="absolute top-[69px] left-[183px] leading-[24px] inline-block min-w-[58px] z-[1]">
            BAaL708
          </div>
          <div className="absolute top-[13px] left-[347px] z-[1]">
            <p className="m-0">Tokyo</p>
            <p className="m-0">University</p>
          </div>
          <div className="absolute top-[68px] left-[347px] leading-[24px] z-[1]">
            <p className="m-0">Tokyo</p>
            <p className="m-0">University</p>
          </div>
          <div className="absolute top-[23px] left-[38px] [text-decoration:underline] text-left inline-block min-w-[22px] z-[1]">
            102
          </div>
          <div className="absolute top-[75px] left-[38px] [text-decoration:underline] text-left inline-block min-w-[23px] z-[1]">
            105
          </div>
          <div className="absolute top-[19px] left-[504px] leading-[24px] inline-block min-w-[77px] z-[1]">
            Taro Tanaka
          </div>
          <div className="absolute top-[73px] left-[504px] leading-[24px] inline-block min-w-[76px] z-[1]">
            Kevin Smith
          </div>
          <div className="absolute top-[113px] left-[0px] border-darkslategray-300 border-t-[0.5px] border-solid box-border w-[1256.5px] h-[0.5px] z-[3]" />
          <div className="absolute top-[69px] left-[676px] rounded-sm bg-mediumturquoise w-[76px] flex flex-row items-start justify-start py-[3px] px-px box-border z-[1] text-4xs text-white">
            <div className="flex-1 relative leading-[15px] font-medium">{`Confirmation Received `}</div>
          </div>
          <div className="absolute top-[13px] left-[676px] rounded-sm bg-mediumturquoise w-[76px] flex flex-row items-start justify-start py-[3px] px-px box-border z-[1] text-4xs text-white">
            <div className="flex-1 relative leading-[15px] font-medium">{`Confirmation Received `}</div>
          </div>
          <div className="absolute top-[69px] left-[888px] rounded-sm bg-mediumturquoise w-[76px] flex flex-row items-start justify-start py-[3px] px-px box-border z-[1] text-4xs text-white">
            <div className="flex-1 relative leading-[15px] font-medium">{`Confirmation Received `}</div>
          </div>
          <div className="absolute top-[12px] left-[888px] rounded-sm bg-mediumturquoise w-[76px] flex flex-row items-start justify-start py-[3px] px-px box-border z-[1] text-4xs text-white">
            <div className="flex-1 relative leading-[15px] font-medium">{`Confirmation Received `}</div>
          </div>
          <div className="absolute top-[69px] left-[1086px] rounded-sm bg-mediumturquoise w-[76px] flex flex-row items-start justify-start py-[3px] px-px box-border z-[1] text-4xs text-white">
            <div className="flex-1 relative leading-[15px] font-medium">
              <p className="m-0">{`Analysis In `}</p>
              <p className="m-0">Progress</p>
            </div>
          </div>
          <div className="absolute top-[18px] left-[1086px] rounded-sm bg-coral w-[76px] flex flex-row items-start justify-start py-[10.5px] px-px box-border whitespace-nowrap z-[1] text-4xs text-white">
            <div className="flex-1 relative leading-[15px] font-medium">
              Analysis Start
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1318px] flex flex-row items-start justify-center pt-0 px-5 pb-[7022.5px] box-border max-w-full text-xs text-cadetblue lg:pb-[1929px] lg:box-border mq725:pb-[1254px] mq725:box-border">
        <div className="relative [text-decoration:underline] leading-[24px] inline-block min-w-[78px] z-[1]">
          View full table
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        alt=""
        src="/line-24.svg"
      />
    </div>
  );
};

export default Dashboard2;
