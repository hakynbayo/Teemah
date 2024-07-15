import { RiMagicLine, RiLinkedinBoxFill } from "react-icons/ri";
import { useRef, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import YesOrNo from "./YesOrNo";
import RadioButtonOption from "../application/RadioButton";
import { useNavigate } from "react-router-dom";
import { PDFDocument } from "pdf-lib"; // Import PDF parsing library

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
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [cvUploaded, setCvUploaded] = useState(false);
  const [compensation, setCompensation] = useState("");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!cvUploaded) {
      console.log("Please upload your resume.");
      return; // Stop the function here
    }

    // Proceed with form submission logic here
    alert("Form submitted successfully.");
    console.log(data);
    navigate("/success");
  };

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

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setCvUploaded(true);
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      setFileName(file.name); // Update file name state

      // Parse the PDF file
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const text = await extractTextFromPDF(pdfDoc);

      // Parse the extracted text to fill form fields
      parseCV(text);
    } else {
      setCvUploaded(false);
    }
  };

  const extractTextFromPDF = async (pdfDoc) => {
    const pages = pdfDoc.getPages();
    let text = "";
    for (const page of pages) {
      const { textContent } = await page.getTextContent(); // Adjust based on actual PDF parsing method
      text += textContent.items.map((item) => item.str).join(" ");
    }
    return text;
  };

  const parseCV = (text) => {
    // Implement your parsing logic here based on the text content
    // Here is a simple example to set values based on simple matches

    const nameMatch = text.match(/Name:\s*(.*)/);
    if (nameMatch) setValue("name", nameMatch[1]);

    const emailMatch = text.match(/Email:\s*(.*)/);
    if (emailMatch) setValue("email", emailMatch[1]);

    const linkedinMatch = text.match(/LinkedIn:\s*(.*)/);
    if (linkedinMatch) setValue("linkedin", linkedinMatch[1]);

    const compensationMatch = text.match(/Compensation:\s*(.*)/);
    if (compensationMatch) setValue("compensation", compensationMatch[1]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      setFileName(file.name); // Update file name state
      setCvUploaded(true);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Necessary to allow drop
  };

  return (
    <div className="w-full flex flex-col gap-10 std">
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
      {Object.keys(errors).length > 0 && (
        <section className="bg-[#972828] flex flex-col gap-4 md:flex-row justify-between items-center p-6 rounded-xl">
          <div className="flex flex-col gap-2">
            <p>Missing fields</p>
            <ul className="list-disc px-8">
              {Object.keys(errors).map((errorKey) => (
                <li key={errorKey}>
                  Missing entry for required field:{" "}
                  <span className="text-white">{errors[errorKey].message}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Inputfield / Form */}
      <section className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
          {/* Name */}
          <label
            htmlFor="name"
            className="flex font-bold gap-1 items-center mb-[-12px] text-lg "
          >
            Your Name{" "}
            <span className={errors.name ? "text-red-500" : "text-white"}>
              *
            </span>
          </label>
          <p className="text-sm text-[#7E7E7E]">Kindly enter your legal name</p>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className={`w-full border rounded-lg p-4 ${
              errors.name ? "border-red-500" : ""
            }`}
            {...register("name", { required: "Your full name" })}
          />

          {/* Email */}
          <label
            htmlFor="email"
            className="flex font-bold gap-1 items-center mb-[-12px] text-lg "
          >
            Your Email Address{" "}
            <span className={errors.email ? "text-red-500" : "text-white"}>
              *
            </span>
          </label>
          <p className="text-sm text-[#7E7E7E]">
            Kindly enter your personal email
          </p>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={`w-full border rounded-lg p-4 ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Your email address",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />

          {/* Upload Resume */}
          <label
            htmlFor="cvUpload"
            className="flex font-bold gap-1 items-center mt-4 mb-[-12px] text-lg "
          >
            Your Resume/CV{" "}
            <span className={cvUploaded ? "text-white" : "text-red-500"}>
              *
            </span>
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
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            {!cvUploaded && (
              <p className="text-red-500">Please upload your resume.</p>
            )}
          </div>

          {/* LinkedIn Profile */}
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
              placeholder="Enter Link here"
              className="pl-10 border rounded-lg p-4"
              {...register("linkedin")}
            />
          </div>

          {/* Compensation */}
          <label
            htmlFor="compensation"
            className="flex font-bold gap-1 items-center mb-[-12px] text-lg "
          >
            Your Monthly Compensation Expectation
            <span
              className={errors.compensation ? "text-red-500" : "text-white"}
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
            placeholder="Start typing"
            className={`w-full border rounded-lg p-4 ${
              errors.compensation ? "border-red-500" : ""
            }`}
            {...register("compensation", {
              required: "Enter compensation amount",
            })}
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
            placeholder="Start typing"
            className="border rounded-lg p-4"
            {...register("portfolio")}
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
            htmlFor="zarrtechCurrent"
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
            htmlFor="zarrtechPast"
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
            <Controller
              name="country"
              control={control}
              rules={{ required: "Enter a country" }}
              render={({ field }) => (
                <input
                  {...field}
                  id="country"
                  placeholder="Start typing"
                  className={`w-full border rounded-lg p-4 mb-2 ${
                    errors.country ? "border-red-500" : ""
                  }`}
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    field.onChange(e);
                  }}
                />
              )}
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

          {/* Notice period */}
          <div className="flex flex-col gap-8">
            <label
              htmlFor="noticePeriod"
              className="flex font-bold gap-1 items-center mb-[-12px] text-lg"
            >
              What is your notice period to begin working with Zarttech?
            </label>
            <div>
              {radioOptions.map((option) => (
                <Controller
                  key={option.id}
                  name="noticePeriod"
                  control={control}
                  render={({ field }) => (
                    <RadioButtonOption
                      {...option}
                      {...field}
                      onChange={(e) => field.onChange(e.target.value)}
                      checked={field.value === option.value}
                    />
                  )}
                />
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
