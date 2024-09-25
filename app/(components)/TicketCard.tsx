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
import { useRouter } from "next/navigation";
import Link from "next/link";

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const router = useRouter();
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

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
    console.log("Deleted");
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
            <Delete onDelete={() => handleDelete(ticket._id)} />
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
        <div className="ml-auto flex items-end gap-4">
          <Status status={ticket.status} />
          <Link href={`/TicketPage/${ticket._id}`} className="rounded-[0.25rem] px-6 py-2 text-sm border font-semibold shadow-md">Edit</Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TicketCard;
