import LoginNavbar from '@/components/LoginNavbar'
import LoginSidebar from '@/components/LoginSidebar'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex flex-col'>
        <LoginNavbar/>
        <div className='flex flex-row'>
            <LoginSidebar/>
        </div>
    </div>
  )
}

export default LoginPage