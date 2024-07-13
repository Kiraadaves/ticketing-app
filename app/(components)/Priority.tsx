import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Priority = () => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon icon={faFire} className=" w-7 h-7 text-red-500" />
      <FontAwesomeIcon icon={faFire} className=" w-7 h-7 text-red-500" />
      <FontAwesomeIcon icon={faFire} className=" w-7 h-7 text-red-500" />
      <FontAwesomeIcon icon={faFire} className=" w-7 h-7 text-red-500" />
      <FontAwesomeIcon icon={faFire} className=" w-7 h-7 text-red-500" />
    </div>
  );
};

export default Priority;
