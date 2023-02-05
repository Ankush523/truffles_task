import React from 'react'
import Sidebar from '@/components/HomePageComponents/HomeSidebar'
import Mainframe from '@/components/HomePageComponents/HomeMainframe'
import Navbar from '@/components/HomePageComponents/HomeNavbar'

const HomePage = () => {
  return (
    <div className="bg-white3 flex flex-row">
        <div className="w-[264px] h-[895px] ml-[0px] mt-[0px]">
          <Sidebar />
        </div>

        <div className="flex flex-col">
          <div className="w-[1415px] h-[83px] mt-[0px]">
            <Navbar />
          </div>
          <Mainframe />
        </div>
      </div>
  )
}

export default HomePage