import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCircle } from "react-icons/fa";
import React from "react";

interface PriorityProps {
  priority: number;
}

const Priority: React.FC<PriorityProps> = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FaCircle
        className={`${
          priority > 0 ? "text-red-600" : "text-slate-400"
        } pr-1 w-7 h-7 `}
      />
      <FaCircle
        className={`${
          priority > 1 ? "text-red-600" : "text-slate-400"
        } pr-1 w-7 h-7 `}
      />
      <FaCircle
        className={`${
          priority > 2 ? "text-red-600" : "text-slate-400"
        } pr-1 w-7 h-7 `}
      />
      <FaCircle
        className={`${
          priority > 3 ? "text-red-600" : "text-slate-400"
        } pr-1 w-7 h-7 `}
      />
      <FaCircle
        className={`${
          priority > 4 ? "text-red-600" : "text-slate-400"
        } pr-1 w-7 h-7 `}
      />
    </div>
  );
};

export default Priority;
