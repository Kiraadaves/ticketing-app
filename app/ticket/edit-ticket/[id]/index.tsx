"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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

const EditTicket = () => {
  const { id } = useParams();

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not Started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [data, setData] = useState<Ticket | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      console.log(id);
      try {
        const res = await fetch(`/api/tickets/${id}`, {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch ticket");
        }
        const result = await res.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error loading tickets: ", error);
      }
    };

    fetchTickets();
  }, [id]);

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
    console.log("submit: ", formData);
    const res = await fetch("/api/tickets/edit", {
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
        <h1 className={`${message ? "mt-4" : ""}`}>Create a Ticket</h1>
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
              value="frontend"
              className="font-semibold text-base text-grey-1000"
            >
              Frontend Development
            </option>
            <option
              value="backend"
              className="font-semibold text-base text-grey-1000"
            >
              Backend Development
            </option>
            <option
              value="devops"
              className="font-semibold text-base text-grey-1000"
            >
              Devops
            </option>

            <option
              value="mobile"
              className="font-semibold text-base text-grey-1000"
            >
              Mobile Development
            </option>
            <option
              value="tests"
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
            value="Create"
          />
        </div>
      </form>
    </div>
  );
};

export default EditTicket;
