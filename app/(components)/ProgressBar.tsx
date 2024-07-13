"use client";
import { Progress } from "@/components/ui/progress";
import React, { useState } from "react";

const ProgressBar = () => {
  return (
    <div className="w-full bg-[#FDC435] rounded-full h-3 border-2 border-[#FDC435]">
      <div
        className="bg-[#ffffff] h-2.5 rounded-full"
        style={{ width: "75%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
