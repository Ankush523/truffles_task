import Image from 'next/image'
import React from 'react'
import truffleIcon from '../images/truffleIcon2.png';
import dashboardIcon from "../images/dashboardIcon.svg";
import invoiceIcon from "../images/invoiceIcon.svg";
import transferIcon from "../images/transferIcon.svg";
import contactsIcon from "../images/contactsIcon.svg";
import proformaIcon from "../images/proformaIcon.svg";
import swapIcon from "../images/swapIcon.svg";

const Sidebar = () => {
  return (
    <div className='flex flex-col w-[264px] h-[895px] ml-[0px] mt-[0px]'>
        <Image src={truffleIcon} alt="logo" className='w-[166px] h-[28.25px] ml-[49px] mt-[27px] mb-[27.75px]'/>
        <hr className="border border-white2"/>
        <div className='flex flex-row  w-[219px] h-[55px] ml-[33px] mr-[12px] mt-[12px] bg-white1 rounded shadow-sm'>
            <Image src={dashboardIcon} alt="vector" className='ml-[16px]'/>
            <label className='text-black1 font-normal text-sm mt-[19px] ml-[11px] leading-4'>Dashboard</label>
        </div>

        <div className='flex flex-row  w-[219px] h-[55px] ml-[33px] mr-[12px] mt-[8px] '>
            <Image src={invoiceIcon} alt="icon" className='ml-[12px]'/>
            <label className='text-black1 font-normal text-sm my-[19px] ml-[7px] leading-4'>Invoice</label>
        </div>

        <div className='flex flex-row  w-[219px] h-[55px] ml-[33px] mr-[12px] mt-[8px] '>
            <Image src={proformaIcon} alt="icon" className='ml-[12px]'/>
            <label className='text-black1 font-normal text-sm my-[19px] ml-[7px] leading-4 line-through'>Proforma</label>
        </div>

        <div className='flex flex-row  w-[219px] h-[55px] ml-[33px] mr-[12px] mt-[8px] '>
            <Image src={swapIcon} alt="icon" className='ml-[12px]'/>
            <label className='text-black1 font-normal text-sm my-[19px] ml-[7px] leading-4 line-through	'>Swap</label>
        </div>

        <div className='flex flex-row  w-[219px] h-[55px] ml-[33px] mr-[12px] mt-[8px] '>
            <Image src={transferIcon} alt="icon" className='ml-[12px]'/>
            <label className='text-black1 font-normal text-sm my-[19px] ml-[7px] leading-4 line-through	'>Transfer</label>
        </div>

        <div className='flex flex-row  w-[219px] h-[55px] ml-[33px] mr-[12px] mt-[8px] '>
            <Image src={contactsIcon} alt="icon" className='ml-[12px]'/>
            <label className='text-black1 font-normal text-sm my-[19px] ml-[7px] leading-4'>Contacts</label>
        </div>
    </div>
  )
}

export default Sidebar