import React from "react";
import DefaultNavbar from "../navbar/DefaultNavbar";
import DefaultFooter from "../footer/DefaultFooter";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DefaultNavbar />
      <div className="min-h-[100vh]">{children}</div>
      <DefaultFooter />
    </div>
  );
};

export default DefaultLayout;
