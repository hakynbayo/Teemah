import JobDescription from "./JobDescription";
import Application from "./Application";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ViewTabs = [{ id: "Job Overview" }, { id: "Application" }];

const JobOverviewTabs = ({ activeTab, setActiveTab }) => {
  //   const [activeTab, setActiveTab] = React.useState(ViewTabs[0].id);

  return (
    <div className="flex items-center justify-center std">
      <div className="flex flex-col w-full md:w-[65%] gap-10">
        <nav className="flex justify-center items-center gap-4">
          <ul className="no-scrollbar bg-gray flex justify-between w-full rounded-full px-2 py-1">
            {ViewTabs.map((item, index) => (
              <li key={index} className="flex-1">
                <Link
                  className={`block cursor-pointer py-2 capitalize text-center ${
                    activeTab === item.id
                      ? "bg-green rounded-full border-none py-2 text-white hover:text-white"
                      : "bg-transparent text-white border-transparent hover:text-white"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                  to={`?tab=${item.id}`}
                >
                  {item.id}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex">
          {activeTab === "Job Overview" && (
            <div className="flex-1">
              <JobDescription setActiveTab={setActiveTab} />{" "}
            </div>
          )}
          {activeTab === "Application" && (
            <div className="flex-1">
              <Application setActiveTab={setActiveTab} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobOverviewTabs;

JobOverviewTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};
