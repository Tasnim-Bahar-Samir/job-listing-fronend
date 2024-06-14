import { FC, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Button from "@/components/core/button/Button";
import TextInput from "@/components/core/inputs/TextInput";
import { useFormik } from "formik";
import { toast } from "@/components/ui/use-toast";
import Text from "@/components/core/typography/Text";
// import { TeamFormValidation } from "@/libs/validation/TeamForm.validation";
import { useSession } from "next-auth/react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { JobFormValidation } from "@/libs/validation/Jobform.validate";

type JobFormProps = {
  instance?: any;
  isSubmitting: boolean;
  handleDataSubmit: Function;
};

const JobForm: FC<JobFormProps> = ({
  instance,
  isSubmitting,
  handleDataSubmit,
}) => {
  const [open, setOpen] = useState(false);
  const { data: session }: any = useSession();
  const {
    handleChange,
    values,
    touched,
    errors,
    handleSubmit,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: instance?.title || "",
      company: instance?.company || "",
      location: instance?.location || "",
      deadline: instance?.deadline || "",
      salary: instance?.salary || "",
    },
    validationSchema: JobFormValidation,
    onSubmit: async (data: any) => {
      try {
        await handleDataSubmit(data);
        if (instance) {
          toast({
            variant: "success",
            description: "Member Data Edited!",
          });
        } else {
          toast({
            variant: "success",
            description: "Congratulations! New Member Added",
          });
          resetForm();
        }
        setOpen(!open);
      } catch (err: any) {
        for (let key of err.errors) {
          toast({
            variant: "destructive",
            description: `${key?.attr} - ${key?.detail}`,
          });
        }
      }
    },
  });
  return (
    <div>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <div onClick={() => setOpen(!open)}>
          {instance ? (
            <div className=" w-full cursor-pointer p-2 px-4 flex items-center gap-1 rounded-md bg-white">
              <FaEdit />
              <Text variant={"button_4"} label={"Edit Details"} />
            </div>
          ) : (
            // <Button className='text-white' variant={'smallBtn'} label="Edit" />
            <Button variant={"regulerBtn"} icon={<FaPlus />} label="Add Job" />
          )}
        </div>
        <DialogContent className="mb-[30px] max-w-3xl">
          <DialogTitle className="text-24-bold mb-4">
            <Text variant={"header_3"} label={"Add New Job"} />
          </DialogTitle>

          <form onSubmit={handleSubmit} className="space-y-[30px]">
            <div className="space-y-4">
              <div>
                <TextInput
                  variant={"regularInput"}
                  className="w-full"
                  id="title"
                  name="title"
                  label="Job Title"
                  value={values.title}
                  onChange={handleChange}
                  type="text"
                  error={Boolean(errors.title) && touched.title && errors.title}
                />
              </div>
              <div>
                <TextInput
                  variant={"regularInput"}
                  className="w-full"
                  id="company"
                  name="company"
                  label="Company Name"
                  value={values.company}
                  onChange={handleChange}
                  type="text"
                  error={
                    Boolean(errors.company) && touched.company && errors.company
                  }
                />
              </div>
              <div>
                <TextInput
                  variant={"regularInput"}
                  className="w-full"
                  id="salary"
                  name="salary"
                  label="Salary"
                  value={values.salary}
                  onChange={handleChange}
                  type="text"
                  error={
                    Boolean(errors.salary) &&
                    touched.salary &&
                    errors.salary
                  }
                />
              </div>
              <div>
                <TextInput
                  variant={"regularInput"}
                  className="w-full"
                  id="location"
                  name="location"
                  label="Location"
                  value={values.location}
                  onChange={handleChange}
                  type="text"
                  error={
                    Boolean(errors.location) &&
                    touched.location &&
                    errors.location
                  }
                />
              </div>
              <div>
                <TextInput
                  variant={"regularInput"}
                  className="w-full"
                  id="deadline"
                  name="deadline"
                  label="Deadline"
                  value={values.deadline}
                  onChange={handleChange}
                  type="date"
                  error={
                    Boolean(errors.deadline) &&
                    touched.deadline &&
                    errors.deadline
                  }
                />
              </div>
            </div>
            <div>
              <Button
                disabled={isSubmitting}
                type="submit"
                className="w-full"
                variant={"regulerBtn"}
                label={isSubmitting ? "Saving..." : "Save"}
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobForm;
