import Image from "next/image";
import React, { useState } from "react";
import logo2 from "../images/Frame.svg";
import cross from "../images/cross.svg";
import wallet from "../images/wallet.svg";
import up from "../images/up.svg";
import down from "../images/down.svg";
import NewCalender from "../components/NewCalender";
import NewChart from "../components/NewChart";
import List from "@/components/List";

const Mainframe = () => {
  return (
    <div className="flex flex-col w-[1415px] h-[813px]">
      <div className="flex flex-row w-[1385px] h-[56px] mt-[14px] bg-purple1 rounded-md">
        <Image
          src={logo2}
          alt="frame"
          className="w-[32px] h-[32px] mt-[12px] ml-[18px]"
        />
        <div className="flex flex-col w-[760px] h-[33px] my-[11px] ml-[18.5px]">
          <label className="font-normal text-sm leading-4">
            Please complete the KYC
          </label>
          <p className="font-normal text-xs leading-5">
            Please show the following instructions in the email to complete
            account verification.Make sure to check your promotions/spam as
            well.
          </p>
        </div>
        <button className="ml-[515px]">
          <Image src={cross} alt="cross" className=" w-[20px] h-[20px] " />
        </button>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col ">
          <div className="flex flex-row">
            <div className="flex flex-row w-[420px] h-[120px] mt-[29px] rounded-xl shadow-lg bg-white1">
              <div className="flex flex-col px-[20px]">
                <label className="text-base leading-5 w-[117px] h-[19px] mt-[28px] ml-[24.17px] text-grey2 font-normal">Fiat Balance</label>
                <p className="text-2xl leading-5 w-[117px] h-[19px] mt-[16px] ml-[24px] text-blue1 font-bold">$00,000</p>
              </div>
              <Image src={wallet} alt="wallet" className="w-[60px] h-[60px] ml-[139px] my-[30px]"/>
            </div>

            <div className="flex flex-row w-[420px] ml-[20px] h-[120px] mt-[29px] rounded-xl shadow-lg bg-white1">
              <div className="flex flex-col px-[20px]">
                <label className="text-base leading-5 w-[117px] h-[19px] mt-[28px] ml-[24.17px] text-grey2 font-normal">Crypto Balance</label>
                <p className="text-2xl leading-5 w-[117px] h-[19px] mt-[16px] ml-[24px] text-blue1 font-bold">$00,000</p>
              </div>
              <Image src={wallet} alt="wallet" className="w-[60px] h-[60px] ml-[139px] my-[30px]"/>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-row w-[420px] h-[120px] mt-[20px] rounded-xl shadow-lg bg-white1">
              <div className="flex flex-col px-[20px]">
                <label className="text-base leading-5 w-[117px] h-[19px] mt-[28px] ml-[24.17px] text-grey2 font-normal">Receivable</label>
                <p className="text-2xl leading-5 w-[117px] h-[19px] mt-[16px] ml-[24px] text-blue1 font-bold">$00,000</p>
              </div>
              <Image src={down} alt="wallet" className="w-[60px] h-[60px] ml-[139px] my-[30px]"
              />
            </div>
            <div className="flex flex-row w-[420px] ml-[20px] h-[120px] mt-[20px] rounded-xl shadow-lg bg-white1">
              <div className="flex flex-col px-[20px]">
                <label className="text-base leading-5 w-[117px] h-[19px] mt-[28px] ml-[24.17px] text-grey2 font-normal">
                  Payables
                </label>
                <p className="text-2xl leading-5 w-[117px] h-[19px] mt-[16px] ml-[24px] text-blue1 font-bold">
                  $00,000
                </p>
              </div>
              <Image
                src={up}
                alt="wallet"
                className="w-[60px] h-[60px] ml-[139px] my-[30px]"
              />
            </div>
          </div>

          <div className="mt-[20px]">
            <NewChart />
          </div>
        </div>

        <div className="w-[400px] h-[712px] ml-[125px] mt-[29px]   bg-white1 rounded-xl shadow-lg">
          <div className="text-blue1 mx-[23px] mt-[24px]">
            <NewCalender />
          </div>
          <br />
          <hr className="border border-white2" />
          <List />
        </div>
      </div>
    </div>
  );
};

export default Mainframe;
