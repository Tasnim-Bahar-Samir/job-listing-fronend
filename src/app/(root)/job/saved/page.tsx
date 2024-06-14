import AuthPage from "@/components/pages/auth/AuthPage";
import RoutePermission from "@/components/pages/auth/RoutePermission";
import SavedJobPage from "@/components/pages/job/savedJob/SavedJobs.page";
import React from "react";

const SavedJob = () => {
  return (
    <div>
      <AuthPage>
        <RoutePermission group="CANDIDATE">
          <SavedJobPage />
        </RoutePermission>
      </AuthPage>
    </div>
  );
};

export default SavedJob;
