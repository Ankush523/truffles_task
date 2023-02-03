import React from "react";
import Image from "next/image";
import group1 from "../images/group1.svg";
import group2 from "../images/group3.svg";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row w-[1415px] h-[83px] mt-[0px]">
        <label className="text-blue1 w-[125px] h-[29px] mt-[27px] ml-[24px] leading-7 font-bold text-2xl mb-[27px]">Dashboard</label>
        <Image src={group1} alt="group" className="w-[97px] h-[17px] ml-[1090px] mt-[32px] mb-[34px]"/>
        <Image src={group2} alt="group2" className="w-[19px] h-[19.71px] ml-[10px] mt-[29px] mr-[44px] mb-[34px]"/>
      </div>
      <hr className="border border-white2"/>
    </div>
  );
};

export default Navbar;
