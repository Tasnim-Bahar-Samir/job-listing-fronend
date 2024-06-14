"use client";
import Spinner from "@/components/core/spinner/Spinner";
import { useGetProfileData } from "@/hooks/profile.hooks";
import { notFound } from "next/navigation";

const RoutePermission = ({
  children,
  group,
}: {
  children: React.ReactNode;
  group: string;
}) => {
  const { data: profileData, isLoading } = useGetProfileData();
  console.log(isLoading);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-tmlt-Primary-8 bg-opacity-50">
        <Spinner />
      </div>
    );
  } else if (profileData?.user_profile?.group !== group) {
    return notFound();
  } else {
    return <div>{children}</div>;
  }
};

export default RoutePermission;
