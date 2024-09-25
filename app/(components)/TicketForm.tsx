"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

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
const TicketForm: React.FC<TicketFormProps> = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not Started",
    category: "Hardware Problem",
  };

  if (EDITMODE) {
    startingTicketData.title = ticket.title;
    startingTicketData.category = ticket.category;
    startingTicketData.description = ticket.description;
    startingTicketData.priority = ticket.priority;
    startingTicketData.progress = ticket.progress;
    startingTicketData.status = ticket.status;
  }

  const [formData, setFormData] = useState(startingTicketData);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (EDITMODE) {
      const res = await fetch(`/api/tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        setMessage("Failed to update ticket");
        throw new Error("Failed to update ticket");
      } else {
        setMessage("Ticket successfully updated");
      }

      setTimeout(() => {
        router.refresh();
        router.push("/");
      }, 4000);
    } else {
      const res = await fetch("/api/tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        setMessage("Failed to create ticket");
        throw new Error("Failed to create ticket");
      } else {
        setMessage("Ticket successfully created");
      }

      setTimeout(() => {
        router.refresh();
        router.push("/");
      }, 4000);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        className="w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden"
        method="post"
        onSubmit={handleSubmit}
      >
        {message && (
          <div
            className={`${
              message === "Ticket successfully created"
                ? "text-blue-900 border-l-4 border-l-blue-900"
                : "text-red-500 border-l-4 border-l-red-500"
            } shadow-lg p-4 flex justify-center items-center bg-white`}
          >
            <p>{message}</p>
          </div>
        )}
        <h1 className={`${message ? "mt-4" : ""}`}>
          {EDITMODE ? "Edit your ticket" : "Create a ticket"}
        </h1>
        <div className="flex flex-col gap-2">
          <label>Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.title}
          />
          <label>Description</label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            required={true}
            value={formData.description}
            rows={5}
          />
          <label>Category</label>
          <select
            className=""
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option
              value="Frontend Development"
              className="font-semibold text-base text-grey-1000"
            >
              Frontend Development
            </option>
            <option
              value="Backend Development"
              className="font-semibold text-base text-grey-1000"
            >
              Backend Development
            </option>
            <option
              value="Devops"
              className="font-semibold text-base text-grey-1000"
            >
              Devops
            </option>

            <option
              value="Mobile Development"
              className="font-semibold text-base text-grey-1000"
            >
              Mobile Development
            </option>
            <option
              value="Testing/QA"
              className="font-semibold text-base text-grey-1000"
            >
              Testing/QA
            </option>
          </select>

          <label>Priority</label>
          <div>
            <input
              id="priority-1"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={1}
              checked={formData.priority == 1}
            />
            <label>1</label>
            <input
              id="priority-2"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={2}
              checked={formData.priority == 2}
            />
            <label>2</label>
            <input
              id="priority-3"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={3}
              checked={formData.priority == 3}
            />
            <label>3</label>
            <input
              id="priority-4"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={4}
              checked={formData.priority == 4}
            />
            <label>4</label>
            <input
              className="focus:outline-none"
              id="priority-5"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={5}
              checked={formData.priority == 5}
            />
            <label>5</label>
          </div>
          <label>Progress</label>
          <input
            type="range"
            id="progress"
            name="progress"
            value={formData.progress}
            min="0"
            max="100"
            onChange={handleChange}
          />
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Not Started">Not Started</option>
            <option value="started">Started</option>
            <option value="done">Done</option>
          </select>
          <input
            type="submit"
            className=" bg-blue-900 w-[99%] text-white py-1 rounded hover:bg-white hover:text-blue-900 hover:border border-blue-900 hover:shadow-lg transition-all duration-500 ease-in-out"
            value={EDITMODE ? "Edit Ticket" : "Create Ticket"}
          />
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
