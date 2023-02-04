import Image from 'next/image'
import React from 'react'
const LoginSidebar = () => {
  return (
    <div className='flex flex-col w-[400px] h-[996px] ml-0px] bg-grey3'>
        <div className='flex flex-row ml-[48px] mt-[48px] w-[352px]'>
        <ul className="steps steps-vertical">
            <li data-content="●" className="step step-primary text-purple2 text-xs ">USER INFORMATION</li>
            <li data-content="●" className="step step-base-100 text-grey4 text-xs ">ADMIN AND OPERATIONS</li>
            <li data-content="●" className="step text-grey4 text-xs ">BUSINESS INFORMATION</li>
            <li data-content="●" className="step text-grey4 text-xs ">UPLOAD DOCUMENTS</li>
        </ul>
        </div>
    </div>
  )
}

export default LoginSidebar