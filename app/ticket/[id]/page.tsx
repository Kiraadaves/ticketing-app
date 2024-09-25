"use client";
import TicketForm from "@/app/(components)/TicketForm";
import { useEffect, useState } from "react";

interface TicketPageProps {
  params: {
    id: string;
  };
}

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

export interface TicketFormProps {
  ticket: Ticket;
}

// Updating my getTicketById function to return the ticket data
const getTicketById = async (id: string): Promise<Ticket | null> => {
  try {
    const res = await fetch(`/api/tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ticket: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data.ticket; 
  } catch (error) {
    console.error("Error fetching ticket:", error);
    return null; 
  }
};

const TicketPage: React.FC<TicketPageProps> = async ({ params }) => {
  const EDITMODE = params.id !== "new"; 
  let updatedTicket: Ticket | null = null; 

  if (EDITMODE) {
    updatedTicket = await getTicketById(params.id); 
  } else {
    updatedTicket = {
      _id: "new",
      title: "",
      description: "",
      category: "", 
      priority: 1,
      progress: 0,
      status: "Not Started",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  // Check if updatedTicket is null
  if (!updatedTicket) {
    return <div>Error loading ticket</div>; // Handle error loading ticket
  }

  return <TicketForm ticket={updatedTicket} />;
};

export default TicketPage;
