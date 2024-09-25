"use client";
import React, { useEffect, useState } from "react";
import TicketCard from "./(components)/TicketCard";
import Header from "./(components)/Header";
import { fetchTickets } from "./services/fetchTickets";

export interface Ticket {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

interface TicketData {
  tickets: Ticket[];
}

const All: React.FC = () => {
  const [data, setData] = useState<TicketData | null>(null);

  useEffect(() => {
    const getAllTickets = async () => {
      const result = await fetchTickets();
      setData(result);
    };

    getAllTickets();
  }, []);

  const categories = Array.from(
    new Set(data?.tickets?.map(({ category }) => category) || [])
  );

  console.log(categories);
  return (
    <div className="p-5">
      <div>
        {data?.tickets &&
          categories?.map((category, index) => (
            <div key={index} className="mb-4">
              <h2>{category}</h2>
              <div className="items-center lg:grid grid-cols-2 xl:grid-cols-4">
                {data?.tickets
                  ?.filter((ticket) => ticket.category === category)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      key={filteredTicket._id}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default All;
