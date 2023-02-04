import React from 'react'

const BusinessInfo = () => {

    const refresh = () => window.location.reload(true)

  return (
    <div className='w-[76vw] bg-white1 '>
        <div className='ml-[102px] mt-[48px]'>
            <div className='flex flex-col'>
                <label className='text-black1 text-lg'>Business Information</label>
                <label className='bg-white1 text-grey2 text-sm'>Use a permanent address where you can receive mail</label>

                <div className='flex flex-col mt-[34px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Account ID</label>
                    <input className='bg-white1 border border-grey1 w-[90%] h-[38px] rounded-md'/>
                </div>

                <div className='flex flex-col mt-[34px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Company Name</label>
                    <input className='bg-white1 border border-grey1 w-[90%] h-[38px] rounded-md'/>
                </div>

                <div className='flex flex-row mt-[34px]'>
                    <div className='flex flex-col '>
                        <label className='text-black1 text-sm mb-[4px]'>Country of Incorporation</label>
                        <input className='bg-white1 border border-grey1 w-[514px] h-[38px] rounded-md'/>
                    </div>

                    <div className='flex flex-col ml-[30px]'>
                        <label className='text-black1 text-sm mb-[4px]'>Country of Operation</label>
                        <input  className='bg-white1 border border-grey1 w-[514px] h-[38px] rounded-md'/>
                    </div>
                </div>

                <div className='flex flex-col mt-[32px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Business Type</label>
                    <input placeholder='United States' className='w-[90%] text-left pl-[20px] text-sm bg-white1 border border-grey1 rounded-md h-[38px]'/>
                </div>

                <div className='flex flex-col mt-[34px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Company Address</label>
                    <input className='bg-white1 border border-grey1 w-[90%] h-[38px] rounded-md'/>
                </div>

                <div className='flex flex-row mt-[34px]'>
                    <div className='flex flex-col'>
                        <label className='text-black1 text-sm mb-[4px]'>ZIP / Postal</label>
                        <input placeholder='Mr.' className='bg-white1 border border-grey1 w-[332px] h-[38px] rounded-md'/>
                    </div>

                    <div className='flex flex-col ml-[30px]'>
                        <label className='text-black1 text-sm mb-[4px]'>State / Province</label>
                        <input className='bg-white1 border border-grey1 w-[332px] h-[38px] rounded-md'/>
                    </div>

                    <div className='flex flex-col ml-[30px]'>
                        <label className='text-black1 text-sm mb-[4px]'>City</label>
                        <input  className='bg-white1 border border-grey1 w-[332px] h-[38px] rounded-md'/>
                    </div>
                </div>

                <div className='flex flex-col mt-[34px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Registration Number</label>
                    <input className='bg-white1 border border-grey1 w-[90%] h-[38px] rounded-md'/>
                </div>

                <div className='flex flex-col mt-[34px]'>
                    <label className='text-black1 text-sm mb-[4px]'>Incorporation Date</label>
                    <input placeholder='05/02/2023' className='text-sm bg-white1 border border-grey1 w-[90%] h-[38px] rounded-md'/>
                </div>

                <div className='flex flex-row mt-[64px]'>
                    <button onClick={() => localStorage.setItem('select',1)} onClickCapture={refresh} className='w-[120px] h-[42px] rounded-md text-black1 border border-grey1 '>Back</button>
                    <button className='w-[120px] h-[42px] rounded-md text-white1 border border-purple2 bg-purple2  ml-[820px]'>Next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusinessInfo