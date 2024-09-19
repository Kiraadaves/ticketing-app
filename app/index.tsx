import React from "react";
import TicketCard from "./(components)/TicketCard";
import Header from "./(components)/Header";

const All = () => {
  return (
    <div className="p-5">
      <Header />
      <div className="flex flex-col items-centerxsz lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default All;
