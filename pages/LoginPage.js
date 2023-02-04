import LoginMainframe from "@/components/UserInfo";
import LoginNavbar from "@/components/LoginNavbar";
import LoginSidebar from "@/components/LoginSidebar";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col">
      <LoginNavbar />
      <hr className="border border-white2" />
      <div className="flex flex-row">
        <LoginSidebar/>
      </div>
    </div>
  );
};

export default LoginPage;
