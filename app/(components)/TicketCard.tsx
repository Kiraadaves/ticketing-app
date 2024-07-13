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

const TicketCard = () => {
  return (
    <Card className="w-[350px] flex flex-col rounded-[8px] shadow-lg p-3 m-2 hover:bg-[#fafafa]">
      <CardHeader>
        <CardTitle>Create a Ticket</CardTitle>
      </CardHeader>
      <CardContent className=" ">
        <div className="flex mb-3 ">
          <Priority />
          <div className="ml-auto">
            <Delete />
          </div>
        </div>
        <h4 className="text-[#25282B] text-2xl">Ticket Title</h4>
        <hr className="h-px border-0 bg-[#FDC435] mb-2" />
        <CardDescription className="whitespace-pre-wrap text-[#828282]">
          This is the ticket decription! Please do this ticket.
        </CardDescription>
        <div className="flex-grow"></div>
      </CardContent>
      <CardFooter className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">08/31/23 10:43pm</p>
          <ProgressBar />
        </div>
        <div className="ml-auto flex items-end">
          <Status />
        </div>
      </CardFooter>
    </Card>
  );
};

export default TicketCard;
