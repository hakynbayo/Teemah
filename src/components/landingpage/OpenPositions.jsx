import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import TeamDropdown from "../landingpage/TeamDropdown";
import LocationDropdown from "../landingpage/LocationDropdown";
import JobCards from "./JobCards";

const OpenPositions = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col gap-16">
      <div>
        <h2 className="text-5xl font-bold">Open Positions</h2>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4 items-center">
        <div className="flex items-center w-full md:w-[33%] relative">
          {" "}
          <input
            type="text"
            placeholder="Search Jobs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 w-full p-2 border-2 border-white rounded-md focus:outline-none focus:border-blue-500" // Increased padding-left and adjusted padding for better vertical alignment
          />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            {" "}
            <FaSearch className="text-green" />{" "}
          </div>
        </div>
        <div className="w-full md:w-[33%]">
          <TeamDropdown />
        </div>
        <div className="w-full md:w-[33%]">
          <LocationDropdown />
        </div>
      </div>

      <div className="w-full">
        <JobCards />
      </div>
    </div>
  );
};

export default OpenPositions;
