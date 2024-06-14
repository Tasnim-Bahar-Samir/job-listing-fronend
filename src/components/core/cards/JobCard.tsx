import { FC } from "react";
import Text from "../typography/Text";
import Button from "../button/Button";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useDeleteSavedJob, useSaveJobData } from "@/hooks/saveJob.hooks";
import { toast } from "@/components/ui/use-toast";
import DeleteActionModal from "../modal/DeleteActionModal";

// sub-component
const RemoveFromSaveSection = ({ id }: { id: string }) => {
  const { mutateAsync, isPending } = useDeleteSavedJob(id);

  return (
    <DeleteActionModal
      remove={true}
      handleDeleteSubmit={mutateAsync}
      isLoading={isPending}
    />
  );
};

// sub-component
const JobSaveSection = ({ id }: { id: string }) => {
  const { mutateAsync, isPending } = useSaveJobData();

  const handleSaveJob = async () => {
    try {
      await mutateAsync({ job: id });
      toast({
        variant: "success",
        description: "Job Saved successfully !",
      });
    } catch (err: any) {
      console.log(err);
      for (let key of err?.errors) {
        toast({
          variant: "destructive",
          description: `${key?.attr}- ${key?.detail}`,
        });
      }
    }
  };

  return (
    <Button
      disabled={isPending}
      onClick={handleSaveJob}
      className="w-full"
      variant={"primaryBtn"}
      label={isPending ? "Saving..." : "Save"}
    />
  );
};

// default component
type JobCardProps = {
  saved?: boolean;
  id: string;
  title: string;
  company: string;
  deadline: string;
  location: string;
};

const JobCard: FC<JobCardProps> = ({
  saved,
  id,
  title,
  company,
  location,
  deadline,
}) => {
  const { status } = useSession();
  return (
    <div className="border border-blue-100 rounded-xl p-5 space-y-3 xl:space-y-5">
      <h5>
        <Text className="text-blue-500" variant={"title_2"} label={title} />
      </h5>
      <h6>
        <Text variant={"title_1"} label={company} />
      </h6>
      <div className="flex items-center justify-between gap-5 ">
        <div className="flex items-center gap-1">
          <IoLocationOutline size={16} />
          <p>
            <Text variant={"paragraph_1"} label={location} />
          </p>
        </div>
        <div className="flex items-center gap-1">
          <span className="">
            <FaRegCalendar size={16} />
          </span>
          <p className="">
            <Text className="" variant={"paragraph_1"} label={deadline} />
          </p>
        </div>
      </div>
      {saved ? (
        <RemoveFromSaveSection id={id} />
      ) : status == "authenticated" ? (
        <JobSaveSection id={id} />
      ) : (
        <Button
          onClick={() => alert("Login is required for this action!")}
          className="w-full"
          variant={"primaryBtn"}
          label="Save"
        />
      )}
    </div>
  );
};

export default JobCard;
