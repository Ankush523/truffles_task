import LoginMainframe from "@/components/LoginPageComponents/UserInfo";
import LoginNavbar from "@/components/LoginPageComponents/LoginNavbar";
import LoginSidebar from "@/components/LoginPageComponents/LoginSidebar";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col">
      <LoginNavbar />
      <hr className="border border-white2" />
      <div className="flex flex-row">
        <LoginSidebar />
      </div>
    </div>
  );
};

export default LoginPage;
