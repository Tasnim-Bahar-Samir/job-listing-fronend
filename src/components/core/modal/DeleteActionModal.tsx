import { Dialog, DialogContent } from "@/components/ui/dialog";
import Button from "../button/Button";
import { FC, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import Text from "../typography/Text";
import { MdDelete } from "react-icons/md";
type DeleteActionProps = {
  revalidateFun?: Function;
  handleDeleteSubmit: Function;
  isLoading: boolean;
  isOnlyIcon?: boolean;
};

const DeleteActionModal: FC<DeleteActionProps> = ({
  revalidateFun,
  isOnlyIcon,
  isLoading,
  handleDeleteSubmit,
}) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await handleDeleteSubmit();
      if (revalidateFun) {
        // console.log('hello')
        await revalidateFun();
        window.location.reload();
      }
      toast({
        variant: "success",
        description: `Deleted Successfully!`,
      });
      setOpen(!open);
    } catch (error) {
      toast({
        variant: "destructive",
        description: { error },
      });
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <div onClick={() => setOpen(!open)} className="cursor-pointer">
          {isOnlyIcon ? (
            <MdDelete className="text-red-500" />
          ) : (
            <div className=" w-full p-2 px-4 flex items-center text-red-500 gap-1 rounded-md bg-white-200">
              <MdDelete/>
              <Text variant={"button_4"} label={"Delete"} />
            </div>
          )}
        </div>
        <DialogContent className="sm:max-w-[425px] ">
          <div className="flex flex-col gap-5 text-center py-5 xl:gap-11">
            <div className=" flex items-center justify-center ">
              <MdDelete size={"32"} className="text-red-500 w-20 h-20" />
            </div>
            <div className="space-y-2.5">
              <Text variant={"title_2"} label={"ARE YOU SURE?"} />
              <Text
                className="leading-normal"
                variant={"paragraph_3"}
                label={
                  "This action can't be undone, all the information will be lost forever"
                }
              />
            </div>

            <div className="flex justify-center items-center gap-[14px]">
              <Button
                onClick={() => setOpen(!open)}
                className="bg-inherit hover:bg-inherit border border-white-800 text-white-800 hover:text-white-800"
                label="Cancel"
                variant={"roundedBtn"}
              />
              <Button
                disabled={isLoading}
                className=" bg-red-500 hover:bg-red-500"
                variant={"roundedBtn"}
                onClick={handleDelete}
                label={`${isLoading ? "Deleting.." : "Delete"}`}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteActionModal;
