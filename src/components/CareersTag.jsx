import Users from "../assets/user.svg";

const Careers = () => {
  return (
    <div
      className="flex gap-2 py-2 px-6 text-base max-w-max rounded-full overflow-hidden"
      style={{
        background: "linear-gradient(to right, #d54129 20%, #0061ff 68%)",
        padding: "2px",
      }}
    >
      <div className="flex gap-2 bg-primary py-2 px-6 rounded-full w-full justify-center items-center">
        <img src={Users} alt="users" />
        Careers
      </div>
    </div>
  );
};

export default Careers;
