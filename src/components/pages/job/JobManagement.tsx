"use client";
import Text from "@/components/core/typography/Text";
import {
    JobResponseType,
    useAddJobData,
    useDeleteJob, useGetUserJobData,
    useUpdateJob
} from "@/hooks/job.hooks";
import { useState } from "react";
import CustomPagination from "@/components/core/pagination/CustomPagination";
import DataTable, { DataTableColumn } from "@/components/core/table/DataTable";
import JobActions from "./JobActions";
import JobForm from "./JobForm";

export const JobListDataColumn: DataTableColumn[] = [
  {
    title: "Company",
    dataKey: "title",
    row: (data: JobResponseType) => (
      <div className="flex items-center gap-4  text-14-medium">
        <div>
          <Text variant={"paragraph_2"} label={data.company} />
        </div>
      </div>
    ),
  },
  {
    title: "Job position",
    dataKey: "title",
    row: (data: JobResponseType) => (
      <div>
        <Text variant={"paragraph_2"} label={data.title} />
      </div>
    ),
  },
  {
    title: "Salary",
    dataKey: "vacancy",
    row: (data: JobResponseType) => <div>{data?.salary}</div>,
  },
  {
    title: "Location",
    dataKey: "location",
    row: (data: JobResponseType) => <div>{data.location}</div>,
  },
  {
    title: "Deadline",
    dataKey: "deadline",
    row: (data: JobResponseType) => <div>{data.deadline}</div>,
  },
];

const Action = ({ data }: { data: JobResponseType }) => {
  const { mutateAsync: handleEdit, isLoading: isDataEditing } = useUpdateJob(
    data.id
  );
  const { mutateAsync: handleDelete, isLoading: isDataDeleting } = useDeleteJob(
    data.id
  );
  return (
    <JobActions
      handleEditFun={handleEdit}
      isDataEditing={isDataEditing}
      data={data}
      handleDeleteFun={handleDelete}
      isDataDeleting={isDataDeleting}
    />
  );
};

const _col = [
  ...JobListDataColumn,
  {
    title: "Action",
    dataKey: "action",
    row: (data: JobResponseType) => (
      <div className="">
        <Action data={data} />
      </div>
    ),
  },
];

//default component
const JobListManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let dataPerpage = 30;
  let offset = (currentPage - 1) * dataPerpage;
  const { data, isLoading } = useGetUserJobData(dataPerpage, offset);
  const totalData = data?.count;
  const pageCount = Math.ceil(totalData / dataPerpage);

  const { mutateAsync, isPending } = useAddJobData();
  return (
    <div className="space-y-10 commonContainer my-10">
      <div className="flex items-center justify-between">
        <></>
        <div className="flex items-center gap-3">
          <JobForm handleDataSubmit={mutateAsync} isSubmitting={isPending} />
        </div>
      </div>
      <div>
        <div>
          <DataTable
            columns={_col}
            isLoading={isLoading}
            data={data?.results || []}
          />
        </div>
      </div>
      {data?.count > 0 && (
        <div className="flex justify-end">
          <CustomPagination
            activePage={currentPage}
            count={pageCount}
            setActivePage={setCurrentPage}
            handleNext={() =>
              pageCount > currentPage && setCurrentPage(currentPage + 1)
            }
            handlePrev={() =>
              currentPage > 1 && setCurrentPage(currentPage - 1)
            }
          />
        </div>
      )}
    </div>
  );
};

export default JobListManagement;
