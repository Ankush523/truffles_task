import React, { useState, useEffect } from "react";
import UserInfo from "@/components/UserInfo";
import BusinessInfo from "@/components/BusinessInfo";

const LoginSidebar = () => {

    const[status,setStatus]=useState(null)

    useEffect(()=>{
        const timer = setTimeout(() => {
            const status = typeof window !== 'undefined' ? localStorage.getItem('select') : null
            setStatus(status)
            console.log(status)
          }, 100);
    })

  return (
    <>
      <div className="flex flex-col w-[24%] h-[996px] ml-[0px] bg-grey3">
        <div className="flex flex-row ml-[48px] mt-[48px] w-[352px]">
            {  status == "1" ? (
                <ul className="steps steps-vertical">
                <li
                  data-content="●"
                  className="step step-primary text-purple2 text-xs "
                >
                  USER INFORMATION
                </li>
                <li
                  data-content="●"
                  className="step step-base-100 text-grey4 text-xs "
                >
                  ADMIN AND OPERATIONS
                </li>
                <li data-content="●" className="step text-grey4 text-xs ">
                  BUSINESS INFORMATION
                </li>
                <li data-content="●" className="step text-grey4 text-xs ">
                  UPLOAD DOCUMENTS
                </li>
              </ul>
            )
            :
            (
                <ul className="steps steps-vertical">
                <li
                  data-content="✓"
                  className="step step-primary  text-grey4 text-xs "
                >
                  USER INFORMATION
                </li>
                <li
                  data-content="●"
                  className="step step-primary text-purple2 text-xs "
                >
                  BUSINESS INFORMATION
                </li>
                <li data-content="●" className="step text-grey4 text-xs ">
                  BUSINESS INFORMATION 2
                </li>
                <li data-content="●" className="step text-grey4 text-xs ">
                  UPLOAD DOCUMENTS
                </li>
              </ul>
            )
            }
        </div>
      </div>

      <div className="bg-white1">
        {status == "1" ? (
          <div>
            <UserInfo />
          </div>
        ) : (
          <div>
            <BusinessInfo />
          </div>
        )}
      </div>
    </>
  );
};

export default LoginSidebar;
