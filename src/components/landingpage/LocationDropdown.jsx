import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Search Locations");

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 border-2 border-white rounded-md text-left flex justify-between items-center"
      >
        <div className="flex gap-4 items-center">
          <HiOutlineGlobeEuropeAfrica className="text-green" />{" "}
          {/* Adjusted the user icon color */}
          <span>{selected}</span>
        </div>
        <FaChevronDown
          className={`${
            isOpen ? "transform rotate-180" : ""
          } transition-transform`}
        />{" "}
        {/* Adding the dropdown icon with rotation */}
      </button>
      {isOpen && (
        <div className="absolute w-full mt-1 border-2 border-gray-300 rounded-md bg-black">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer text-white" // Adjusted text color for better visibility on black background
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
