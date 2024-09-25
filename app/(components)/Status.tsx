import React from "react";

interface StatusProps {
  status: string;
}
const Status: React.FC<StatusProps> = ({ status }) => {
  const getStatusColor = (status: string) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-200";
        return color;
      case "started":
        color = "bg-yellow-200";
        return color;
      case "not started":
        color = "bg-red-600";
        return color;
    }
    return color;
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-[#ffffff] ${getStatusColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default Status;
