// Define an array of job details
import { useNavigate } from "react-router-dom";

const jobs = [
  {
    title: "HR Business Partner",
    description:
      "We’re looking for someone to build relationships, provide HR thought leadership, and create impactful people plans.",
    category: "Business",
    type: "Full Time",
    location: "Netherlands",
  },
  {
    title: "Senior UIUX Designer",
    description:
      "We're seeking a Senior UI/UX Designer to lead in building intuitive interfaces, shaping user experiences, and driving innovation through design strategies.",
    category: "Design",
    type: "Full Time",
    location: "Nigeria",
  },
  {
    title: "Expansion Marketer",
    description:
      "We're looking for a creative, thoughtful, self-starter based in Kenya to partner with the Paystack Expansion team to support our expansion efforts in Kenya, Ghana, and newer markets.",
    category: "Design",
    type: "Full Time",
    location: "Nigeria",
  },
  {
    title: "Expansion Marketer",
    description:
      "We're looking for a creative, thoughtful, self-starter based in Kenya to partner with the Paystack Expansion team to support our expansion efforts in Kenya, Ghana, and newer markets.",
    category: "Design",
    type: "Full Time",
    location: "Nigeria",
  },
  {
    title: "Expansion Marketer",
    description:
      "We're looking for a creative, thoughtful, self-starter based in Kenya to partner with the Paystack Expansion team to support our expansion efforts in Kenya, Ghana, and newer markets.",
    category: "Design",
    type: "Full Time",
    location: "Nigeria",
  },
  {
    title: "Expansion Marketer",
    description:
      "We're looking for a creative, thoughtful, self-starter based in Kenya to partner with the Paystack Expansion team to support our expansion efforts in Kenya, Ghana, and newer markets.",
    category: "Design",
    type: "Full Time",
    location: "Nigeria",
  },
];

const JobCards = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/job-overview"); // Replace '/joboverview' with the actual path to your JobOverview page
  };
  return (
    <>
      {jobs.map((job, index) => (
        <div
          key={index}
          className="w-full flex flex-col md:flex-row my-8 justify-between items-center bg-gray py-8 px-4 md:px-10 rounded-2xl"
        >
          <div className="flex flex-col gap-4">
            <div className=" flex flex-col gap-4">
              <p className="font-bold text-2xl md:text-3xl">{job.title}</p>
              <p className="text-lg font-medium w-full md:w-[70%]">
                {job.description}
              </p>
            </div>
            <div className="w-full md:w-[60%] flex gap-4 text-sm md:text-lg font-700">
              <p>{job.category}</p>
              <p>-</p>
              <p>{job.type}</p>
              <p>-</p>
              <p>{job.location}</p>
            </div>
          </div>

          <div className="z-10">
            <button
              onClick={handleApplyClick}
              className="bg-green rounded-full transition-all duration-200 ease-out hover:scale-105 py-2 px-16"
            >
              Apply
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCards;
