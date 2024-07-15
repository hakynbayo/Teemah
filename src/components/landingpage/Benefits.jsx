import House from "../../assets/house.svg";
import Macbook from "../../assets/macbook.svg";
import Dividends from "../../assets/dividends.svg";
import Hospital from "../../assets/Hospital.svg";
import Palm from "../../assets/Palm.svg";
import Wifi from "../../assets/wifi.svg";
import Camera from "../../assets/camera.svg";

const Steps = () => {
  const stepsData = [
    {
      id: 1,
      icon: House,
      title: "Remote, virtual first work",
      description:
        "Join teammates in over 15 countries working fully remote. Our home office allowances get you the equipment you need to work from home.",
    },
    {
      id: 2,
      icon: Dividends,
      title: "Stock Options",
      description:
        "Unlock your potential with our exciting stock options program, allowing you to share in the company's success and invest in your future.",
    },
    {
      id: 3,
      icon: Hospital,
      title: "Medical Coverage",
      description:
        "Enjoy comprehensive medical insurance coverage for both you and your family, ensuring peace of mind and access to quality healthcare.",
    },
    {
      id: 4,
      icon: Palm,
      title: "Paid Annual Leave",
      description:
        "Every team member enjoys 20 days of paid leave, giving you time to unwind, explore new adventures, and create unforgettable memories.",
    },
    {
      id: 5,
      icon: Macbook,
      title: "New MacBook Pro",
      description:
        "After one year, team members receive a brand new MacBook Pro to enhance their work experience.",
    },
    {
      id: 6,
      icon: Wifi,
      title: "Internet Reimbursement",
      description:
        "All team members benefit from a monthly budget specifically allocated to support their internet expenses.",
    },
  ];

  return (
    <div className="flex flex-col gap-16 bg-gray p-12 rounded-3xl">
      <div className="flex flex-col justify-center items-center gap-6 text-center">
        <div className="flex gap-6">
          <p className="text-5xl font-bold">Benefits & Perks</p>
          <img src={Camera} alt="camera" />
        </div>
        <p className="w-full text-center font-medium">
          In addition to a competitive salary, we provide several resources
          aimed at helping our team excel.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stepsData.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col justify-center items-start gap-4 max-w-[456px] w-full px-7 py-4 rounded-2xl ${
              index === stepsData.length - 1 ? "bg-green-500" : "bg-gray-200"
            }`} // Corrected the background color class for consistency
          >
            <div>
              <img src={step.icon} alt={step.title} width={74} height={74} />
            </div>
            <p className="font-bold text-lg">{step.title}</p>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
