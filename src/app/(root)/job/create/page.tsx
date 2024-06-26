import AuthPage from "@/components/pages/auth/AuthPage";
import RoutePermission from "@/components/pages/auth/RoutePermission";
import JobListManagement from "@/components/pages/job/JobManagement";
import React from "react";

const JobManagementPage = () => {
  return (
    <div>
      <AuthPage>
        <RoutePermission group="COMPANY">
          <JobListManagement />
        </RoutePermission>
      </AuthPage>
    </div>
  );
};

export default JobManagementPage;
