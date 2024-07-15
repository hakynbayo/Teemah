/* eslint-disable react/no-unescaped-entities */
import CareersTag from "../../components/CareersTag";
import Left from "../../assets/left.svg";
import Cv from "../../assets/cv.svg";
import Message from "../../assets/message.svg";
import Headset from "../../assets/headset.svg";
import Note from "../../assets/note.svg";
import Chat from "../../assets/chat.svg";
import { useRef } from "react";
import Right from "../../assets/right.svg";
import ImageCard from "../../assets/groupimage.svg";
// import Steps from "../../components/landingpage/Steps";
import Benefits from "../../components/landingpage/Benefits";
import OpenPositions from "../../components/landingpage/OpenPositions";
const LandingPage = () => {
  const OpenPositionsRef = useRef(null);

  const scrollToOpenPositions = () => {
    OpenPositionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const stepsData = [
    {
      id: 1,
      icon: Cv,
      title: "Application",
      description:
        "Submit your application online. This is the very first screening stage, so take this as an opportunity to make a good first impression.",
    },
    {
      id: 2,
      icon: Headset,
      title: "Intro Call",
      description:
        "The intro call is an opportunity for you to meet the team, learn more about us and the role you applied for, ask questions, and get a good feel of whether this is the right place for you.",
    },
    {
      id: 3,
      icon: Note,
      title: "Task",
      description:
        "A role-specific task that offers an opportunity for you to truly shine and sink your teeth into the kind of work you will be involved in if you are hired.",
    },
    {
      id: 4,
      icon: Headset,
      title: "Speak to the Team",
      description:
        "Calls with relevant team members will take place during your interview process (such as your potential manager and our Culture Champions). Come prepared, ask questions and be sincere.",
    },
    {
      id: 5,
      icon: Message,
      title: "Speak to the Team",
      description:
        "Once any necessary reference checks have been completed, you will receive a formal offer to join Sand if you are selected for the role. This is just the start of your journey to being part of our moonshot mission!",
    },
    {
      id: 6,
      icon: Note,
      title: "Interested in our open roles?",
      description: "See Oppurtunities -->",
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Heading */}
      <section className="flex flex-col items-center relative gap-12">
        <CareersTag />
        <p className="text-3xl md:text-5xl xl:text-8xl">
          Careers at <span className="gradient">Zarttech</span>
        </p>
      </section>

      {/* Image  */}
      <section className="flex justify-between">
        <div className="relative bottom-48 hidden md:block">
          <img src={Left} alt="" />
        </div>

        <div className="relative bottom-48 hidden md:block">
          <img src={Right} alt="" />
        </div>
      </section>

      <section>
        <div className="absolute top-80 left-32 font-bold text-center">
          <img
            src={ImageCard}
            alt="Image card"
            width={1190}
            className="hidden md:block"
          />
        </div>
        <div className="block md:hidden px-12">
          <img
            src={ImageCard}
            alt="Image card"
            // width={1190}
          />
        </div>
      </section>

      {/*How we hire down to OpenPositions  */}
      <section className="flex flex-col gap-24 mt-16 w-full px-8 md:px-20">
        <div className="flex flex-col gap-16 rounded-3xl">
          <div className="flex flex-col justify-center items-center gap-6 text-center">
            <div className="flex gap-4">
              <p className="text-5xl font-700">How we hire</p>
              <img src={Chat} alt="chat" />
            </div>
            <p className="w-full md:w-[85%] font-medium">
              At ZartTech, our hiring process embodies our cultural ethos. We
              are dedicated to offering a transparent, equitable, and immersive
              recruitment journey. We delve beyond surface impressions to
              understand your true potential. Throughout this process, you'll
              also gain insights into our company. To guide you through this
              experience, we've crafted a clear roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stepsData.map((step, index) =>
              index === stepsData.length - 1 ? (
                // Render a button for the last step
                <button
                  key={step.id}
                  onClick={scrollToOpenPositions} // Add onClick event handler
                  className="flex flex-col items-start gap-4 max-w-[456px] w-full p-10 rounded-2xl bg-green"
                >
                  <div>
                    <img
                      src={step.icon}
                      alt="step icon"
                      width={74}
                      height={74}
                    />
                  </div>
                  <p>{step.title}</p>
                  <p>{step.description}</p>
                </button>
              ) : (
                // Render the regular step display for all other steps
                <div
                  key={step.id}
                  className="flex flex-col items-start gap-4 max-w-[456px] w-full px-7 py-10 rounded-2xl bg-gray"
                >
                  <div>
                    <img
                      src={step.icon}
                      alt="step icon"
                      width={74}
                      height={74}
                    />
                  </div>
                  <p>Step {step.id}</p>
                  <p className="font-bold text-lg">{step.title}</p>
                  <p>{step.description}</p>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <Benefits />
        </div>

        <div ref={OpenPositionsRef}>
          <OpenPositions />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
