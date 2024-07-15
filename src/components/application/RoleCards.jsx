const roleDetails = [
  { title: "Location", content: "Remote" },
  { title: "Type", content: "Full Time" },
  { title: "Department", content: "Engineering" },
  { title: "Minimum Experience", content: "Mid Level" },
];

const RoleCards = () => {
  return (
    <div className="flex gap-4 justify-center items-center overflow-x-auto md:overflow-hidden std">
      {roleDetails.map((role, index) => (
        <div
          key={index}
          className="bg-gray flex flex-col items-start gap-2 py-2 border-b border-[#34A6524D] px-4 rounded-lg w-[190px]"
        >
          <p className="text-base font-medium whitespace-nowrap">
            {role.title}
          </p>
          <p className="text-base md:text-2xl font-medium whitespace-nowrap">
            {role.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RoleCards;
