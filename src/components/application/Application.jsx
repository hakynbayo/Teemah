import { RiMagicLine } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { useRef, useState, useEffect } from "react";
import YesOrNo from "./YesOrNo";
import RadioButtonOption from "../application/RadioButton";

const countries = [
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Tanzania",
];

const radioOptions = [
  {
    id: "immediately",
    name: "noticePeriod",
    value: "immediately",
    label: "Available Immediately",
  },
  { id: "2weeks", name: "noticePeriod", value: "2weeks", label: "2 Weeks" },
  { id: "4weeks", name: "noticePeriod", value: "4weeks", label: "4 Weeks" },
  { id: "6weeks", name: "noticePeriod", value: "6weeks", label: "6 Weeks" },
];

const Application = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [cvUploaded, setCvUploaded] = useState(false);
  const [compensation, setCompensation] = useState("");

  const handleCompensationChange = (event) => {
    const value = event.target.value;
    // Allow only numbers
    if (!isNaN(value) && value.trim() !== "") {
      setCompensation(value);
    } else if (value.trim() === "") {
      // Allow empty string to clear the field
      setCompensation("");
    }
    // If the input is not a number, ignore it (do not update the state)
  };

  useEffect(() => {
    if (inputValue) {
      setSuggestions(
        countries.filter((country) =>
          country.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCvUploaded(true);
    } else {
      setCvUploaded(false);
    }
    const url = URL.createObjectURL(file);
    setFileUrl(url);
    setFileName(file.name); // Step 2: Update file name state
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      setFileName(file.name); // Step 2: Update file name state
    }
  };

  const handleSubmit = (event) => {
    if (!cvUploaded) {
      console.log("Please upload your resume.");
      event.preventDefault(); // Prevent form submission
      return; // Stop the function here
    }

    // Proceed with form submission logic here
    alert("Form submitted successfully.");
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Necessary to allow drop
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="w-full flex flex-col gap-16 std">
      {/* Auto-fill Resume */}
      <section className="bg-gray flex flex-col gap-4 md:flex-row justify-between items-center p-6 rounded-xl">
        <div className="flex gap-2">
          <div>
            <RiMagicLine />
          </div>
          <div className="flex flex-col gap-4">
            <p>Autofill from resume</p>
            <p>Upload your resume here to autofill key application fields.</p>
          </div>
        </div>
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept=".pdf" // Restrict file type to PDF
          />
          <button
            className="border-green rounded-full text-green px-4 py-2"
            onClick={handleUploadClick}
          >
            Upload CV
          </button>
        </div>
      </section>

      {/* Inputfield / Form */}
      <section className="w-full">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          {/* Name */}
          <label
            htmlFor="name"
            className="flex font-bold gap-1 items-center mb-[-12px] text-lg "
          >
            Your Name{" "}
            <span className={nameValue === "" ? "text-red-500" : "text-white"}>
              *
            </span>
          </label>
          <p className="text-sm text-[#7E7E7E]">Kindly enter your legal name</p>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className="w-full border rounded-lg p-4"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />

          {/* Eamil */}
          <label
            htmlFor="email"
            className="flex font-bold gap-1 items-center mb-[-12px] text-lg "
          >
            Your Email Address{" "}
            <span className={emailValue === "" ? "text-red-500" : "text-white"}>
              *
            </span>
          </label>
          <p className="text-sm text-[#7E7E7E]">
            Kindly enter your personal email
          </p>
          <input
            type="email" // Change type to email for semantic correctness
            id="email"
            name="email"
            placeholder="Email"
            required
            className={`border rounded-lg p-4 ${
              !validateEmail(emailValue) && emailValue.length > 0
                ? "border-red-500"
                : ""
            }`}
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />

          {/* Upload Resume */}
          <label
            htmlFor="cvUpload"
            className="flex font-bold gap-1 items-center mt-4 mb-[-12px] text-lg "
          >
            <label
              htmlFor="cvUpload"
              className="flex font-bold gap-1 items-center mt-4 mb-[-12px] text-lg"
            >
              Your Resume/CV{" "}
              <span className={cvUploaded ? "text-white" : "text-red-500"}>
                *
              </span>
            </label>{" "}
          </label>
          <p className="text-sm text-[#7E7E7E]">
            Please upload your document (preferably a PDF file)
          </p>
          <div className="flex flex-col">
            <div
              className="flex border rounded-lg py-16 items-center justify-center gap-2"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <button
                type="button"
                className="border-4 border-green rounded-full text-green py-2 px-4"
                onClick={handleUploadClick}
              >
                Upload file
              </button>
              <p>or drag and drop here</p>
            </div>
            <div>
              {/* Display the uploaded CV */}
              {fileUrl && (
                <div className="mt-4 text-green">
                  <a
                    href={fileUrl}
                    className="text-green"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName}
                  </a>
                </div>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              id="cvUpload"
              name="cvUpload"
              onChange={handleFileChange}
              style={{ display: "none" }}
              accept=".pdf"
              required
            />
          </div>

          {/* LinkedIn input */}
          <label
            htmlFor="linkedin"
            className="flex font-bold gap-1 items-center mb-[-12px] text-lg "
          >
            Your LinkedIn Profile
          </label>
          <p className="text-sm text-[#7E7E7E]">
            Kindly enter a link to your LinkedIn profile
          </p>
          <div className="relative w-full flex items-center">
            <RiLinkedinBoxFill
              className="absolute left-1 text-[#7E7E7E]"
              size={36}
            />
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              placeholder="Enter Link here"
              className="pl-10 border rounded-lg p-4"
            />
          </div>

          {/* Compensation */}
          <label
            htmlFor="compensation"
            className="flex font-bold gap-1 items-center mb-[-12px] text-lg "
          >
            Your Monthly Compensation Expectation
            <span
              className={compensation === "" ? "text-red-500" : "text-white"}
            >
              *
            </span>
          </label>
          <p className="text-sm text-[#7E7E7E]">
            Kindly enter monthly pay expectation and indicate the currency{" "}
          </p>
          <input
            type="text"
            id="compensation"
            name="compensation"
            placeholder="Start typing"
            required
            className="border rounded-lg p-4"
            value={compensation}
            onChange={handleCompensationChange}
          />

          {/* Website, Blog or Portfolio */}
          <label
            htmlFor="portfolio"
            className="flex font-bold gap-1 items-center mb-[-12px] text-lg "
          >
            Website, Blog or Portfolio
          </label>
          <p className="text-sm text-[#7E7E7E]">
            Kindly enter a link to your body of work below{" "}
          </p>
          <input
            type="text"
            id="portfolio"
            name="portfolio"
            placeholder="Start typing"
            className="border rounded-lg p-4"
          />

          {/* Language */}
          <label
            htmlFor="language"
            className="flex font-bold gap-1 items-center mb-[-12px] text-lg "
          >
            Are you able to speak, write and read in English
          </label>
          <div
            className="w-[20%] flex justify-between gap-2 p-2 rounded-lg relative"
            style={{ gap: "1rem" }}
          >
            <YesOrNo />
          </div>

          {/* Do you currently work at Zarrtech */}
          <label
            htmlFor="language"
            className="flex font-bold gap-1 items-center mb-[-12px] text-lg "
          >
            Do you currently work at Zarrtech
          </label>
          <div
            className="w-[20%] flex justify-between gap-2 p-2 rounded-lg relative"
            style={{ gap: "1rem" }}
          >
            <YesOrNo />
          </div>

          {/* Have you worked at Zarrtech */}
          <label
            htmlFor="language"
            className="flex font-bold gap-1 items-center mb-[-12px] text-lg "
          >
            Have you worked at Zarrtech
          </label>
          <div
            className="w-[20%] flex justify-between gap-2 p-2 rounded-lg relative"
            style={{ gap: "1rem" }}
          >
            <YesOrNo />
          </div>

          {/* Country of Residence */}
          <div>
            <label
              htmlFor="country"
              className="flex font-bold gap-1 items-center"
            >
              Country of Residence{" "}
              <span
                className={
                  inputValue === "" || !suggestions
                    ? "text-red-500"
                    : "text-white"
                }
              >
                *
              </span>
            </label>
            <p className="text-sm text-[#7E7E7E] my-4">
              Kindly enter the country you are legally registered to work in
            </p>
            <input
              id="country"
              name="country"
              placeholder="Start typing"
              required
              className="border rounded-lg p-4 mb-2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {suggestions.length > 0 && (
              <ul className="border border-green bg-gray rounded-lg p-4 my-4">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="cursor-pointer bg-primary my-2 py-6 px-4 rounded-md"
                    onClick={() => {
                      setInputValue(suggestion);
                      setSuggestions([]); // Clear suggestions after selection
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* notice period */}
          <div className="flex flex-col gap-8">
            <label
              htmlFor="language"
              className="flex font-bold gap-1 items-center mb-[-12px] text-lg "
            >
              What is your notice period to begin working with Zarttech?{" "}
            </label>
            <div>
              {radioOptions.map((option) => (
                <RadioButtonOption key={option.id} {...option} />
              ))}
            </div>
          </div>

          <button type="submit" className="bg-green p-4 rounded-full">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
};
export default Application;
