import React, { useState } from 'react'
const UserInfo = () => {

    const refresh = () => window.location.reload(true)

  return (
    <div className='w-[76vw] bg-white1 '>
        <div className='ml-[102px] mt-[48px]'>
            <div className='flex flex-col'>
                <label className='text-black1 text-lg'>User Information</label>
                <label className='bg-white1 text-grey2 text-sm'>Please enter your details</label>

                <div className='flex flex-row mt-[34px]'>
                    <div className='flex flex-col'>
                        <label className='text-black1 text-sm mb-[4px]'>Title</label>
                        <div className='flex flex-row bg-white1 border border-grey1 w-[332px] h-[38px] rounded-md'>
                            <input placeholder='Mr.' className='bg-white1 pl-[10px]  w-[300px] rounded-md'/>
                            <div className="dropdown">
                                <label tabIndex={0} className="btn">^</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><label className='text-blue1'>Mr</label></li>
                                    <li><label className='text-blue1'>Ms</label></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col ml-[30px]'>
                        <label className='text-black1 text-sm mb-[4px]'>First name</label>
                        <input className='bg-white1 border border-grey1 w-[332px] h-[38px] rounded-md'/>
                    </div>

                    <div className='flex flex-col ml-[30px]'>
                        <label className='text-black1 text-sm mb-[4px]'>Last name</label>
                        <input  className='bg-white1 border border-grey1 w-[332px] h-[38px] rounded-md'/>
                    </div>
                </div>

                <div className='flex flex-col mt-[32px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Mobile Number</label>
                    <div className='flex flex-row'>
                        <input placeholder='US' className='w-[8%] text-center bg-white1 border border-grey1 rounded-l-md h-[38px]'/>
                        <input placeholder='+1 (555) 987-6543' className='w-[82%] text-left pl-[20px] text-sm bg-white1 border border-grey1 rounded-r-md h-[38px]'/>
                    </div>
                </div>

                <div className='flex flex-col mt-[32px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Gender</label>
                    <input placeholder='Male' className='w-[90%] text-left pl-[20px] text-sm bg-white1 border border-grey1 rounded-md h-[38px] text-black1'/>
                </div>

                <div className='flex flex-col mt-[32px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Nationality</label>
                    <input placeholder='United States' className='w-[90%] text-left pl-[20px] text-sm bg-white1 border border-grey1 rounded-md h-[38px] text-black1'/>
                </div>

                <div className='flex flex-row mt-[34px]'>
                    <div className='flex flex-col '>
                        <label className='text-black1 text-sm mb-[4px]'>Residential Address</label>
                        <input className='bg-white1 border border-grey1 w-[514px] h-[38px] rounded-md text-black1'/>
                    </div>

                    <div className='flex flex-col ml-[30px]'>
                        <label className='text-black1 text-sm mb-[4px]'>Postal Code</label>
                        <input  className='bg-white1 border border-grey1 w-[514px] h-[38px] text-black1 rounded-md'/>
                    </div>
                </div>

                <div className='flex flex-col mt-[34px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Occupation</label>
                    <input className='bg-white1 border border-grey1 w-[90%] h-[38px] rounded-md text-black1'/>
                </div>

                <div className='flex flex-col mt-[34px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Date of Birth</label>
                    <input placeholder='05/02/2023' className='text-sm bg-white1 border border-grey1 pl-[10px] w-[90%] h-[38px] rounded-md'/>
                </div>

                <div className='flex flex-row mt-[64px]'>
                    <button onClick={() => localStorage.setItem('select',0)} onClickCapture={refresh} className='w-[120px] h-[42px] rounded-md text-black1 border border-grey1'>Back</button>
                    <button onClick={() => localStorage.setItem('select',2)} onClickCapture={refresh} className='w-[120px] h-[42px] rounded-md text-white1 border border-purple2 bg-purple2  ml-[820px]'>Next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserInfo