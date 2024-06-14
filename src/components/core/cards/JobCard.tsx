import React, { FC } from "react";
import Text from "../typography/Text";
import Button from "../button/Button";
import {IoLocationOutline } from 'react-icons/io5'
import {FaRegCalendar  } from 'react-icons/fa'

type JobCardProps = {
  title: string;
  company: string;
  deadline: string;
  location: string;
};
const JobCard: FC<JobCardProps> = ({ title, company, location,deadline }) => {
  return (
    <div className="border border-blue-100 rounded-xl p-5 space-y-3 xl:space-y-5">
      <h5>
        <Text variant={"title_2"} label={title} />
      </h5>
      <h6>
        <Text variant={"title_1"} label={company} />
      </h6>
      <div className="flex items-center justify-between gap-5 ">
        <div className="flex items-center gap-1">
            <IoLocationOutline size={16}/>
        <p>
        <Text variant={"paragraph_1"} label={location} />
      </p>
        </div>
        <div className="flex items-center gap-1">
            <span className=""><FaRegCalendar size={16}/></span>
            <p className="">
                <Text className="" variant={"paragraph_1"} label={deadline}/>
            </p>
        </div>
      </div>
      <Button className="w-full" variant={"primaryBtn"} label="Save"/>
    </div>
  );
};

export default JobCard;
