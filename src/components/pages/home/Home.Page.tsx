"use client";
import JobCard from "@/components/core/cards/JobCard";
import { JobLoadingCard } from "@/components/core/cards/LoadingCards";
import { JobResponseType, useGetJobData } from "@/hooks/job.hooks";

const HomePage = () => {
  const { data, isLoading } = useGetJobData(50, 0);
  return (
    <div className="commonContainer py-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {isLoading
          ? [...new Array(12)].map(()=> <JobLoadingCard key={Math.random()}/>)
          : data?.results.map((i: JobResponseType) => (
              <JobCard
                key={Math.random()}
                title={i.title}
                company={i.company}
                location={i.location}
                deadline={i.deadline}
              />
            ))}
      </div>
    </div>
  );
};

export default HomePage;
