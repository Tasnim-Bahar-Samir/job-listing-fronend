import DeleteActionModal from "@/components/core/modal/DeleteActionModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { JobResponseType } from "@/hooks/job.hooks";
import { FC } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import JobForm from "./JobForm";

type JobActionProps = {
  data: JobResponseType;
  handleEditFun: Function;
  isDataEditing: boolean;
  isDataDeleting: boolean;
  handleDeleteFun: Function;
};

const JobActions: FC<JobActionProps> = ({
  handleEditFun,
  isDataEditing,
  data,
  handleDeleteFun,
  isDataDeleting,
}) => {

  return (
    <div>
      <div className="flex items-center justify-end  w-full">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <span className=" flex rounded-[2px] bg-blue-300 text-white">
              <BsThreeDotsVertical className="" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-2.5 border bg-white border-blue-200 rounded-2xl p-5">
            <div className=" w-full ">
              <JobForm
                instance={data}
                handleDataSubmit={handleEditFun}
                isSubmitting={isDataEditing}
              />
            </div>
            <div>
              <DeleteActionModal
                handleDeleteSubmit={handleDeleteFun}
                isLoading={isDataDeleting}
              />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default JobActions;
