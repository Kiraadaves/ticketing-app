"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TicketForm = () => {
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form >
        <h3>Create a Ticket</h3>
        <div>
          <label>Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.title}
          />
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
