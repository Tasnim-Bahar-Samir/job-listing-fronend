"use client";
import React from "react";
import DefaultNavbar from "../navbar/DefaultNavbar";
import DefaultFooter from "../footer/DefaultFooter";
import { useSession } from "next-auth/react";
import { useGetProfileData } from "@/hooks/profile.hooks";

const AuthNav = () => {
  const { data } = useGetProfileData();
  
  return <DefaultNavbar group={data?.user_profile?.group} />;
};

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  return (
    <div>
      {status == "authenticated" ? <AuthNav /> : <DefaultNavbar />}
      <div className="min-h-[calc(100vh-143px)]">{children}</div>
      <DefaultFooter />
    </div>
  );
};

export default DefaultLayout;
