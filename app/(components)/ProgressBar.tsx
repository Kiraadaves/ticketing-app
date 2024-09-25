"use client";
import { Progress } from "@/components/ui/progress";
import React, { useState } from "react";

interface ProgressProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressProps> = ({ progress }) => {
  return (
    <div className="w-full bg-blue-950 rounded-full h-3 border-2 border-blue-950">
      <div
        className="bg-[#ffffff] h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
