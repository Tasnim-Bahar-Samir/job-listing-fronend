import React from "react";
import Text from "../typography/Text";
import Link from "next/link";
import Image from "next/image";

const DefaultFooter = () => {
  return (
    <footer className="bg-blue-50">
      <div className="flex flex-col items-center justify-center py-6 ">
        <div>
          <Link className="flex items-center" href={"/"}>
            <Text
              className="font-mono text-blue-500"
              variant={"header_1"}
              label={"Find"}
            />
            <Image
              className="-ml-[10px]"
              src={"/images/logo.png"}
              width={63}
              height={75}
              alt="LOGO"
            />
          </Link>
        </div>
        <Text label={"© 2024 Find Job || All Rights Reserved."} />
      </div>
    </footer>
  );
};

export default DefaultFooter;
