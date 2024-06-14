"use client";
import JobCard from "@/components/core/cards/JobCard";
import { JobLoadingCard } from "@/components/core/cards/LoadingCards";
import Text from "@/components/core/typography/Text";
import { JobResponseType, useGetJobData } from "@/hooks/job.hooks";

const HomePage = () => {
  const { data, isLoading } = useGetJobData(50, 0);
  return (
    <div className="commonContainer py-10">
      
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {isLoading
          ? [...new Array(12)].map(() => <JobLoadingCard key={Math.random()} />)
          : data?.results.map((i: JobResponseType) => (
              <JobCard
                key={Math.random()}
                id={i.id}
                title={i.title}
                company={i.company}
                location={i.location}
                deadline={i.deadline}
                salary={i.salary}
              />
            ))}
      </div>
      {!isLoading && data?.results.length < 1 && (
        <h4 className="h-44 flex items-center justify-center text-center">
          <Text variant={"header_2"} label={"No job posted yet. Join as a company to add a job."} />
        </h4>
      )}
    </div>
  );
};

export default HomePage;
