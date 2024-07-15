/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";

const JobDescription = ({ setActiveTab }) => {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-8 text-lg">
        <h3 className="font-bold">Who We Are and What We Do</h3>
        <p className="font-medium">
          At Zarttech, our identity is defined by our actions. Our ever-growing
          family of companies and global teams is dedicated to simplifying the
          hiring process for businesses worldwide.
        </p>
        <p className="font-medium">
          With a team of over three thousand motivated individuals from more
          than 100 countries, our diverse and unified culture drives continuous
          learning and innovation, enhancing our platform and products for our
          customers.
        </p>
        <p className="font-medium">
          Our mission is to enable companies to hire the best talent from
          anywhere in the world. We are building the leading platform to make
          this a reality, leveraging our market-leading technology, expertise,
          and global team. By delivering top-tier products and features, we
          facilitate millions of job opportunities globally, connecting the
          workforce with the best companies and opportunities.
        </p>
      </section>

      <section className="flex flex-col gap-8 text-lg">
        <h3 className="font-bold">
          Why should you be part of our success story?
        </h3>
        <h className="font-medium">
          Joining Zarttech means being part of a dynamic, innovative company
          that values diversity, continuous learning, and global collaboration.
          You’ll work with a team of over three thousand professionals from more
          than 100 countries, leveraging cutting-edge technology to connect top
          talent with leading companies worldwide. By contributing to our
          mission, you’ll play a crucial role in shaping the future of global
          employment and making a significant impact in the industry. Be part of
          our journey to revolutionize the hiring process and empower the global
          workforce.
        </h>
      </section>

      <section className="flex flex-col gap-8 text-lg">
        <h3 className="font-bold">Duties</h3>
        <ul className="list-disc flex flex-col gap-8 px-8">
          <li>
            Develop a vision and strategy for clients by assessing their
            strategy as a business to assist them in using Zarttech’s tools to
            achieve their goals
          </li>
          <li>
            Build deep and trusting long-term relationships with clients by
            identifying partner pain points, providing solutions, and
            recognizing opportunities for growth and revenue generation
          </li>
          <li>
            Creating data driven recommendations by accessing, analyzing, and
            synthesizing large data sets
          </li>
          <li>
            Problem solving and solution implementation across Zarttech
            internally on behalf of your clients
          </li>
          <li>
            Working with the product and operations teams to drive high impact
            improvements
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-8 text-lg">
        <h3 className="font-bold">Requirements</h3>
        <ul className="list-disc flex flex-col gap-8 px-8">
          <li>
            You have minimum of 2+ years of relevant work experience, including
            client facing experience
          </li>

          <li>
            Have previous experience in at least one of the following: fast
            growth startup, top-tier management consulting, investment banking,
            or private equity
          </li>

          <li>Have at least 2+ years experience in Payroll tech</li>

          <li>
            Relationship builder who remains calm and collected when facing
            crisis or criticism and celebrates partners’ successes with them
          </li>

          <li>
            Quantitatively-inclined and data savvy; you may not be a SQL expert,
            but you enjoy drawing quick, insightful conclusions from complex
            data sets, asking critical questions, and synthesizing raw numbers
            into simple, actionable recommendations
          </li>

          <li>
            A reliable, motivated self-starter with a passionate growth
            mentality. You enjoy fast-paced environments, aren’t deterred by
            setbacks or pivots, and thrive in roles requiring a very high degree
            of responsibility
          </li>

          <li>
            Have a solid track record of achievement - e.g. had success in a top
            tier company, delivered quantifiable business impact, quickly
            assumed responsibilities or won competitive awards
          </li>

          <li>
            Have a strong analytical foundation with ability to manipulate and
            synthesize data
          </li>

          <li>Are curious by nature and interested in making an impact</li>

          <li>Have excellent written and verbal communication in English</li>

          <li>Are based in ANZ region</li>
        </ul>
      </section>

      <section className="flex flex-col gap-8 text-lg">
        <h3 className="font-bold">Bonus Points</h3>
        <ul className="list-disc flex flex-col gap-8 px-8">
          <li>You're passionate about the future of work</li>

          <li>
            You have experience building consumer/business facing products where
            you have to think about customer experience and growth
          </li>

          <li>You have worked in multiple countries, cultures, and places</li>

          <li>You like getting bonus points</li>
        </ul>
      </section>

      <button
        onClick={() => setActiveTab("Application")}
        className="w-full bg-green rounded-full py-4"
      >
        Apply now
      </button>
    </div>
  );
};

export default JobDescription;

JobDescription.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};
