"use client";
import React, { useEffect, useState } from "react";
import TicketCard from "./(components)/TicketCard";
import Header from "./(components)/Header";

interface Ticket {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
}

interface TicketData {
  tickets: Ticket[];
}

const All: React.FC = () => {
  const [data, setData] = useState<TicketData | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch("/api/tickets", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch tickets");
        }
        const result = await res.json();
        setData(result);
        console.log("data: ", result.tickets);
      } catch (error) {
        console.error("Error loading tickets: ", error);
      }
    };

    fetchTickets();
  }, []);
  console.log("data: ", data?.tickets);

  const categories = Array.from(
    new Set(data?.tickets?.map(({ category }) => category) || [])
  );

  console.log(categories);
  return (
    <div className="p-5">
      <Header />
      <div className="items-center lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default All;
