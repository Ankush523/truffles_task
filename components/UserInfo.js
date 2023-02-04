import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UserInfo = () => {
    const [startDate, setStartDate] = useState(new Date());
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
                        <select className="select-sm bg-white1 border border-grey1 rounded-md text-black1 w-[332px] h-[38px] text-sm max-w-xs">
                            <option disabled selected>Pick</option>
                            <option>Mr.</option>
                            <option>Mrs.</option>
                        </select>
                    </div>

                    <div className='flex flex-col ml-[30px]'>
                        <label className='text-black1 text-sm mb-[4px]'>First name</label>
                        <input className='bg-white1 border border-grey1 w-[332px] h-[38px] rounded-md text-black1 pl-[10px]'/>
                    </div>

                    <div className='flex flex-col ml-[30px]'>
                        <label className='text-black1 text-sm mb-[4px]'>Last name</label>
                        <input  className='bg-white1 border border-grey1 w-[332px] h-[38px] rounded-md text-black1 pl-[10px]'/>
                    </div>
                </div>

                <div className='flex flex-col mt-[32px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Mobile Number</label>
                    <div className='flex flex-row'>
                        <input placeholder='US' className='w-[8%] text-center bg-white1 border border-grey1 rounded-l-md h-[38px]'/>
                        <input placeholder='+1 (555) 987-6543' className='w-[82%] text-left pl-[10px] text-black1 text-sm bg-white1 border border-grey1 rounded-r-md h-[38px] '/>
                    </div>
                </div>

                <div className='flex flex-col mt-[32px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Gender</label>
                    
                    <select className="select-sm bg-white1 border border-grey1 rounded-md text-black1 w-[90%] h-[38px] text-sm ">
                            <option disabled selected>Pick</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                </div>

                <div className='flex flex-col mt-[32px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Nationality</label>
                    <input placeholder='United States' className='w-[90%] text-left pl-[20px] text-sm bg-white1 border border-grey1 rounded-md h-[38px] text-black1'/>
                </div>

                <div className='flex flex-row mt-[34px]'>
                    <div className='flex flex-col '>
                        <label className='text-black1 text-sm mb-[4px]'>Residential Address</label>
                        <input className='bg-white1 border border-grey1 w-[514px] h-[38px] rounded-md text-black1 pl-[10px]'/>
                    </div>

                    <div className='flex flex-col ml-[30px]'>
                        <label className='text-black1 text-sm mb-[4px]'>Postal Code</label>
                        <input  className='bg-white1 border border-grey1 w-[514px] h-[38px] text-black1 rounded-md pl-[10px]'/>
                    </div>
                </div>

                <div className='flex flex-col mt-[34px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Occupation</label>
                    <input className='bg-white1 border border-grey1 w-[90%] h-[38px] rounded-md text-black1 pl-[10px]'/>
                </div>

                <div className='flex flex-col mt-[34px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Date of Birth</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="bg-white1 text-black1 text-sm bg-white1 border border-grey1 pl-[10px] w-[90%] h-[38px] rounded-md"/>
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