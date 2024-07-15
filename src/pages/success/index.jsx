import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="w-full flex flex-col gap-16 justify-center items-center">
      <div className="flex gap-2 py-2 px-6 text-base max-w-max rounded-full overflow-hidden">
        <div className="flex gap-2 bg-[#1D2820] py-2 px-6 text-green rounded-full w-full justify-center items-center">
          Careers
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="bg-gray w-[60%] rounded-xl flex flex-col justify-center gap-4 p-8">
          <p className="text-4xl font-bold">Thank you for applying</p>
          <p className="text-lg font-medium">
            We have received your CV and will send you an email to confirm
            shortly.
          </p>
          <Link className="text-green text-lg font-medium" to="/">
            Back to job list
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
