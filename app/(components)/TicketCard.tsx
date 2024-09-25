import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Delete from "./Delete";
import Priority from "./Priority";
import ProgressBar from "./ProgressBar";
import Status from "./Status";
import { Ticket } from "..";

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const formatCreatedAt = (time: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const formattedDate = new Date(time).toLocaleString("en-US", options);
    return formattedDate;
  };

  return (
    <Card className=" flex flex-col rounded-[8px] shadow-lg p-3 m-2 hover:bg-[#fafafa]">
      <CardHeader>
        <CardTitle>Create a Ticket</CardTitle>
      </CardHeader>
      <CardContent className=" ">
        <div className="flex mb-3 ">
          <Priority priority={ticket.priority} />
          <div className="ml-auto">
            <Delete />
          </div>
        </div>
        <h4 className="text-[#25282B] text-2xl">{ticket.title}</h4>
        <hr className="h-px border-0 bg-blue-950 mb-2" />
        <CardDescription className="whitespace-pre-wrap text-[#828282]">
          {ticket.description}
        </CardDescription>
        <div className="flex-grow"></div>
      </CardContent>
      <CardFooter className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">{formatCreatedAt(ticket.createdAt)}</p>
          <ProgressBar progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <Status status={ticket.status} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default TicketCard;
