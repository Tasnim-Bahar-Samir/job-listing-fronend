import Text from "@/components/core/typography/Text";
import React from "react";
import { IoIosPerson } from "react-icons/io";

const GroupForm = () => {
  return (
    <div className="border border-blue-200 rounded-md max-w-[500px] mx-auto">
      <h2 className="mb-5">
        <Text
          className=""
          variant={"header_4"}
          label={"Welcome To 'Find Job'"}
        />
      </h2>
      <p className="mb-3">
        <Text
          className=""
          variant={"title_1"}
          label={"What do you want to join as?"}
        />
      </p>
      <div className="grid grid-cols-2 gap-5">
        <div className="p-7 rounded-md border text-center">
          <IoIosPerson />

          <p>
            <Text variant={"title_2"} label={"Join As A Candidate"} />
          </p>
        </div>
        <div className="p-7 rounded-md border text-center">
          <IoIosPerson />

          <p>
            <Text variant={"title_2"} label={"Join As A Company"} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupForm;
