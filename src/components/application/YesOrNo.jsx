import { useState } from "react";

const YesOrNo = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="flex border-2 justify-between rounded-lg relative">
      <button
        type="button"
        className={`flex-1 px-4 py-2 text-white rounded ${
          selectedOption === "yes" ? "bg-green" : "bg-primary"
        }`}
        onClick={() => setSelectedOption("yes")}
      >
        Yes
      </button>
      {/* Adjusted line to be a pseudo-element for better control and centering */}
      <div className="flex-auto border-r-2 border-white h-full"></div>
      <button
        type="button"
        className={`flex-1 px-4 py-2 text-white rounded ${
          selectedOption === "no" ? "bg-green" : "bg-primary"
        }`}
        onClick={() => setSelectedOption("no")}
      >
        No
      </button>
    </div>
  );
};

export default YesOrNo;
