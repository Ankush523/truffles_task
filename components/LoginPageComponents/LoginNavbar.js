import Image from 'next/image'
import React from 'react'
import truffleIcon from '@/images/truffleIcon2.png';
const LoginNavbar = () => {
  return (
    <div className='w-100vw h-[72px] mt-[0px] ml-[0px] bg-white1 flex flex-row'>
        <Image src={truffleIcon} alt="logo" className='w-[166px] h-[28.25px] ml-[49px] mt-[22px] mb-[22px]'/>
        <div className='flex flex-row'>
            <label className='ml-[1211px] text-blue1 text-sm mt-[28px]'>Having trouble?</label>
            <label className='text-purple2 text-sm mt-[28px] ml-[10px]'>Get Help</label>
        </div>
    </div>
  )
}

export default LoginNavbar