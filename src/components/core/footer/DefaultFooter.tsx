import React from "react";
import Text from "../typography/Text";

const DefaultFooter = () => {
  return (
    <footer className="bg-blue-50">
      <div className="flex items-center justify-center py-6 ">
        <Text label={"All Rights Reserved."} />
      </div>
    </footer>
  );
};

export default DefaultFooter;
