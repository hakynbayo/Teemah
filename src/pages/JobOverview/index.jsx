/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import JobOverviewTabs from "../../components/application/JobOverviewTabs";
import RoleCards from "../../components/application/RoleCards";
import CareersTag from "../../components/CareersTag";
import { FiCopy } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // Import useHistory hook from React Router

const JobOverview = () => {
  const [activeTab, setActiveTab] = useState("Job Overview");

  const handleCopy = () => {
    navigator.clipboard.writeText("https://zarttech.com/careers/jOwi9U");
    // Optionally, add feedback to the user (e.g., "Copied!" message)
  };

  const navigate = useNavigate(); // Initialize useHistory hook

  return (
    <div className="flex flex-col std gap-24 w-full px-8 lg:px-20">
      <div className="w-full md:w-[60%] flex justify-between items-center px-8 lg:px-20">
        <div>
          <button
            onClick={() => navigate.goBack()}
            className="flex items-center space-x-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm md:text-lg">Job Openings</span>
          </button>
        </div>
        <div>
          <CareersTag />
        </div>
      </div>
      <section className="flex flex-col gap-12 items-center relative">
        <div className="flex flex-col gap-4 lg:flex-row justify-between items-center w-full px-4 md:px-20">
          <div>
            <p className="text-2xl md:text-3xl font-[openSans] font-bold">
              HR Business Partner - Nigeria
            </p>
          </div>

          <div className="flex bg-gray border-b-2 border-b-green flex-col gap-2 py-4 px-4 rounded-lg std">
            <div>
              <p>Link to this job</p>
            </div>
            <div className="flex  gap-4 items-center">
              <p className="text-lg md:text-2xl font-medium">
                https://zarttech.com/careers/jOwi9U
              </p>
              <FiCopy
                className="text-green"
                onClick={handleCopy}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10">
        <RoleCards />
        <JobOverviewTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>
    </div>
  );
};

export default JobOverview;
