"use client"
import JobCard from "@/components/core/cards/JobCard";
import { JobLoadingCard } from "@/components/core/cards/LoadingCards";
import Text from "@/components/core/typography/Text";
import { JobResponseType } from "@/hooks/job.hooks";
import { useGetSavedJobData } from "@/hooks/saveJob.hooks";
import React from "react";

const SavedJobPage = () => {
  const { data, isLoading } = useGetSavedJobData();
  
  return (
    <div>
      <div className="commonContainer py-10">
        <h4>
          <Text
            className="text-center mb-10"
            variant={"header_2"}
            label={"Jobs saved by the user."}
          />
        </h4>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {isLoading
            ? [...new Array(12)].map(() => (
                <JobLoadingCard key={Math.random()} />
              ))
            : data?.results.map((i: any) => (
                <JobCard
                saved = {true}
                  key={Math.random()}
                  id={i?.id}
                  title={i?.job.title}
                  company={i?.job.company}
                  location={i?.job.location}
                  deadline={i?.job.deadline}
                  salary={i?.job.salary}
                />
              ))}
        </div>
        {!isLoading && data?.results.length < 1 && (
          <h4 className="h-44 flex items-center justify-center text-center">
            <Text variant={"header_2"} label={"No job saved yet."} />
          </h4>
        )}
      </div>
    </div>
  );
};

export default SavedJobPage;
