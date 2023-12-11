import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const Filters = ({ children }) => {
  return (
    <div className="flex gap-2 px-1 py-1 border cursor-pointer lg:px-3 rounded-2xl w-max hover:bg-primary hover:text-white">
    <FontAwesomeIcon icon={faFire} />
      <p className="text-sm">{children}</p>
    </div>
  );
};

export default Filters;
