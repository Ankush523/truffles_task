import React from 'react'

const BusinessInfo2 = () => {
    const refresh = () => window.location.reload(true)
  return (
    <>
        <div className='w-[76vw] bg-white1 text-blue1'>BusinessInfo2</div>
        <div className='flex flex-row mt-[64px]'>
            <button onClick={() => localStorage.setItem('select',2)} onClickCapture={refresh} className='w-[120px] h-[42px] rounded-md text-black1 border border-grey1 '>Back</button>
            <button className='w-[120px] h-[42px] rounded-md text-white1 border border-purple2 bg-purple2  ml-[820px]'>Next</button>
        </div>
    </>
  )
}

export default BusinessInfo2